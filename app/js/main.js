// плавные переходы
$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
    }); 
});

// карусель
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        620:{
            items:2
        },
        930:{
            items:3
        },
        1280:{
            items:4
        }
    }
})

// карта
ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [56.478074, 84.965004],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        });

        myPlacemark = new ymaps.Placemark([56.478074, 84.965004], {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/placemark.svg',
            // Размеры метки.
            iconImageSize: [81, 111],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -90]
        });

        myMap.geoObjects.add(myPlacemark);
    }

// animates
new WOW().init();

// teamPopups
// function darkBody() {
//     if($('.team-popup__checkbox').prop('checked')) {
//         $('#darkBody').css('display', 'block');
//     } else {
//         $('#darkBody').css('display', 'none');
//     }
// }

// darkBody();
































// 