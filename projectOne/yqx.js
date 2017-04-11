/**
 * Created by OracleOAEC on 2017/3/6.
 */
var lis=document.querySelectorAll(".x_tab li");
var divs=document.querySelectorAll(".x_tab div");
for(var i=0;i<lis.length;i++){
    lis[i].setAttribute("index",i);
    lis[i].addEventListener("click",function(){
        for(var j=0;j<lis.length;j++){
            lis[j].className="";
            divs[j].className="";
        }
        this.className="active";
        divs[this.getAttribute("index")].className="spotlight"
    })
}