import{e as n,J as o,o as c,j as h,u as a,a0 as p,L as u,q as l,m,M as d}from"./p9D5Skp-.js";const g="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=u(l(m().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return d(e,t.src)}return t.src});return(s,e)=>(c(),h(p(a(g)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
