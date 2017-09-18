//
// $('a#nav_toggle').click(function(event) {
//   event.preventDefault();
//   window.alert("sometext");
// })


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("div.main_header").addClass("scrollHeader");
      $("div.sub_header").addClass("scrollHeader");
  } else {
        $("div.main_header").removeClass("scrollHeader");
        $("div.sub_header").removeClass("scrollHeader");
  }

});



// $('div.main_header h1').click(function() {

  // $( "div.sub_header" ).slideToggle( "fast", function() {
    // Animation complete.
  // });


  //  window.alert("sometext");
  // $('body #main_nav').toggleClass('nav_open');
  // $('body #sw_body_wrapper').toggleClass('nav_open_body');

  // $('.container div.main').toggleClass('body_closed');

  // $('.container div.nav').toggleClass('body_closed');



   //
  //  $(".desktop").css({"display": "none"});
  //  $(".mobile").css({"display": "block"});





  // $('.hidden').toggleClass('show');

  // $('body').toggleClass('page_closed');

// })

// $('').hover(function() {
//     //  window.alert("sometext");
//
//   $('div#nav_menu.menu ul li a span.text').addClass('active');
//
// })

// $("div#nav_menu.menu ul li a span.title").hover(function() {
//     $(this).animate({
//         opacity: "1"
//     }, {
//         queue: false
//     });
// }, function() {
//     $(this).animate({
//         opacity: "0"
//     }, {
//         queue: false
//     });
// });



      // $('a').click(function(event) {
      //   $('a').removeClass('selected');
      //   $(this).addClass('selected');
      //   event.preventDefault();
      // })
      //
			// $("nav.closed a.active").click(function () {
			// 		$("nav2").css({"display": "block"});
			// 	// $("nav.closed").removeClass("open");
			// 	});
      //
			//  $("nav.closed").hover(function () {
			//      $(this).toggleClass("open");
			//   });
      //
			// $('.sample').click(function() {
			// 	$("body#home").css({"overflow": "hidden"});
			// 		$("div.overlay").css({"visibility": "visible"});
			// 	$("div.content").css({"visibility": "visible"});
			// 	$("div.end").css({"visibility": "visible"});
		  //  });
      //
			//  $('.overlay').click(function() {
			// 	 $("body#home").css({"overflow": "scroll"});
			// 	 $("div.overlay").css({"visibility": "hidden"});
			//  $("div.content").css({"visibility": "hidden"});
			//  $("div.end").css({"visibility": "hidden"});
			//   });
  //
	// $('[data-typer-targets]').typer();
  //
  //
  //   $.jribbble.setToken('fbb84b9cd4de545db1f0c49b946a4904f324b98af24f13c3ea05e05e28812a85');
  //   // $.jribbble.shots().then(success, error);
  //
	// $.jribbble.users('kieronkeenan').shots({per_page: 9}).then(function(shots) {
	//   var html = [];
  //
	//   shots.forEach(function(shot) {
	//     html.push('<div class="col shot">');
	//     html.push('<a href="' + shot.html_url + '" target="_blank"> ');
	//     html.push('<img src="' + shot.images.normal + '">');
	//     html.push('<span class="count"><span class="icon-heart2"></span>' + shot.likes_count + '</span>');
	//     html.push('<h3><span class="title">' + shot.title + '</span><span class="view">Click to View Design <span class="icon-share22"></span></span></h3></a></div>');
	//   });
  //
	//   $('.gallery').html(html.join(''));
  //
  //
	// });
  //
  //
  //
  //   $("img.endorse").delay( 5000 );
  //




    // $("#loadMore").on('click', function (e) {
    //     e.preventDefault();
    //     $("div.gallery > div:hidden").slice(0, 4).slideDown();
    //     if ($("div.gallery > div:hidden").length == 0) {
    //         $("#load").fadeOut('slow');
    //     }
    //     $('html,body').animate({
    //         scrollTop: $(this).offset().top
    //     }, 1500);
    // });


  //
	// $("#commentForm").validate();
	// $("#commentForm2").validate({
	// 	rules: {
	// 	    name: "required",
	// 	    email: {
	// 	      required: true,
	// 	      email: true
	// 	    }
	// 	  }
	// });


	// $(function() {
	//  $('input, textarea').placeholder();
	// });

	// $('.parallax').scrolly({bgParallax: true});

	// if ($(window).width() < 685) {

	// }
	// else {
	// 	var fadeStart=80 // 100px scroll or less will equiv to 1 opacity
	// 	    ,fadeUntil=800 // 200px scroll or more will equiv to 0 opacity
	// 	    ,fading = $('#header_wrapper')
	// 	;

	// 	$(window).bind('scroll', function(){
	// 	    var offset = $(document).scrollTop()
	// 	        ,opacity=0
	// 	    ;
	// 	    if( offset<=fadeStart ){
	// 	        opacity=1;
	// 	    }else if( offset<=fadeUntil ){
	// 	        opacity=1-offset/fadeUntil;
	// 	    }
	// 	    fading.css('opacity',opacity);
	// 	});
	// }

	// if ($(window).width() < 685) {

	// }
	// else {
	// 	$(window).scroll( function(){

	//        $('.fadeInBlock').each( function(i){

	//            var bottom_of_object = $(this).position().top + $(this).outerHeight();
	//            var bottom_of_window = $(window).scrollTop() + $(window).height();

	//             Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it
	//            bottom_of_window = bottom_of_window + 900;

	//            if( bottom_of_window > bottom_of_object ){

	//                $(this).animate({'opacity':'1'},1000);

	//            }
	//        });

	//    });
	// }
