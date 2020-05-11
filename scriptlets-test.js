/// removeScript.js
/// alias rs.js
(() => {
	      'use strict';

document.addEventListener('DOMContentLoaded', function(){
    link();
});

link();

function link(){
  
const script = document.querySelectorAll('script');
script.forEach(item => item.remove());
    
const noscript = document.querySelectorAll('noscript');
noscript.forEach(item => item.remove());
  
}

})();
