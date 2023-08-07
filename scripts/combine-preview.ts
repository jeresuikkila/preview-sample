import fs from 'node:fs'

try {

    fs.unlinkSync('preview');
    fs.mkdirSync('preview');
} catch (e) {
    // ignore
}


fs.cpSync('examples/dist', 'preview/examples', {recursive: true})
fs.cpSync('coverage/lcov-report', 'preview/coverage', {recursive: true})
fs.cpSync('docs', 'preview/docs', {recursive: true})