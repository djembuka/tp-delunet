(() => {
  class SlrSearch {
    constructor(elem) {
      this.elem = elem;
    }

    show() {
      this.elem.classList.add('components/search/style.styl');
    }
  }

  window.addEventListener('load', () => {
    window.SlrSearch = new SlrSearch(document.getElementById('slrSearchElem'));
  });
})();
