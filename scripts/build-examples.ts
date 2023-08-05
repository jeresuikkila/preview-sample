import * as esbuild from 'esbuild';
import fs from 'node:fs'

async function build() {

await esbuild.build({
    entryPoints: ['examples/index.js'],
    bundle: true,
    outdir: 'examples/dist'
})

fs.copyFileSync('examples/index.html', 'examples/dist/index.html')


}

build();