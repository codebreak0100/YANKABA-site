import { useCallback, useEffect, useState } from "react";

const SAVED_KEY = "yankaba:saved-universities";
const COMPARE_KEY = "yankaba:compare-universities";
export const MAX_COMPARE = 4;

function readList(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeList(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage disabled — state stays in memory for this session */
  }
  window.dispatchEvent(new CustomEvent("yankaba:store", { detail: key }));
}

function toggle(key, slug) {
  const current = readList(key);
  const next = current.includes(slug)
    ? current.filter((s) => s !== slug)
    : [...current, slug];
  writeList(key, next);
  return next;
}

function useStoredList(key) {
  // Always start empty so the first client render matches the prerendered
  // HTML (which has no access to localStorage). The real values load in the
  // effect below, after hydration.
  const [items, setItems] = useState([]);

  useEffect(() => {
    const sync = () => setItems(readList(key));
    sync();
    window.addEventListener("yankaba:store", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("yankaba:store", sync);
      window.removeEventListener("storage", sync);
    };
  }, [key]);

  return items;
}

export function useSaved() {
  const saved = useStoredList(SAVED_KEY);
  const toggleSaved = useCallback((slug) => toggle(SAVED_KEY, slug), []);
  const isSaved = useCallback((slug) => saved.includes(slug), [saved]);
  const clearSaved = useCallback(() => writeList(SAVED_KEY, []), []);
  return { saved, toggleSaved, isSaved, clearSaved };
}

export function useCompare() {
  const compare = useStoredList(COMPARE_KEY);

  const toggleCompare = useCallback(
    (slug) => {
      const current = readList(COMPARE_KEY);
      if (current.includes(slug)) {
        writeList(
          COMPARE_KEY,
          current.filter((s) => s !== slug),
        );
        return;
      }
      if (current.length >= MAX_COMPARE) return;
      writeList(COMPARE_KEY, [...current, slug]);
    },
    [],
  );

  const isComparing = useCallback(
    (slug) => compare.includes(slug),
    [compare],
  );
  const clearCompare = useCallback(() => writeList(COMPARE_KEY, []), []);

  return { compare, toggleCompare, isComparing, clearCompare };
}
