/// test.js
(() => {
'use strict';

if (window.location.protocol == 'http:') { 
          
    window.location.href =  
        window.location.href.replace('http:', 'https:'); 
}  
else
    (window.location.protocol == "https:") { 
        console.log("Accessing website via secure protocol"); 
}
   
})();
