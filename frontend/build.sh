#!/usr/bin/env bash
npx playwright install chromium
craco build
node scripts/prerender.js