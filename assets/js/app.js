var staticCacheName="pwa-1740461805";self.addEventListener("install",function(e){e.waitUntil(caches.open(staticCacheName).then(function(cache){return cache.addAll(["/"])}))});self.addEventListener("fetch",function(event){vent.respondWith(caches.match(event.request).then(function(response){return response||fetch(event.request)}))});class vanilaSPA{constructor(){this.siteHead="header",this.siteMain="main",this.siteFoot="footer",this.namePage="pg-stat-name",this.nameStat="pg-stat-load";const getMain=document.querySelector(this.siteMain);if(!getMain.getAttribute(this.namePage)){getMain.setAttribute(this.namePage,this.getPart())}this.onStyle={"about\/data\/masuk":["assets\/css\/about.css"],"index":["assets\/css\/ini.css","assets\/css\/itu.css","assets\/css\/sana.css"],"about":["assets\/css\/about.css"]},this.onScript={"about\/data\/masuk":["assets\/js\/node\/3fe2d20952dad2e90da5a3dfbe4ea917.js","assets\/js\/node\/a5a0cf57a47e7af5d221d8b7c2b69d8e.js"],"index":["https:\/\/releases.jquery.com\/git\/jquery-git.min.js","assets\/js\/node\/184c8ac1280e6f12031546f4f696dda1.js","assets\/js\/node\/a502dbd4acb69fa19590520bee9d9867.js","assets\/js\/node\/5fd96aacddb8a243d3a87e77504ffe4d.js"],"about":["assets\/js\/node\/3fe2d20952dad2e90da5a3dfbe4ea917.js","assets\/js\/node\/a5a0cf57a47e7af5d221d8b7c2b69d8e.js"]}}getPart=()=>{var path=window.location.pathname.split("/"),part=path[path.length - 1].trim();return part?part:'index'};route=(event)=>{event=event||window.event;event.preventDefault();window.history.pushState({},"",event.target.href);this.getPage()};getPage=async()=>{const mainElement=document.querySelector(this.siteMain);var grab=true,page=this.getPart();if(!mainElement.getAttribute(this.nameStat))mainElement.setAttribute(this.nameStat,'loaded');if(mainElement.getAttribute(this.nameStat)=='loaded'){if(window.location.hash)grab=false;const urlParams=new URLSearchParams(window.location.search);if(urlParams.size>0)grab=true;if(grab||mainElement.getAttribute(this.namePage)!=page){mainElement.setAttribute(this.nameStat,'process');var html=await fetch(page).then((data)=>data.text()),htmc;htmc=html.split(/<(\/)?title((\s+)?([\w-]+="[^"]*")?)+?>/ig)[5];document.title=htmc;htmc=html.split(/<(\/)?main((\s+)?([\w-]+="[^"]*")?)+?>/ig)[5];mainElement.innerHTML=htmc;mainElement.setAttribute(this.nameStat,'loaded')}if(this.getHash(1)){var getIDElement=document.getElementById(this.getHash(1));!getIDElement||window.scrollTo(0,getIDElement.offsetTop)}mainElement.setAttribute(this.namePage,page);if(typeof this.addScript==='function')this.addScript()}else{console.log("page still loading")}};getHash=(ints)=>{const hashData=window.location.hash.split("#");return ints>1?hashData[ints]:hashData[1]};addScript=()=>{if(this.onStyle[this.getPart()])this.onStyle[this.getPart()].forEach((val)=>this.getStyle(val));if(this.onScript[this.getPart()])this.onScript[this.getPart()].forEach((val)=>this.getScript(val))};getScript=(url)=>{if(document.querySelector(`script[src="${url}"]`)){return Promise.resolve()}return new Promise((resolve,reject)=>{const script=document.createElement("script");script.src=url;script.async=true;script.onload=resolve;script.onerror=reject;document.body.appendChild(script)})};getStyle=(url)=>{if(document.querySelector(`link[href="${url}"]`)){return Promise.resolve()}return new Promise((resolve,reject)=>{const link=document.createElement("link");link.rel="stylesheet";link.href=url;link.onload=resolve;link.onerror=reject;document.head.appendChild(link)})}}F3=new vanilaSPA();window.onpopstate=F3.getPage;if(typeof F3.addScript==='function')F3.addScript();document.addEventListener('click',function(event){const anchor=event.target.closest('a');if(anchor){const href=anchor.getAttribute('href');if(anchor.hasAttribute('href')&&!anchor.hasAttribute('target')&&!href.startsWith('#')&&!href.match(/(http(s)?:)?\/\//))F3.route(event)}});