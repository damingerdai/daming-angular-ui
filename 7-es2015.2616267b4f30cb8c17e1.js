(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{WKd4:function(t,e,a){"use strict";a.r(e),a.d(e,"TableModule",(function(){return J}));var n=a("tyNb"),i=a("+0xr"),c=a("+rOU"),o=a("LRne"),r=a("lJxs"),s=a("JIr8"),l=a("fXoL"),b=a("tk/3"),d=a("rDax"),m=a("Wp6s"),u=a("ofXK"),h=a("Dh3D"),g=a("M9IT"),f=a("bTqV"),p=a("NFeN"),S=a("Xa2L"),y=a("MutI");const w=["paginator"],T=["sortTable"],R=["overlayMenuList"],v=["originFab"];function C(t,e){1&t&&l.Ob(0,"mat-spinner")}function x(t,e){1&t&&(l.Tb(0,"div",20),l.yc(1," GitHub's API rate limit has been reached. It will be reset in one minute. "),l.Sb())}function O(t,e){if(1&t&&(l.Tb(0,"div",17),l.wc(1,C,1,0,"mat-spinner",18),l.wc(2,x,2,0,"div",19),l.Sb()),2&t){const t=l.ec();l.Bb(1),l.jc("ngIf",t.isLoadingResults),l.Bb(1),l.jc("ngIf",t.isRateLimitReached)}}function I(t,e){1&t&&l.Ob(0,"mat-header-row")}function L(t,e){1&t&&l.Ob(0,"mat-row")}function D(t,e){1&t&&(l.Tb(0,"mat-header-cell"),l.yc(1,"\u5bc4\u4ef6\u4eba"),l.Sb())}function M(t,e){if(1&t&&(l.Tb(0,"mat-cell"),l.yc(1),l.Sb()),2&t){const t=e.$implicit;l.Bb(1),l.zc(t.user.login)}}function _(t,e){1&t&&(l.Tb(0,"mat-header-cell"),l.yc(1,"\u6a19\u984c"),l.Sb())}function P(t,e){if(1&t&&(l.Tb(0,"mat-cell"),l.yc(1),l.Sb()),2&t){const t=e.$implicit;l.Bb(1),l.zc(t.title)}}function B(t,e){1&t&&(l.Tb(0,"mat-header-cell",21),l.yc(1,"\u65e5\u671f"),l.Sb())}function j(t,e){if(1&t&&(l.Tb(0,"mat-cell"),l.yc(1),l.Sb()),2&t){const t=e.$implicit;l.Bb(1),l.zc(t.created_at)}}function k(t,e){1&t&&(l.Tb(0,"mat-header-cell"),l.Tb(1,"u"),l.yc(2,"\u7ba1\u7406"),l.Sb(),l.Sb())}function z(t,e){1&t&&(l.Tb(0,"mat-cell"),l.Tb(1,"button",22),l.yc(2,"\u56de\u8986"),l.Sb(),l.Tb(3,"button",23),l.yc(4,"\u522a\u9664"),l.Sb(),l.Sb())}function $(t,e){1&t&&(l.Tb(0,"div",24),l.Tb(1,"mat-nav-list"),l.Tb(2,"a",25),l.yc(3,"\u65b0\u589e\u4fe1\u4ef6"),l.Sb(),l.Tb(4,"a",25),l.yc(5,"\u7ba1\u7406\u806f\u7d61\u4eba"),l.Sb(),l.Sb(),l.Sb())}const N=function(){return["user","title","created_at","management"]},H=function(){return[5,10,15]};let F=(()=>{class t{constructor(t,e,a){this.httpClient=t,this.overlay=e,this.viewContainerRef=a,this.displayedColumns=["province","city","subCity","action"],this.emailsDataSource=new i.k,this.isLoadingResults=!0,this.isRateLimitReached=!1}ngOnInit(){const t=this.overlay.position().connectedTo(this.originFab._elementRef,{originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"});this.overlayRef=this.overlay.create({positionStrategy:t}),this.currentPage={pageIndex:0,pageSize:10,length:null},this.currentSort={active:"",direction:""},this.getIssuees(),this.paginator.page.subscribe(t=>{this.currentPage=t,this.getIssuees()})}changeSort(t){"created_at"===t.active&&(t.active="created"),this.currentSort=t,this.getIssuees()}getIssuees(){let t=`https://api.github.com/search/issues?q=repo:angular/material2&page=${this.currentPage.pageIndex+1}&per_page=${this.currentPage.pageSize}`;this.currentSort.direction&&(t=`${t}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`),this.isLoadingResults=!0,this.httpClient.get(t).pipe(Object(r.a)(t=>(this.isLoadingResults=!1,this.isRateLimitReached=!1,t)),Object(s.a)(()=>(this.isLoadingResults=!1,this.isRateLimitReached=!0,Object(o.a)([])))).subscribe(t=>{this.totalCount=t.total_count,this.emailsDataSource.data=t.items})}displayMenu(){this.overlayRef&&this.overlayRef.hasAttached()?this.overlayRef.detach():this.overlayRef.attach(new c.g(this.overlayMenuList,this.viewContainerRef))}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(b.a),l.Nb(d.c),l.Nb(l.R))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-basic"]],viewQuery:function(t,e){var a;1&t&&(l.Bc(w,!0),l.Bc(T,!0),l.Bc(R,!0),l.Bc(v,!0)),2&t&&(l.lc(a=l.bc())&&(e.paginator=a.first),l.lc(a=l.bc())&&(e.sortTable=a.first),l.lc(a=l.bc())&&(e.overlayMenuList=a.first),l.lc(a=l.bc())&&(e.originFab=a.first))},decls:37,vars:11,consts:[["class","loading-shade",4,"ngIf"],["matSort","",3,"dataSource","matSortChange"],["sortTable","matSort"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["matColumnDef","user"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","title"],["matColumnDef","created_at"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","management"],[3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],["mat-fab","","color","accent",1,"float-menu",3,"click"],["originFab",""],["overlayMenuList",""],[1,"loading-shade"],[4,"ngIf"],["class","example-rate-limit-reached",4,"ngIf"],[1,"example-rate-limit-reached"],["mat-sort-header",""],["mat-button","","color","primary"],["mat-button","","color","warn"],[1,"fab-menu-panel"],["mat-list-item",""]],template:function(t,e){1&t&&(l.Tb(0,"mat-card"),l.Tb(1,"mat-card-header"),l.Tb(2,"mat-card-title"),l.yc(3,"\u8868\u683c"),l.Sb(),l.Tb(4,"mat-card-subtitle"),l.yc(5,"\u4e00\u4e2a\u7b80\u5355\u7684\u8868\u683c\u4f8b\u5b50"),l.Sb(),l.Sb(),l.Tb(6,"mat-card-content"),l.Tb(7,"mat-card"),l.Ob(8,"mat-card-header"),l.Tb(9,"mat-card-content"),l.Tb(10,"mat-card"),l.wc(11,O,3,2,"div",0),l.Tb(12,"mat-table",1,2),l.ac("matSortChange",(function(t){return e.changeSort(t)})),l.wc(14,I,1,0,"mat-header-row",3),l.wc(15,L,1,0,"mat-row",4),l.Rb(16,5),l.wc(17,D,2,0,"mat-header-cell",6),l.wc(18,M,2,1,"mat-cell",7),l.Qb(),l.Rb(19,8),l.wc(20,_,2,0,"mat-header-cell",6),l.wc(21,P,2,1,"mat-cell",7),l.Qb(),l.Rb(22,9),l.wc(23,B,2,0,"mat-header-cell",10),l.wc(24,j,2,1,"mat-cell",7),l.Qb(),l.Rb(25,11),l.wc(26,k,3,0,"mat-header-cell",6),l.wc(27,z,5,0,"mat-cell",7),l.Qb(),l.Sb(),l.Tb(28,"mat-card-actions"),l.Ob(29,"mat-paginator",12,13),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(31,"button",14,15),l.ac("click",(function(){return e.displayMenu()})),l.Tb(33,"mat-icon"),l.yc(34,"add"),l.Sb(),l.Sb(),l.wc(35,$,6,0,"ng-template",null,16,l.xc)),2&t&&(l.Bb(11),l.jc("ngIf",e.isLoadingResults||e.isRateLimitReached),l.Bb(1),l.jc("dataSource",e.emailsDataSource),l.Bb(2),l.jc("matHeaderRowDef",l.kc(8,N)),l.Bb(1),l.jc("matRowDefColumns",l.kc(9,N)),l.Bb(14),l.jc("length",e.totalCount)("pageIndex",0)("pageSize",10)("pageSizeOptions",l.kc(10,H)))},directives:[m.a,m.d,m.g,m.f,m.c,u.k,i.j,h.a,i.g,i.i,i.c,i.e,i.b,m.b,g.a,f.a,p.a,S.b,i.f,i.h,i.d,i.a,h.b,y.e,y.b],styles:["table[_ngcontent-%COMP%]{width:100%;border-bottom-style:solid;padding-left:10px;padding-right:10px}.mat-column-user[_ngcontent-%COMP%]{max-width:200px}.mat-header-cell.mat-column-user[_ngcontent-%COMP%]{color:red}.mat-cell.mat-column-user[_ngcontent-%COMP%]{font-weight:700;-webkit-text-decoration:underline dashed #000;text-decoration:underline dashed #000;cursor:pointer}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}.float-menu[_ngcontent-%COMP%]{position:fixed!important;right:50px;bottom:100px;z-index:2}.fab-menu-panel[_ngcontent-%COMP%]{border:1px solid #000;background-color:#fff}.fab-menu-panel[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]{padding-top:0}"]}),t})();var Q=a("PCNd");const X=[{path:"",component:F},{path:"basic",component:F}];let J=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[Q.a,n.f.forChild(X)],n.f]}),t})()}}]);