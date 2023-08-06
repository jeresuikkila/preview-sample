import * as esbuild from 'esbuild';
import fs from 'node:fs'
import Handlebars from 'handlebars';

console.log(process.env.HASH);

async function build() {

    await esbuild.build({
        entryPoints: ['examples/index.js'],
        bundle: true,
        outdir: 'examples/dist'
    })

    const templateFile = fs.readFileSync('examples/index.html', {encoding: 'utf-8'})
    const template = Handlebars.compile(templateFile)
    fs.writeFileSync('examples/dist/index.html', template({
        gitCommit: process.env.HASH || 'git hash unknown'
    }))

}

build();