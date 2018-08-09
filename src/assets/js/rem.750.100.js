function wMaxWidth() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 / 2 + 'px';
}

var W_width = document.documentElement.clientWidth;
wMaxWidth(W_width);
window.addEventListener('resize', function () {
  W_width = document.documentElement.clientWidth;
  wMaxWidth(W_width);
}, false);

