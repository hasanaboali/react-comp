(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{7527:function(e,i,l){Promise.resolve().then(l.t.bind(l,2666,23)),Promise.resolve().then(l.t.bind(l,414,23)),Promise.resolve().then(l.bind(l,7473)),Promise.resolve().then(l.bind(l,9067)),Promise.resolve().then(l.bind(l,2834))},2580:function(e,i,l){"use strict";l.d(i,{M:function(){return r}});var a=l(226),s=l(9128);let r=()=>{a.p8.registerPlugin(s.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{a.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-scale");i.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");a.p8.fromTo(e,{ease:"sine",scale:i},{scale:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-parallax");l.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");a.p8.fromTo(e,{ease:"sine",y:i},{y:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-skill-prog");r.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");a.p8.fromTo(e,{width:i,ease:"sine"},{width:l,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let t=document.querySelectorAll(".mil-counter");t.forEach(e=>{var i=e,l={val:0},s=e.dataset.number,r=(s+"").split("."),t=r.length>1?r[1].length:0;a.p8.to(l,{val:s,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){i.innerHTML=l.val.toFixed(t)}})}),a.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let n=document.querySelector(".mil-top-panel");void 0!=n&&window.addEventListener("scroll",e=>{window.scrollY>10?n.classList.add("mil-active"):n.classList.remove("mil-active")})}},2953:function(e,i,l){"use strict";l.d(i,{M:function(){return s}});var a=l(9682);l(6888),l(2803),l(103),a.ZP.use([a.Gk,a.tl,a.W_,a.xW,a.pt,a.rj,a.gI,a.oM,a.kr,a.Ay,a.o3,a.LW,a.N1,a.s5,a.VS,a.Rv]);let s={milInfiniteSlider:{slidesPerView:1,spaceBetween:0,speed:4e3,autoplay:!0,autoplay:{delay:0},loop:!0,freeMode:!0,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:4}}},milBannerSlider:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milBannerSlider2:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milProcessSlider:{slidesPerView:1,spaceBetween:30,speed:800,parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milReviewsSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milIllustrationSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-illustration-prev",nextEl:".mil-illustration-next"}}}},2834:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return p}});var a=l(9268),s=l(2953),r=l(9321),t=JSON.parse('{"e":[{"image":"/img/photo/9.jpg","alt":"image","subtitle":"The future","title":"Explore <br>new <span class=\\"mil-accent\\">design</span> in <br>urbanism","link":"/projects/project-1"},{"image":"/img/photo/10.jpg","alt":"image","subtitle":"The future","title":"Design <br>with <span class=\\"mil-accent\\">community</span> <br>in mind","link":"/projects/project-2"},{"image":"/img/photo/11.jpg","alt":"image","subtitle":"The future","title":"Modern<br><span class=\\"mil-accent\\">Architectural</span><br>Design","link":"/projects/project-3"}]}'),n=l(5846),m=l.n(n),c=l(6006),o=l(2580);let d=()=>((0,c.useEffect)(()=>{(0,o.M)()},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"mil-banner",children:[(0,a.jsx)(r.tq,{...s.M.milBannerSlider2,className:"swiper-container mil-banner-slider-2",children:t.e.map((e,i)=>(0,a.jsxs)(r.o5,{className:"swiper-slide",children:[(0,a.jsx)("img",{src:e.image,className:"mil-bg-img",alt:e.alt,"data-swiper-parallax-x":"300","data-swiper-parallax-scale":"1.3"}),(0,a.jsx)("div",{className:"mil-overlay"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,a.jsx)("div",{className:"mil-banner-content","data-swiper-parallax-y":"300","data-swiper-parallax-opacity":"0",children:(0,a.jsxs)("div",{className:"mil-mb-90",children:[(0,a.jsx)("span",{className:"mil-suptitle mil-light mil-upper mil-mb-60",dangerouslySetInnerHTML:{__html:e.subtitle}}),(0,a.jsx)("h1",{className:"mil-upper mil-light mil-mb-60",dangerouslySetInnerHTML:{__html:e.title}}),(0,a.jsxs)(m(),{href:e.link,className:"mil-link mil-light mil-upper",children:["View A Project",(0,a.jsx)("span",{className:"mil-arrow",children:(0,a.jsx)("img",{src:"img/icons/1.svg",alt:"arrow"})})]})]})})]})]},"hero-two-slider-item-".concat(i)))}),(0,a.jsx)("div",{className:"mil-nav-position",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"mil-banner-slider-panel",children:[(0,a.jsx)("div",{className:"mil-banner-pagination mil-mb-30"}),(0,a.jsxs)("div",{className:"mil-nav-buttons mil-light mil-mb-30",children:[(0,a.jsx)("div",{className:"mil-slider-button mil-banner-prev",children:"Prev"}),(0,a.jsx)("div",{className:"mil-slider-button mil-banner-next",children:"Next"})]})]})})})]})}));var p=d},9067:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return o}});var a=l(9268),s=l(2953),r=l(9321),t=JSON.parse('{"TN":"What We Have Done","Oc":"Recent Projects","WL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","ri":{"BH":"/img/faces/1.jpg","u2":"Joe French","fM":"Project Agent"},"Ok":[{"title":"Morphological Thinking","link":"/services/service-1"},{"title":"Creative Architectural","link":"/services/service-2"},{"title":"Planning Designs","link":"/services/service-3"}],"ev":[{"image":"/img/photo/7.jpg","alt":"image"},{"image":"/img/covers/1.jpg","alt":"image"},{"image":"/img/photo/8.jpg","alt":"image"}]}'),n=l(5846),m=l.n(n);let c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"container mil-p-120-30",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,a.jsxs)("div",{className:"row justify-content-between align-items-center flex-sm-row-reverse",children:[(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsxs)("div",{className:"mil-mb-60",children:[(0,a.jsx)("span",{className:"mil-suptitle mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.Oc}}),(0,a.jsx)("h2",{className:"mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.TN}}),(0,a.jsx)("p",{className:"mil-up mil-mb-40",dangerouslySetInnerHTML:{__html:t.WL}}),(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsxs)("div",{className:"mil-avatar-frame mil-up mil-mb-30",children:[(0,a.jsx)("div",{className:"mil-avatar mil-mb-30",children:(0,a.jsx)("img",{src:t.ri.BH,alt:t.ri.u2})}),(0,a.jsx)("h5",{className:"mil-upper mil-mb-10",children:t.ri.u2}),(0,a.jsx)("p",{className:"mil-text-sm mil-dark-soft",children:t.ri.fM})]})}),(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsx)("ul",{className:"mil-icon-list mil-mb-30",children:t.Ok.map((e,i)=>(0,a.jsx)("li",{className:"mil-hover mil-up",children:(0,a.jsxs)(m(),{href:e.link,children:[(0,a.jsx)("img",{src:"/img/icons/11.svg",alt:"icon"}),e.title]})},"recent-projects-links-item-".concat(i)))})})]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"mil-illustration-slider-frame mil-up mil-mb-90",children:[(0,a.jsx)(r.tq,{...s.M.milIllustrationSlider,className:"swiper-container mil-illustration-slider",children:t.ev.map((e,i)=>(0,a.jsx)(r.o5,{className:"swiper-slide",children:(0,a.jsx)("div",{className:"mil-illustration","data-swiper-parallax-x":"50","data-swiper-parallax-scale":"1.3",children:(0,a.jsx)("div",{className:"mil-image-frame",children:(0,a.jsx)("img",{src:e.image,alt:e.alt})})})},"illustration-slider-item-".concat(i)))}),(0,a.jsx)("div",{className:"mil-illustration-slider-nav mil-up",children:(0,a.jsxs)("div",{className:"mil-nav-buttons",children:[(0,a.jsx)("div",{className:"mil-slider-button mil-illustration-prev",children:"Prev"}),(0,a.jsx)("div",{className:"mil-slider-button mil-illustration-next",children:"Next"})]})})]})})]})]})})});var o=c},7473:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return d}});var a=l(9268),s=l(2953),r=l(9321),t=JSON.parse('{"TN":"What they think of us","Oc":"Testimonials","ev":[{"name":"Trevor Virtue","image":"/img/faces/2.jpg","role":"Designer","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."},{"name":"Emma Miller","image":"/img/faces/1.jpg","role":"SMM Manager","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."},{"name":"Paul Trueman","image":"/img/faces/3.jpg","role":"Designer","text":"In my opinion, it was an unforgettable experience working on my ideas. They understood everything I wanted in my project and idea that was great. I would work with ruizarch again for future projects, even to ask them for advice to start projects or ideas."}]}'),n=l(3821),m=l(6006),c=l(2580);let o=e=>{let{showPartners:i=1}=e;return(0,m.useEffect)(()=>{(0,c.M)()},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"mil-soft-bg mil-relative",children:[(0,a.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,a.jsx)("div",{className:"container mil-p-120-120",children:(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"mil-mb-60",children:[(0,a.jsx)("span",{className:"mil-suptitle mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:t.Oc}}),(0,a.jsx)("h2",{className:"mil-upper mil-up",dangerouslySetInnerHTML:{__html:t.TN}})]})}),(0,a.jsxs)("div",{className:"col-lg-7 mil-mt-suptitle-offset",children:[(0,a.jsx)(r.tq,{...s.M.milReviewsSlider,className:"swiper-container mil-reviews-slider",children:t.ev.map((e,i)=>(0,a.jsx)(r.o5,{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"mil-review-frame mil-mb-30","data-swiper-parallax-x":"-200","data-swiper-parallax-opacity":"0",children:[(0,a.jsxs)("div",{className:"mil-reviev-head mil-up",children:[(0,a.jsxs)("div",{className:"mil-left",children:[(0,a.jsx)("div",{className:"mil-quote",children:(0,a.jsx)("img",{src:"/img/icons/12.svg",alt:"icon"})}),(0,a.jsx)("div",{className:"mil-review-avatar",children:(0,a.jsx)("img",{src:e.image,alt:e.name})})]}),(0,a.jsxs)("div",{className:"mil-name",children:[(0,a.jsx)("h6",{className:"mil-upper",children:e.name}),(0,a.jsx)("p",{className:"mil-text-sm mil-dark-soft",children:e.role})]})]}),(0,a.jsx)("div",{className:"mil-up",children:(0,a.jsx)("p",{className:"mil-review-text","data-swiper-parallax":"-60",children:e.text})})]})},"testimonial-slider-item-".concat(i)))}),(0,a.jsxs)("div",{className:"mil-nav-buttons mil-reviews-nav mil-up",children:[(0,a.jsx)("div",{className:"mil-slider-button mil-process-prev",children:"Prev"}),(0,a.jsx)("div",{className:"mil-slider-button mil-process-next",children:"Next"})]})]}),1==i&&(0,a.jsx)("div",{className:"col-12 mil-p-120-0",children:(0,a.jsxs)("div",{className:"mil-partners",children:[(0,a.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,a.jsx)(r.tq,{...s.M.milInfiniteSlider,className:"swiper-container mil-infinite-show mil-up",children:n.e.map((e,i)=>(0,a.jsx)(r.o5,{className:"swiper-slide",children:(0,a.jsx)("a",{href:e.link,target:"_blank",className:"mil-partner-frame",children:(0,a.jsx)("img",{src:e.image,alt:e.alt})})},"partners-slider-item-".concat(i)))})]})})]})})]})})};var d=o},5846:function(e,i,l){e.exports=l(414)},3821:function(e){"use strict";e.exports=JSON.parse('{"e":[{"image":"/img/partners/1.png","alt":"logo"},{"image":"/img/partners/2.png","alt":"logo"},{"image":"/img/partners/3.png","alt":"logo"},{"image":"/img/partners/4.png","alt":"logo"},{"image":"/img/partners/5.png","alt":"logo"},{"image":"/img/partners/6.png","alt":"logo"}]}')}},function(e){e.O(0,[968,710,77,671,667,139,744],function(){return e(e.s=7527)}),_N_E=e.O()}]);