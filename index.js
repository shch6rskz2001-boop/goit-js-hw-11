import{a as u,S as g,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="42598065-1779ad5a953180c3fe77c2809";u.defaults.baseURL="https://pixabay.com/api/";async function y(r){try{return(await u.get("",{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(a){return console.error(a),[]}}const h=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){r.innerHTML=""}function w(r){r.classList.remove("hidden")}function b(r){r.classList.add("hidden")}function P(r,a){const o=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:s,views:f,comments:p,downloads:d})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <figure class="gallery-figure">
      <img
        class="gallery-image"
        src="${i}"
        alt="${t}"
        loading="lazy"
      />
      <figcaption class="gallery-figcaption">
        <ul class="img-content-wrapper">
          <li>Likes <span>${s}</span></li>
          <li>Views <span>${f}</span></li>
          <li>Comments <span>${p}</span></li>
          <li>Downloads <span>${d}</span></li>
        </ul>
      </figcaption>
    </figure>
  </a>
</li>
`).join("");a.insertAdjacentHTML("beforeend",o),h.refresh()}const q=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");q.addEventListener("submit",async r=>{r.preventDefault();const a=r.target.elements.value.trim();if(!a){n.warning({message:"Please enter a search word!",position:"topRight"});return}L(l),w(c);try{const o=await y(a);if(!o||o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(o,l)}catch(o){n.error({message:"Error loading images. Please try again later.",position:"topRight"}),console.error(o)}finally{b(c),r.target.reset()}});
//# sourceMappingURL=index.js.map
