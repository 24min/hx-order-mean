/*
 * @Author: 24min
 * @Date: 2020-05-11 20:43:08
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-11 20:43:49
 * @Description: file content
 */
/*
 * @Author: 24min
 * @Date: 2020-03-13 12:57:49
 * @LastEditors: fanjf
 * @LastEditTime: 2020-04-21 13:31:17
 * @Description: 常用工具函数
 */
const inBrowser = typeof window !== 'undefined';
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
/**判断是否为ie */
function isIE() {
    return UA && /msie|trident/.test(UA)
}
/**判断是否为ie9 */
function isIE9() {
    return UA && UA.indexOf('msie 9.0') > 0
}
/**判断是否为Edge */
function isEdge() {
    return UA && UA.indexOf('edge/') > 0
}
/**判断是否为chrome */
function isChrome() {
    return UA && /chrome\/\d+/.test(UA) && !isEdge();
}
/**判断是否为火狐浏览器 */
function isFF() {
    return UA && UA.match(/firefox\/(\d+)/)
}
/**判断数据类型 string number boolean object array*/
function dataType(target, type) {
    const dataType = Object.prototype.toString.call(target).replace(/\[object /g, "").replace(/\]/g, "").toLowerCase();
    return type ? dataType === type : dataType;
}
/**判断是否为空对象 */
function isEmptyObject(obj) {
    return dataType(obj, "object") && !Object.keys(obj).length;
}
/** 是否为空数组 */
function isEmptyArray(arr) {
    return dataType(arr, "array") && arr.length === 0;
}
//清楚左右空格
function trim(s) {
    return s.toString().replace(/(^\s*)|(\s*$)/g, "");
}
/**keyword请求 格式化 */
function keywordFormat(obj) {
    let keyword = new Array();
    for (let key in obj) {
        if (!obj[key]) {
            delete obj[key]
        } else {
            keyword.push(`${key}:${trim(obj[key])}`)
        }
    }
    return keyword.join(';')
}
/**文件下载 */
function downloadFile(data, type, fileName) {
    let blob = new Blob([data], { type });
    if (isIE()) {
        window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
        let a = document.createElement('a');
        a.innerHTML = fileName;
        a.download = fileName;
        a.href = URL.createObjectURL(blob);
        document.body.appendChild(a);
        let evt = document.createEvent("MouseEvents");
        evt.initEvent("click", false, false);
        a.dispatchEvent(evt);
        document.body.removeChild(a);
    }
}
/**时间格式化 */
function formatDate(date, format) {
    if (!date) return
    if (!format) format = 'yyyy-MM-dd'
    switch (typeof date) {
        case 'string':
            // date = new Date(date.replace(/-/, '/'))
            date = new Date(date)
            break
        case 'number':
            date = new Date(date)
            break
    }
    if (!date instanceof Date) return
    let dict = {
        'yyyy': date.getFullYear(),
        'M': date.getMonth() + 1,
        'd': date.getDate(),
        'H': date.getHours(),
        'm': date.getMinutes(),
        's': date.getSeconds(),
        'MM': ('' + (date.getMonth() + 101)).substr(1),
        'dd': ('' + (date.getDate() + 100)).substr(1),
        'HH': ('' + (date.getHours() + 100)).substr(1),
        'mm': ('' + (date.getMinutes() + 100)).substr(1),
        'ss': ('' + (date.getSeconds() + 100)).substr(1)
    }
    return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
        return dict[arguments[0]]
    })
}

export {
    isIE,
    isIE9,
    isEdge,
    isChrome,
    isFF,
    dataType,
    isEmptyObject,
    trim,
    isEmptyArray,
    keywordFormat,
    downloadFile,
    formatDate,
}