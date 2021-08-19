(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{384:function(t,e,s){t.exports=s.p+"assets/img/github-usermenu.474f38d9.png"},385:function(t,e,s){t.exports=s.p+"assets/img/github-developer-settings-menu.cb37da54.png"},386:function(t,e,s){t.exports=s.p+"assets/img/github-personal-access-token-menu.fc47fc60.png"},387:function(t,e,s){t.exports=s.p+"assets/img/github-personal-access-token-scopes.94bdf8bb.png"},388:function(t,e,s){t.exports=s.p+"assets/img/github-personal-access-token-sample.f7b8b0ec.png"},449:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"github-token-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-token-authentication"}},[t._v("#")]),t._v(" Github Token Authentication")]),t._v(" "),a("p",[t._v("2021년 8월 14일 아침. 아무 생각 없이 터미널을 띄워 놓고 "),a("code",[t._v("git pull")]),t._v(' 명령을 입력했다. 그러자 "두둥! 탁!"')]),t._v(" "),a("blockquote",[a("p",[t._v("remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead."),a("br"),t._v("\nremote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information."),a("br"),t._v("\nfatal: unable to access 'https://github.com/me/me.blog.git/': The requested URL returned error: 403"),a("br"),t._v("\nhyeyumpa@hyeyumpaui-iMac me.blog %")])]),t._v(" "),a("p",[t._v("이와 같은 오류 메시지만을 남기며 명령이 종료 되었다.")]),t._v(" "),a("p",[t._v('이와 같은 일은 사실 이미 예견된 일이었다. 깃헙에서 이미 몇번이나 메일을 통해 경고 했었던 내용이다. 다만 "English"로 된 메일이 왔었을 뿐이다.')]),t._v(" "),a("blockquote",[a("p",[t._v("YOU RECENTLY USED A PASSWORD TO ACCESS THE REPOSITORY AT GEOSEONG/GEOSEONG.GITHUB.IO WITH GIT USING GIT/2.24.3 (APPLE GIT-128).")]),t._v(" "),a("p",[t._v("Basic authentication using a password to Git is deprecated and will soon no longer work. Visit https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information around suggested workarounds and removal dates.")])]),t._v(" "),a("p",[t._v("2021년 8월 13일 부로 깃헙에서 Git 작업을 인증 할 때 더 이상 계정 암호를 허용하지 않으며, "),a("code",[t._v("token-based authentication")]),t._v("이 필요하다."),a("br"),t._v("\n그리고 "),a("code",[t._v("two-factor authentication")]),t._v("을 이미 사용중인 사람이라면 해당 인증 절차 공지사항에 해당이 되지 않는단다")]),t._v(" "),a("h2",{attrs:{id:"발생되는-문제들"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#발생되는-문제들"}},[t._v("#")]),t._v(" 발생되는 문제들")]),t._v(" "),a("p",[t._v("위의 내용을 보면 어쨌든 "),a("a",{attrs:{href:"https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공지된 웹사이트"),a("OutboundLink")],1),t._v("에 들어가서 확인해 보면 뭐가 어찌 된건지 어찌해야 할지 알 수 있을 것이다.\n그렇게 들어가서 보자니 아래의 방법으로 하는 깃헙 계정 연동에 문제가 발생한다.")]),t._v(" "),a("ul",[a("li",[t._v("커맨드 라인")]),t._v(" "),a("li",[t._v("Git을 이용하는 데스크탑 어플리케이션")]),t._v(" "),a("li",[a("strong",[t._v("GitHub 데스크탑 어플리케이션")]),t._v("은 제외")]),t._v(" "),a("li",[t._v("GitHub.com 계정에 패스워드로 바로 접속하는 모든 앱과 서비스들")])]),t._v(" "),a("p",[t._v("보안을 강화 하기 위한 것이라고 하는데 글쎄... 어찌 되었든 우리는 문제가 발생했고 해결해야 한다. 위의 페이지에서 알려 주었던 방법을 따라 문제를 해결해 보자.")]),t._v(" "),a("h2",{attrs:{id:"personal-access-token-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#personal-access-token-생성"}},[t._v("#")]),t._v(" Personal access token 생성")]),t._v(" "),a("p",[t._v("기존의 패스워드 대신 일종의 인증키를 만들어 사용하라고 한다. 갯헙에서 만든 그 인증키를 "),a("strong",[t._v("Personal access token")]),t._v(" 이라 부른다."),a("br"),t._v("\n그리고 해당 인증키는 "),a("strong",[t._v("1년간 사용하지 않으면 자동으로 폐기")]),t._v(" 된다고 한다.")]),t._v(" "),a("ol",[a("li",[t._v("우선 브라우저를 열어 "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("깃헙 웹사이트"),a("OutboundLink")],1),t._v("에 접속해 보자. 로그인을 하면 우측 상단에 작은 아이콘들이 보인다. 그중에 user-icon 을 클릭해 보자."),a("br"),t._v(" "),a("img",{attrs:{src:s(384),alt:"user-menu|50%"}})]),t._v(" "),a("li",[t._v("위 이미지에서 선택된 것 처럼 "),a("strong",[t._v("Settings")]),t._v(" 메뉴를 선택해서 해당 페이지로 들어가 보자."),a("br"),t._v(" "),a("img",{attrs:{src:s(385),alt:"developer-setting"}}),a("br"),t._v("\n그리고 Settings 페이지의 왼쪽에 있는 메뉴 중에서 "),a("strong",[t._v("Developer settings")]),t._v(" 메뉴로 들어가 보자.")]),t._v(" "),a("li",[t._v("드디어 몇 단계를 거친 끝에 "),a("strong",[t._v("Personal access token")]),t._v(" 메뉴가 짜잔!"),a("br"),t._v(" "),a("img",{attrs:{src:s(386),alt:"personal-access-token-menu"}})]),t._v(" "),a("li",[t._v("Personal access tokens 헤드라인 우측에 보이는 Generate new token 버튼을 클릭하고, Github 에서 비밀번호를 한번 더 입력하라고 하는데, 입력 해 준다")]),t._v(" "),a("li",[t._v("토큰명을 입력한다.")]),t._v(" "),a("li",[t._v("여러 항목중 허용하고자 하는 역할만 체크 한 후 "),a("strong",[t._v("Generate token")]),t._v(" 버튼을 누른다."),a("br"),t._v(" "),a("img",{attrs:{src:s(387),alt:"github-personal-access-token-scopes"}})]),t._v(" "),a("li",[t._v("생성된 토큰을 복사하여 사용하고자 하는 곳에서 password 대신 사용한다."),a("br"),t._v(" "),a("img",{attrs:{src:s(388),alt:"github-personal-access-token-sample"}})])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("생성된 토큰은 처음 생성했을 때에만 복사를 허락하고 그 후로는 보여지지 않기 때문에 바로 사용할 것이 아니라면 복사하여 잘 보관해 두어야 한다.")])]),t._v(" "),a("h2",{attrs:{id:"git-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-config"}},[t._v("#")]),t._v(" Git config")]),t._v(" "),a("p",[t._v("이제 위에서 생성한 토큰으로 기존의 패스워드를 대체해야 한다."),a("br"),t._v("\n대체하는 방법은 간단히 기존의 user 정보를 삭제하고 재 생성하는 것이다. 아래의 명령으로 기존 정보를 삭제할 수 있다.")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset credential.helper\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("이후 "),a("code",[t._v("git push")]),t._v(" 와 같은 명령을 사용하게 되면 "),a("code",[t._v("Username")]),t._v(", "),a("code",[t._v("Password")]),t._v(" 정보를 입력하라는 내용이 나오고 이때 기존 password 대신 토큰을 사용하면 된다.")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\nUsername "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" MyUsername\nPassword "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://MyUsername@github.com'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" PersonalAccessToken\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"마무리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[t._v("#")]),t._v(" 마무리")]),t._v(" "),a("p",[t._v("깃헙에서는 2단계 인증을 통해 보안을 강화하라고 한다. 그것은 개인정보의 안전을 위함이며 그것이 조금 귀찮더라도 우리의 계정을 지키는데 도움이 될 것이라고 한다.")]),t._v(" "),a("p",[t._v("이제 "),a("code",[t._v("two-factor authentication")]),t._v("을 사용하거나 "),a("code",[t._v("Personal-access-token")]),t._v("을 사용하거나... 선택은 당신의 몫!")])])}),[],!1,null,null,null);e.default=n.exports}}]);