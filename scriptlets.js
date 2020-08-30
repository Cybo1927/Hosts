/// script-remover.js
/// alias scr.js
/// example.com##+js(scr.js)
(function() {
document.addEventListener('DOMContentLoaded', function(){
    link();
});

link();

function link(){

const ganalytics = document.querySelectorAll('script[src*="google-analytics.com"]');
ganalytics.forEach(item => item.remove());

}
})();
