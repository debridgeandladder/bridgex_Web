import { build } from 'esbuild'
import path from 'path'

const root = path.resolve('.');

await build({
  entryPoints: [path.join(root, 'server', 'index.ts')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outdir: path.join(root, 'dist'),
  external: [],
})

console.log('server bundle written to dist')
