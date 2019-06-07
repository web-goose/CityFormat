ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.677894569044724, 37.28122499999996],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Мы здесь!',
            balloonContent: '<div class="ym"><img src="img/advertising/map/img.png">'+
            '<div class="row"><div class="col-7"><h3>КОНСТРУКЦИЯ ПЛ-399</h3>' +
            '<p>ст. Талдом, железнодорожная платформа. СТОРОНА А</p></div>' +
            '<div class="col-5"><button>ОТПРАВИТЬ ЗАЯВКУ</button></div></div></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/advertising/map/metka.png',
            iconImageSize: [30, 42],
        });
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
