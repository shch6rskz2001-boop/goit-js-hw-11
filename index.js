import{a as c,S as m,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="42598065-1779ad5a953180c3fe77c2809";c.defaults.baseURL="https://pixabay.com/api/";async function y(s){try{return(await c.get("",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error(t),[]}}const h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s,t){const a=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:o,views:f,comments:d,downloads:g})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <figure class="gallery-figure">
      <img
        class="gallery-image"
        src="${i}"
        alt="${r}"
        loading="lazy"
      />

      <figcaption class="gallery-figcaption">
        <ul class="img-content-wrapper">
          <li>Likes <span>${o}</span></li>
          <li>Views <span>${f}</span></li>
          <li>Comments <span>${d}</span></li>
          <li>Downloads <span>${g}</span></li>
        </ul>
      </figcaption>
    </figure>
  </a>
</li>
`).join("");t.insertAdjacentHTML("beforeend",a),h.refresh()}const w=document.querySelector(".form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");w.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){n.warning({message:"Please enter a search word!"});return}l.innerHTML="",b();try{const a=await y(t);if(!a||a.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(a,l)}catch(a){n.error({message:"Error loading images"}),console.error(a)}finally{q()}});function b(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}
//# sourceMappingURL=index.js.map
