/// removeScript.js
/// alias rs.js

document.addEventListener('DOMContentLoaded', function(){
    link();
});

link();

function link(){
  
const script = document.querySelectorAll('{{1}}');
script.forEach(item => item.remove());
  
}
