// Package toggle: filming vs own-footage
document.querySelectorAll('[data-toggle-target]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var target = btn.getAttribute('data-toggle-target');

    document.querySelectorAll('[data-toggle-target]').forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    document.querySelectorAll('.package-panel').forEach(function (panel) {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
    });
  });
});

// Portfolio category tabs
document.querySelectorAll('[data-tab-target]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var target = btn.getAttribute('data-tab-target');

    document.querySelectorAll('[data-tab-target]').forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    document.querySelectorAll('.category-panel').forEach(function (panel) {
      panel.classList.toggle('active', panel.getAttribute('data-category') === target);
    });
  });
});

// Reels strip: let vertical mouse-wheel scroll the horizontal carousel
// (trackpad horizontal swipe and touch swipe already work natively via overflow-x)
document.querySelectorAll('.reel-strip-scroll').forEach(function (el) {
  el.addEventListener('wheel', function (e) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive: false });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(function (item) {
  var question = item.querySelector('.faq-q');
  question.addEventListener('click', function () {
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function (i) {
      i.classList.remove('open');
    });
    if (!isOpen) item.classList.add('open');
  });
});
