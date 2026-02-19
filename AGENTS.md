# Agent Instructions

## UI icon system
- Use Lucide icons only for UI and social icons.
- Use inline SVG icons only. Do not use icon fonts, PNGs, webp, or mixed icon sets.
- Use the shared `.icon` class for all icons.
- Global icon rule: 18px visual size (`1.125rem`) and `1.75` stroke width.

## Consistency rules
- Keep icon stroke color as `currentColor`.
- Keep linecap/linejoin rounded.
- If a new icon is needed, add it under `src/components/icons/` as an Astro SVG component.
- Do not override icon size or stroke per-instance unless there is a clear accessibility reason.
