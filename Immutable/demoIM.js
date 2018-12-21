let Im = require('immutable')

// const obj = {
//     items: [
//       {
//         id: 1,
//         item: 'bar'
//       }
//     ],
//     selected: []
//   }

// let obj1 = Im.fromJS(obj);
// console.log(obj1);

const SomeRecord = Im.Record({ foo: null })
const x = new SomeRecord({ foo: 'bar' })
const y = x.set('foo', 'baz')
x === y // false

console.log(x, y)
