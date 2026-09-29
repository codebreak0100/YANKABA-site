#!/usr/bin/env bash
npx playwright install webkit
craco build
node scripts/prerender.js