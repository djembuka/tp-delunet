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
  window.addEventListener('resize', fetchMobileFooter);
  window.fetchMobileFooterFlag;

  const menuAjaxPath = '/markup/components/footer_delunet/mobile.html';

  fetchMobileFooter();

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

          var div = document.createElement('div');
          div.innerHTML = result;

          var footerNew = div.querySelector('footer');
          var script = footerNew.querySelector('script');
          var src = script.src;
          var type = script.type;
          var charset = script.charset;
          var dataSkipMmoving = script['data-skip-moving'];

          var scriptNew = document.createElement('script');
          scriptNew.src = src;
          scriptNew.type = type;
          scriptNew.charset = charset;
          scriptNew['data-skip-moving'] = dataSkipMmoving;

          if (footer) {
            footer.after(footerNew);
            var s = footerNew.querySelector('script');
            s.after(scriptNew);
          }
        } catch (err) {
          throw err;
        }
      })();
    }
  }
});
