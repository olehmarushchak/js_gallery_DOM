var e=document.querySelectorAll("img");Array.from(e).slice(1).forEach(function(t){var r=t.getAttribute("src").split("-")[1];t.addEventListener("click",function(t){t.preventDefault(),Array.from(e).slice(0,1)[0].setAttribute("src","images/landscape-".concat(r,".png"))})});
//# sourceMappingURL=index.01c14ca6.js.map
