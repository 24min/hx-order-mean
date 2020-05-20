/*
 * @Author: 24min
 * @Date: 2020-05-20 20:34:43
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-20 21:48:16
 * @Description: file content
 * 
 * state = [{
 * name:'商品名',
 * uid:'123',
 * price:'222',
 * num
 * }]
 * 
 * action={
 * type:'increment',
 * info:{
 *  name:'商品名',
 * uid:'123',
 * price:'222',
 * num
 * }
 * }
 */

const commodityReducer = (state, action) => {
    let index = state.findIndex(item => item.uid === action.info.uid)
    switch (action.type) {
        case 'increment':
            console.log('sss',index)
            if (index !== -1) {
                state[index].num = state.commodity[index].num + 1
            } else {
                state.push({ ...action.info, 'num': 1 })
            }
            return [...state.commodity];
        case 'decrement':
            if (state[index].num === 1) {
                state.splice(index, 1)
            } else {
                state[index].num = state.commodity[index].num - 1
            }
            return [...state.commodity];
        default:
            console.log('reducerDefault')
            throw new Error();
    }
}

export {
    commodityReducer
}