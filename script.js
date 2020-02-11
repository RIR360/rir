function printf(n){console.log(n)}function qs(n){return document.querySelector(n)}function qsa(n){return document.querySelectorAll(n)}

function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
    return '';
}
// set active header links
const headLinks = qsa("#header .links li a");

headLinks.forEach(e=>{
    if (e.innerText == getMeta("page-name")) {
        e.setAttribute("class", "active-nav");
        e.parentElement.setAttribute("href", "#");
    }
});
