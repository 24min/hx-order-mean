/*
 * @Author: 24min
 * @Date: 2020-05-20 20:34:43
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-21 20:50:33
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

const commodityReducer = (state = [], action) => {
    let index;
    if (state.length > 0) {
        index = state.findIndex(item => item.uid === action.info.uid)
    } else {
        index = -1
    }
    switch (action.type) {
        case 'INCREMENT':
            console.log('sss', index)
            if (index !== -1) {
                state[index].num = state[index].num + 1
            } else {
                state.push({ ...action.info, 'num': 1 })
            }
            return [...state];
        case 'DECREMENT':
            if (state[index].num === 1) {
                state.splice(index, 1)
            } else {
                state[index].num = state[index].num - 1
            }
            return [...state];
        default:
            console.log('reducerDefault')
            return [...state];
    }
}

export {
    commodityReducer
}