(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

(function () {
  var wrapper = document.querySelector('.table-wrapper');
  if (!wrapper) return;

  function update() {
    var overflowing = wrapper.scrollWidth > wrapper.clientWidth + 1;
    wrapper.classList.toggle('has-overflow', overflowing);
    wrapper.classList.toggle('can-scroll-left', wrapper.scrollLeft > 0);
    wrapper.classList.toggle(
      'can-scroll-right',
      wrapper.scrollLeft + wrapper.clientWidth < wrapper.scrollWidth - 1
    );
  }

  update();
  wrapper.addEventListener('scroll', update);
  window.addEventListener('resize', update);
})();
