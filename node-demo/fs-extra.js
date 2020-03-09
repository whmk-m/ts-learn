const fs = require('fs-extra')

// Async with promises:
fs.copy('./node-demo/ora.js', './node-demo/ora-copy.js')
        .then(() => console.log('copy ora.js to ora-copy.js success!'))
        .catch(err => console.error(err))

// Async with callbacks:
// fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
//     if (err) return console.error(err)
//     console.log('success!')
// })
//
// // Sync:
// try {
//     fs.copySync('/tmp/myfile', '/tmp/mynewfile')
//     console.log('success!')
// } catch (err) {
//     console.error(err)
// }
//
// // Async/Await:
// async function copyFiles () {
//     try {
//         await fs.copy('/tmp/myfile', '/tmp/mynewfile')
//         console.log('success!')
//     } catch (err) {
//         console.error(err)
//     }
// }
//
// copyFiles()
