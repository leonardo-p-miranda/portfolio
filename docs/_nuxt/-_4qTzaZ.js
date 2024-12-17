import{e as c,r as N,o as n,c as r,a as e,t as a,_ as U,F as p,g as m,d as v,h as w,f as V,b as _,u as i,i as H}from"./DjDdeObw.js";import{d as P}from"./S-ShRrtv.js";import{u as A}from"./CRx7iQOq.js";const F={class:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center mb-12 rounded-md shadow-lg"},G={class:"max-w-2xl mx-auto"},q={class:"text-4xl font-bold"},J={class:"text-2xl mt-2"},R={class:"mt-4 text-lg"},T={class:"mt-2"},z={class:"mt-4 flex justify-center gap-4"},K=["href"],M=["href"],O=["href"],Q=c({__name:"HeroSection",props:{name:{},title:{},summary:{},location:{},linkedin:{},email:{},github:{}},setup(d){return N(""),(t,o)=>(n(),r("div",F,[e("div",G,[e("h1",q,[e("span",null," I'm "+a(t.name)+",",1)]),e("h2",J,a(t.title),1),e("p",R,a(t.summary),1),e("p",T,a(t.location),1),e("div",z,[e("a",{href:t.linkedin,target:"_blank",class:"underline hover:text-gray-200"},"LinkedIn",8,K),e("a",{href:t.github,target:"_blank",class:"underline hover:text-gray-200"},"Github",8,M),e("a",{href:`mailto:${t.email}`,class:"underline hover:text-gray-200"},"Email",8,O)])])]))}}),W=U(Q,[["__scopeId","data-v-e6e46805"]]),X={class:"my-12"},Y={class:"space-y-8"},Z={class:"text-xl font-bold"},ee=["href"],te={class:"text-sm text-gray-600"},se={class:"mt-2 text-sm text-gray-800"},oe={class:"list-disc list-inside mt-4 space-y-1 text-gray-700"},ne=c({__name:"ExperienceSection",props:{experience:{}},setup(d){return(t,o)=>(n(),r("section",X,[o[1]||(o[1]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Experience ",-1)),e("div",Y,[(n(!0),r(p,null,m(t.experience,(s,l)=>(n(),r("div",{key:l,class:"border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"},[e("h3",Z,[v(a(s.role)+" @ ",1),e("a",{href:s.link,target:"_blank",class:"underline hover:text-gray-800"},a(s.company),9,ee)]),e("p",te,a(s.location)+" • "+a(s.duration),1),e("p",se,[o[0]||(o[0]=e("strong",null,"Stack:",-1)),v(" "+a(s.stack),1)]),e("ul",oe,[(n(!0),r(p,null,m(s.responsibilities,(u,h)=>(n(),r("li",{key:h},a(u),1))),128))])]))),128))])]))}}),re={class:"my-12"},ae={class:"flex flex-wrap gap-2"},ie=c({__name:"SkillsSection",props:{skills:{}},setup(d){return(t,o)=>(n(),r("section",re,[o[0]||(o[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Skills ",-1)),e("div",ae,[(n(!0),r(p,null,m(t.skills,(s,l)=>(n(),r("span",{key:l,class:"px-3 py-1 bg-gray-100 rounded-full text-gray-700 shadow-sm hover:bg-gray-200 transition"},a(s),1))),128))])]))}}),le={class:"my-12"},ce={class:"space-y-4"},de={class:"font-semibold text-lg"},_e={class:"text-sm text-gray-600"},pe=c({__name:"EducationSection",props:{education:{}},setup(d){return(t,o)=>(n(),r("section",le,[o[0]||(o[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Education ",-1)),e("div",ce,[(n(!0),r(p,null,m(t.education,(s,l)=>(n(),r("div",{key:l,class:"border p-4 rounded-lg"},[e("h3",de,a(s.degree)+" - "+a(s.institution),1),e("p",_e,a(s.period),1)]))),128))])]))}}),me={class:"my-12"},ue={class:"space-y-4"},he={class:"bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium shadow"},ge={class:"bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium shadow"},xe=c({__name:"LanguagesSection",props:{languages:{}},setup(d){return(t,o)=>(n(),r("section",me,[o[0]||(o[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Languages ",-1)),e("div",ue,[(n(!0),r(p,null,m(t.languages,(s,l)=>(n(),r("div",{key:l,class:"flex items-center space-x-2"},[e("div",he,a(s.split(" ")[0]),1),e("span",ge,a(s.split(" ")[1]),1)]))),128))])]))}}),be={class:"border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white"},ye={class:"text-xl font-bold mb-2"},fe={class:"text-sm text-gray-600"},ke={class:"mt-4 text-gray-700 leading-relaxed"},$e={class:"mt-4 space-x-4"},ve=["href"],we=["href"],Se=c({__name:"ProjectCard",props:{project:{}},setup(d){return(t,o)=>(n(),r("div",be,[e("h3",ye,a(t.project.title),1),e("p",fe,a(t.project.stack),1),e("p",ke,a(t.project.description),1),e("div",$e,[t.project.demoUrl?(n(),r("a",{key:0,href:t.project.demoUrl,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"}," Live Demo ",8,ve)):w("",!0),t.project.repoUrl?(n(),r("a",{key:1,href:t.project.repoUrl,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"}," GitHub Repo ",8,we)):w("",!0)])]))}}),Ee={class:"my-12"},je={class:"flex gap-4"},Ce=["href"],Le=["href"],Ie=c({__name:"ContactSection",props:{email:{},linkedin:{}},setup(d){return(t,o)=>(n(),r("section",Ee,[o[0]||(o[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Contact ",-1)),o[1]||(o[1]=e("p",{class:"mb-2"},"Interested in working together or have any questions?",-1)),e("div",je,[e("a",{href:`mailto:${t.email}`,class:"text-blue-600 underline hover:text-blue-800 transition"},"Email",8,Ce),e("a",{href:t.linkedin,target:"_blank",class:"text-blue-600 underline hover:text-blue-800 transition"},"LinkedIn",8,Le)])]))}}),Be={key:0,class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},De={class:"my-12"},Ne={class:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"},Ue={key:1,class:"text-center py-12 text-red-500"},Ae=c({__name:"index",async setup(d){let t,o;const{data:s}=([t,o]=V(()=>A("homeData",()=>P)),t=await t,o(),t);return(l,u)=>{var g,x,b,y,f,k,$;const h=W,S=ne,E=ie,j=pe,C=xe,L=Se,I=Ie;return l.error?(n(),r("div",Ue,"Error loading data")):(n(),r("div",Be,[_(h,{name:(g=i(s))==null?void 0:g.name,title:(x=i(s))==null?void 0:x.title,summary:(b=i(s))==null?void 0:b.summary,location:(y=i(s))==null?void 0:y.location,linkedin:(f=i(s))==null?void 0:f.linkedin,email:(k=i(s))==null?void 0:k.email,github:($=i(s))==null?void 0:$.github},null,8,["name","title","summary","location","linkedin","email","github"]),_(S,{experience:i(s).experience},null,8,["experience"]),_(E,{skills:i(s).skills},null,8,["skills"]),_(j,{education:i(s).education},null,8,["education"]),_(C,{languages:i(s).languages},null,8,["languages"]),e("section",De,[u[0]||(u[0]=e("h2",{class:"text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6"}," Projects ",-1)),e("div",Ne,[(n(!0),r(p,null,m(i(s).projects,(B,D)=>(n(),H(L,{key:D,project:B},null,8,["project"]))),128))])]),_(I,{email:i(s).email,linkedin:i(s).linkedin},null,8,["email","linkedin"])]))}}});export{Ae as default};
