function injectDynamicCssToChild() {
  var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
  var modularStyles = document.createElement('style');
  modularStyles.type = 'text/css';
  var css = '.feedback-card-doc { display: none}';
  if (modularStyles.styleSheet) {
    modularStyles.styleSheet.cssText = css;
  } else {
    modularStyles.appendChild(document.createTextNode(css));
  }
  ymFrameHead.appendChild(modularStyles);
}
