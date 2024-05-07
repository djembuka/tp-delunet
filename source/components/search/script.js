(() => {
  class SlrSearch {
    constructor(elem) {
      this.elem = elem;
      this.wrapper = this.elem.querySelector('.slr-search-wrapper');
      this.init();
    }

    init() {
      this.wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('slr-search-wrapper')) {
          this.hide();
        }
      });

      document.addEventListener(
        'keydown',
        (event) => {
          if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
          }

          let handled = false;
          if (event.key !== undefined) {
            if (event.key === 'Escape') {
              this.hide();
            }
            handled = true;
          } else if (event.code !== undefined) {
            if (event.code === 'Escape') {
              this.hide();
            }
            handled = true;
          }

          if (handled) {
            event.preventDefault();
          }
        },
        true
      );
    }

    show() {
      this.elem.classList.add('slr-search--show');
    }

    hide() {
      this.elem.classList.remove('slr-search--show');
    }
  }

  window.addEventListener('load', () => {
    window.SlrSearch = new SlrSearch(document.getElementById('slrSearchElem'));
  });
})();
