function dynamicheaderimage() {
  var header = document.getElementById('header');
  var plinks = document.getElementsByClassName("plink");
  [].map.call(plinks, function(el) {
    var pimage = el.getAttribute("pimage");
    el.addEventListener("mouseover", function() {
      header.style["background-image"] = "url(" + pimage + ")";
    });
    el.addEventListener("mouseout", function() {
      header.style["background-image"] = "url(images/soundinz-clip-embossed.png)";
    });
  });
};

function init() { dynamicheaderimage(); }
