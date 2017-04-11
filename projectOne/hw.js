/**
 * Created by OracleOAEC on 2017/3/7.
 */
/**********无缝滚动***************/
var ul=document.querySelector(".food_header .cake ul");
ul.innerHTML+=ul.innerHTML;
var left=parseInt(ul.style.left)||0;
setInterval(function(){
    left--;
    if(left<=-1000){
        left=0;
    }
    ul.style.left=left+"px";
},30);
/**********手风琴***********/
var uls=document.querySelectorAll("#h_body_left div ul");
var btn=document.querySelectorAll("#h_body_left div button");
for(var i=0;i<btn.length;i++){
    btn[i].setAttribute("index",i);
    btn[i].addEventListener("mouseover",function(){
        for(var j=0;j<btn.length;j++){
            uls[j].style.display="";
        }
        uls[this.getAttribute("index")].style.display="block"
    });
}