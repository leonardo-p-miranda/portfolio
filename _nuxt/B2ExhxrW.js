import{e as _,r as N,g as T,o,c as r,a as e,t as a,_ as U,F as h,h as g,d as S,i as I,f as V,b as m,u as l,j as P}from"./p9D5Skp-.js";import{d as A}from"./C6PpZzg_.js";import{u as F}from"./DaOjgduR.js";const j=window.setInterval,q={class:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center mb-12 rounded-md shadow-lg"},J={class:"max-w-2xl mx-auto"},M={class:"text-4xl font-bold"},O={class:"inline-block"},R={class:"text-2xl mt-2"},z={class:"mt-4 text-lg"},K={class:"mt-2"},Q={class:"mt-4 flex justify-center gap-4"},W=["href"],X=["href"],Y=["href"],E=300,Z=200,ee=2e3,te=_({__name:"HeroSection",props:{name:{},title:{},summary:{},location:{},linkedin:{},email:{},github:{}},setup(p){const n=["Hi,","Olá,","Hola,","Salut,","Halløj,","你好,"],s=N("");let t=0;function c(){const i=n[t];let d=0;const x=j(()=>{s.value=i.slice(0,d++),d>i.length&&(clearInterval(x),setTimeout(u,ee))},E)}function u(){let i=s.value.length;const d=j(()=>{s.value=s.value.slice(0,--i),i===0&&(clearInterval(d),t=(t+1)%n.length,setTimeout(c,E))},Z)}return T(()=>{c()}),(i,d)=>(o(),r("div",q,[e("div",J,[e("h1",M,[e("span",O,a(s.value),1),d[0]||(d[0]=e("span",{class:"blink ml-0 mr-1"},"|",-1)),e("span",null," I'm "+a(i.name)+",",1)]),e("h2",R,a(i.title),1),e("p",z,a(i.summary),1),e("p",K,a(i.location),1),e("div",Q,[e("a",{href:i.linkedin,target:"_blank",class:"underline hover:text-gray-200"},"LinkedIn",8,W),e("a",{href:i.github,target:"_blank",class:"underline hover:text-gray-200"},"Github",8,X),e("a",{href:`mailto:${i.email}`,class:"underline hover:text-gray-200"},"Email",8,Y)])])]))}}),se=U(te,[["__scopeId","data-v-10e5870c"]]),ne={class:"my-12"},oe={class:"space-y-8"},re={class:"text-xl font-bold"},ae=["href"],ie={class:"text-sm text-gray-600"},le={class:"mt-2 text-sm text-gray-800"},ce={class:"list-disc list-inside mt-4 space-y-1 text-gray-700"},de=_({__name:"ExperienceSection",props:{experience:{}},setup(p){return(n,s)=>(o(),r("section",ne,[s[1]||(s[1]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Experience ",-1)),e("div",oe,[(o(!0),r(h,null,g(n.experience,(t,c)=>(o(),r("div",{key:c,class:"border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"},[e("h3",re,[S(a(t.role)+" @ ",1),e("a",{href:t.link,target:"_blank",class:"underline hover:text-gray-800"},a(t.company),9,ae)]),e("p",ie,a(t.location)+" • "+a(t.duration),1),e("p",le,[s[0]||(s[0]=e("strong",null,"Stack:",-1)),S(" "+a(t.stack),1)]),e("ul",ce,[(o(!0),r(h,null,g(t.responsibilities,(u,i)=>(o(),r("li",{key:i},a(u),1))),128))])]))),128))])]))}}),_e={class:"my-12"},pe={class:"flex flex-wrap gap-2"},ue=_({__name:"SkillsSection",props:{skills:{}},setup(p){return(n,s)=>(o(),r("section",_e,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Skills ",-1)),e("div",pe,[(o(!0),r(h,null,g(n.skills,(t,c)=>(o(),r("span",{key:c,class:"px-3 py-1 bg-gray-100 rounded-full text-gray-700 shadow-sm hover:bg-gray-200 transition"},a(t),1))),128))])]))}}),me={class:"my-12"},he={class:"space-y-4"},ge={class:"font-semibold text-lg"},xe={class:"text-sm text-gray-600"},be=_({__name:"EducationSection",props:{education:{}},setup(p){return(n,s)=>(o(),r("section",me,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Education ",-1)),e("div",he,[(o(!0),r(h,null,g(n.education,(t,c)=>(o(),r("div",{key:c,class:"border p-4 rounded-lg"},[e("h3",ge,a(t.degree)+" - "+a(t.institution),1),e("p",xe,a(t.period),1)]))),128))])]))}}),ye={class:"my-12"},fe={class:"space-y-4"},ke={class:"bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium shadow"},ve={class:"bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium shadow"},$e=_({__name:"LanguagesSection",props:{languages:{}},setup(p){return(n,s)=>(o(),r("section",ye,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Languages ",-1)),e("div",fe,[(o(!0),r(h,null,g(n.languages,(t,c)=>(o(),r("div",{key:c,class:"flex items-center space-x-2"},[e("div",ke,a(t.split(" ")[0]),1),e("span",ve,a(t.split(" ")[1]),1)]))),128))])]))}}),we={class:"border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white"},Se={class:"text-xl font-bold mb-2"},Ie={class:"text-sm text-gray-600"},je={class:"mt-4 text-gray-700 leading-relaxed"},Ee={class:"mt-4 space-x-4"},Ce=["href"],Le=["href"],Ge=_({__name:"ProjectCard",props:{project:{}},setup(p){return(n,s)=>(o(),r("div",we,[e("h3",Se,a(n.project.title),1),e("p",Ie,a(n.project.stack),1),e("p",je,a(n.project.description),1),e("div",Ee,[n.project.demoUrl?(o(),r("a",{key:0,href:n.project.demoUrl,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"}," Live Demo ",8,Ce)):I("",!0),n.project.repoUrl?(o(),r("a",{key:1,href:n.project.repoUrl,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"}," GitHub Repo ",8,Le)):I("",!0)])]))}}),He={class:"my-12"},Be={class:"flex gap-4"},De=["href"],Ne=["href"],Te=_({__name:"ContactSection",props:{email:{},linkedin:{}},setup(p){return(n,s)=>(o(),r("section",He,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Contact ",-1)),s[1]||(s[1]=e("p",{class:"mb-2"},"Interested in working together or have any questions?",-1)),e("div",Be,[e("a",{href:`mailto:${n.email}`,class:"text-blue-600 underline hover:text-blue-800 transition"},"Email",8,De),e("a",{href:n.linkedin,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"},"LinkedIn",8,Ne)])]))}}),Ue={key:0,class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},Ve={class:"my-12"},Pe={class:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"},Ae={key:1,class:"text-center py-12 text-red-500"},Me=_({__name:"index",async setup(p){let n,s;const{data:t}=([n,s]=V(()=>F("homeData",()=>A)),n=await n,s(),n);return(c,u)=>{var b,y,f,k,v,$,w;const i=se,d=de,x=ue,C=be,L=$e,G=Ge,H=Te;return c.error?(o(),r("div",Ae,"Error loading data")):(o(),r("div",Ue,[m(i,{name:(b=l(t))==null?void 0:b.name,title:(y=l(t))==null?void 0:y.title,summary:(f=l(t))==null?void 0:f.summary,location:(k=l(t))==null?void 0:k.location,linkedin:(v=l(t))==null?void 0:v.linkedin,email:($=l(t))==null?void 0:$.email,github:(w=l(t))==null?void 0:w.github},null,8,["name","title","summary","location","linkedin","email","github"]),m(d,{experience:l(t).experience},null,8,["experience"]),m(x,{skills:l(t).skills},null,8,["skills"]),m(C,{education:l(t).education},null,8,["education"]),m(L,{languages:l(t).languages},null,8,["languages"]),e("section",Ve,[u[0]||(u[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Projects ",-1)),e("div",Pe,[(o(!0),r(h,null,g(l(t).projects,(B,D)=>(o(),P(G,{key:D,project:B},null,8,["project"]))),128))])]),m(H,{email:l(t).email,linkedin:l(t).linkedin},null,8,["email","linkedin"])]))}}});export{Me as default};
