$(document).ready(function(){


$(".btn1").click(function(){

var position=$("body").offset();
$("html,body").animate({

  scrollTop:position.top
},0);
});

var bt=document.querySelectorAll('.bt')
// var slide_px=1200;
var count=0;



//이미지 슬라이드 부분
$(bt[0]).click(function(){
  count=0;
$(".slide").stop().animate({left: '-'+slide_wrap_w*count},400)
color(count)
});
$(bt[1]).click(function(){
  count=1;
$(".slide").stop().animate({left: '-'+slide_wrap_w*count},400)
color(count)
});
$(bt[2]).click(function(){

count=2;
$(".slide").stop().animate({left: '-'+slide_wrap_w*count},400)
color(count)

});
$(bt[3]).click(function(){

count=3;
$(".slide").stop().animate({left: '-'+slide_wrap_w*count},400)
color(count)

});
$(bt[4]).click(function(){

count=4;
$(".slide").stop().animate({left: '-'+slide_wrap_w*count},400)
color(count)

});



 $(".r_bt").click(function(){
if(count<4){
  count++
  $(".slide").stop().animate({left: '-'+slide_wrap_w*count},400);
  color(count)

}else{
  count=0
    $(".slide").stop().animate({left: '-'+slide_wrap_w*count+'px'},400);
  color(count)
}



});


$(".l_bt").click(function(){
if(count>0){
  count--
  $(".slide").stop().animate({left: '-'+slide_wrap_w*count},400)
  color(count)
}else{
count=4
$(".slide").stop().animate({left: '-'+slide_wrap_w*count},400)
color(count)
}





});

function color(a){
  clear()
  $(bt[a]).css({
    backgroundColor:'yellow'
  })
}


function clear(){

$(bt[0]).css({

  backgroundColor:'#ededed'
})
$(bt[1]).css({

  backgroundColor:'#ededed'
})
$(bt[2]).css({

  backgroundColor:'#ededed'
})
$(bt[3]).css({

  backgroundColor:'#ededed'
})
$(bt[4]).css({

  backgroundColor:'#ededed'
})

}


//이미지 셋인터벌 부분

var img_slide=setInterval(s_slide,5000)



function s_slide(){

  if(count==0){

  $(".slide").stop().animate({left: '-'+slide_wrap_w*count},1000)
color(count)
}else if(count==1){

  $(".slide").stop().animate({left: '-'+slide_wrap_w*count},1000)
color(count)
}else if(count==2){

  $(".slide").stop().animate({left: '-'+slide_wrap_w*count},1000)
color(count)
}else if(count==3){

  $(".slide").stop().animate({left: '-'+slide_wrap_w*count},1000)
color(count)

}else if(count==4){

  $(".slide").stop().animate({left: '-'+slide_wrap_w*count},1000)
color(count)
count=-1;
}


count++
}

function a_slide(){
if (count==0){
  count=1;
}

}

a_slide();




var slide_wrap_w = $("section").width();
//브라우저의 크기가 변할 때 작동되는 함수
$(window).resize(function() {
  slide_wrap_w = $("section").width();
  console.log(slide_wrap_w);
  $(".slide").stop().animate({left: '-'+slide_wrap_w*count+'px'},0);






});


















});
