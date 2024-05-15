(() => {
  class SlrSearch {
    constructor(elem) {
      this.elem = elem;
      this.wrapper = this.elem.querySelector('.slr-search-wrapper');
      this.input = this.elem.querySelector('.slr-search-input');
      this.clear = this.elem.querySelector('.slr-search-clear');
      this.init();
    }

    init() {
      this.wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('slr-search-wrapper')) {
          this.hide();
        }
      });

      this.clear.addEventListener('click', (e) => {
        e.preventDefault();
        this.input.value = '';
        this.input.focus();
        this.elem.classList.remove('slr-search--filled');
      });

      this.input.addEventListener('keyup', () => {
        if (this.input.value.trim() !== '') {
          this.elem.classList.add('slr-search--filled');
        } else {
          this.elem.classList.remove('slr-search--filled');
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
              handled = true;
              this.hide();
            }
          } else if (event.code !== undefined) {
            if (event.code === 'Escape') {
              handled = true;
              this.hide();
            }
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
      this.input.focus();
    }

    hide() {
      this.elem.classList.remove('slr-search--show');
    }
  }

  window.addEventListener('load', () => {
    window.SlrSearch = new SlrSearch(document.getElementById('slrSearchElem'));
  });
})();
