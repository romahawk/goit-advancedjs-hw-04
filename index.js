import{i as P,S as $,a as g}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();let h;function H({src:e,originalSrc:t,description:a,likes:i,views:r,comments:o,downloads:n}){return`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img
                    class="gallery-image"
                    src="${e}"
                    data-source="${t}"
                    alt="${a}"
                    width=360
                    height=200
                />

            </a>
            <ul class='metadata'>
                <li>
                    <p class='metadata-heading'>Likes</p>
                    <p>${i}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Views</p>
                    <p>${r}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Comments</p>
                    <p>${o}</p>
                </li>
                <li>
                    <p metadata-heading>Downloads</p>
                    <p>${n}</p>
                </li>
            </ul>
        </li>`}function w(e){return e.map(({webformatURL:t,largeImageURL:a,tags:i,likes:r,views:o,comments:n,downloads:S})=>H({src:t,originalSrc:a,description:i,likes:r,views:o,comments:n,downloads:S})).join("")}function I(){h=new $(".gallery a"),h.refresh()}function M(e){e.innerHTML=""}function O(e,t){const a=w(t);e.insertAdjacentHTML("beforeend",a),h.refresh()}function T(e,t){const a=w(t);e.innerHTML=a,I()}function f(e){e.classList.add("hidden")}function m(e){e.classList.remove("hidden")}function y(e,t="red"){P.show({message:e,color:t,position:"topRight"})}const q=15;g.defaults.baseURL="https://pixabay.com/api";g.defaults.params={key:"51053384-5356fc0331195a75022768729",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:q};async function v(e,t=1){return await g.get("/",{params:{q:e,page:t}}).catch(a=>{console.error(a.message),y("Oops! Something went wrong.")})}const u=document.querySelector(".gallery"),E=document.querySelector("form"),L=document.querySelector("input"),p=document.querySelector(".loader"),b=document.querySelector("button"),l=document.querySelector(".add-more");let s,c=1,d=1;l.addEventListener("click",async()=>{f(l),m(p);const e=await v(s,++d);if(e!=null&&e.data){const{hits:t}=e.data;O(u,t),G(),f(p),d<c&&m(l),d===c&&y("We're sorry, but you've reached the end of search results.","blue")}});function G(){const e=document.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}function x(){f(l),c=1,d=1}E.addEventListener("submit",async e=>{if(e.preventDefault(),!u)return;const t=L.value;if(t!==s&&x(),s=t,L.value="",s){M(u),m(p),b.setAttribute("disabled","disabled");const a=await v(s);if(a!=null&&a.data){const{hits:i,totalHits:r}=a.data;c=Math.ceil(r/q),i.length?T(u,i):y("Sorry, there are no images matching your search query. Please try again!")}f(p),b.removeAttribute("disabled"),c>1&&m(l)}});
//# sourceMappingURL=index.js.map
