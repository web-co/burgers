function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}

addScript('js/jquery.liCover.js'); 
addScript('js/owl.carousel.min.js');

addScript('js/main.js'); 
