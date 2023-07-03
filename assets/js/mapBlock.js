ymaps.ready(init); 
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [44.63321821820833,39.125233033729515], // Координаты центра карты
			zoom: 17 // Маштаб карты
		}); 
	
		
	
		myPlacemark = new ymaps.Placemark([44.63321821820833,39.125233033729515], { // Координаты метки объекта
            balloonContent: "<div class='ya_map'>Заезжайте в гости!</div>" // Подсказка метки
        }, {
			iconLayout: "default#image",
            iconImageHref: "../img/mapIcon.svg", // Ссылка на изображение 
            iconImageSize: [122, 59], // Размер изображения 
            iconImageOffset: [-3, -42] // Положение изображения 
		});
		
		myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
		
	};