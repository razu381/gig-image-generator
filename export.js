import puppeteer from 'puppeteer'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ── Validate argument ────────────────────────────────────────
const gigFolderName = process.argv[2]

if (!gigFolderName) {
  console.error('\n❌ No gig folder specified.')
  console.error('   Usage:   node export.js <gig-folder-name>')
  console.error('   Example: node export.js figma-to-react-next\n')
  process.exit(1)
}

const gigFolderPath = path.resolve(__dirname, gigFolderName)

if (!fs.existsSync(gigFolderPath)) {
  console.error(`\n❌ Folder not found: ${gigFolderPath}\n`)
  process.exit(1)
}

// ── Find HTML files ──────────────────────────────────────────
const htmlFiles = fs
  .readdirSync(gigFolderPath)
  .filter(f => f.endsWith('.html'))
  .sort()

if (htmlFiles.length === 0) {
  console.error(`\n❌ No HTML files found in: ${gigFolderPath}\n`)
  process.exit(1)
}

// ── Create exports/ directory ────────────────────────────────
const exportsDir = path.join(__dirname, 'exports')
fs.mkdirSync(exportsDir, { recursive: true })

// ── Main export function ─────────────────────────────────────
async function exportGig() {
  console.log(`\n🎨 Exporting gig: ${gigFolderName}\n`)

  htmlFiles.forEach(f => console.log(`  → found: ${f}`))
  console.log()

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  let exportCount = 0

  for (const htmlFile of htmlFiles) {
    const htmlPath = path.join(gigFolderPath, htmlFile)
    const baseName = htmlFile.replace('.html', '')
    const outputPath = path.join(exportsDir, `${gigFolderName}-${baseName}.png`)

    const page = await browser.newPage()

    // Render at 2× pixel density for Retina-quality sharpness
    await page.setViewport({
      width: 1280,
      height: 769,
      deviceScaleFactor: 2,
    })

    // Load file — waitUntil networkidle0 ensures Google Fonts load
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' })

    // Extra wait for font rendering and CSS to fully settle
    await new Promise(r => setTimeout(r, 800))

    // Screenshot at CSS pixel dimensions — actual capture is 2560×1538
    const buffer = await page.screenshot({
      type: 'png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 769 },
    })

    // Downscale 2560×1538 → 1280×769 via Lanczos3 (high-quality resampling)
    await sharp(buffer)
      .resize(1280, 769, {
        kernel: sharp.kernel.lanczos3,
        fit: 'fill',
      })
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: false,
      })
      .toFile(outputPath)

    console.log(`  ✓ exported: exports/${gigFolderName}-${baseName}.png`)

    await page.close()
    exportCount++
  }

  await browser.close()

  console.log(`\n✅ Done. ${exportCount} image${exportCount !== 1 ? 's' : ''} exported to exports/\n`)
}

// ── Run ──────────────────────────────────────────────────────
try {
  await exportGig()
} catch (err) {
  console.error(`\n❌ Export failed: ${err.message}\n`)
  process.exit(1)
}
