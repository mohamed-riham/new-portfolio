---
name: portfolio-seo-auditor
description: Audits HTML files in the workspace (including build outputs) to verify missing SEO meta tags such as title, description, viewport, and Open Graph tags.
---

# portfolio-seo-auditor

This workspace skill provides instructions and tools for auditing static and built HTML files for search engine optimization (SEO) best practices.

## Usage

Run the Python audit script on any built HTML page or directory containing HTML files:

```bash
python .agents/skills/portfolio-seo-auditor/scripts/seo_auditor.py [path-to-html-file-or-dir]
```

## Checks Performed

The auditor verifies that the following crucial elements are present:
1. `<title>`: For page titles in search engine results.
2. `<meta name="description">`: For page summaries in search engine results.
3. `<meta name="viewport">`: For mobile-friendly rendering.
4. Open Graph Meta Tags (helpful for social sharing):
   - `<meta property="og:title">`
   - `<meta property="og:description">`
   - `<meta property="og:image">`
   - `<meta property="og:url">`
