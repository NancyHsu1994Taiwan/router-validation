import{_ as C,u as I,a as N,f as S,g as B,h as F,r as m,o as h,c as b,F as E,i as P,j as o,d as n,w as x,b as t,k as U,e as D,t as T,l as q,v as M,p as O,m as R}from"./index-651977f7.js";const a=i=>(O("data-v-6cf69f79"),i=i(),R(),i),A={class:"absolute left-28 top-0 h-full w-[70%]"},L=a(()=>t("h1",{class:"text-white text-4xl"},"COOL STATIONARY",-1)),j=a(()=>t("h2",{class:"text-white text-2xl"},"請填寫寄送方式",-1)),Y=a(()=>t("label",{for:"name",class:"text-white block text-sm"},"Name",-1)),$=a(()=>t("label",{for:"email",class:"text-white block text-sm"},"Email",-1)),z=a(()=>t("label",{for:"tel",class:"text-white block text-sm"},"Telephone",-1)),G=a(()=>t("label",{for:"note",class:"text-white block text-sm"},"備註",-1)),H=a(()=>t("label",{for:"shipping",class:"text-white block text-sm"},"寄送方式",-1)),J=a(()=>t("option",{selected:"",value:"",class:"border-2 border-white text-white rounded"}," 請選擇寄送方式 ",-1)),K=a(()=>t("option",{value:"convenienceStore",class:"border-2 border-white text-white"}," 超商取貨 ",-1)),Q=a(()=>t("option",{value:"postal",class:"border-2 border-white text-white"},"中華郵政",-1)),W=a(()=>t("option",{value:"homeDelivery",class:"border-2 border-white text-white"},"黑貓宅配",-1)),X=[J,K,Q,W],Z=["disabled","onClick"],ee={__name:"IndexPage",setup(i){const w=I(),_=N(),f=()=>{w.go(-2)};function g(d){return/^(09)[0-9]{8}$/.test(d)?!0:"需要正確的電話號碼"}let e=S({name:"",email:"",tel:"",note:"",shipping:""});const V=B(()=>e.name&&e.email&&e.tel&&e.shipping);let p=[];function k(){console.log(_.matched),p=_.matched.map(d=>d.name),console.log("filter",p)}return F(()=>{k()}),(d,s)=>{const v=m("router-link"),r=m("VField"),u=m("ErrorMessage"),y=m("VForm");return h(),b("div",A,[(h(!0),b(E,null,P(o(p),(c,l)=>(h(),U(v,{key:l,to:{name:c},class:"text-white font-thin text-sm"},{default:x(()=>[D(T(c)+"/ ",1)]),_:2},1032,["to"]))),128)),L,j,n(y,null,{default:x(({handleReset:c})=>[Y,n(r,{id:"name",name:"name",label:"Name",type:"text",placeholder:"your name",rules:"required|alpha_spaces",class:"p-1 text-white text-sm",modelValue:o(e).name,"onUpdate:modelValue":s[0]||(s[0]=l=>o(e).name=l)},null,8,["modelValue"]),n(u,{name:"name",class:"mb-1 text-red-600 text-xs",as:"div"}),$,n(r,{id:"email",name:"email",label:"email",type:"text",placeholder:"your email",rules:"required|email",class:"p-1 text-sm text-white",modelValue:o(e).email,"onUpdate:modelValue":s[1]||(s[1]=l=>o(e).email=l)},null,8,["modelValue"]),n(u,{name:"email",class:"block mb-1 text-red-600 text-xs"}),z,n(r,{id:"tel",name:"tel",label:"tel",type:"text",placeholder:"your phone number",rules:g,class:"p-1 text-sm text-white",modelValue:o(e).tel,"onUpdate:modelValue":s[2]||(s[2]=l=>o(e).tel=l)},null,8,["modelValue"]),n(u,{name:"tel",class:"block mb-1 text-red-600 text-xs"}),G,n(r,{id:"note",name:"note",label:"note",as:"textarea",rows:"2",cols:"40",rules:"",class:"p-2 border-2 border-white rounded text-white text-sm",modelValue:o(e).note,"onUpdate:modelValue":s[3]||(s[3]=l=>o(e).note=l)},null,8,["modelValue"]),H,n(r,{id:"shipping",name:"shipping",label:"shipping",type:"radio",rules:"required",class:"p-2 text-white mb-1"},{default:x(()=>[q(t("select",{name:"shipping",id:"",class:"border-2 border-white bg-slate-900 text-white text-sm mb-2",placeholder:"請選擇寄送方式","onUpdate:modelValue":s[4]||(s[4]=l=>o(e).shipping=l)},X,512),[[M,o(e).shipping]])]),_:1}),t("button",{type:"Submit",id:"submitBtn",class:"block text-white border-2 border-white rounded p-1 w-[100px] text-sm",disabled:!o(V),onClick:c}," 送出 ",8,Z)]),_:1}),t("button",{onClick:f,class:"text-white border-white border-2 p-2 rounded"}," 回上上頁 ")])}}},oe=C(ee,[["__scopeId","data-v-6cf69f79"]]);export{oe as default};
