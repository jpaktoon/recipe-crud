(this["webpackJsonp@qualified/react-challenge"]=this["webpackJsonp@qualified/react-challenge"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(12);var o=function(e){let{recipes:t,setRecipes:a}=e;const[r,c]=Object(n.useState)(""),[o,i]=Object(n.useState)(""),[s,u]=Object(n.useState)(""),[m,p]=Object(n.useState)(""),[d,h]=Object(n.useState)("");return l.a.createElement("form",{name:"create"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"name"},l.a.createElement("input",{id:"name",type:"text",name:"name",onChange:e=>c(e.target.value),value:r}))),l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"cuisine"},l.a.createElement("input",{id:"cuisine",type:"text",name:"cuisine",onChange:e=>i(e.target.value),value:o}))),l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"photo"},l.a.createElement("input",{id:"photo",type:"text",name:"photo",onChange:e=>u(e.target.value),value:s}))),l.a.createElement("td",null,l.a.createElement("textarea",{id:"ingredients",type:"text",name:"ingredients",onChange:e=>p(e.target.value),value:m})),l.a.createElement("td",null,l.a.createElement("textarea",{id:"preparation",type:"text",name:"preparation",onChange:e=>h(e.target.value),value:d})),l.a.createElement("td",null,l.a.createElement("button",{onClick:e=>{e.preventDefault();a([...t,{name:r,cuisine:o,photo:s,ingredients:m,preparation:d}]),c(""),i(""),u(""),p(""),h("")},type:"submit"},"Create"))))))};var i=function(e){let{recipes:t,setRecipes:a}=e;const n=t.map((e,n)=>{let{name:r,cuisine:c,photo:o,ingredients:i,preparation:s}=e;return l.a.createElement("tr",{key:n},l.a.createElement("td",null,r),l.a.createElement("td",null,c),l.a.createElement("td",null,l.a.createElement("img",{src:o,alt:"".concat(r)})),l.a.createElement("td",{className:"content_td"},l.a.createElement("p",null,i)),l.a.createElement("td",{className:"content_td"},l.a.createElement("p",null,s)),l.a.createElement("td",null,l.a.createElement("button",{name:"delete",onClick:()=>(e=>{const n=t.filter(t=>t.name!==e);a(n)})(r)},"Delete")))});return l.a.createElement("div",{className:"recipe-list"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Cuisine"),l.a.createElement("th",null,"Photo"),l.a.createElement("th",null,"Ingredients"),l.a.createElement("th",null,"Preparation"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,n)))};var s=[{name:"Tuna Poke with Mango",cuisine:"Hawaiian",photo:"https://www.foodista.com/sites/default/files/styles/recype/public/tunapokebowlwithmango22.jpg",ingredients:"1 package of sushi grade tuna. 1 cup cooked quinoa \xbd avocado, sliced. \xbd mango, cubed. 1 shredded carrot. 1 small sliced cucumber. poke sauce.",preparation:"1. Chop tuna into cubes. 2. Toss with 1 tbsp sesame oil and 1 tbsp tamari. Set aside. 3. Layer your poke bowl starting with quinoa. 4. Whisk all poke sauce ingredients in a bowl and pour over the poke bowl. 5. Garnish with sesame seeds and furikake. 6. Top with chopped scallions."},{name:"Guacamole",cuisine:"Mexican",photo:"https://www.foodista.com/sites/default/files/styles/recype/public/017.jpg",ingredients:"3 ripe avocados. \xbe cup finely chopped Roma tomato. 2 serrano chiles very finely chopped (seeded and deveined). 3 heaping tablespoons of finely chopped onion. 3 tablespoons of minced cilantro. Salt to taste",preparation:"1. Remove the flesh of the avocados. 2. Mash the avocados with the back of a fork. 3. Add the other ingredients and incorporate evenly. 4. Add salt to taste."}];var u=function(){const[e,t]=Object(n.useState)(s);return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Delicious Food Recipes")),l.a.createElement(i,{recipes:e,setRecipes:t}),l.a.createElement(o,{recipes:e,setRecipes:t}))};c.a.createRoot(document.querySelector("#root")).render(l.a.createElement(u,null))},3:function(e,t,a){e.exports=a(13)}},[[3,1,2]]]);
//# sourceMappingURL=main.9d644183.chunk.js.map