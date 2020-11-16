jQuery(document).ready(function(){

	// 스크롤 탑
	$('.quick_menu .move .top').click(function(){
		$( 'html' ).animate( { scrollTop : 0 }, 400 );
	});
	
	// 스크롤 바텀
	$('.quick_menu .move .bottom').click(function(){
		var height = $('html' ).height();
		$( 'html' ).animate( { scrollTop : height }, 400 );
	});

	// mobile menu on
	$('.header .ham').click(function(){
		$('.ham_menu').addClass('on');
	});

	// mobile menu off
	$('.ham_menu .cancel').click(function(){
		$('.ham_menu').removeClass('on');
	});

	//content_03 이미지 변환
	$('.content_03 .left .slide_wrap .slide li p.img span').click(function(){
		var img = $(this).parents('p.img').css("background-image");

		$('.content_03 .left .slide_wrap .slide li').removeClass('on');
		$(this).parents('li').addClass('on');
		$('.content_03 .right .img').css('background-image',img);
	});

	//content_01 배너
	$('.slider_01').slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : false, 	//무한 반복 옵션	 
		slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 2500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		prevArrow : $('.content_01 .web .left_arrow'),		// 이전 화살표 모양 설정
		nextArrow : $('.content_01 .web .right_arrow'),		// 다음 화살표 모양 설정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 960, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			},
			{ 
				breakpoint: 768, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			}
		]

	});
	//content_01 mobile 배너
	$('.slider_01_2').slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : false, 	//무한 반복 옵션	 
		slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 2500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		prevArrow : $('.content_01 .mo .left_arrow'),		// 이전 화살표 모양 설정
		nextArrow : $('.content_01 .mo .right_arrow'),		// 다음 화살표 모양 설정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 960, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			},
			{ 
				breakpoint: 768, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			}
		]

	});
	//content_02 배너
	$('.slider_02').slick({
		slide: 'ul',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : false, 	//무한 반복 옵션	 
		slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 3500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 960, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:2
				} 
			},
			{ 
				breakpoint: 768, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:2 
				} 
			}
		]

	});

	//content_02 mobile 배너
	$('.slider_02_2').slick({
		slide: 'li',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : false, 	//무한 반복 옵션	 
		slidesToShow : 2.5,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 3500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 960, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:2
				} 
			},
			{ 
				breakpoint: 768, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:2.5
				} 
			}
		]

	});

	//content_03 배너
	$('.slider_03').slick({
		slide: 'ul',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : false, 	//무한 반복 옵션	 
		slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 2500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		prevArrow : $('.content_03 .left_arrow'),		// 이전 화살표 모양 설정
		nextArrow : $('.content_03 .right_arrow'),		// 다음 화살표 모양 설정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 960, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			},
			{ 
				breakpoint: 768, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			}
		]

	});
});




