$('.heading_carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        }
    }
})

$('.first_bloc_carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0: {
            items: 1
        },
        600: {
            items: 2,
            nav: false
        },
        
        1000: {
            items: 3
        },

        1200:{
            items:4
        }
    }
})

$('.allCategorie_box').on('click', function(){
    $('.categorie_menu').toggleClass('show_categorie');
    
    if($('.allCategorie_box i').hasClass('ti-menu')){
        $('.allCategorie_box i').removeClass('ti-menu');
        $('.allCategorie_box i').addClass('ti-close');
    }else{
        $('.allCategorie_box i').removeClass('ti-close');
        $('.allCategorie_box i').addClass('ti-menu');
    }
})

$('#prod_dmd-tab').on('click', function(){
    if($('#prod_vus').hasClass('active')){
        $('#prod_vus').removeClass('active');
        $('#prod_dmd').addClass('active');
        $('#prod_dmd-tab').addClass('active');
        $('#prod_vus-tab').removeClass('active');
    }
})

$('#prod_vus-tab').on('click', function(){
    if($('#prod_dmd').hasClass('active')){
        $('#prod_dmd').removeClass('active');
        $('#prod_vus').addClass('active');
        $('#prod_vus-tab').addClass('active');
        $('#prod_dmd-tab').removeClass('active');
    }
})

// for the responsive navBar
$('.resp_btn').on('click', function(){
    $('.responsive_cat_menu').toggleClass('show');
})

//MyHamburger
$('#MyHamburger').on('click', function(){
    $('.responsiveNavBar').toggleClass('show');
})

$('#closeBtn').on('click', function(){
    $('.responsiveNavBar').removeClass('show');
})