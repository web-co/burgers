$(window).load(function(){
	
		function responsive(){
			if(window.matchMedia('(max-width: 1024px)').matches)
			{
				$(".responseve_w").addClass("menu_mobile");
				$("#home .slide img").removeClass("cover");
				$('.main_menu').liLanding({
					topMargin: 92
				});
				
			}
			if(window.matchMedia('(min-width: 1025px)').matches)
			{
				$(".responseve_w").removeClass("menu_mobile");
				
				$("#home .slide img").addClass("cover");
				$('.cover').liCover({
					parent: $(".slider_main"),
					position: 'absolute',
					veticalAlign:'top',
					align:'center'	
				});
				
				$('.main_menu').liLanding({
					topMargin: 0
				});
			}
		
		};
	
		$(responsive);
		
		$( window ).resize(function() {
		  $(responsive);
		});
	
		
		
		
		$('#owl_home').owlCarousel({
			items:1,
			loop:true,
			margin:0,
			padding: 0,
			animateOut: 'fadeOut',
			nav: false,
			dots: true,
			autoplayTimeout: 7000,
			autoplay: true
		});
		$('#owl_menu').owlCarousel({
			items:1,
			loop:true,
			margin:0,
			padding: 0,
			//animateOut: 'fadeOut',
			nav: false,
			dots: true,
			autoplayTimeout: 7000,
			autoplay: true
		});
		 
	
	//mobile menu
	$(transformicons.add('.tcon'));
	
	$(".tcon-menu--xcross").on('click', function(){
		$(".menu_mobile").slideToggle(600);
	});

	$(".menu_mobile .main_menu li a").on('click', function(){
		$(".menu_mobile").slideUp(600);
		$(".tcon-menu--xcross").removeClass('tcon-transform');
	});

	$(document).mouseup(function (e){ 
		var div = $('.main_menu_w'); 
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) {
			$(".tcon-menu--xcross").removeClass('tcon-transform');
			$(".menu_mobile").slideUp(600);
		};
	});

 
});	

