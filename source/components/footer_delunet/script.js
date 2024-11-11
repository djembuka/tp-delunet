window.addEventListener('load', () => {
  document.getElementById('footerMap').style.transition = 'height .3s ease';

  if (document.querySelector('.bj-page-footer-delunet__map-button')) {
    document
      .querySelector('.bj-page-footer-delunet__map-button')
      .addEventListener('click', (e) => {
        e.preventDefault();
        document
          .querySelector('.bj-page-footer-delunet__map')
          .classList.toggle('bj-page-footer-delunet__map--show');
      });
  }

  if (ymaps3 && document.getElementById('footerMap')) {
    initMap();

    async function initMap() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
      await ymaps3.ready;

      const { YMap, YMapDefaultSchemeLayer } = ymaps3;

      // Иницилиазируем карту
      const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('footerMap'),

        // Передаём параметры инициализации карты
        {
          location: {
            // Координаты центра карты
            center: [37.588144, 55.733842],

            // Уровень масштабирования
            zoom: 10,
          },
        }
      );

      // Добавляем слой для отображения схематической карты
      map.addChild(new YMapDefaultSchemeLayer());
    }
  }
});
