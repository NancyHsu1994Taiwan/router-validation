import{_ as C,u as U,a as I,f as N,g as S,h as B,r as u,o as x,c as _,F,i as q,j as t,d as a,w as h,b as s,k as E,e as P,t as T,l as D,v as A,p as M,m as O}from"./index-effbd324.js";const n=r=>(M("data-v-556d975a"),r=r(),O(),r),R={class:"absolute left-28 top-0 h-full w-[70%]"},L=n(()=>s("h1",{class:"text-white text-4xl"},"COOL STATIONARY",-1)),j=n(()=>s("h2",{class:"text-white text-2xl"},"請填寫寄送方式",-1)),z=n(()=>s("label",{for:"name",class:"text-white block text-sm"},"Name",-1)),W=n(()=>s("label",{for:"password",class:"text-white block text-sm"},"password",-1)),Y=n(()=>s("label",{for:"nickname",class:"text-white block text-sm"},"nickname",-1)),Z=n(()=>s("label",{for:"email",class:"text-white block text-sm"},"Email",-1)),$=n(()=>s("label",{for:"tel",class:"text-white block text-sm"},"Telephone",-1)),G=n(()=>s("label",{for:"amount",class:"text-white block text-sm"},"數量",-1)),H=n(()=>s("label",{for:"note",class:"text-white block text-sm"},"備註",-1)),J=n(()=>s("label",{for:"shipping",class:"text-white block text-sm"},"寄送方式",-1)),K=n(()=>s("option",{selected:"",value:"",class:"border-2 border-white text-white rounded"}," 請選擇寄送方式 ",-1)),Q=n(()=>s("option",{value:"convenienceStore",class:"border-2 border-white text-white"}," 超商取貨 ",-1)),X=n(()=>s("option",{value:"postal",class:"border-2 border-white text-white"},"中華郵政",-1)),ee=n(()=>s("option",{value:"homeDelivery",class:"border-2 border-white text-white"},"黑貓宅配",-1)),te=[K,Q,X,ee],oe=n(()=>s("label",{for:"verificationCode",class:"text-white block text-sm"},"驗證碼(請輸入hello)",-1)),le=["disabled","onClick"],se={__name:"IndexPage",setup(r){const w=U(),b=I(),f=()=>{w.go(-2)};function k(m){return/^(09)[0-9]{8}$/.test(m)?!0:"需要正確的電話號碼"}let e=N({name:"",password:"",nickname:"",email:"",tel:"",amount:"",note:"",shipping:"",verificationCode:""});const v=S(()=>e.name&&e.password&&e.nickname&&e.email&&e.tel&&e.amount&&e.shipping&&e.verificationCode);let p=[];function V(){console.log(b.matched),p=b.matched.map(m=>m.name),console.log("filter",p)}return B(()=>{V()}),(m,o)=>{const g=u("router-link"),i=u("VField"),d=u("ErrorMessage"),y=u("VForm");return x(),_("div",R,[(x(!0),_(F,null,q(t(p),(c,l)=>(x(),E(g,{key:l,to:{name:c},class:"text-white font-thin text-sm"},{default:h(()=>[P(T(c)+"/ ",1)]),_:2},1032,["to"]))),128)),L,j,a(y,null,{default:h(({handleReset:c})=>[z,a(i,{id:"name",name:"name",label:"Name",type:"text",placeholder:"your name",rules:"required|alpha_spaces",class:"p-1 text-white text-sm",modelValue:t(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>t(e).name=l)},null,8,["modelValue"]),a(d,{name:"name",class:"mb-1 text-red-600 text-xs",as:"div"}),W,a(i,{id:"password",name:"password",label:"password",type:"text",placeholder:"密碼須包含至少一個大寫字母、一個小寫字母、一個數字",rules:{regex:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/},class:"p-1 text-white text-xs",modelValue:t(e).password,"onUpdate:modelValue":o[1]||(o[1]=l=>t(e).password=l)},null,8,["rules","modelValue"]),a(d,{name:"password",class:"mb-1 text-red-600 text-xs",as:"div"}),Y,a(i,{id:"nickname",name:"nickname",label:"nickname",type:"text",placeholder:"your nickname",class:"p-1 text-white text-sm",modelValue:t(e).nickname,"onUpdate:modelValue":o[2]||(o[2]=l=>t(e).nickname=l)},null,8,["modelValue"]),a(d,{name:"nickname",class:"mb-1 text-red-600 text-xs",as:"div"}),Z,a(i,{id:"email",name:"email",label:"email",type:"text",placeholder:"your email",rules:"required|email",class:"p-1 text-sm text-white",modelValue:t(e).email,"onUpdate:modelValue":o[3]||(o[3]=l=>t(e).email=l)},null,8,["modelValue"]),a(d,{name:"email",class:"block mb-1 text-red-600 text-xs"}),$,a(i,{id:"tel",name:"tel",label:"tel",type:"text",placeholder:"your phone number",rules:k,class:"p-1 text-sm text-white",modelValue:t(e).tel,"onUpdate:modelValue":o[4]||(o[4]=l=>t(e).tel=l)},null,8,["modelValue"]),a(d,{name:"tel",class:"block mb-1 text-red-600 text-xs"}),G,a(i,{id:"amount",name:"amount",label:"amount",type:"text",placeholder:"your amount",rules:"required|max_value:10|min_value:1",class:"p-1 text-sm text-white",modelValue:t(e).amount,"onUpdate:modelValue":o[5]||(o[5]=l=>t(e).amount=l)},null,8,["modelValue"]),a(d,{name:"amount",class:"block mb-1 text-red-600 text-xs"}),H,a(i,{id:"note",name:"note",label:"note",as:"textarea",rows:"2",cols:"40",rules:"",class:"p-2 border-2 border-white rounded text-white text-sm",modelValue:t(e).note,"onUpdate:modelValue":o[6]||(o[6]=l=>t(e).note=l)},null,8,["modelValue"]),J,a(i,{id:"shipping",name:"shipping",label:"shipping",type:"radio",rules:"required",class:"p-2 text-white mb-1"},{default:h(()=>[D(s("select",{name:"shipping",id:"",class:"border-2 border-white bg-slate-900 text-white text-sm mb-2",placeholder:"請選擇寄送方式","onUpdate:modelValue":o[7]||(o[7]=l=>t(e).shipping=l)},te,512),[[A,t(e).shipping]])]),_:1}),oe,a(i,{id:"verificationCode",name:"verificationCode",label:"verificationCode",type:"text",placeholder:"your verificationCode",rules:"required|is:hello|is_not:WTF",class:"p-1 text-sm text-white",modelValue:t(e).verificationCode,"onUpdate:modelValue":o[8]||(o[8]=l=>t(e).verificationCode=l)},null,8,["modelValue"]),a(d,{name:"verificationCode",class:"block mb-1 text-red-600 text-xs"}),s("button",{type:"Submit",id:"submitBtn",class:"block text-white border-2 border-white rounded p-1 w-[100px] text-sm",disabled:!t(v),onClick:c}," 送出 ",8,le)]),_:1}),s("button",{onClick:f,class:"text-white border-white border-2 p-2 rounded"}," 回上上頁 ")])}}},ne=C(se,[["__scopeId","data-v-556d975a"]]);export{ne as default};
