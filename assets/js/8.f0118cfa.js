(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{381:function(t,e,n){},382:function(t,e,n){},427:function(t,e,n){"use strict";n(381)},428:function(t,e,n){"use strict";n(382)},434:function(t,e,n){"use strict";n.r(e);var o=n(1),s={props:{page:Object},methods:{onItemChanged:function(t,e,n){n&&n.parentNode.classList.remove("active"),e&&e.parentNode.classList.add("active")}}},c=(n(427),n(2)),i={components:{Toc:Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-toc"},[t.page.headers?n("scrollactive",{attrs:{offset:0,duration:0},on:{itemchanged:t.onItemChanged}},[n("ul",t._l(t.page.headers,(function(e){return n("li",{class:"level-"+e.reducedLevel},[n("router-link",{staticClass:"scrollactive-item",attrs:{to:"#"+e.slug}},[t._v(t._s(e.title))])],1)})),0)]):t._e()],1)}),[],!1,null,null,null).exports},props:{page:Object,require:!1},created:function(){this.beforeStickyComponent=o.default.component(this.$themeConfig.components.beforeSticky),this.afterStickyComponent=o.default.component(this.$themeConfig.components.afterSticky)},data:function(){return{beforeStickyComponent:null,afterStickyComponent:null}}},a=(n(428),Object(c.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-sticky"},[e(this.beforeStickyComponent,{tag:"component"}),this._v(" "),this.page?e("Toc",{attrs:{page:this.page}}):this._e(),this._v(" "),e(this.afterStickyComponent,{tag:"component"})],1)}),[],!1,null,null,null));e.default=a.exports}}]);