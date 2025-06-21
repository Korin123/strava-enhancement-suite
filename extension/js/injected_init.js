(function() {
  function StravaEnhancementSuiteInit() {
    const originalAddEventListener = document.addEventListener;
    document.addEventListener = function (type, listener, options) {
      if (type === 'wheel') {
        console.log('[StravaEnhancementSuiteInit]: Preventing wheel event listener to avoid scroll blocking');
        return;
      }
      return originalAddEventListener.call(document, type, listener, options);
    };
  }

  window.addEventListener('SES_init', (e) => {
    StravaEnhancementSuiteInit();
    window.strava_enhancement_suite = new StravaEnhancementSuite(jQuery, e.detail);
  });
})();
