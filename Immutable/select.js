// let  createSelector = require('reselect')

// const shopItemsSelector = state => state.shop.items
// const taxPercentSelector = state => state.shop.taxPercent

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )

// const taxSelector = createSelector(
//   subtotalSelector,
//   taxPercentSelector,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

// export const totalSelector = createSelector(
//   subtotalSelector,
//   taxSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )

// let exampleState = {
//   shop: {
//     taxPercent: 8,
//     items: [
//       { name: 'apple', value: 1.20 },
//       { name: 'orange', value: 0.95 },
//     ]
//   }
// }

// console.log(subtotalSelector(exampleState)) // 2.15
// console.log(taxSelector(exampleState))      // 0.172
// console.log(totalSelector(exampleState)) 

// 2001013 代表银行
console.log(value)
if (value === 2001013) {
  this.setState({
    childOrgTypes: ['总行', '一级分行', '二级分行', '支行', '部门']
  })
} else {
  this.setState({
    childOrgTypes: ['总行', '分支机构', '部门']
  })
}
this.props.form.resetFields(['orgTypeName'])