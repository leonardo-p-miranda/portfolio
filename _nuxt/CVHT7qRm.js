import{e as u,r as N,g as T,o,c as r,a as e,t as a,F as h,h as g,d as S,i as I,f as U,b as m,u as l,j as V}from"./DEbxz6cx.js";import{d as P}from"./S-ShRrtv.js";import{u as A}from"./B7lkEJ8-.js";const j=window.setInterval,F={class:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center mb-12 rounded-md shadow-lg"},q={class:"max-w-2xl mx-auto"},J={class:"text-4xl font-bold"},M={class:"inline-block"},O={class:"text-2xl mt-2"},R={class:"mt-4 text-lg"},z={class:"mt-2"},K={class:"mt-4 flex justify-center gap-4"},Q=["href"],W=["href"],X=["href"],E=300,Y=200,Z=2e3,ee=u({__name:"HeroSection",props:{name:{},title:{},summary:{},location:{},linkedin:{},email:{},github:{}},setup(_){const n=["Hi,","Olá,","Hola,","Salut,","Halløj,","你好,"],s=N("");let t=0;function c(){const i=n[t];let d=0;const x=j(()=>{s.value=i.slice(0,d++),d>i.length&&(clearInterval(x),setTimeout(p,Z))},E)}function p(){let i=s.value.length;const d=j(()=>{s.value=s.value.slice(0,--i),i===0&&(clearInterval(d),t=(t+1)%n.length,setTimeout(c,E))},Y)}return T(()=>{c()}),(i,d)=>(o(),r("div",F,[e("div",q,[e("h1",J,[e("span",M,a(s.value),1),d[0]||(d[0]=e("span",{class:"blink ml-0 mr-1"},"|",-1)),e("span",null," I'm "+a(i.name)+",",1)]),e("h2",O,a(i.title),1),e("p",R,a(i.summary),1),e("p",z,a(i.location),1),e("div",K,[e("a",{href:i.linkedin,target:"_blank",class:"underline hover:text-gray-200"},"LinkedIn",8,Q),e("a",{href:i.github,target:"_blank",class:"underline hover:text-gray-200"},"Github",8,W),e("a",{href:`mailto:${i.email}`,class:"underline hover:text-gray-200"},"Email",8,X)])])]))}}),te={class:"my-12"},se={class:"space-y-8"},ne={class:"text-xl font-bold"},oe=["href"],re={class:"text-sm text-gray-600"},ae={class:"mt-2 text-sm text-gray-800"},ie={class:"list-disc list-inside mt-4 space-y-1 text-gray-700"},le=u({__name:"ExperienceSection",props:{experience:{}},setup(_){return(n,s)=>(o(),r("section",te,[s[1]||(s[1]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Experience ",-1)),e("div",se,[(o(!0),r(h,null,g(n.experience,(t,c)=>(o(),r("div",{key:c,class:"border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"},[e("h3",ne,[S(a(t.role)+" @ ",1),e("a",{href:t.link,target:"_blank",class:"underline hover:text-gray-800"},a(t.company),9,oe)]),e("p",re,a(t.location)+" • "+a(t.duration),1),e("p",ae,[s[0]||(s[0]=e("strong",null,"Stack:",-1)),S(" "+a(t.stack),1)]),e("ul",ie,[(o(!0),r(h,null,g(t.responsibilities,(p,i)=>(o(),r("li",{key:i},a(p),1))),128))])]))),128))])]))}}),ce={class:"my-12"},de={class:"flex flex-wrap gap-2"},ue=u({__name:"SkillsSection",props:{skills:{}},setup(_){return(n,s)=>(o(),r("section",ce,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Skills ",-1)),e("div",de,[(o(!0),r(h,null,g(n.skills,(t,c)=>(o(),r("span",{key:c,class:"px-3 py-1 bg-gray-100 rounded-full text-gray-700 shadow-sm hover:bg-gray-200 transition"},a(t),1))),128))])]))}}),_e={class:"my-12"},pe={class:"space-y-4"},me={class:"font-semibold text-lg"},he={class:"text-sm text-gray-600"},ge=u({__name:"EducationSection",props:{education:{}},setup(_){return(n,s)=>(o(),r("section",_e,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Education ",-1)),e("div",pe,[(o(!0),r(h,null,g(n.education,(t,c)=>(o(),r("div",{key:c,class:"border p-4 rounded-lg"},[e("h3",me,a(t.degree)+" - "+a(t.institution),1),e("p",he,a(t.period),1)]))),128))])]))}}),xe={class:"my-12"},be={class:"space-y-4"},ye={class:"bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium shadow"},fe={class:"bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium shadow"},ke=u({__name:"LanguagesSection",props:{languages:{}},setup(_){return(n,s)=>(o(),r("section",xe,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Languages ",-1)),e("div",be,[(o(!0),r(h,null,g(n.languages,(t,c)=>(o(),r("div",{key:c,class:"flex items-center space-x-2"},[e("div",ye,a(t.split(" ")[0]),1),e("span",fe,a(t.split(" ")[1]),1)]))),128))])]))}}),ve={class:"border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white"},$e={class:"text-xl font-bold mb-2"},we={class:"text-sm text-gray-600"},Se={class:"mt-4 text-gray-700 leading-relaxed"},Ie={class:"mt-4 space-x-4"},je=["href"],Ee=["href"],Ce=u({__name:"ProjectCard",props:{project:{}},setup(_){return(n,s)=>(o(),r("div",ve,[e("h3",$e,a(n.project.title),1),e("p",we,a(n.project.stack),1),e("p",Se,a(n.project.description),1),e("div",Ie,[n.project.demoUrl?(o(),r("a",{key:0,href:n.project.demoUrl,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"}," Live Demo ",8,je)):I("",!0),n.project.repoUrl?(o(),r("a",{key:1,href:n.project.repoUrl,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"}," GitHub Repo ",8,Ee)):I("",!0)])]))}}),Le={class:"my-12"},Ge={class:"flex gap-4"},He=["href"],Be=["href"],De=u({__name:"ContactSection",props:{email:{},linkedin:{}},setup(_){return(n,s)=>(o(),r("section",Le,[s[0]||(s[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Contact ",-1)),s[1]||(s[1]=e("p",{class:"mb-2"},"Interested in working together or have any questions?",-1)),e("div",Ge,[e("a",{href:`mailto:${n.email}`,class:"text-blue-600 underline hover:text-blue-800 transition"},"Email",8,He),e("a",{href:n.linkedin,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"},"LinkedIn",8,Be)])]))}}),Ne={key:0,class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},Te={class:"my-12"},Ue={class:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"},Ve={key:1,class:"text-center py-12 text-red-500"},qe=u({__name:"index",async setup(_){let n,s;const{data:t}=([n,s]=U(()=>A("homeData",()=>P)),n=await n,s(),n);return(c,p)=>{var b,y,f,k,v,$,w;const i=ee,d=le,x=ue,C=ge,L=ke,G=Ce,H=De;return c.error?(o(),r("div",Ve,"Error loading data")):(o(),r("div",Ne,[m(i,{name:(b=l(t))==null?void 0:b.name,title:(y=l(t))==null?void 0:y.title,summary:(f=l(t))==null?void 0:f.summary,location:(k=l(t))==null?void 0:k.location,linkedin:(v=l(t))==null?void 0:v.linkedin,email:($=l(t))==null?void 0:$.email,github:(w=l(t))==null?void 0:w.github},null,8,["name","title","summary","location","linkedin","email","github"]),m(d,{experience:l(t).experience},null,8,["experience"]),m(x,{skills:l(t).skills},null,8,["skills"]),m(C,{education:l(t).education},null,8,["education"]),m(L,{languages:l(t).languages},null,8,["languages"]),e("section",Te,[p[0]||(p[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Projects ",-1)),e("div",Ue,[(o(!0),r(h,null,g(l(t).projects,(B,D)=>(o(),V(G,{key:D,project:B},null,8,["project"]))),128))])]),m(H,{email:l(t).email,linkedin:l(t).linkedin},null,8,["email","linkedin"])]))}}});export{qe as default};
