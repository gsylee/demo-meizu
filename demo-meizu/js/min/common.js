// addLoadEvent事件
/* 
 * addloadEvent: 同时给window。onload添加事件
 * @param {func} : 在window.onload时执行的时间
 */
// function addLoadEvent (func) {
//     var old_onload = window.onload;
//     if(typeof old_onload !== "function") {
//         window.onload = function() {
//             func();
//         };
//     }else {
//         window.onload = function () {
//             old_onload();
//             func()
//         };
//     }
// }

/* 
 * byId : 通过document.getElementById 获取对应的元素
 * @param {idname}  元素的id值
 * @return  false 或者 emObj
 */
function byId(idname) {
    // 对象检查
    if(!document.getElementById) {
        return false;
    }
    // 判断元素是否存在
    var em_obj = document.getElementById(idname);
    if(!em_obj) {
        return false;
    }
    return em_obj;
}

