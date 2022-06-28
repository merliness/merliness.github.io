$(document).ready(function(){
    $(window).scroll(function(){
        //плавное меню 
       let scrollDistance = $(window).scrollTop();
        $(".section").each((i,el)=> {
            
            if($(el).offset().top - $("nav").outerHeight() <= (scrollDistance-300)){
                
                $("nav a").each((i,el) =>{
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                    
                });
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
        });
    });
    let options ={threshold: [0.2]};
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });
    animBg();
    $('.image-link').magnificPopup({type:'image'});
    
   
    
});


function onEntry (entry){
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
};
//пульсация фото
function animBg() {
	$('.oen img').animate({
	   'width': '120%',
	  'left': '-10%',
	  'top': '-10%'
	  }, 3000)
   	.animate({
            'width': '100%',
            'left': '0',
            'top': '0'
        }, 3000, animBg)
};


$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html,body').animate({scrollTop: $(valHref).offset().top -50 + "px"})
});
$(document).ready(function() {
  
});
$('.single-item-rtl').slick({
  rtl: true
});


var block_show = false;
 //код бегаюших цифр
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.activee').offset().top;
	var eh = $('.activee').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
        $('.Count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 3000,
        easing: 'swing',
        step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
		
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});
//всплывающее окно
$(document).mouseleave(function(e){
    if (e.clientY < 10) {
        $(".exitblock").fadeIn("fast");
    }    
});
$(document).click(function(e) {
    if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
        $(".exitblock").remove();
    }
    $('[data-toggle="popover"]').popover({
    //Установление направления отображения popover
    placement : 'top'
  });
});
