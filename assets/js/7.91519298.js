(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{393:function(t,s,a){t.exports=a.p+"assets/img/webpack-bundling.5cbf2c5d.png"},394:function(t,s,a){t.exports=a.p+"assets/img/lazy-loading.0e97db97.png"},395:function(t,s,a){t.exports=a.p+"assets/img/devtools-coverage.7424d3ff.png"},396:function(t,s,a){t.exports=a.p+"assets/img/devtools-coverage-recode.13640962.png"},397:function(t,s,a){t.exports=a.p+"assets/img/each-color-is-representing-separate-js-bundle.ad9d038f.png"},464:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"vue-js의-지연-로딩-및-코드-분할"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-js의-지연-로딩-및-코드-분할"}},[t._v("#")]),t._v(" Vue.js의 지연 로딩 및 코드 분할")]),t._v(" "),n("blockquote",[n("p",[t._v("Part 1 of 6 in our  "),n("em",[n("a",{attrs:{href:"https://vueschool.io/articles/series/vue-js-performance/",title:"Vue.js Performance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js Performance"),n("OutboundLink")],1)]),t._v("  series."),n("br"),t._v(" "),n("a",{attrs:{href:"https://vueschool.io/articles/vuejs-tutorials/lazy-loading-and-code-splitting-in-vue-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Written by Filip Rakowski"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("모바일 우선 접근 방식이 표준이 되고 불확실한 네트워크 조건이 항상 고려되어야 하는 반면 애플리케이션 로드를 빠르게 유지하는 것이 점점 더 어려워지고 있습니다. 이 시리즈에서는 "),n("a",{attrs:{href:"https://www.vuestorefront.io/?utm_source=vueschool.io&utm_medium=external-blog&utm_campaign=vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Storefront"),n("OutboundLink")],1),t._v("에서 사용하고 있는 Vue 성능 최적화 기술과 Vue.js 애플리케이션에서 사용하여 즉시 로드하고 원활하게 수행할 수 있습니다. 제 목표는 이 시리즈를 Vue 앱 성능에 대한 완전하고 완전한 가이드로 만드는 것입니다.")]),t._v(" "),n("h2",{attrs:{id:"webpack-bundling-작동원리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-bundling-작동원리"}},[t._v("#")]),t._v(" Webpack bundling 작동원리")]),t._v(" "),n("p",[t._v("이 시리즈의 대부분의 팁은 JS 번들을 더 작게 만드는 데 중점을 둡니다. 중요하지만 먼저 Webpack이 모든 파일을 번들로 묶는 방법을 이해해야 합니다.")]),t._v(" "),n("p",[t._v("자산을 번들로 묶는 동안 Webpack은 종속성 그래프(모양을 보려면 "),n("a",{attrs:{href:"https://cloud.githubusercontent.com/assets/1365881/5745055/40da9236-9c26-11e4-9e2b-6611cd743423.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),n("OutboundLink")],1),t._v(" 클릭) 를 생성합니다.")]),t._v(" "),n("p",[t._v("그것은 가져오기를 기반으로 모든 파일을 연결하는 그래프입니다. webpack 구성에서 진입점으로 지정된 "),n("code",[t._v("main.js")]),t._v("라는 파일이 있다고 가정하면 이 파일이 종속성 그래프의 루트가 됩니다. 이제 이 파일에서 가져올 모든 js 모듈은 그래프에서 노드가 되고 이 노드에서 가져온 모든 모듈은 노드가 됩니다.")]),t._v(" "),n("p",[t._v("Webpack은 이 종속성 그래프를 사용하여 출력 번들에 포함해야 하는 파일을 감지합니다. 출력 번들은 종속성 그래프의 모든 모듈을 포함하는 단일(또는 이후 부분에서 보게 될 다중) 자바스크립트 파일입니다.")]),t._v(" "),n("p",[t._v("번들은 본질적으로 전체 애플리케이션의 JavaScript입니다.")]),t._v(" "),n("p",[t._v("아래 이미지로 이 프로세스를 설명할 수 있습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(393),alt:"webpack-bundling"}})]),t._v(" "),n("p",[t._v("이제 번들링이 작동하는 방식을 알았으므로 프로젝트가 커질수록 초기 JavaScript 번들도 커집니다.")]),t._v(" "),n("p",[t._v("번들이 클수록 사용자를 위해 다운로드하고 구문 분석하는 데 더 오래 걸립니다. 사용자가 기다려야 하는 시간이 길수록 사이트를 떠날 가능성이 커집니다. 실제로 "),n("a",{attrs:{href:"https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google에 따르면"),n("OutboundLink")],1),t._v(", 모바일 사용자의 53%가 로드하는 데 3초 이상 걸릴때 페이지를 떠납니다.")]),t._v(" "),n("p",[t._v("요약하자면, "),n("strong",[t._v("더 큰 번들 = 더 적은 수의 사용자")]),t._v(", 잠재적 수익 손실로 직접 해석될 수 있습니다. Bing이 좋은 예입니다. "),n("strong",[t._v("2초의 지연으로 인해 방문자당 수익이 4.3% 감소했습니다")])]),t._v(" "),n("h2",{attrs:{id:"지연-로딩-lazy-loading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#지연-로딩-lazy-loading"}},[t._v("#")]),t._v(" 지연 로딩(Lazy loading)")]),t._v(" "),n("p",[t._v("그렇다면 여전히 새로운 기능을 추가하고 애플리케이션을 개선해야 할 때 번들 크기를 줄이는 방법은 무엇일까요? 답은 간단합니다 — "),n("strong",[t._v("지연 로딩 및 코드 분할.")])]),t._v(" "),n("p",[t._v("이름에서 알 수 있듯이 "),n("strong",[t._v("지연 로딩은 애플리케이션의 일부(덩어리)를 느리게 로딩하는 과정입니다")]),t._v(". 즉, — 우리가 정말로 필요할 때만 로드하는 것입니다. 코드 분할은 앱을 지연 로드된 청크로 분할하는 프로세스일 뿐입니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(394),alt:"lazy-loading"}})]),t._v(" "),n("p",[t._v("대부분의 경우 사용자가 웹사이트를 방문하는 즉시 Javascript 번들의 모든 코드가 필요하지는 않습니다.")]),t._v(" "),n("p",[t._v('예를 들어, 우리 웹 사이트를 처음 방문하는 손님을 위해 "마이 페이지" 영역을 로드하는 데 귀중한 리소스를 소비할 필요가 없습니다. 또는 모든 페이지에 필요하지 않은 모달, 도구 설명 및 기타 부품 및 구성 요소가 있을 수 있습니다.')]),t._v(" "),n("p",[t._v("단지 몇 개의 부분만 필요할 때 모든 페이지 로드에서 전체 번들을 다운로드, 구문 분석 및 실행하는 것은 낭비입니다.")]),t._v(" "),n("p",[t._v("지연 로딩을 통해 번들을 분할하고 필요한 부분만 제공할 수 있으므로 사용자가 사용하지 않을 코드를 다운로드하고 구문 분석하는 데 시간을 낭비하지 않습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(395),alt:"devtools-coverage"}})]),t._v(" "),n("p",[t._v('우리 웹사이트에서 실제로 얼마나 많은 JavaScript 코드가 사용되는지 확인하려면\n"devtools" -> '),n("kbd",[t._v("cmd")]),t._v("+"),n("kbd",[t._v("shift")]),t._v("+"),n("kbd",[t._v("p")]),t._v(" -> "),n("code",[t._v("coverage")]),t._v(' 라고 적고 -> "Start instrumenting coverage and reload page"를 선택합니다.\n이제 다운로드한 코드가 실제로 얼마나 사용되었는지 확인할 수 있습니다.')]),t._v(" "),n("p",[n("img",{attrs:{src:a(396),alt:"devtools-coverage-recode"}})]),t._v(" "),n("p",[n("strong",[t._v("빨간색으로 표시된 모든 것은 현재 경로에서 필요하지 않으며 느리게 로드될 수 있는 것입니다.")]),t._v(" 소스 맵을 사용하는 경우 이 목록에서 파일을 클릭하고 해당 부분이 호출되지 않은 부분을 확인할 수 있습니다. 보시다시피 "),n("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs.org"),n("OutboundLink")],1),t._v("도 개선의 여지가 많습니다 😉.")]),t._v(" "),n("p",[t._v("적절한 구성 요소와 라이브러리를 지연 로드하여 Vue Storefront의 번들 크기를 60%까지 줄일 수 있었습니다! 그것은 아마도 성능 향상을 얻는 가장 쉬운 방법일 것입니다.")]),t._v(" "),n("p",[t._v("좋습니다. 우리는 지연 로딩이 무엇인지 알고 있으며 꽤 유용합니다. 이제 Vue.js 애플리케이션에서 지연 로딩을 어떻게 사용할 수 있는지 알아볼 차례입니다.")]),t._v(" "),n("h2",{attrs:{id:"dynamic-imports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-imports"}},[t._v("#")]),t._v(" Dynamic imports")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack dynamic imports"),n("OutboundLink")],1),t._v("를 사용하여 애플리케이션의 일부를 느리게 로드할 수 있습니다. 그들이 어떻게 작동하고 일반 "),n("code",[t._v("import")]),t._v("와 어떻게 다른지 봅시다.")]),t._v(" "),n("p",[t._v("다음과 같은 표준 방식으로 JavaScript 모듈을 가져오면:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cat.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Cat "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("meow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Meowwwww!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Cat\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Cat "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./cat.js'")]),t._v("\nCat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("meow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("종속성 그래프에 "),n("code",[t._v("main.js")]),t._v("의 노드로 추가되어 번들로 제공됩니다.")]),t._v(" "),n("p",[t._v("그러나 사용자 상호 작용에 대한 응답과 같은 특정 상황에서만 "),n("code",[t._v("Cat")]),t._v(" 모듈이 필요하다면 어떻게 될까요? 이 모듈을 초기 번들과 번들로 묶는 것은 항상 필요하지 않기 때문에 나쁜 생각입니다. 이 코드 덩어리를 다운로드해야 하는 시점을 애플리케이션에 알리는 방법이 필요합니다.")]),t._v(" "),n("p",[t._v("여기서 동적 가져오기가 도움이 될 수 있습니다! 이제 다음 예를 살펴보십시오.")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getCat")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./cat.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// later in the code as a response to some user interaction like click or route change")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" meow "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("meow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("여기서 무슨 일이 일어났는지 간단히 살펴보겠습니다.")]),t._v(" "),n("p",[n("code",[t._v("Cat")]),t._v(" 모듈을 직접 가져오는 대신 "),n("code",[t._v("import()")]),t._v(" 함수를 반환하는 함수를 만들었습니다. "),n("strong",[t._v("이제 webpack은 동적으로 가져온 모듈의 내용을 별도의 파일로 묶습니다")]),t._v(". 동적으로 가져온 모듈을 나타내는 함수는 해결되는 동안 모듈의 내보낸 멤버에 대한 액세스를 제공하는 Promise를 반환합니다.")]),t._v(" "),n("p",[t._v("그런 다음 필요할 때 나중에 이 선택적 청크를 다운로드할 수 있습니다. 예를 들어 특정 사용자 상호 작용(예: 경로 변경 또는 클릭)에 대한 응답으로.")]),t._v(" "),n("p",[t._v("동적 가져오기를 하면 종속성 그래프에 추가될 주어진 노드(이 경우 "),n("code",[t._v("Cat")]),t._v(")를 기본적으로 격리하고 필요하다고 결정할 때 이 부분을 다운로드합니다. ("),n("strong",[t._v("이는 "),n("code",[t._v("Cat.js")]),t._v(" 내부에서 가져온 모듈도 차단한다는 의미입니다")]),t._v(").")]),t._v(" "),n("p",[t._v("이 메커니즘을 더 잘 설명할 또 다른 예를 살펴보겠습니다.")]),t._v(" "),n("p",[t._v('4개의 파일이 있는 아주 작은 "web shop"이 있다고 가정해 보겠습니다.')]),t._v(" "),n("ul",[n("li",[t._v("메인 번들인 "),n("code",[t._v("main.js")])]),t._v(" "),n("li",[t._v("제품 페이지의 스크립트용 "),n("code",[t._v("product.js")])]),t._v(" "),n("li",[t._v("제품 페이지의 제품 갤러리용 "),n("code",[t._v("productGallery.js")])]),t._v(" "),n("li",[t._v("카테고리 페이지의 스크립트용 "),n("code",[t._v("category.js")])])]),t._v(" "),n("p",[t._v("세부 사항을 너무 많이 파고 들지 않고 해당 파일이 응용 프로그램 전체에 어떻게 배포되는지 봅시다.")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// category.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" category "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" category\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// product.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gallery "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./productGallery.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" product "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" product\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getProduct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./product.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getCategory")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./category.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("route "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/product"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// run scripts for product page")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("route "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/category"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCategory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// run scripts for category page")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])]),n("p",[t._v("위의 코드에서 현재 경로에 따라 "),n("code",[t._v("product")]),t._v(" 또는 "),n("code",[t._v("category")]),t._v(" 모듈을 동적으로 가져온 다음 둘 다에서 내보내는 "),n("code",[t._v("init")]),t._v(" 함수를 실행합니다.")]),t._v(" "),n("p",[t._v("동적 가져오기가 어떻게 작동하는지 알면 "),n("code",[t._v("product")]),t._v("와 "),n("code",[t._v("category")]),t._v("가 별도의 번들로 끝날 것이라는 것을 알고 있지만 동적 가져오기가 수행되지 않은 "),n("code",[t._v("productGallery")]),t._v(" 모듈은 어떻게 될까요? 모듈을 동적으로 가져옴으로써 알 수 있듯이 "),n("strong",[t._v("우리는 종속성 그래프의 일부를 잘라냅니다.")]),t._v(" 이 부분에서 가져온 모든 것은 함께 번들로 제공되므로 "),n("code",[t._v("productGallery")]),t._v("는 "),n("code",[t._v("product")]),t._v(" 모듈과 동일한 번들로 끝납니다.")]),t._v(" "),n("p",[t._v("다시 말해서 우리는 종속성 그래프에 대한 일종의 새로운 진입점을 생성하고 있습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(397),alt:"Each color is representing separate JS bundle"}})]),t._v(" "),n("h2",{attrs:{id:"vue-components-지연-로딩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-components-지연-로딩"}},[t._v("#")]),t._v(" Vue components 지연 로딩")]),t._v(" "),n("p",[t._v("이제 지연 로딩이 무엇이고 왜 필요한지 알았습니다. 이제 Vue 애플리케이션에서 이를 어떻게 활용할 수 있는지 알아볼 차례입니다.")]),t._v(" "),n("p",[t._v("좋은 소식은 이것이 매우 쉽고 이전과 동일한 구문으로 CSS와 HTML을 사용하여 전체 단일 파일 구성 요소를 느리게 로드할 수 있다는 것입니다!")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lazyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Component.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("...그것이 당신에게 필요한 전부입니다! 이제 구성 요소가 요청될 때만 다운로드됩니다. Vue 구성 요소의 동적 로딩을 호출하는 가장 일반적인 방법은 다음과 같습니다.")]),t._v(" "),n("ul",[n("li",[t._v("가져오기가 있는 함수가 호출됩니다.")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lazyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Component.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazyComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("ul",[n("li",[t._v("구성 요소가 렌더링을 위해 요청되었습니다")])]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lazy-component")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lazyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Component.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lazyComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Another syntax")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lazyComponent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Component.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("p",[t._v("lazyComponent 함수의 호출은 컴포넌트가 템플릿에서 렌더링하도록 요청될 때만 발생한다는 점에 유의하십시오. 예를 들어 다음 코드:")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lazy-component")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("구성 요소는 DOM에서 필요할 때까지 로드되지 않습니다. 이는 v-if 값이 true로 변경되는 즉시입니다.")]),t._v(" "),n("h2",{attrs:{id:"요약-및-다음-단계"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#요약-및-다음-단계"}},[t._v("#")]),t._v(" 요약 및 다음 단계")]),t._v(" "),n("p",[t._v("지연 로딩은 웹 앱의 성능을 높이고 번들 크기를 줄이는 가장 좋은 방법 중 하나입니다. Vue 구성 요소와 함께 지연 로딩을 사용하는 방법을 배웠습니다.")]),t._v(" "),n("p",[t._v("이 시리즈의 다음 부분에서는 모든 Vue.js 애플리케이션에서 상당한 성능 향상을 얻을 수 있는 가장 유용한(또한 가장 빠른) 방법을 보여 드리겠습니다.")]),t._v(" "),n("p",[t._v("이 프로세스에 대한 권장 모범 사례와 함께 비동기 경로로 Vue 코드를 분할하는 방법을 배웁니다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);