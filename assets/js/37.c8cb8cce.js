(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{463:function(e,s,n){"use strict";n.r(s);var t=n(2),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"vuejs-컴포넌트-구조화-하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuejs-컴포넌트-구조화-하기"}},[e._v("#")]),e._v(" VueJS 컴포넌트 구조화 하기")]),e._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://vueschool.io/articles/vuejs-tutorials/structuring-vue-components/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Written by Alex Jover Morales"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v('Vue를 배우기 시작하자마자 아키텍처의 기본 구성 단위가 "component"라는 것을 알게 됩니다. 사실, 그것은 Vue에만 국한된 것이 아닙니다. React 또는 Angular와 같은 모든 component-based 기술은 동일한 방식으로 작동합니다.')]),e._v(" "),n("p",[e._v('그런 다음 "component"와 구성 방법에 대해 자세히 알아봅니다. 더 복잡한 "component"를 만들기 위해 고유한 "component"를 만들고 결합하고 다른 통신 패턴을 적용하기 시작합니다. 확실히 잘하고 있고 "component"를 가능한 한 작게 유지하여 응용 프로그램의 여러 위치에서 일부를 재사용할 수 있습니다.')]),e._v(" "),n("p",[e._v('그러나 어느 시점에서 애플리케이션이 커집니다. 많은 "component"가 있고 상황이 복잡해지기 시작합니다. 올바른 "component"를 찾고 그 책임을 알기가 어려우면 유지 관리가 어려워지기 시작합니다.')]),e._v(" "),n("p",[e._v('걱정하지 마세요. 이 기사에서는 애플리케이션 "component"를 구성하는 데 사용할 수 있는 다양한 방법과 팁을 볼 것입니다.')]),e._v(" "),n("h2",{attrs:{id:"첫-단계-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#첫-단계-pages"}},[e._v("#")]),e._v(" 첫 단계: Pages")]),e._v(" "),n("p",[e._v("응용 프로그램을 처음부터 시작할 때 일반적으로 볼 수 있는 기본 구조에는 "),n("code",[e._v("main.js")]),e._v(" 항목 파일 및 "),n("code",[e._v("App.vue")]),e._v(' "component"와 함께 '),n("code",[e._v("components")]),e._v(" 폴더가 있습니다.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("src/\n    main.js\n    App.vue\n    components/\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v('잠시 후 몇 가지 "component"가 생깁니다. 해당 구조의 매우 간단한 예는 다음과 같습니다.')]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components/\n        ArticlePage.vue\n        ArticleTitle.vue\n        ArticleList.vue\n        AppButton.vue\n        AppFooter.vue\n        AppHeader.vue\n        LastArticlesSection.vue\n        AppList.vue\n        UserPage.vue\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue’s style guide multi-word rule"),n("OutboundLink")],1),e._v(' 에 따르면 "component"의 이름을 지정할 때 한 단어를 사용하지 말라고 합니다. 그래서 일부에 "App_"이라는 접두사를 붙입니다.')])]),e._v(" "),n("p",[e._v('"component" 기반 기술에서는 모든 것이 "component"입니다. 그런 사실을 가지고 우리는 그들을 분류하는 방법을 생각해야합니다.')]),e._v(" "),n("p",[e._v("위의 구조를 보면 "),n("strong",[e._v("pages")]),e._v('라는 한 가지 유형의 "component"를 쉽게 식별할 수 있습니다. 따라서 페이지 "component"를 배치할 수 있을 때 '),n("em",[e._v("pages")]),e._v(" 폴더를 만들 수 있습니다.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components/\n        ArticleTitle.vue\n        ArticleList.vue\n        AppButton.vue\n        AppFooter.vue\n        AppHeader.vue\n        LastArticlesSection.vue\n        AppList.vue\npages/\n        ArticlePage.vue\n        UserPage.vue\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[e._v('그것은 쉬운 분할이며 이미 우리에게 약간의 구조를 제공하므로 페이지 "component"를 배치하고 검색할 위치를 알 수 있습니다.')]),e._v(" "),n("p",[e._v('그러나 페이지는 일반적으로 더 많은 "component" 또는 섹션으로 구성됩니다. _ArticlePage_와 관련하여 '),n("em",[e._v("ArticleTitle")]),e._v(", "),n("em",[e._v("ArticleList")]),e._v(" 및 "),n("em",[e._v("LastArticlesSection")]),e._v(' "component"가 표시됩니다.')]),e._v(" "),n("p",[n("em",[e._v("ArticleTitle")]),e._v(' 및 _LastArticlesSection_은 _ArticlePage_에만 존재한다고 가정하지만 _ArticleList_는 기사 목록을 가져오고 렌더링하는 "component"이며 여러 위치에서 사용할 수 있습니다.')]),e._v(" "),n("p",[e._v("이러한 사실을 감안할 때 "),n("em",[e._v("ArticleTitle")]),e._v(" 및 _LastArticlesSection_이 해당 페이지와 함께 공통 폴더에 배치되는 것이 합리적입니다.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components/\n        ArticleList.vue\n        AppButton.vue\n        AppFooter.vue\n        AppHeader.vue\n        AppList.vue\npages/\n        ArticlePage/\n                index.vue\n                ArticleTitle.vue\n                LastArticlesSection.vue\n        UserPage.vue\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("p",[e._v("또한 _ArticlePage.vue_의 이름을 _index.vue_로 변경했습니다. 모듈 확인이 작동하는 방식 덕분에 기사 페이지를 다음과 같이 가져올 때:")]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" ArticlePage "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@/pages/ArticlePage"')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[n("code",[e._v("pages/ArticlePage.vue")]),e._v(" 또는 "),n("code",[e._v("pages/ArticlePage/index.vue")]),e._v('에서 가져옵니다. 이러한 이유로 페이지를 "component"로 만들기 시작하고 나중에 가져오는 방법을 변경하지 않고도 나중에 폴더로 이동할 수 있으므로 리팩토링이 더 쉬워집니다.')]),e._v(" "),n("h2",{attrs:{id:"common-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#common-components"}},[e._v("#")]),e._v(" Common components")]),e._v(" "),n("p",[n("em",[e._v("components")]),e._v(' 폴더에는 여전히 역할과 도메인이 혼합된 "component"가 있습니다.')]),e._v(" "),n("p",[e._v('**UI "component"**에는 앱 전체에서 재사용 가능한 또 다른 분할 지점이 있습니다. 그들은 "logic"을 보유하지 않고 '),n("code",[e._v("props")]),e._v("와 "),n("code",[e._v("events")]),e._v("를 사용하여 통신합니다.")]),e._v(" "),n("p",[e._v("이 예제의 구조에서 "),n("em",[e._v("AppButton")]),e._v(" 및 "),n("em",[e._v("AppList")]),e._v(' "component"가 그 중 하나임을 알 수 있으므로 '),n("em",[e._v("ui")]),e._v(" 폴더 아래에 배치하겠습니다.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components/\n        ui/\n                AppButton.vue\n                AppList.vue\n        ArticleList.vue\n        AppFooter.vue\n        AppHeader.vue\npages/\n        ArticlePage/\n                index.vue\n                ArticleTitle.vue\n                LastArticlesSection.vue\n        UserPage.vue\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br")])]),n("p",[e._v("그러나 "),n("em",[e._v("AppFooter")]),e._v(" 및 "),n("em",[e._v("AppHeader")]),e._v(' "component"는 정확히 UI "component"가 아닙니다. 대신 앱에는 바닥글과 머리글이 하나만 있기 때문에 **레이아웃 "component"**와 비슷합니다. 필요는 없지만 원하는 경우 '),n("em",[e._v("layout")]),e._v(" 폴더로 이동할 수 있습니다.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components/\n        layout/\n                AppFooter.vue\n                AppHeader.vue                \n        ui/\n                AppButton.vue\n                AppList.vue\n        ArticleList.vue\npages/\n        ArticlePage/\n                index.vue\n                ArticleTitle.vue\n                LastArticlesSection.vue\n        UserPage.vue\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("p",[n("em",[e._v("ArticleList")]),e._v(' "component"는 어떻습니까? 다른 페이지에서 재사용할 수 있는 "component"를 가질 수 있으므로 페이지 "component"와 함께 배치해서는 안 됩니다. 그러나 그들은 특정 도메인에 속합니다. 이 경우에는 '),n("em",[e._v("article")]),e._v(" 도메인에 속합니다.")]),e._v(" "),n("p",[e._v("이를 "),n("strong",[e._v("도메인 구성요소")]),e._v("라고 부르겠습니다. 구성하는 좋은 방법은 도메인당 하나의 폴더인 "),n("em",[e._v("components")]),e._v(" 아래의 별도 폴더에 배치하는 것입니다.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components/\n        article/\n                AppList.vue\n        layout/\n                AppFooter.vue\n                AppHeader.vue                \n        ui/\n                AppButton.vue\n                AppList.vue\npages/\n        ArticlePAge/\n                index.vue\n                ArticleTitle.vue\n                LastArticlesSection.vue\n        UserPage.vue\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[e._v("다시 말하지만 경로가 이미 대표이므로 Article 접두사를 제거할 수 있습니다. 사실, 이제 두 개의 "),n("em",[e._v("List")]),e._v(' "component"가 있습니다.')]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" ArticleList "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@/components/article/List"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" AppList "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@/components/ui/AppList"')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v('마지막으로 나머지 "component"는 어떻습니까? 도메인에 속하지 않고 '),n("em",[e._v("ui")]),e._v(' 또는 _layout_이 아닌 "component"가 있을 수 있습니다. 논리가 있지만 렌더링을 자식 "component"에 위임하는 일종의 유틸리티 "component"일 수 있습니다.')]),e._v(" "),n("p",[e._v("예를 들어 자식이 화면에서 교차할 때를 감지하는 "),n("em",[e._v("Observer")]),e._v(' "component"를 상상해 보십시오.')]),e._v(" "),n("p",[e._v("Another example is  "),n("a",{attrs:{href:"https://github.com/egoist/vue-no-ssr",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-no-ssr"),n("OutboundLink")],1),e._v(": SSR(Server-Side Rendering)을 적용하거나 "),n("a",{attrs:{href:"http://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt"),n("OutboundLink")],1),e._v('를 사용하는 경우 클라이언트에서 실행될 때만 자식을 렌더링하는 "component".')]),e._v(" "),n("p",[n("em",[e._v("common")]),e._v(" 폴더 아래에 이러한 종류의 분류되지 않은 "),n("strong",[e._v("common components")]),e._v("를 배치할 수 있습니다.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components/\n        article/\n                AppList.vue\n        common/\n                AppObserver.vue\n                NoSSR.vue\n        layout/\n                AppFooter.vue\n                AppHeader.vue                \n        ui/\n                AppButton.vue\n                AppList.vue\npages/\n        ArticlePage/\n                index.vue\n                ArticleTitle.vue\n                LastArticlesSection.vue\n        UserPage.vue\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br")])]),n("h2",{attrs:{id:"마무리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[e._v("#")]),e._v(" 마무리")]),e._v(" "),n("p",[e._v('우리는 애플리케이션 "component"를 구성하는 다양한 기술을 보았습니다. 도움이 될지 안될지 모르지만 적어도 지금부터 사용할 수 있는 아이디어가 있기를 바랍니다.')])])}),[],!1,null,null,null);s.default=a.exports}}]);