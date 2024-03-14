(function injectJS() {
  try {
    var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
    var modularBars = document.createElement('script');
    modularBars.type = 'text/javascript';
    // modularBars.src = 'https://app.yellowmessenger.com/components/public/webviews/gskPortugal/assets/js/childIframe_pt.js';
    iFrameHead.appendChild(modularBars);
    injectDynamicCssToChild();
  } catch (e) {
    console.error("failed while inserting to iFrame", e);
  }
})();

function injectDynamicCssToChild() {
  var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
  var modularStyles = document.createElement('style');
  modularStyles.type = 'text/css';
  var css = '.feedback-card-doc { display: none !important, }';
  if (modularStyles.styleSheet) {
    modularStyles.styleSheet.cssText = css;
  } else {
    modularStyles.appendChild(document.createTextNode(css));
  }
  ymFrameHead.appendChild(modularStyles);
}