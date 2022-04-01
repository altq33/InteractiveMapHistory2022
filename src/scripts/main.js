const mainDiv = document.querySelector(".map-container");

function addOnWheel(elem, handler) {
    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", handler);    
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", handler);
      } else {
        // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
        elem.addEventListener("MozMousePixelScroll", handler);
      }
    } else { // IE8-
      mainDiv.attachEvent("onmousewheel", handler);
    }
  }

  var scale = 1;

  addOnWheel(mainDiv, function(e) {

    var delta = e.deltaY || e.detail || e.wheelDelta;

    // отмасштабируем при помощи CSS
    if (delta > 0) scale -= 0.05;
    else scale += 0.05;

    mainDiv.style.transform = mainDiv.style.WebkitTransform = mainDiv.style.MsTransform = 'scale(' + scale + ')';
    // отменим прокрутку
    e.preventDefault();
  });
  