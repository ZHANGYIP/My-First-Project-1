/**
 * Created by OracleOAEC on 2017/3/6.
 */
/*-------------body的右边水果部分-----------------*/
var fruitImgs=document.querySelectorAll(".y_fruit img")
for(var i=0;i<fruitImgs.length;i++){
    fruitImgs[i].addEventListener("mouseover",function(){
        for(var j=0;j<fruitImgs.length;j++){
            fruitImgs[j].className="";
        }
        this.className="active";
    })
}
/*-------------顶部tab-----------------*/
var tabs=document.querySelectorAll(".food_header .food_title li");
for(var k=0;k<tabs.length;k++){
    tabs[k].addEventListener("mouseover",function(){
        for(var j=0;j<tabs.length;j++){
            tabs[j].className="";
        }
        this.className="sport";
    });
}