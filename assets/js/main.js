let menuBtn = document.querySelector(".btn-menu");
let menu = document.querySelector(".mobile__menu");
let bgMenuMob = document.querySelector(".bg-modal-menu")
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  bgMenuMob.classList.toggle("animathion-in");
  menu.classList.toggle("animathion-in");
  bgMenuMob.style.display = "block";
  menu.style.transform= "translateX(0)"
});
document.addEventListener("click", function (event) {
	if (event.target === bgMenuMob) {
		bgMenuMob.style.display = "none";
	}
  });

// Прозрачность мобильного меню
const headerMenu = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset == 0) {
    headerMenu.classList.remove("opacity");
  } else {
    headerMenu.classList.add("opacity");
	headerMenu.style.position = "fixed"
  }
});

// Яндекс карта
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