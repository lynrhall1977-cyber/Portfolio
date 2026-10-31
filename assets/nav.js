/* Projects dropdown: click or tap to toggle, Escape or a click elsewhere to close. Hover also opens it on desktop (CSS). */
(function () {
  var item = document.querySelector('nav .has-menu');
  if (!item) return;
  var btn = item.querySelector('.menu-btn');
  var links = item.querySelectorAll('.submenu a');

  function setOpen(open, focusButton) {
    item.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open && focusButton) btn.focus();
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  btn.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      if (links[0]) links[0].focus();
    }
  });

  item.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && item.classList.contains('open')) {
      e.preventDefault();
      setOpen(false, true);
      return;
    }
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    var list = Array.prototype.slice.call(links);
    var i = list.indexOf(document.activeElement);
    if (i < 0) return;
    e.preventDefault();
    var next = e.key === 'ArrowDown' ? Math.min(i + 1, list.length - 1) : i - 1;
    if (next < 0) btn.focus(); else list[next].focus();
  });

  document.addEventListener('click', function (e) {
    if (!item.contains(e.target)) setOpen(false);
  });

  item.addEventListener('focusout', function (e) {
    if (e.relatedTarget && !item.contains(e.relatedTarget)) setOpen(false);
  });

  /* Close after choosing a same-page link such as "All projects" on the home page. */
  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
})();
