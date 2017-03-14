/**
 * Created by starostenko on 07.03.2017.
 */

$(window).resize();

$(document).ready(function(){

    var w_top;

    $('#toogle').on('click', function () {

        if( $('nav ul').css('display') !== 'none'){
            $('nav ul').hide(200);
        }else {
            $('nav ul').show(200);
        }

    });


    var screenWidth = $('body').width();

    if($('body').width() > 770){

        $(window).resize(function() {
            location.reload();
        });

        slider();

        scrollFunctions();

    }


    if( screenWidth > 960 && screenWidth < 1280 ){

        // 3 - макс. кол-во блоков на экаран || 8 - общее кол-во блоков || имя секции к которой эти свойства будут применяться
        sliderSection(3, 8, 'reviews');
        sliderSection(2, 6, 'see-works');
        sliderSection(2, 4, 'top-object');
    }
    else if( screenWidth > 770 && screenWidth < 960 ){

        sliderSection(2, 8, 'reviews');
        sliderSection(1, 6, 'see-works');
        sliderSection(2, 4, 'top-object');

    }
    else if( screenWidth < 770 ){

        sliderSection(1, 3, 'reviews');
        sliderSection(1, 3, 'see-works');
        sliderSection(1, 4, 'top-object');

    }

});

//Обработка нажатия на кнопку "Верх" 
$("#scrollTop").click(function(){
    $("body").animate({"scrollTop":0}, "slow");
});

//Обработка нажатия на кнопку "Вниз" 
$("#scrollDownHeader").click(function(){
//Необходимо прокрутить в конец страницы 
    var height = $("header").height();
    $("body").animate({"scrollTop":height}, "slow");
});


