/**
 * Created by OracleOAEC on 2017/3/6.
 */
/* 日历的js */
var main=document.querySelector("#main");
var d=new Date();
var year= d.getFullYear();
var month= d.getMonth()+1;
var day= d.getDate();
// 本月第一天是星期几
var now=year+"."+month+"."+day;
// console.log(now);
var today=document.querySelector("#today");
    today.innerHTML=now;
var startDay=new Date(year,month-1,1).getDay();
// alert(startDay);
// 当前月有几天
var nDay=new Date(year,month,0).getDate();
// alert(nDay);

var str='';
str+="<ol>";
// 把本月第一天之前的星期循环出来
for(var i=0;i<startDay;i++){
    str+="<li class='inactive'> </li>";
}
// 显示本月所有天数；
for(var j=1;j<=nDay;j++){
    if(j==day){
        str+="<li class='today'>"+j+"</li>";
    }else{
        str+="<li class='active'>"+j+"</li>";
    }
}
str+="</ol>";
// alert(str);
main.innerHTML=str;