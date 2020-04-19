$(".dropdown-menu .nav-item .nav-link").click(function()
{
    $(".dropdown-menu .nav-item .nav-link.active").removeClass('active');
});
$(document).ready(function(){

$(".nav-tabs li a").click(function(e){
e.preventDefault();
$(this).tab('show');
$('.tab-content > .tab-pane.active').jScrollPane();
});
});
$('.owl-carousel').owlCarousel({
loop:true,
autoplay:true,
margin:10,
nav:false,
responsive:{
0:{
    items:1
},
600:{
    items:2
},
750:{
    items:2
},
900:{
    items:3
},
1000:{
    items:3
},
1400:{
    items:5
}
}
});
$('.owl-carousel2').owlCarousel({
loop:true,
autoplay:true,
margin:10,
nav:false,
responsive:{
0:{
    items:1
},
600:{
    items:2
},
750:{
    items:2
},
900:{
    items:3
},
1000:{
    items:3
},
1400:{
    items:4
}
}
});

var tlfScroll = new TimelineMax();

tlfScroll
.set('.pic' , {scale: 0.9 ,transformOrigin: "center top" , y:"50%"})
.to('.pic' , 1 , {scale:0.7 , y:"-10%"})
.to('.pic' , 3 , {scale:0.6 , y:"0%"})
.to('.tep1' , 3 , {opacity:"1", left:"20%"} , "-=3")

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1',
    triggerHook: 0,
    duration: "100%"
})
.setTween(tlfScroll)
.addTo(controller);

var tlsScroll = new TimelineMax();

tlsScroll
.to('.bcheck' , 3 , {opacity:"1"})
.to('.tep1s' , 3 , {opacity:"1", left:"70%"} , "-=3")
.to('.tep1' , 2 , {opacity:"0", left:"50%"} )
.to('.tep1s' , 2 , {opacity:"0", left:"50%"} )
.to('.bcheck' , 1 , {opacity:"0"})
.to('.tep2' , 3 , {opacity:"1" , left:"25%"})
.to('.bcard' , 3 , {opacity:"1"})
.to('.tep2s' , 3 , {opacity:"1", left:"75%"} , "-=3")
.to('.tep2' , 2 , {opacity:"0", left:"50%"} )
.to('.tep2s' , 2 , {opacity:"0", left:"50%"} )
.to('.bcard' , 1 , {opacity:"0"} , "-=3")
.to('.pic' , 3 , {transform:" rotateY(90deg)"})
.to('.pic' , 3 , {display:"none"} , "-=2")
.to('.cap' , 3 , {opacity:"1"} , "-=2")
var scene2 = new ScrollMagic.Scene({
    triggerElement:'.trigger2',
    triggerHook:0,
    duration:"100%"
})
.setTween(tlsScroll)
.setPin('.trigger2')
.addTo(controller);

$(".men").click(function(){
    $(".menu").toggleClass("show");
});
// var tltScroll = new TimelineMax();

// tltScroll


// var scene3 = new ScrollMagic.Scene({
//     triggerElement:'.trigger2',
//     triggerHook:0,
//     duration:'100%'
// })
// .setTween(tltScroll)
// .setPin('.trigger2')
// .addIndicators()
// .addTo(controller);