import{S as y,i as o}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(a){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"43196488-b1a28e2a6e2ea3f6c7718f6c5",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${s}?${r}`;return fetch(i).then(e=>e.json())}const u=document.querySelector(".gallery"),p=document.querySelector(".dual-orbit-spinner");let l;function g(a){const s=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img src="${r}" alt="${e}" class="gallery-image">
      </a>
      <div class="info">
        <div class="info-item">
          <span class="label">Likes</span>
          <span class="value">${t}</span>
        </div>
        <div class="info-item">
          <span class="label">Views</span>
          <span class="value">${n}</span>
        </div>
        <div class="info-item">
          <span class="label">Comments</span>
          <span class="value">${f}</span>
        </div>
        <div class="info-item">
          <span class="label">Downloads</span>
          <span class="value">${m}</span>
        </div>
      </div>
    </li>`).join("");u.innerHTML=s,l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",animationSpeed:300,fadeSpeed:300,slideSpeed:300,showCounter:!0,navText:["←","→"],enableKeyboard:!0})}function v(){u.innerHTML=""}function b(){p.classList.remove("visually-hidden")}function d(){p.classList.add("visually-hidden")}const c=document.querySelector(".form");d();c.addEventListener("submit",a=>{a.preventDefault(),v();const s=String(c.elements["search-text"].value.trim());if(!s){o.error({position:"topRight",message:"Please enter a search term!"});return}b(),h(s).then(r=>{r.hits.length===0?o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.hits)}).catch(()=>{o.error({position:"topRight",message:"Oops! Something went wrong. Please try again later."})}).finally(()=>{d(),c.reset()})});
//# sourceMappingURL=index.js.map
