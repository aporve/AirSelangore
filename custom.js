(function injectJS() {
  try {
    var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
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