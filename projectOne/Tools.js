/**
 * Created by OracleOAEC on 2017/2/24.
 */
function addZero(num){
    if(typeof num!="number"){
        num="类型错误";
    }else{
        num=num<10?"0"+num:+num;
    }
    return num;
}
/*
*获取id
* */
function getId(uesrname){
    var element=document.getElementById(uesrname);
    if(element){   /* 元素存在为真 */
        return element;
    }else{
        return "元素为空";
    } /* 空的话为Null */
}
/*
*  获取窗口的尺寸
*   返回值是对象 object
* */
function getWindowSize(){
    return{
        "width":document.documentElement.clientWidth||window.innerWidth,
        "height":document.documentElement.clientHeight||window.innerHeight
    }
}
/*
* 获取滚动条的尺寸
* */
function getScrollSize(){
    return{
        "top":document.documentElement.scrollTop||document.body.scrollTop,
        "left":document.documentElement.scrollLeft||document.body.scrollLeft,

    }
}
/*
* 使元素居中 没有返回值
* */
function center(username){
    username.style.left=((getWindowSize().width-username.offsetWidth)/2+getScrollSize().left)+"px";
    username.style.top=((getWindowSize().height-username.offsetHeight)/2+getScrollSize().top)+"px";
}
/*
 *事件对象的兼容性处理
 * IE下：没有参数  用window.event带
 * 标准下： evt
 * */
function handleEvent(_evt){
    return _evt=_evt||window.event;
   /* if(window.event){
        return window.event;  // 如果为真则IE
    }else{
        return _evt;  // 如果为假则标准
    }*/
}
/*
* 跨浏览器的阻止默认动作
* */
function preventDefault(evt){
    if(window.event){
        // ie下的阻止默认动作
        window.event.returnValue=false;
    }else{
        // 其他浏览器下的阻止默认动作
        evt.preventDefault();
    }
}
/*
*跨浏览器的阻止冒泡
* */
function stopPropagation(evt){
    if(window.event){
        // IE
        window.event.cancelBubble=true;
    }else{
        evt.stopPropagation();
    }

}
/*
* 定时器函数
* */
