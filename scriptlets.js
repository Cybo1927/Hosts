/// win10-ua.js
/// alias win.js
// example.com##+js(rmc, example, [selector])
(() => {
'use strict'; 

(function(useragent){
Object.defineProperty(navigator, "userAgent", {enumerable: true, configurable: false, value: useragent});
})('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36');

})();
