import{aa as y,D as l,o as k,c as p,j as s,I as i,k as c,w as o,a as t,a4 as d}from"./chunks/framework.BZ_rpBqd.js";const A={w50rem:"",h24rem:"",p3:"",flex:"~ col","justify-center":"","items-center":"","bg-dark":""},u={__name:"demo",setup(r){const n=y({data:[{name:"周口",value:55},{name:"南阳",value:120},{name:"西峡",value:78},{name:"驻马店",value:66},{name:"新乡",value:80},{name:"信阳",value:45},{name:"漯河",value:29}],unit:"万元"}),e=()=>{n.data.push({name:`新增城市${Math.floor(Math.random()*100)}`,value:Math.floor(Math.random()*100)})};return(h,a)=>{const g=l("dv-scroll-ranking-board");return k(),p("div",A,[s("div",null,[i(g,{config:c(n),style:{width:"500px",height:"300px"}},null,8,["config"])]),s("div",{pt5:""},[s("button",{btn:"",onClick:e}," 增加数据 ")])])}}},x=s("h1",{id:"排名轮播表",tabindex:"-1"},[t("排名轮播表 "),s("a",{class:"header-anchor",href:"#排名轮播表","aria-label":'Permalink to "排名轮播表"'},"​")],-1),_=s("p",null,"排名轮播表",-1),B=s("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),D=d("",3),m={tabindex:"0"},C=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"参数"),s("th",{style:{"text-align":"center"}},"说明"),s("th",{style:{"text-align":"center"}},"类型"),s("th",{style:{"text-align":"center"}},"可选值"),s("th",{style:{"text-align":"center"}},"默认值")])],-1),v=s("tr",null,[s("td",{style:{"text-align":"center"}},"data"),s("td",{style:{"text-align":"center"}},"表数据"),s("td",{style:{"text-align":"center"}},[s("code",null,"Array<Object>")]),s("td",{style:{"text-align":"center"}},"data属性"),s("td",{style:{"text-align":"center"}},[s("code",null,"[]")])],-1),b=s("tr",null,[s("td",{style:{"text-align":"center"}},"rowNum"),s("td",{style:{"text-align":"center"}},"表行数"),s("td",{style:{"text-align":"center"}},[s("code",null,"Number")]),s("td",{style:{"text-align":"center"}},"---"),s("td",{style:{"text-align":"center"}},[s("code",null,"5")])],-1),f=s("tr",null,[s("td",{style:{"text-align":"center"}},"waitTime"),s("td",{style:{"text-align":"center"}},"轮播时间间隔(ms)"),s("td",{style:{"text-align":"center"}},[s("code",null,"Number")]),s("td",{style:{"text-align":"center"}},"---"),s("td",{style:{"text-align":"center"}},[s("code",null,"2000")])],-1),F=s("tr",null,[s("td",{style:{"text-align":"center"}},"carousel"),s("td",{style:{"text-align":"center"}},"轮播方式"),s("td",{style:{"text-align":"center"}},[s("code",null,"String")]),s("td",{style:{"text-align":"center"}},[s("code",null,"'single'/'page'")]),s("td",{style:{"text-align":"center"}},[s("code",null,"'single'")])],-1),S=s("tr",null,[s("td",{style:{"text-align":"center"}},"unit"),s("td",{style:{"text-align":"center"}},"数值单位"),s("td",{style:{"text-align":"center"}},[s("code",null,"String")]),s("td",{style:{"text-align":"center"}},"---"),s("td",{style:{"text-align":"center"}},[s("code",null,"''")])],-1),E=s("tr",null,[s("td",{style:{"text-align":"center"}},"sort"),s("td",{style:{"text-align":"center"}},"自动排序"),s("td",{style:{"text-align":"center"}},[s("code",null,"Boolean")]),s("td",{style:{"text-align":"center"}},"---"),s("td",{style:{"text-align":"center"}},[s("code",null,"true")])],-1),N=s("tr",null,[s("td",{style:{"text-align":"center"}},"valueFormatter"),s("td",{style:{"text-align":"center"}},"数值格式化"),s("td",{style:{"text-align":"center"}},[s("code",null,"Function")]),s("td",{style:{"text-align":"center"}},"---"),s("td",{style:{"text-align":"center"}},[s("code",null,"undefined")])],-1),T={style:{"text-align":"center"}},q=s("td",{style:{"text-align":"center"}},"文字颜色",-1),P=s("td",{style:{"text-align":"center"}},[s("code",null,"String")],-1),R=s("td",{style:{"text-align":"center"}},"---",-1),V=s("td",{style:{"text-align":"center"}},[s("code",null,"#fff")],-1),w={style:{"text-align":"center"}},M=s("td",{style:{"text-align":"center"}},"主要颜色，包括柱颜色和排名颜色",-1),O=s("td",{style:{"text-align":"center"}},[s("code",null,"String")],-1),j=s("td",{style:{"text-align":"center"}},"---",-1),I=s("td",{style:{"text-align":"center"}},[s("code",null,"#1370fb")],-1),$={style:{"text-align":"center"}},z=s("td",{style:{"text-align":"center"}},"字体大小",-1),J=s("td",{style:{"text-align":"center"}},[s("code",null,"Number")],-1),G=s("td",{style:{"text-align":"center"}},"---",-1),H=s("td",{style:{"text-align":"center"}},[s("code",null,"13")],-1),K=d("",5),U=JSON.parse('{"title":"排名轮播表","description":"","frontmatter":{},"headers":[],"relativePath":"Other/ScrollRankingBoard/ScrollRankingBoard.md","filePath":"Other/ScrollRankingBoard/ScrollRankingBoard.md"}'),L={name:"Other/ScrollRankingBoard/ScrollRankingBoard.md"},W=Object.assign(L,{setup(r){return(n,e)=>{const h=l("ClientOnly"),a=l("Badge");return k(),p("div",null,[x,_,B,i(h,null,{default:o(()=>[i(u)]),_:1}),D,s("table",m,[C,s("tbody",null,[v,b,f,F,S,E,N,s("tr",null,[s("td",T,[t("textColor"),i(a,{type:"tip",text:"1.4.2"})]),q,P,R,V]),s("tr",null,[s("td",w,[t("color"),i(a,{type:"tip",text:"1.4.2"})]),M,O,j,I]),s("tr",null,[s("td",$,[t("fontSize"),i(a,{type:"tip",text:"1.4.2"})]),z,J,G,H])])]),K])}}});export{U as __pageData,W as default};
