const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')
const { name, version } = require('./package.json')

zipSrc()

async function zipSrc() {
  const src = path.resolve(__dirname, 'src')
  const zip = new JSZip()

  const entries = fs.readdirSync(src, { recursive: true })

  for (const entry of entries) {
    if (fs.statSync(path.resolve(src, entry)).isDirectory()) {
      zip.folder(entry)
    } else {
      const file = fs.readFileSync(path.resolve(src, entry))

      zip.file(entry, file)
    }
  }

  const zipped = await zip.generateAsync({ type: 'nodebuffer' })

  fs.writeFileSync(`${name}_${version}.zip`, zipped)
}
