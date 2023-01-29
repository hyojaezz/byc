var front = {
    st: 0,
    
    init: function() {
        this.gnbUI();
        this.navUI();
        this.mainSlide();
        this.newsSlide();
        this.socialSlide();
    },


    // gnb 영역
    gnbUI: function() {
        $('#header .gnb>li').on('mouseover', function() {
            $('#header .gnb .depth2').slideDown(400);
            $('#header').addClass('on');
        });
        $('#header').on('mouseleave', function() {
            $('#header .gnb .depth2').slideUp(400);
            $('#header').removeClass('on');
        });
        // util 버튼 누를 경우에 depth2 메뉴 닫힘
        $('#header .util').on('click', function() {
            $('#header .depth2').slideUp(400);
            $('#header').removeClass('on');
        });
    },
    // nav 영역
    navUI: function() {
        $('.sitemap>a').on('click', function() {
            $('#nav').addClass('on');
        });
        $('.btn_close>a').on('click', function() {
            $('#nav').removeClass('on');
        });


        $('.nav_menu a').on('click', function(e) {
            e.preventDefault();
            $(this).siblings().slideToggle().parent().siblings().find('.depth2').slideUp();
            $('.nav_menu>li').removeClass('active');
        });

        $('.nav_menu').on('click', 'li', function() {
            $(this).toggleClass('on');
            $(this).siblings().removeClass('on');
        });

    },

    // 메인슬라이드 영역
    mainSlide:function() {
        var mainSlide = new Swiper('.main_slider', {
            // Optional parameters
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 5000,
              },

            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });

        $('.main_slider .swiper-button-play').on('click', function() {
            mainSlide.autoplay.start();
            $('.main_slider .swiper-button-play').hide();
            $('.main_slider .swiper-button-pause').css('display', 'inline-block');
        });

        $('.main_slider .swiper-button-pause').on('click', function() {
            mainSlide.autoplay.stop();
            $('.main_slider .swiper-button-pause').hide();
            $('.main_slider .swiper-button-play').css('display', 'inline-block');
        });
    },
    // BYC 뉴스 슬라이드 영역
    newsSlide:function() {
        var newsSlider = new Swiper('.news_slider', {
            slidesPerView: 'auto',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.news-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    },

    // 소셜 슬라이드 영역
    socialSlide:function() {
        var socialSlider = new Swiper('.sns_slider', {
            loop: true,
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    },
}





$(document).ready(function(){
    front.init();

});