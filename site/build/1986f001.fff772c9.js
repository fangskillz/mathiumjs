(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=(n(0),n(96));const o={id:"diffofsquares",title:"\ud83c\udfe2  Difference of Squares",sidebar_label:"\ud83c\udfe2  Difference of Squares"},i={unversionedId:"diffofsquares",id:"diffofsquares",isDocsHomePage:!1,title:"\ud83c\udfe2  Difference of Squares",description:"diffOfSquares(term1, term2)",source:"@site/docs/diffofsquares.md",permalink:"/docs/diffofsquares",editUrl:"https://github.com/filippo-fonseca/mathiumjs/docs/diffofsquares.md",sidebar_label:"\ud83c\udfe2  Difference of Squares",sidebar:"someSidebar",previous:{title:"\ud83c\udfe0  Perfect Square Formula",permalink:"/docs/perfsquare"},next:{title:"\ud83d\udea7 Sine",permalink:"/docs/sine"}},l=[{value:"<code>diffOfSquares(term1, term2)</code>",id:"diffofsquaresterm1-term2",children:[]},{value:"Concept",id:"concept",children:[]},{value:"Example 1: (2x + 8)^2",id:"example-1-2x--82",children:[]},{value:"Example 2: (7 + 9)^2",id:"example-2-7--92",children:[]},{value:"Example 3: (98x + 54y)^2",id:"example-3-98x--54y2",children:[]}],c={rightToc:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"diffofsquaresterm1-term2"},Object(a.b)("inlineCode",{parentName:"h2"},"diffOfSquares(term1, term2)")),Object(a.b)("p",null,"In order to implement the difference of squares formula in our code with Mathium, we must call the function using Mathium's API, as such:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as Mathium from "mathiumjs";\n\nlet formula = Mathium.diffOfSquares(term1, term2);\n')),Object(a.b)("p",null,"NOTE: The name ",Object(a.b)("inlineCode",{parentName:"p"},"Mathium")," after ",Object(a.b)("inlineCode",{parentName:"p"},"* as")," is arbitrary; it can be replaced with whatever you'd like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as foo from "mathiumjs";\n\nlet formula = foo.diffOfSquares(term1, term2);\n')),Object(a.b)("h2",{id:"concept"},"Concept"),Object(a.b)("p",null,"The process of finding the difference of perfect squares involves writing the polynomial as a product of two or more polynomials."),Object(a.b)("p",null,"Every polynomial that contains identical parentheses with a different operation (i.e. ",Object(a.b)("inlineCode",{parentName:"p"},"(a + b)(a - b)"),", can be simplified using the following formula and logic:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"(a + b)(a - b) = (a - b)^2\n")),Object(a.b)("p",null,"NOTE: In these patterns, ",Object(a.b)("inlineCode",{parentName:"p"},"a")," and/or ",Object(a.b)("inlineCode",{parentName:"p"},"b")," can be replaced by any type of algebraic expression."),Object(a.b)("p",null,"For example, if we want to pass in ",Object(a.b)("inlineCode",{parentName:"p"},"(5x + 7y)(6x - 4y)"),", where ",Object(a.b)("inlineCode",{parentName:"p"},"a = 8x")," and ",Object(a.b)("inlineCode",{parentName:"p"},"b = 7x")," to the formula, we can. Therefore, the complete process would be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"(5x + 7y)(5x - 7y) = (5x - 7y)^2\n")),Object(a.b)("p",null,"In our Mathium code, it's important to note the following:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"In-Equation"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"In-Code"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"a"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"term1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"b"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"term2")))),Object(a.b)("h2",{id:"example-1-2x--82"},"Example 1: (2x + 8)^2"),Object(a.b)("p",null,"Suppose we are given the expression ",Object(a.b)("inlineCode",{parentName:"p"},"(2x + 8)^2"),"."),Object(a.b)("p",null,"When applying the Perfect Square Formula, the result would be the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"(2x + 8)^2 = (2x)^2 + 2(2x)(8) + (8)^2\n")),Object(a.b)("p",null,"When used in our code, we can make it look like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as Mathium from "mathiumjs";\n\nfunction findDiffOfSquares(term1, term2) {\n  let formula = Mathium.diffOfSquares(term1, term2);\n  return formula;\n}\n\n// Test the function\nconsole.log(findDiffOfSquares("2x", 8));\n')),Object(a.b)("h2",{id:"example-2-7--92"},"Example 2: (7 + 9)^2"),Object(a.b)("p",null,"Suppose we are given the expression ",Object(a.b)("inlineCode",{parentName:"p"},"(7 + 9)^2"),"."),Object(a.b)("p",null,"When applying the Perfect Square Formula, the result would be the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"(7 + 9)^2 = (7)^2 + 2(7)(9) + (9)^2\n\n= 49 + 126 + 81\n\n= 256\n")),Object(a.b)("p",null,"When used in our code, we can make it look like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as Mathium from "mathiumjs";\n\nfunction findDiffOfSquares(term1, term2) {\n  let formula = Mathium.diffOfSquares(term1, term2);\n  return formula;\n}\n\n// Test the function\nconsole.log(findDiffOfSquares(7, 9));\n')),Object(a.b)("h2",{id:"example-3-98x--54y2"},"Example 3: (98x + 54y)^2"),Object(a.b)("p",null,"Suppose we are given the expression ",Object(a.b)("inlineCode",{parentName:"p"},"(98x + 54y)^2"),"."),Object(a.b)("p",null,"When applying the Perfect Square Formula, the result would be the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"(98x + 54y)^2 = (98x)^2 + 2(98x)(54y) + (54y)^2\n")),Object(a.b)("p",null,"When used in our code, we can make it look like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as Mathium from "mathiumjs";\n\nfunction findDiffOfSquares(term1, term2) {\n  let formula = Mathium.diffOfSquares(term1, term2);\n  return formula;\n}\n\n// Test the function\nconsole.log(findDiffOfSquares("98x", "54y"));\n')),Object(a.b)("p",null,"REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire."))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,s=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?a.a.createElement(s,l(l({ref:t},u),{},{components:n})):a.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);