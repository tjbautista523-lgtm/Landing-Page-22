(function() {
  "use strict";

  const closeButton = document.querySelector('.mobile-menu-close');
  if (!closeButton) return;

  const allowedPages = new Set([
    'index.html',
    'about.html',
    'courses.html',
    'course-details.html',
    'trainers.html',
    'events.html',
    'pricing.html',
    'contact.html',
    'starter-page.html'
  ]);
  const requestedPage = new URLSearchParams(window.location.search).get('from');
  if (requestedPage && allowedPages.has(requestedPage)) {
    closeButton.href = requestedPage;
  }
})();
