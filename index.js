const nanoiterator = require('nanoiterator')
const path = require('path')
const fs = require('fs')

module.exports = tree

function tree (folder) {
  const stack = [ folder ]
  return nanoiterator({ next })

  function next (cb) {
    if (stack.length === 0) return cb(null, null)
    const top = stack.pop()
    fs.stat(top, function (_, st) {
      if (st && st.isDirectory()) return ondir(top, st, cb)
      if (!st) return next(cb)
      cb(null, { path: top, stat: st })
    })
  }

  function ondir (top, st, cb) {
    fs.readdir(top, function (err, entries) {
      if (err) return cb(err)
      for (let i = entries.length - 1; i >= 0; i--) stack.push(path.join(top, entries[i]))
      cb(null, { path: top, stat: st })
    })
  }
}
