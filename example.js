const tree = require('./')
const ite = tree('.')

ite.next(function loop (err, node) {
  if (err) throw err
  if (!node) return // done
  console.log('entry', node.path, node.stat)
  ite.next(loop)
})
