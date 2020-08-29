/// test.js
(function() {
document.addEventListener("DOMContentLoaded", function() { 
   var tag = document.createElement("script");
   var text = document.createTextNode("Object.defineProperty(window.navigator, 'userAgent', { get: function(){ return 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'; } });Object.defineProperty(window.navigator, 'vendor', { get: function(){ return 'Mozilla, Inc.'; } });Object.defineProperty(window.navigator, 'platform', { get: function(){ return 'Windows'; } });");
   tag.appendChild(text);
   var element = document.getElementByClass("body--serp");
   element.appendChild(tag);
}
})();
