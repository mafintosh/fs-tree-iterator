# fs-tree-iterator

Basic recursive file tree [nanoiterator](https://github.com/mafintosh/nanoiterator).

```
npm install fs-tree-iterator
```

## Usage

``` js
const tree = require('fs-tree-iterator')

const ite = tree('.')

ite.next(function loop (err, node) {
  if (err) throw err
  if (!node) return // done
  console.log('entry', node.path, node.stat)
  ite.next(loop)
})
```

## License

MIT