/* Функция для работы со слайдером в шапке */
function slider() {

        $('.controls-js-slider').fadeIn();

        var slides = document.querySelectorAll('#slides .slide'),
        currentSlide = 0,
        slideInterval = setInterval(nextSlide,3000),
        next = document.getElementById('next'),
        previous = document.getElementById('previous'),
        playing = true,
        pauseButton = document.getElementById('pause');

    function nextSlide() {
        goToSlide(currentSlide+1);
    }

    function previousSlide() {
        goToSlide(currentSlide-1);
    }

    $('#slider-nav-header span').click(function() {

        nBtnSlide = $(this).attr('id');

        pauseSlideshow();

        goToSlide( nBtnSlide );

    });



    function goToSlide( n ) {
        slides[currentSlide].className = 'slide';
        currentSlide = ( n + slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';

        $('#slider-nav-header span').removeClass('active-btn-slider');

        $('#slider-nav-header #' + n).addClass('active-btn-slider');

    }

    next.onclick = function() {
        pauseSlideshow();
        nextSlide();
    };

    previous.onclick = function() {
        pauseSlideshow();
        previousSlide();
    };

    function pauseSlideshow() {
        $('.btn-slider-stop i').removeClass('fa-pause');
        $('.btn-slider-stop i').addClass('fa-play');


        playing = false;
        clearInterval(slideInterval);
    }

    function playSlideshow() {
        $('.btn-slider-stop i').removeClass('fa-play');
        $('.btn-slider-stop i').addClass('fa-pause');
        playing = true;
        slideInterval = setInterval(nextSlide,3000);
    }

    pauseButton.onclick = function() {
        if(playing) {
            pauseSlideshow();
        } else {
            playSlideshow();
        }
    };

}


/* функция для работы с событиями при скроллинге */
function scrollFunctions() {

        switchInfogramme = true;
        switchscrollTop = true;
        switchAdvantages = true;
        switchProcess = true;
        switchTreeProcess = true;
            sw_TreeProcess_h1 = true;
            sw_TreeProcess_branch = [];
        sw_Price_h1 = true;
        sw_Price_b = [];

    hideElement();

    $(window).on('scroll', function () {

        w_top = $(window).scrollTop();

        var i_top = $('.infogramme').offset().top;

        if(switchInfogramme == true && (w_top + 400) > i_top){
            timerFunction();
            //console.log(' ЗАПУСК - infogramme !!! ')
        }

        var scroll_top = $('.infogramme').offset().top;

        if(switchscrollTop == true && w_top > scroll_top){
            $("#scrollTop").css({display: 'block'});
            switchscrollTop = false;
        }

        var a_top = $('.advantages').offset().top;

        if(switchAdvantages == true && (w_top + 400) > a_top ){

            opocityOff('advantages');
            //console.log(' ЗАПУСК - advantages !!! ')

        }

        var p_top = $('.process').offset().top;

        if(switchProcess == true && (w_top + 500) > p_top ){

            opocityOff('process');
            //console.log(' ЗАПУСК - process !!! ')

        }

        var b_h1_top = $('.tree-process h1').offset().top;

        if(sw_TreeProcess_h1 == true && w_top + 550> b_h1_top){
            opocityTreeProcess('h1');
            //console.log('START - sw_TreeProcess_h1');
        }

        var b_0_top = $('.tree-process .branch').eq(0).offset().top;

        if(sw_TreeProcess_branch[0] !== true && w_top + 500> b_0_top){
            opocityTreeProcess('.branch', 0);
            //console.log('START - .branch - 0');
        }

        var b_1_top = $('.tree-process .branch').eq(1).offset().top;

        if(sw_TreeProcess_branch[1] !== true && w_top + 500> b_1_top){
            opocityTreeProcess('.branch', 1);
            //console.log('START - .branch - 1');
        }

        var b_2_top = $('.tree-process .branch').eq(2).offset().top;

        if(sw_TreeProcess_branch[2] !== true && w_top + 500> b_2_top){
            opocityTreeProcess('.branch', 2);
            //console.log('START - .branch - 2');
        }

        var b_3_top = $('.tree-process .branch').eq(3).offset().top;

        if(sw_TreeProcess_branch[3] !== true && w_top + 500> b_3_top){
            opocityTreeProcess('.branch', 3);
            //console.log('START - .branch - 3');
        }

        var b_4_top = $('.tree-process .branch').eq(4).offset().top;

        if(sw_TreeProcess_branch[4] !== true && w_top + 500> b_4_top){
            opocityTreeProcess('.branch', 4);
            //console.log('START - .branch - 4');
        }

        var b_5_top = $('.tree-process .branch').eq(5).offset().top;

        if(sw_TreeProcess_branch[5] !== true && w_top + 500> b_5_top){
            opocityTreeProcess('.branch', 5);
            //console.log('START - .branch - 5');
        }


        var b_6_top = $('.tree-process .branch').eq(6).offset().top;

        if(sw_TreeProcess_branch[6] !== true && w_top + 500> b_6_top){
            opocityTreeProcess('.branch', 6);
            //console.log('START - .branch - 6');
        }


        var c_h1_top = $('.construction-price h1').offset().top;

        if(sw_Price_h1 == true && w_top + 400 > c_h1_top){
            opocityConstructionPrice('h1');
            //console.log('START - construction-price h1');
        }

        var c_b0_top = $('#price-house-0').offset().top;

        if(sw_Price_h1[0] !== true && w_top + 400 > c_b0_top){
            opocityConstructionPrice('#price-house-', 0, '.data', '.img-house', 0);
            //console.log('START - #price-house-0');
        }

        var c_b1_top = $('#price-house-1').offset().top;

        if(sw_Price_h1[1] !== true && w_top + 400 > c_b1_top){
            opocityConstructionPrice('#price-house-', 1, '.data', '.img-house', 1);
            //console.log('START - #price-house-1');
        }

        var c_b2_top = $('#price-house-2').offset().top;

        if(sw_Price_h1[2] !== true && w_top + 400 > c_b2_top){
            opocityConstructionPrice('#price-house-', 2, '.data', '.img-house', 0);
            //console.log('START - #price-house-2');
        }
        
    });

}

function hideElement() {

    $('.infogramme h1').css({opacity: 0});
    $('.infogramme li').css({opacity: 0});


    $('.advantages h1').css({opacity: 0});
    $('.advantages li').css({opacity: 0});


    $('.process h1').css({opacity: 0});
    $('.process li').css({opacity: 0});

    $('.tree-process h1').css({opacity: 0});
    $('.tree-process .branch').css({opacity: 0});

    $('.construction-price h1').css({opacity: 0});

    $('#price-house-0 .data').css({
        left: -1500,
        '-webkit-transition': 'all 500ms',
        '-moz-transition': 'all 500ms',
        '-ms-transition': 'all 500ms',
        '-o-transition': 'all 500ms',
        'transition': 'all 500ms'
    });
    $('#price-house-0 .img-house').css({
        right: -1500,
        '-webkit-transition': 'all 500ms',
        '-moz-transition': 'all 500ms',
        '-ms-transition': 'all 500ms',
        '-o-transition': 'all 500ms',
        'transition': 'all 500ms'
    });

    $('#price-house-1 .img-house').css({
        left: -1500,
        '-webkit-transition': 'all 500ms',
        '-moz-transition': 'all 500ms',
        '-ms-transition': 'all 500ms',
        '-o-transition': 'all 500ms',
        'transition': 'all 500ms'
    });
    $('#price-house-1 .data').css({
        right: -1500,
        '-webkit-transition': 'all 500ms',
        '-moz-transition': 'all 500ms',
        '-ms-transition': 'all 500ms',
        '-o-transition': 'all 500ms',
        'transition': 'all 500ms'
    });

    $('#price-house-2 .data').css({
        left: -1500,
        '-webkit-transition': 'all 500ms',
        '-moz-transition': 'all 500ms',
        '-ms-transition': 'all 500ms',
        '-o-transition': 'all 500ms',
        'transition': 'all 500ms'
    });
    $('#price-house-2 .img-house').css({
        right: -1500,
        '-webkit-transition': 'all 500ms',
        '-moz-transition': 'all 500ms',
        '-ms-transition': 'all 500ms',
        '-o-transition': 'all 500ms',
        'transition': 'all 500ms'
    });

}


function timerFunction(){

    switchInfogramme = false;

    opocityOff('infogramme');

}


function opocityOff(name) {

    if(name == 'infogramme'){
        $('.infogramme h1').animate(
            {
                opacity: 1
            },
            500,
            (function() {
                $('.infogramme li').animate(
                    {
                        opacity: 1
                    },
                    1000);

                // start all the timers
                $('.timer').each(count);

                function count(options) {
                    var $this = $(this);
                    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    $this.countTo(options);
                };
            })
        )
    }

    if(name == 'advantages'){
        opocityAdvantages();
    }

    if(name == 'process'){
        opocityProcess();
    }

}


function opocityAdvantages() {

    switchAdvantages = false;

    $('.advantages h1').animate(
        {
            opacity: 1
        },
        500,
        (function() {
            advantagesLi();
        })
    );

    function advantagesLi(i) {

        $('.advantages li').animate(
            {
                opacity: 1
            },
            500)
    }

}


function opocityProcess() {

    switchProcess = false;

    $('.process h1').animate(
        {
            opacity: 1
        },
        500,
        (function() {
            processLi();
        })
    );

    function processLi(i) {

        $('.process li').animate(
            {
                opacity: 1
            },
            500)
    }

}


function opocityTreeProcess(name, Branch) {

        if(name == 'h1'){
            $('.tree-process ' + name + '').animate({
                opacity: 1
            }, 500);
            sw_TreeProcess_h1 = false;
            //console.log('name - ' + name);
        }
        else{
            $('.tree-process ul li:eq(' + Branch + ') ' + name + '').animate({
                opacity: 1
            }, 500);
            sw_TreeProcess_branch[Branch] = true;
            //console.log('name - ' + name);
            //console.log('B_n - ' + Branch);
        }

}



function opocityConstructionPrice(name, count, block1, block2, revers) {

    if(name == 'h1'){
        $('.construction-price ' + name + '').animate({
            opacity: 1
        }, 500);
        sw_Price_h1 = false;
        //console.log('name - ' + name);
    }

    if(name == '#price-house-' && revers == 0){
        $(name + count + ' ' + block1).css({
            left: 0,
            '-webkit-transition': 'all 500ms',
            '-moz-transition': 'all 500ms',
            '-ms-transition': 'all 500ms',
            '-o-transition': 'all 500ms',
            'transition': 'all 500ms'
        });
        $(name + count + ' ' + block2).css({
            right: 0,
            '-webkit-transition': 'all 500ms',
            '-moz-transition': 'all 500ms',
            '-ms-transition': 'all 500ms',
            '-o-transition': 'all 500ms',
            'transition': 'all 500ms'
        });
        sw_Price_b[count] = true;
        //console.log('name - ' + name + count);
    }

    if(name == '#price-house-' && revers == 1){
        $(name + count + ' ' + block2).css({
            left: 0,
            '-webkit-transition': 'all 500ms',
            '-moz-transition': 'all 500ms',
            '-ms-transition': 'all 500ms',
            '-o-transition': 'all 500ms',
            'transition': 'all 500ms'
        });
        $(name + count + ' ' + block1).css({
            right: 0,
            '-webkit-transition': 'all 500ms',
            '-moz-transition': 'all 500ms',
            '-ms-transition': 'all 500ms',
            '-o-transition': 'all 500ms',
            'transition': 'all 500ms'
        });
        sw_Price_b[count] = true;
        //console.log('name - ' + name + count);
    }



}





/* Функция для работы со слайдером смены блоков в разных секциях */
function sliderSection(maxBlock, allBlock, nameSection) {

    /* #1 удаление лишних блоков */
    removeBlock(allBlock, nameSection);


    /* #2 расчет кнопок слайдера */
    btnSliderSection(maxBlock, allBlock, nameSection);


    /* #3 процесс перемещения при нажатии кнопки */
    $(".slider-button ul li").click(function() {

        btnIndex($(this), maxBlock);

    });


}


/* #1 удаление лишних блоков */
function removeBlock(all, name) {

        //console.log("Кол-во всех элементов - " + $(".wrapper-" + name + " ul li").length)

    var countBlock = $(".wrapper-" + name + " ul li").length;

        //console.log('countBlock - ' + countBlock);

    var countRemove = $(".wrapper-" + name + " ul li").length - all;

        //console.log('countRemove - ' + countRemove);

    if(countRemove > 0){

        for(countRemove; countRemove <= countBlock + 1; countRemove++){

            $(".wrapper-" + name + " ul li:eq(" + all + ")").remove();
                all++;
                    //console.log('N - ' + all);
        }
    }

}


/* #2 расчет кнопок слайдера */
function btnSliderSection(min, max, name) {

    var maxButton = Math.ceil(max / min); // кол-ви кнопок

    //console.log('See-works кол-ви кнопок ' + maxButton);

    //console.log('max ' + max);

    //console.log('min ' + min);

    for(var i = 0; i < maxButton; i++){
        $('#nav-btn-' + name + '').append("<li></li>");
    }

    $('#nav-btn-' + name + ' li:eq(0)').addClass('active');
}


/* #3 процесс перемещения при нажатии кнопки */
function movement(name, index, max) {

    //console.log('index - ' + index);

    var widthLi = $('.wrapper-' + name + ' ul li').outerWidth(true);

    //console.log('widthLi - ' + widthLi);

    value =  widthLi * max * index;

    //console.log('max - ' + max);

    //console.log('index - ' + index);

    //console.log('value - ' + value);

    $('.wrapper-' + name + ' ul').css({left: - value});
    $('#nav-btn-' + name + ' li').removeClass('active');
    $('#nav-btn-' + name + ' li:eq(' + index + ')').addClass('active');

}


/* #4 определение Индекса нажатой кнопки */
function btnIndex(thisName, max){

    var name = (thisName.parent().find()).prevObject[0].id;

    var nameId = name.slice(8, name.length);

    //console.log('nameId - ' + nameId);

    var index = thisName.index();

    //console.log("index - " + index);

    /* btnIndex - #4 определение Индекса нажатой кнопки */
    movement(nameId, index, max);

    //var ind = $("#nav-btn-" + name + " li").index();


}