// Builds single-file copies of the demo from ../demo-web/assets:
//   dist/employee-discount-prototype.html  standalone page with CSS and JS inlined
//   dist/artifact.html                     the same content without the html/head/body wrapper
// The deployable site is ../demo-web itself; edit the demo there, then re-run this script.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '../demo-web/assets');
const css = readFileSync(join(src, 'app.css'), 'utf8');
const js = readFileSync(join(src, 'app.js'), 'utf8');
if (js.includes('</script')) throw new Error('app.js contains a closing script tag');

const head = `<title>Employee Discount Platform</title>
<meta name="description" content="Interactive demo of the Employee Discount Platform by RIWA: employee app, cashier till and admin panel.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Urbanist:wght@500;600;700;800&display=swap">
<style>
${css}
</style>`;

const body = `<div id="app"></div>
<noscript><p style="padding:24px;font:16px system-ui">This demo needs JavaScript turned on.</p></noscript>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js" integrity="sha384-mZT2gIty7ZDdOGkxfP6joZcYdMW1Jvj9dRlfpTmaJAKKXTqzygtB22k7FLe+KZC1" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
${js}
</script>`;

mkdirSync(join(here, 'dist'), { recursive: true });
writeFileSync(join(here, 'dist/artifact.html'), `${head}\n${body}\n`);
writeFileSync(join(here, 'dist/employee-discount-prototype.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>
${body}
</body>
</html>
`);
console.log('Built dist/employee-discount-prototype.html and dist/artifact.html');

