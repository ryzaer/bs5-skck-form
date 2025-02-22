document.addEventListener("DOMContentLoaded", function() {/** custom scripts here */
var staticCacheName = "pwa-1740199432"; 
self.addEventListener("install", function (e) {
    e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
        return cache.addAll(["/"])
    })
    )
}); 
self.addEventListener("fetch", function (event) {
    vent.respondWith(
    caches.match(event.request).then(function (response) {
        return response || fetch(event.request)
    })
    )
});
class vanilaSPA {
    constructor() {
        /** default page container header, main, footer */
        this.siteHead = "header",
        this.siteMain = "main",
        this.siteFoot = "footer",
        this.namePage = "pg-stat-name",
        this.nameStat = "pg-stat-load";
        const getMain = document.querySelector(this.siteMain);
        /** make name page as same as url */
        if(!getMain.getAttribute(this.namePage)){
            getMain.setAttribute(this.namePage,this.getPart());
        } 
    }
    route = (event) => {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);                   
        this.getPage();
    };
    getPart = () => {
        var path = window.location.pathname.split("/"),
            part = path[path.length - 1].trim();
            return part ? part : 'index'
    };
    getPage = async () => { 
        const mainElement = document.querySelector(this.siteMain);
        var grab=true,page = this.getPart();

        /** make page status processing */
        if(!mainElement.getAttribute(this.nameStat)){
            mainElement.setAttribute(this.nameStat,'loaded');
        }

        /** make clear that content is not the same content*/
        if(mainElement.getAttribute(this.nameStat) == 'loaded'){
            /** check thee url with hash and in same page */
            if(window.location.hash)
                grab=false;

            /** check if query url available allow to load the page */
            const urlParams = new URLSearchParams(window.location.search);
            if(urlParams.size > 0)
                grab=true;

            /** check page name is not the same & grab value is true */
            if(grab || mainElement.getAttribute(this.namePage) != page){
                /** send status page processing */
                mainElement.setAttribute(this.nameStat,'process');

                var html = await fetch(page).then((data) => data.text()),
                htmc;
                /** handle error page 4** to 5** 
                 * 
                if(html.match(/<title>(\s+)?(4|5)\d{1,2}\s/)){
                    html = await fetch(page.replace(page,'404')).then((data) => data.text());
                }
                */
                /** parsing html template title */
                htmc = html.split(/<(\/)?title((\s+)?([\w-]+="[^"]*")?)+?>/ig)[5];
                document.title = htmc;

                /** parsing html template content */
                htmc = html.split(/<(\/)?main((\s+)?([\w-]+="[^"]*")?)+?>/ig)[5];
                mainElement.innerHTML = htmc;

                /** send content status page already loaded */
                mainElement.setAttribute(this.nameStat,'loaded');
            }
            
            /** this is handling hashtags */
            if(this.getHash(1)){
                var getIDElement = document.getElementById(this.getHash(1));
                !getIDElement || window.scrollTo(0, getIDElement.offsetTop);
            }
            /** send status named page same as url */
            mainElement.setAttribute(this.namePage,page);
        }else{
            console.log("page still loading");
        }
    };
    getHash = (ints) => {
        const hashData = window.location.hash.split("#");
        return ints > 1 ? hashData[ints] : hashData[1];
    }
}
F3 = new vanilaSPA();
window.onpopstate = F3.getPage;
/*window.onload = F3.getPage;*/
document.addEventListener('click', function(event) {    
    /** Check if the clicked element is an <a> tag */ 
    const anchor = event.target.closest('a');    
    if (anchor){
        /** get the href attribute value to check if it starts with # */ 
        const href = anchor.getAttribute('href');
        if (anchor.hasAttribute('href') && !anchor.hasAttribute('target') && !href.startsWith('#') && !href.match(/(http(s)?:)?\/\//)) 
            F3.route(event)
    }
})});