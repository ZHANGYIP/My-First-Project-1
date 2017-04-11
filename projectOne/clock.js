/**
 * Created by OracleOAEC on 2017/3/6.
 */

/*　时钟的js */
var count=0;
var date=new Date();
var se=date.getSeconds();
// 获取今天到目前走的秒数
var before=new Date("2017.3.6");
var time=parseInt((date.getTime()-before.getTime())/1000);
count+=time;
// console.log(time);
setInterval(function(){
    var d=new Date();
    var h= addZero(d.getHours());
    var m= addZero(d.getMinutes());
    var s= addZero(d.getSeconds());
    var imgs=document.querySelectorAll(".y_clock img");
    var now=h+"c"+m+"c"+s;
    count++;
    // console.log(count);
    /*
    * 图片数字变化时，图片也相应变化
    * */
    if(count%10==0){
        clockOut(6);
    }
    if(count%60==0){
        clockOut(4);
    }
    if(count%600==0){
        clockOut(3);
    }
    if(count%3600==0){
        clockOut(1);
    }
    if(count%36000==0){
        clockOut(0);
    }
    function clockOut(_t){
        var timer=setInterval(function(){
            imgs[_t].style.transform="scaleY("+y+")";
            if(tag==1){
                y-=0.1;
            }else{
                y+=0.1;
            }
            // console.log(y);
            if(y<-1){
                tag=2;
            }
            if(y>1){
                clearInterval(timer);
            }
        },10)
    }
    /*
    * 时钟走动
    * */
    for(var i=0;i<imgs.length;i++){
        imgs[i].src="images/"+now.charAt(i)+".png";
    }
    var y=1;
    var tag=1;
    var timer2=setInterval(function(){
        imgs[7].style.transform="scaleY("+y+")";
        if(tag==1){
            y-=0.1;
        }else{
            y+=0.1;
        }
        // console.log(y);
        if(y<-1){
            tag=2;
        }
        if(y>1){
            clearInterval(timer2);
        }
    },10)
},1000)
/*
* 星期部分
* */
var d=new Date();
var weekday=d.getDay();
var arr=new Array("天","一","二","三","四","五","六")
var foo=document.querySelector(".weekday");
console.log(foo);
switch(weekday){
    case 0:foo.innerHTML="星期"+arr[weekday];
        break;
    case 1:foo.innerHTML="星期"+arr[weekday];
        break;
    case 2:foo.innerHTML="星期"+arr[weekday];
        break;
    case 3:foo.innerHTML="星期"+arr[weekday];
        break;
    case 4:foo.innerHTML="星期"+arr[weekday];
        break;
    case 5:foo.innerHTML="星期"+arr[weekday];
        break;
    case 6:foo.innerHTML="星期"+arr[weekday];
        break;
    default:
}

