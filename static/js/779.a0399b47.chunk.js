"use strict";(self.webpackChunkhattybartybooks=self.webpackChunkhattybartybooks||[]).push([[779],{5931:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var s=t(8152),a=t(2791),o=t(184),r=t(5842),D=t(9928),i=t(3235),c=t(6409);function u(e){var n=e.identifier,t=[r,D,i,c],u=(0,a.useState)(0),m=(0,s.Z)(u,2),h=m[0],l=m[1],d=(0,a.useState)(0),B=(0,s.Z)(d,2),p=B[0],w=B[1];return(0,a.useEffect)((function(){var e=setInterval((function(){w((function(e){return e+1}))}),4e3);return function(){return clearInterval(e)}}),[]),(0,a.useEffect)((function(){p>0&&l(h==t.length-1?0:function(e){return e+1})}),[p]),(0,o.jsx)("div",{className:"row justify-content-center myCarousel mt-3 mb-5",children:(0,o.jsx)("div",{className:"col-8 bg-light",children:(0,o.jsx)("div",{className:"row justify-content-center",children:(0,o.jsx)("div",{className:"col-7 d-flex justify-content-center",children:(0,o.jsx)("img",{src:t[h],loading:"lazy",id:n,className:"img img-fluid fade-in",alt:"book picture"})})})})})}},7779:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var s=t(2791),a=(t(5931),t(9388)),o=t(184);function r(e){var n=e.book,t=n.name.slice(0,1).toUpperCase()+n.name.slice(1,5)+" "+["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"].indexOf(n.name.slice(5).toLowerCase());return(0,o.jsxs)("div",{className:"d-flex",children:[(0,o.jsx)("div",{className:"me-2 align-self-start",children:(0,o.jsx)("p",{children:(0,o.jsx)("strong",{children:t})})}),(0,o.jsx)("div",{className:"breakable-links",children:n.urls.map((function(e,n){return Object.entries(e)[0][1].length>0?(0,o.jsx)("a",{href:Object.entries(e)[0][1],className:"mx-1",children:Object.entries(e)[0][0]},n):(0,o.jsx)("a",{href:"",className:"mx-1 nav-item pe-none",children:"\xc7S!"},n)}))})]})}var D=t(9849),i=s.lazy((function(){return Promise.resolve().then(t.bind(t,5931))}));function c(e){e.capsule;return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"row mx-2 justify-content-center main",children:(0,o.jsx)("p",{className:"col fit mb-3 subheading",children:"Books"})}),(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(a.Z,{}),children:(0,o.jsx)(i,{identifier:"disp1"})}),(0,o.jsx)("div",{className:"row justify-content-center mb-2 main text",children:(0,o.jsx)("p",{className:"col",children:"The Hatty Barty series has been translated to various languages. You can find copies of the books for sale on Amazon, using the links below:"})}),(0,o.jsx)("div",{className:"row justify-content-center mx-4 mb-5 main text",children:(0,o.jsx)("div",{className:"col",children:D.books.map((function(e,n){return(0,o.jsx)("div",{children:(0,o.jsx)(r,{book:e})},n)}))})}),(0,o.jsx)("div",{className:"row justify-content-center mb-2 main text",children:(0,o.jsxs)("div",{className:"col-11",children:[(0,o.jsx)("a",{className:"nav-link",href:"https://www.amazon.com/s?k=Hatty+Barty&i=stripbooks&rh=p_27%3AGrant+Boyer&s=relevanceexprank&Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=6&unfiltered=1&ref=sr_adv_b",children:(0,o.jsx)("u",{children:"Hatty and Barty Books"})}),(0,o.jsx)("a",{className:"nav-link",href:"https://www.amazon.com/Grant-Boyer/e/B09QF7T215/",children:(0,o.jsx)("u",{children:"All books by Grant Boyer"})})]})})]})}},6409:function(e,n,t){e.exports=t.p+"static/media/monthFour.1b9c83b0a583b514a834.jpg"},5842:function(e,n,t){e.exports=t.p+"static/media/monthOne.5c1c04625c6f03d42b2f.jpg"},3235:function(e,n,t){e.exports=t.p+"static/media/monthThree.7e1eb1278b403ebb5ea5.jpg"},9928:function(e,n,t){e.exports=t.p+"static/media/monthTwo.5170f013cce4b08267a2.jpg"},9849:function(e){e.exports=JSON.parse('{"books":[{"name":"monthOne","urls":[{"eng":"https://www.amazon.com/Hatty-Bartys-Adventures-Month-Barty/dp/1736840207"},{"deu":"https://www.amazon.com/HETTY-BARTYS-ABENTEUER-Abenteuer-German/dp/173684024X"},{"esp":"https://www.amazon.com/LAS-AVENTURAS-HATTY-BARTY-Spanish/dp/1736840282"},{"rus":"https://www.amazon.com/%D0%9F%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%A5%D1%8D%D1%82%D1%82%D0%B8-%D0%91%D0%B5%D1%80%D1%82%D0%B8-%D0%9C%D0%B5%D1%81%D1%8F%D1%86-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-ebook/dp/B09QVFPXQX"},{"ukr":"https://www.amazon.com/%D0%9F%D1%80%D0%B8%D0%B3%D0%BE%D0%B4%D0%B8-%D0%A5%D0%B5%D1%82%D1%82%D1%96-%D1%82%D0%B0-%D0%91%D0%B5%D1%80%D1%82%D1%96-Ukrainian-ebook/dp/B09R1B8F2B"},{"zho":"https://www.amazon.com/%E5%93%88%E8%92%82%E5%92%8C%E5%B7%B4%E8%92%82%E6%AD%B7%E9%9A%AA%E8%A8%98%E7%AC%AC%E4%B8%80%E5%80%8B%E6%9C%88-Traditional-Chinese-Grant-Boyer-ebook/dp/B09R85NSP4"}]},{"name":"monthTwo","urls":[{"eng":"https://www.amazon.com/Hatty-Barty-Adventures-Month-Two/dp/B09TMVTY8D"},{"deu":"https://www.amazon.com/Hatty-Barty-Adventures-Monat-German/dp/1736840215"},{"esp":"https://www.amazon.com/Hatty-Barty-Aventuras-Mes-Spanish/dp/B09XZL6B7B"},{"rus":"https://www.amazon.com/%D0%9F%D0%A0%D0%98%D0%9A%D0%9B%D0%AE%D0%A7%D0%95%D0%9D%D0%98%D0%AF-%D0%A5%D0%95%D0%A2%D0%A2%D0%98-%D0%91%D0%90%D0%A0%D0%A2%D0%98-%D0%92%D0%A2%D0%9E%D0%A0%D0%9E%D0%99-%D0%9C%D0%95%D0%A1%D0%AF%D0%A6-ebook/dp/B0B2N9CBC4"},{"ukr":"https://www.amazon.com/Hatty-Barty-Adventures-Month-Two/dp/B0B2J4VKTG"},{"zho":"https://www.amazon.com/%E5%93%88%E8%92%82%E5%92%8C%E5%B7%B4%E8%92%82%E6%AD%B7%E9%9A%AA%E8%A8%98-Traditional-Chinese-Grant-Boyer-ebook/dp/B0B25SZYRD"}]},{"name":"monthThree","urls":[{"eng":"https://www.amazon.com/Hatty-Barty-Adventures-Month-Three/dp/1087954401"},{"deu":"https://www.amazon.com/Hatty-Barty-Abenteuer-Monat-German/dp/B0B1S58D78"},{"esp":"https://www.amazon.com/Hatty-Barty-Adventuras-AVENTURAS-Spanish/dp/B09YQJBLW6"},{"rus":"https://www.amazon.com/%D0%9F%D0%A0%D0%98%D0%9A%D0%9B%D0%AE%D0%A7%D0%95%D0%9D%D0%98%D0%AF-%D0%A5%D0%95%D0%A2%D0%A2%D0%98-%D0%91%D0%90%D0%A0%D0%A2%D0%98-%D0%A2%D0%A0%D0%95%D0%A2%D0%98%D0%99-%D0%9C%D0%95%D0%A1%D0%AF%D0%A6-ebook/dp/B0B2Q694DX"},{"ukr":"https://www.amazon.com/%D0%9F%D1%80%D0%B8%D0%B3%D0%BE%D0%B4%D0%B8-%D0%A5%D0%B5%D1%82%D1%82%D1%96-%D0%91%D0%B0%D1%80%D1%82%D1%96-%D0%9C%D1%96%D1%81%D1%8F%D1%86%D1%8C-%D1%82%D1%80%D0%B5%D1%82%D1%96%D0%B9-ebook/dp/B0B2LBWLD2"},{"zho":"https://www.amazon.com/%E5%93%88%E8%92%82%E5%92%8C%E5%B7%B4%E8%92%82%E6%AD%B7%E9%9A%AA%E8%A8%98-Traditional-Chinese-Grant-Boyer-ebook/dp/B0B2CZ3C9R"}]},{"name":"monthFour","urls":[{"eng":"https://www.amazon.com/gp/product/B0BCQZ1RB5"},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthFive","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthSix","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthSeven","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthEight","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthNine","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthTen","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthEleven","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]},{"name":"monthTwelve","urls":[{"eng":""},{"deu":""},{"esp":""},{"rus":""},{"ukr":""},{"zho":""}]}]}')}}]);
//# sourceMappingURL=779.a0399b47.chunk.js.map