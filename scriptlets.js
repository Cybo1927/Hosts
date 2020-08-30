/// script-remover.js
/// alias scr.js
/// example.com##+js(scr.js, examplename, https://google-analytics.com/)
document.addEventListener('DOMContentLoaded', function(){
    link();
});

link();

function link(){

const {{1}} = document.querySelectorAll('script[src*="{{2}}"]');
{{1}}.forEach(item => item.remove());

}
