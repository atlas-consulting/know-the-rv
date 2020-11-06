const path = require('path')
const fs = require('fs')
const {exec} = require('child_process')

const IMG_DIR = path.resolve(__dirname, '../assets/images')

fs.readdirSync(IMG_DIR)
.filter(f => f.endsWith('.jpg'))
.forEach(file => {
    let filename = file.replace('.jpg','')
    console.log(filename)
    exec(`git mv ${path.join(IMG_DIR, filename)}.JPG ${path.join(IMG_DIR, filename)}.jpg`, console.log)
})