/*
 * Visit and download counts (private GoatCounter dashboard, no cookies).
 *
 * SETUP: create a free account at https://www.goatcounter.com, then paste the
 * code you chose (the "yourcode" part of yourcode.goatcounter.com) between the
 * quotes below. Leave it empty to turn counting off.
 *
 * To stop counting your own visits, open this site once with
 * #toggle-goatcounter at the end of the address on each browser you use.
 */
(function () {
  var code = '';
  if (!/^[a-z0-9-]+$/i.test(code)) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + code + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
