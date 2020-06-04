/*
 * @Author: 24min
 * @Date: 2020-05-11 20:32:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-27 20:30:46
 * @Description: 数据
 */
const defaultConfig = {
    timeout: 30000, //设置超时时间
    isAutoDeletEmpty: true, //是否自动删除请求参数中的空对象 空数组 空对象 空值
    loading: false,  //请求的接口是否启用loading
    loadingText: "拼命加载中>_<",//自定义loading的加载文案
    import: false,  //该接口是否为上传接口 暂未用到
    export: false, //该接口是否为导出接口
    exportFileName: "默认文件名.xlxs",  //导出文件名
    exportType: 'application/vnd.ms-excel;charset=UTF-8',//导出类型
    ContentType: 'application/json',
    responseType: 'json'
}

const productPrefix = {
    userPrefix: 'api/users',
    commodityPrefix:'api/commodity'
}
export { defaultConfig, productPrefix }