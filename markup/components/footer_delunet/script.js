window.addEventListener('load', () => {
  document.querySelector('.bj-page-footer-delunet iframe').style.transition =
    'height .3s ease';

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

  //mobile
  window.addEventListener('load', fetchMobileFooter);
  window.addEventListener('resize', fetchMobileFooter);
  window.fetchMobileFooterFlag;

  const menuAjaxPath = '/markup/components/footer_delunet/mobile.html';

  function fetchMobileFooter() {
    if (
      window.matchMedia('(max-width: 767px)').matches &&
      !window.fetchMobileFooterFlag
    ) {
      window.fetchMobileFooterFlag = true;
      (async function () {
        try {
          var response = await fetch(menuAjaxPath);
          var result = await response.text();
          var footer = document.querySelector('footer.bj-page-footer-delunet');

          if (footer) {
            footer.innerHTML = result;
            document.querySelector(
              '.bj-page-footer-delunet iframe'
            ).style.transition = 'height .3s ease';
          }
        } catch (err) {
          throw err;
        }
      })();
    }
  }
});
