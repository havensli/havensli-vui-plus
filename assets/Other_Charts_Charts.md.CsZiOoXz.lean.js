import{d,aa as g,D as t,o as k,c as l,j as i,I as a,k as y,w as c,a4 as p}from"./chunks/framework.BZ_rpBqd.js";const A={w50rem:"",h25rem:"",flex:"~ col","justify-center":"","items-center":"","bg-dark":""},o=d({__name:"demo",setup(e){const n=()=>{s.series[0].data[0].value=Math.floor(Math.random()*100)},s=g({title:{text:"剩余油量表",style:{fill:"#fff"}},series:[{type:"gauge",data:[{name:"itemA",value:55}],center:["50%","55%"],axisLabel:{formatter:"{value}%",style:{fill:"#fff"}},axisTick:{style:{stroke:"#fff"}},animationCurve:"easeInOutBack"}]});return(h,_)=>{const r=t("dv-charts");return k(),l("div",A,[i("div",null,[a(r,{option:y(s),style:{width:"25rem",height:"15rem"}},null,8,["option"])]),i("div",{pt5:""},[i("button",{btn:"",onClick:n},"修改数据")])])}}}),B=p("",7),D=p("",1),m=JSON.parse('{"title":"图表","description":"","frontmatter":{},"headers":[],"relativePath":"Other/Charts/Charts.md","filePath":"Other/Charts/Charts.md"}'),C={name:"Other/Charts/Charts.md"},f=Object.assign(C,{setup(e){return(n,s)=>{const h=t("ClientOnly");return k(),l("div",null,[B,a(h,null,{default:c(()=>[a(o)]),_:1}),D])}}});export{m as __pageData,f as default};
