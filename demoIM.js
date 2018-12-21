let Im = require('immutable');

// const obj = {
//     items: [
//       {
//         id: 1,
//         item: 'bar'
//       }
//     ],
//     selected: []
//   }




// fromJS 浅拷贝
// let obj1 = Im.fromJS(obj);
// console.log(obj1);

/**
 *
 *
 * @param {*} key
 * @param {*} value
 * @param {*} path
 * @returns
 */
let Im = require('immutable');
const obj242 = Im.fromJS({a:'123',b:'234'},function (key, value, path) {
  console.log(key, value, path)
  return isIndexed(value) ? value.toList() : value.toOrderedMap()
})

console.log(obj)

const objj = {
  items: [
    {
      id: 1,
      item: 'bar'
    }
  ],
  selected: []
}

foo = Im.fromJS({a: {b: 1}});
bar = foo.setIn(['a', 'b'], 2);   // 使用 setIn 赋值
console.log(foo.getIn(['a', 'b']));  // 使用 getIn 取值，打印 1
console.log(foo === bar);  //


Im.fromJS([1,2,3,{a:4,b:5}]).get('0'); //1
Im.fromJS([1,2,3,{a:4,b:5}]).getIn(['0']); //1
Im.fromJS([1,2,3,{a:4,b:5}]).getIn([3,'b']) //5

Im.fromJS([1,2,3,4]).indexOf(3) //2
Im.fromJS([1,2,3,4]).lastIndexOf(3) //2



