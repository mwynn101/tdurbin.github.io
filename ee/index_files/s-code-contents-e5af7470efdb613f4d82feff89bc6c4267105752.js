var s_account = "btbaemaprod";

var s = new AppMeasurement();
s.account = s_account;


var visitor = Visitor.getInstance("ABEE7708562AAA0A7F000101@AdobeOrg")


/******** VISITOR ID SERVICE CONFIG - REQUIRES VisitorAPI.js ********/
if(typeof(Visitor) != "undefined"){s.visitor=Visitor.getInstance("ABEE7708562AAA0A7F000101@AdobeOrg")}


s.usePlugins = true;
function s_doPlugins(s) {

s.AudienceManagement.setup({
	"partner": "btbusiness",
	"containerNSID": 0,
	"uuidCookie": {
		"name": "aam_uuid",
		"days": 30
		}
});
  
      s.eVar9=s.marketingCloudVisitorID;
}
s.doPlugins=s_doPlugins 

//DO NOT ALTER ANYTHING BELOW THIS LINE

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */


s.loadModule("AudienceManagement");
function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?
a.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!==typeof window.DIL&&(window.DIL=function(c,f){var k=[],g,w;c!==Object(c)&&(c={});var u,l,D,N,A,y,E,F,O,P,G,B,z;u=c.partner;l=c.containerNSID;D=!!c.disableDestinationPublishingIframe;N=c.iframeAkamaiHTTPS;A=c.mappings;y=c.uuidCookie;E=!0===c.enableErrorReporting;F=c.visitorService;O=c.declaredId;P=!0===c.delayAllUntilWindowLoad;G=!0===c.disableIDSyncs;B="undefined"===typeof c.secureDataCollection||!0===c.secureDataCollection;z="boolean"===typeof c.isCoopSafe?c.isCoopSafe:null;var Q,L,H,
R,S;Q=!0===c.disableDefaultRequest;L=c.afterResultForDefaultRequest;H=c.dpIframeSrc;R=c.visitorConstructor;S=!0===c.disableCORS;E&&DIL.errorModule.activate();E=!0===window._dil_unit_tests;(g=f)&&k.push(g+"");if(!u||"string"!==typeof u)return g="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:g,filename:"dil.js"}),Error(g);g="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(l||"number"===typeof l)l=parseInt(l,
10),!isNaN(l)&&0<=l&&(g="");g&&(l=0,k.push(g),g="");w=DIL.getDil(u,l);if(w instanceof DIL&&w.api.getPartner()===u&&w.api.getContainerNSID()===l)return w;if(this instanceof DIL)DIL.registerDil(this,u,l);else return new DIL(c,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+u+" and containerNSID = "+l);var t={IS_HTTPS:B||"https:"===document.location.protocol,MILLIS_PER_DAY:864E5,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(u)+"_"+l,FIRST_PARTY_SYNCS:"AMSYNCS",
FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP",REGION:"REGION",SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}()};t.IS_IE_LESS_THAN_10="number"===typeof t.IE_VERSION&&10>t.IE_VERSION;var M={stuffed:{}},m={},p={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,
pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:l+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",
isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(a){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var b=this,e,d,h,n;if("function"===typeof a&&"function"===typeof a.getInstance){if(F===Object(F)&&(e=F.namespace)&&"string"===typeof e)d=a.getInstance(e,{idSyncContainerID:l});else{this.releaseType="no namespace";this.releaseRequests();return}if(d===Object(d)&&d instanceof a&&"function"===typeof d.isAllowed&&"function"===typeof d.getMarketingCloudVisitorID&&
"function"===typeof d.getCustomerIDs&&"function"===typeof d.isOptedOut){this.VisitorAPI=a;if(!d.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=d;h=function(a){"VisitorAPI"!==b.releaseType&&(b.mid=a,b.releaseType="VisitorAPI",b.releaseRequests())};n=d.getMarketingCloudVisitorID(h);if("string"===typeof n&&n.length){h(n);return}setTimeout(function(){"VisitorAPI"!==b.releaseType&&(b.releaseType="timeout",b.releaseRequests())},this.getLoadTimeout());
return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(c){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;p.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var a=r.isPopulatedString,b=this.getMarketingCloudVisitorID();a(this.mid)&&this.mid===b||(this.mid=b);return a(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?
this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(a){if(a===Object(a)){var b="",e=[],d=[],h,n;for(h in a)a.hasOwnProperty(h)&&(d[0]=h,n=a[h],n===Object(n)&&(d[1]=n.id||"",d[2]=n.authState||0,e.push(d),d=[]));if(d=e.length)for(a=0;a<d;a++)b+="&d_cid_ic="+q.encodeAndBuildRequest(e[a],"%01");return b}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=
!0)},isOptedOutCallback:function(a){this.isOptedOut=a;this.isOptedOutCallbackCalled=!0;p.registerRequest()},getLoadTimeout:function(){var a=this.instance;if(a){if("function"===typeof a.getLoadTimeout)return a.getLoadTimeout();if("undefined"!==typeof a.loadTimeout)return a.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(a,b){var e=r.isPopulatedString,d=encodeURIComponent;if(a===Object(a)&&e(b)){var h=
a.dpid,n=a.dpuuid,c=null;if(e(h)&&e(n)){c=d(h)+"$"+d(n);if(!0===this.declaredIdCombos[c])return"setDeclaredId: combo exists for type '"+b+"'";this.declaredIdCombos[c]=!0;this.declaredId[b]={dpid:h,dpuuid:n};return"setDeclaredId: succeeded for type '"+b+"'"}}return"setDeclaredId: failed for type '"+b+"'"},getDeclaredIdQueryString:function(){var a=this.declaredId.request,b=this.declaredId.init,e=encodeURIComponent,d="";null!==a?d="&d_dpid="+e(a.dpid)+"&d_dpuuid="+e(a.dpuuid):null!==b&&(d="&d_dpid="+
e(b.dpid)+"&d_dpuuid="+e(b.dpuuid));return d}},registerRequest:function(a){var b=this.firingQueue;a===Object(a)&&b.push(a);this.firing||!b.length||P&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,a=b.shift(),a.src=a.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),r.isPopulatedString(a.corsPostData)&&
(a.corsPostData=a.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),C.fireRequest(a),this.firstRequestHasFired||"script"!==a.tag&&"cors"!==a.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(R||window.Visitor)},getCoopQueryString:function(){var a="";!0===z?a="&d_coop_safe=1":!1===z&&(a="&d_coop_unsafe=1");return a}};B=function(){var a="http://fast.",b="?d_nsid="+l+"#"+encodeURIComponent(document.location.href);if("string"===typeof H&&H.length)return H+
b;t.IS_HTTPS&&(a=!0===N?"https://fast.":"https://");return a+u+".demdex.net/dest5.html"+b};var v={MAX_SYNCS_LENGTH:649,id:"destination_publishing_iframe_"+u+"_"+l,url:B(),onPagePixels:[],iframeHost:null,getIframeHost:function(a){if("string"===typeof a){var b=a.split("/");if(3<=b.length)return b[0]+"//"+b[2];k.push("getIframeHost: url is malformed: "+a);return a}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],ibsDeleted:[],jsonForComparison:[],
jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,attachIframe:function(){function a(){d=document.createElement("iframe");d.sandbox="allow-scripts allow-same-origin";d.title="Adobe ID Syncing iFrame";d.id=e.id;d.name=e.id+"_name";d.style.cssText="display: none; width: 0; height: 0;";d.src=e.url;e.newIframeCreated=!0;
b();document.body.appendChild(d)}function b(){d.addEventListener("load",function(){d.className="aamIframeLoaded";e.iframeHasLoaded=!0;e.requestToProcess()})}if(!t.IS_IE_LESS_THAN_10){var e=this,d=document.getElementById(this.id);d?"IFRAME"!==d.nodeName?(this.id+="_2",this.iframeIdChanged=!0,a()):(this.newIframeCreated=!1,"aamIframeLoaded"!==d.className?(this.originalIframeHasLoadedAlready=!1,b()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=d,this.requestToProcess())):
a();this.iframe=d}},requestToProcess:function(a,b){function e(){d.jsonForComparison.push(a);d.jsonWaiting.push([a,b])}var d=this,h,n;h=p.adms.instance;a===Object(a)&&h===Object(h)&&h.idSyncContainerID===l&&(v.ibsDeleted.push(a.ibs),delete a.ibs);if(a&&!r.isEmptyObject(a))if(h=JSON.stringify(a.ibs||[]),n=JSON.stringify(a.dests||[]),this.jsonForComparison.length){var c=!1,f,g,k;f=0;for(g=this.jsonForComparison.length;f<g;f++)if(k=this.jsonForComparison[f],h===JSON.stringify(k.ibs||[])&&n===JSON.stringify(k.dests||
[])){c=!0;break}c?this.jsonDuplicates.push(a):e()}else e();this.receivedThirdPartyCookiesNotification&&this.jsonWaiting.length&&(h=this.jsonWaiting.shift(),!1===this.newIframeCreated&&delete h[0].ibs,this.process(h[0],h[1]),this.requestToProcess());this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.sendingMessages=!0,this.sendMessages())},checkIfRegionChanged:function(a){var b=q.getDilCookieField(t.REGION);null!==b&&"undefined"!==typeof a.dcs_region&&parseInt(b,10)!==a.dcs_region&&
(this.regionChanged=!0,this.timesRegionChanged++,q.setDilCookieField(t.FIRST_PARTY_SYNCS_ON_PAGE,""),q.setDilCookieField(t.FIRST_PARTY_SYNCS,""));"undefined"!==typeof a.dcs_region&&q.setDilCookieField(t.REGION,a.dcs_region)},processSyncOnPage:function(a){var b,e,d;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(a=0;a<e;a++)d=b[a],d.syncOnPage&&this.checkFirstPartyCookie(d,"","syncOnPage")},process:function(a,b){var e=encodeURIComponent,d,h,n,c,f,g;b===Object(b)&&(g=q.encodeAndBuildRequest(["",
b.dpid||"",b.dpuuid||""],","));if((d=a.dests)&&d instanceof Array&&(h=d.length))for(n=0;n<h;n++)c=d[n],f=[e("dests"),e(c.id||""),e(c.y||""),e(c.c||"")],this.addMessage(f.join("|"));if((d=a.ibs)&&d instanceof Array&&(h=d.length))for(n=0;n<h;n++)c=d[n],f=[e("ibs"),e(c.id||""),e(c.tag||""),q.encodeAndBuildRequest(c.url||[],","),e(c.ttl||""),"",g,c.fireURLSync?"true":"false"],c.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(f.join("|")):c.fireURLSync&&this.checkFirstPartyCookie(c,f.join("|")));
this.jsonProcessed.push(a)},checkFirstPartyCookie:function(a,b,e){var d=(e="syncOnPage"===e?!0:!1)?t.FIRST_PARTY_SYNCS_ON_PAGE:t.FIRST_PARTY_SYNCS,h=this.getOnPageSyncData(d),c=!1,f=!1,g=Math.ceil((new Date).getTime()/t.MILLIS_PER_DAY);h?(h=h.split("*"),f=this.pruneSyncData(h,a.id,g),c=f.dataPresent,f=f.dataValid,c&&f||this.fireSync(e,a,b,h,d,g)):(h=[],this.fireSync(e,a,b,h,d,g))},getOnPageSyncData:function(a){var b=p.adms.instance;return b&&"function"===typeof b.idSyncGetOnPageSyncInfo?b.idSyncGetOnPageSyncInfo():
q.getDilCookieField(a)},pruneSyncData:function(a,b,e){var d=!1,h=!1,c,f,g;if(a instanceof Array)for(f=0;f<a.length;f++)c=a[f],g=parseInt(c.split("-")[1],10),c.match("^"+b+"-")?(d=!0,e<g?h=!0:(a.splice(f,1),f--)):e>=g&&(a.splice(f,1),f--);return{dataPresent:d,dataValid:h}},manageSyncsSize:function(a){if(a.join("*").length>this.MAX_SYNCS_LENGTH)for(a.sort(function(a,e){return parseInt(a.split("-")[1],10)-parseInt(e.split("-")[1],10)});a.join("*").length>this.MAX_SYNCS_LENGTH;)a.shift()},fireSync:function(a,
b,e,d,h,c){function f(a,b,d,e){return function(){g.onPagePixels[a]=null;var h=g.getOnPageSyncData(d),c=[];if(h){var h=h.split("*"),n,f,k;n=0;for(f=h.length;n<f;n++)k=h[n],k.match("^"+b.id+"-")||c.push(k)}g.setSyncTrackingData(c,b,d,e)}}var g=this;if(a){if("img"===b.tag){a=b.url;e=t.IS_HTTPS?"https:":"http:";var k,p,q;d=0;for(k=a.length;d<k;d++){p=a[d];q=/^\/\//.test(p);var l=new Image;l.addEventListener("load",f(this.onPagePixels.length,b,h,c));l.src=(q?e:"")+p;this.onPagePixels.push(l)}}}else this.addMessage(e),
this.setSyncTrackingData(d,b,h,c)},addMessage:function(a){this.messages.push(a)},setSyncTrackingData:function(a,b,e,d){a.push(b.id+"-"+(d+Math.ceil(b.ttl/60/24)));this.manageSyncsSize(a);q.setDilCookieField(e,a.join("*"))},sendMessages:function(){var a="",b=encodeURIComponent;this.regionChanged&&(a=b("---destpub-clear-dextp---"),this.regionChanged=!1);this.messages.length&&(a=a+b("---destpub-combined---")+this.messages.join("%01"),this.postMessage(a),this.messages=[]);this.sendingMessages=!1},postMessage:function(a){DIL.xd.postMessage(a,
this.url,this.iframe.contentWindow);this.messagesPosted.push(a)},receiveMessage:function(a){var b=/^---destpub-to-parent---/;"string"===typeof a&&b.test(a)&&(b=a.replace(b,"").split("|"),"canSetThirdPartyCookies"===b[0]&&(this.canSetThirdPartyCookies="true"===b[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))}},J={traits:function(a){r.isValidPdata(a)&&(m.sids instanceof Array||(m.sids=[]),q.extendArray(m.sids,a));return this},pixels:function(a){r.isValidPdata(a)&&
(m.pdata instanceof Array||(m.pdata=[]),q.extendArray(m.pdata,a));return this},logs:function(a){r.isValidLogdata(a)&&(m.logdata!==Object(m.logdata)&&(m.logdata={}),q.extendObject(m.logdata,a));return this},customQueryParams:function(a){r.isEmptyObject(a)||q.extendObject(m,a,p.reservedKeys);return this},signals:function(a,b){var e,d=a;if(!r.isEmptyObject(d)){if(b&&"string"===typeof b)for(e in d={},a)a.hasOwnProperty(e)&&(d[b+e]=a[e]);q.extendObject(m,d,p.reservedKeys)}return this},declaredId:function(a){p.declaredId.setDeclaredId(a,
"request");return this},result:function(a){"function"===typeof a&&(m.callback=a);return this},afterResult:function(a){"function"===typeof a&&(m.postCallbackFn=a);return this},useImageRequest:function(){m.useImageRequest=!0;return this},clearData:function(){m={};return this},submit:function(){C.submitRequest(m);m={};return this},getPartner:function(){return u},getContainerNSID:function(){return l},getEventLog:function(){return k},getState:function(){var a={},b={};q.extendObject(a,p,{registerRequest:!0});
q.extendObject(b,v,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{initConfig:c,pendingRequest:m,otherRequestInfo:a,destinationPublishingInfo:b}},idSync:function(a){if(G)return"Error: id syncs have been disabled";if(a!==Object(a)||"string"!==typeof a.dpid||!a.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof a.url||!a.url.length)return"Error: config.url is empty";var b=a.url,e=a.minutesToLive,d=encodeURIComponent,h=v,c,b=b.replace(/^https:/,"").replace(/^http:/,
"");if("undefined"===typeof e)e=20160;else if(e=parseInt(e,10),isNaN(e)||0>=e)return"Error: config.minutesToLive needs to be a positive number";c=q.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],",");a=["ibs",d(a.dpid),"img",d(b),e,"",c];h.addMessage(a.join("|"));p.firstRequestHasFired&&h.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(G)return"Error: id syncs have been disabled";if(a!==Object(a)||"string"!==typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";
a.url="//dpm.demdex.net/ibs:dpid="+a.dpid+"&dpuuid="+a.dpuuid;return this.idSync(a)},passData:function(a){if(r.isEmptyObject(a))return"Error: json is empty or not an object";v.ibsDeleted.push(a.ibs);delete a.ibs;C.defaultCallback(a);return a},getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var a=p,b=a.modStatsParams,e=a.platformParams,d;if(!b){b={};for(d in e)e.hasOwnProperty(d)&&!a.nonModStatsParams[d]&&(b[d.replace(/^d_/,"")]=e[d]);!0===z?b.coop_safe=1:
!1===z&&(b.coop_unsafe=1);a.modStatsParams=b}return b},setAsCoopSafe:function(){z=!0;return this},setAsCoopUnsafe:function(){z=!1;return this}},C={corsMetadata:function(){var a="none",b=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(b=!1),0<
Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(b=!1));return{corsType:a,corsCookiesEnabled:b}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(a){p.registerRequest(C.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var b=a.callback,e="img",d,h;if(!r.isEmptyObject(A)){var c;for(d in A)A.hasOwnProperty(d)&&(h=A[d],null==h||""===h||!(d in a)||h in a||h in p.reservedKeys||
(c=a[d],null!=c&&""!==c&&(a[h]=c)))}r.isValidPdata(a.sids)||(a.sids=[]);r.isValidPdata(a.pdata)||(a.pdata=[]);r.isValidLogdata(a.logdata)||(a.logdata={});a.logdataArray=q.convertObjectToKeyValuePairs(a.logdata,"=",!0);a.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof b&&(b=this.defaultCallback);d=this.makeRequestSrcData(a);(h=this.getCORSInstance())&&!0!==a.useImageRequest&&(e="cors");return{tag:e,src:d.src,corsSrc:d.corsSrc,callbackFn:b,postCallbackFn:a.postCallbackFn,useImageRequest:!!a.useImageRequest,
requestData:a,corsInstance:h,corsPostData:d.corsPostData}},defaultCallback:function(a,b){v.checkIfRegionChanged(a);v.processSyncOnPage(a);var e,d,h,c,f,g,k,l,m;if((e=a.stuff)&&e instanceof Array&&(d=e.length))for(h=0;h<d;h++)if((c=e[h])&&c===Object(c)){f=c.cn;g=c.cv;k=c.ttl;if("undefined"===typeof k||""===k)k=Math.floor(q.getMaxCookieExpiresInMinutes()/60/24);l=c.dmn||"."+document.domain.replace(/^www\./,"");m=c.type;f&&(g||"number"===typeof g)&&("var"!==m&&(k=parseInt(k,10))&&!isNaN(k)&&q.setCookie(f,
g,1440*k,"/",l,!1),M.stuffed[f]=g)}e=a.uuid;r.isPopulatedString(e)&&!r.isEmptyObject(y)&&(d=y.path,"string"===typeof d&&d.length||(d="/"),h=parseInt(y.days,10),isNaN(h)&&(h=100),q.setCookie(y.name||"aam_did",e,1440*h,d,y.domain||"."+document.domain.replace(/^www\./,""),!0===y.secure));D||p.abortRequests||v.requestToProcess(a,b)},makeRequestSrcData:function(a){a.sids=r.removeEmptyArrayValues(a.sids||[]);a.pdata=r.removeEmptyArrayValues(a.pdata||[]);var b=p,e=b.platformParams,d=q.encodeAndBuildRequest(a.sids,
","),c=q.encodeAndBuildRequest(a.pdata,","),f=(a.logdataArray||[]).join("&");delete a.logdataArray;var g=t.IS_HTTPS?"https://":"http://",k=b.declaredId.getDeclaredIdQueryString(),l=b.adms.instance?b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs()):"",m=[],x,v,I,w;for(x in a)if(!(x in b.reservedKeys)&&a.hasOwnProperty(x))if(v=a[x],x=encodeURIComponent(x),v instanceof Array)for(I=0,w=v.length;I<w;I++)m.push(x+"="+encodeURIComponent(v[I]));else m.push(x+"="+encodeURIComponent(v));a=m.length?"&"+
m.join("&"):"";b="d_nsid="+e.d_nsid+b.getCoopQueryString()+k+l+(d.length?"&d_sid="+d:"")+(c.length?"&d_px="+c:"")+(f.length?"&d_ld="+encodeURIComponent(f):"");e="&d_rtbd="+e.d_rtbd+"&d_jsonv="+e.d_jsonv+"&d_dst="+e.d_dst;g=g+u+".demdex.net/event";c=d=g+"?"+b+e+a;2048<d.length&&(d=d.substring(0,2048).substring(0,d.lastIndexOf("&")));return{corsSrc:g+"?_ts="+(new Date).getTime(),src:d,originalSrc:c,corsPostData:b+e+a,isDeclaredIdCall:""!==k}},fireRequest:function(a){if("img"===a.tag)this.fireImage(a);
else{var b=p.declaredId,b=b.declaredId.request||b.declaredId.init||{};this.fireCORS(a,{dpid:b.dpid||"",dpuuid:b.dpuuid||""})}},fireImage:function(a){var b=p,e,d;b.abortRequests||(b.firing=!0,e=new Image(0,0),b.sent.push(a),e.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},d=function(d){g="imgAbortOrErrorHandler received the event of type "+d.type;k.push(g);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},e.addEventListener("error",
d),e.addEventListener("abort",d),e.src=a.src)},fireCORS:function(a,b){var e=this,d=p,c=this.corsMetadata.corsType,f=a.corsSrc,l=a.corsInstance,q=a.corsPostData,m=a.postCallbackFn,r="function"===typeof m;if(!d.abortRequests&&!S){d.firing=!0;try{l.open("post",f,!0),"XMLHttpRequest"===c&&(l.withCredentials=!0,l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var c;try{if(c=JSON.parse(this.responseText),
c!==Object(c)){e.handleCORSError(a,b,"Response is not JSON");break a}}catch(h){e.handleCORSError(a,b,"Error parsing response as JSON");break a}G&&(v.ibsDeleted.push(c.ibs),delete c.ibs);try{var f=a.callbackFn;d.firing=!1;d.fired.push(a);d.num_of_cors_responses++;f(c,b);r&&m(c,b)}catch(h){h.message="DIL handleCORSResponse caught error with message "+h.message;g=h.message;k.push(g);h.filename=h.filename||"dil.js";h.partner=u;DIL.errorModule.handleError(h);try{f({error:h.name+"|"+h.message},b),r&&m({error:h.name+
"|"+h.message},b)}catch(n){}}finally{d.registerRequest()}}}),l.onerror=function(){e.handleCORSError(a,b,"onerror")},l.ontimeout=function(){e.handleCORSError(a,b,"ontimeout")},l.send(q)}catch(t){this.handleCORSError(a,b,"try-catch")}d.sent.push(a);d.declaredId.declaredId.request=null}},handleCORSError:function(a,b,e){p.num_of_cors_errors++;p.corsErrorSources.push(e)},handleRequestError:function(a,b){var e=p;k.push(a);e.abortRequests=!0;e.firing=!1;e.errored.push(b);e.registerRequest()}},r={isValidPdata:function(a){return a instanceof
Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,e=a.length,d,c=[],b=0;b<e;b++)d=a[b],"undefined"!==typeof d&&null!==d&&""!==d&&c.push(d);return c},isPopulatedString:function(a){return"string"===typeof a&&a.length}},q={convertObjectToKeyValuePairs:function(a,b,e){var d=[],c,f;b||(b="=");
for(c in a)a.hasOwnProperty(c)&&(f=a[c],"undefined"!==typeof f&&null!==f&&""!==f&&d.push(c+b+(e?encodeURIComponent(f):f)));return d},encodeAndBuildRequest:function(a,b){return a.map(function(a){return encodeURIComponent(a)}).join(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),e,d,c;e=0;for(d=b.length;e<d;e++){for(c=b[e];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(a))return decodeURIComponent(c.substring(a.length,c.length))}return null},setCookie:function(a,b,e,
d,c,f){var g=new Date;e&&(e*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(e?";expires="+(new Date(g.getTime()+e)).toUTCString():"")+(d?";path="+d:"")+(c?";domain="+c:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,e){var d;if(a===Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!r.isEmptyObject(e)&&d in e||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return t.SIX_MONTHS_IN_MINUTES},
getCookieField:function(a,b){var e=this.getCookie(a),d=decodeURIComponent;if("string"===typeof e){var e=e.split("|"),c,f;c=0;for(f=e.length-1;c<f;c++)if(d(e[c])===b)return d(e[c+1])}return null},getDilCookieField:function(a){return this.getCookieField(t.DIL_COOKIE_NAME,a)},setCookieField:function(a,b,c){var d=this.getCookie(a),f=!1,g=encodeURIComponent;b=g(b);c=g(c);if("string"===typeof d){var d=d.split("|"),k,g=0;for(k=d.length-1;g<k;g++)if(d[g]===b){d[g+1]=c;f=!0;break}f||(g=d.length,d[g]=b,d[g+
1]=c)}else d=[b,c];this.setCookie(a,d.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)},setDilCookieField:function(a,b){return this.setCookieField(t.DIL_COOKIE_NAME,a,b)},getDomain:function(a){!a&&window.location&&(a=window.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var b=a.split("."),c=b.length-1,d=c-1;1<c&&2>=b[c].length&&(2===b[c-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+b[c]+","))&&d--;if(0<d)for(a="";c>=d;)a=b[c]+(a?".":"")+a,c--}return a},replaceMethodsWithFunction:function(a,
b){var c;if(a===Object(a)&&"function"===typeof b)for(c in a)a.hasOwnProperty(c)&&"function"===typeof a[c]&&(a[c]=b)}};"error"===u&&0===l&&window.addEventListener("load",function(){DIL.windowLoaded=!0});var T=!1,K=function(){T||(T=!0,p.registerRequest(),U(),D||p.abortRequests||v.attachIframe())},U=function(){D||setTimeout(function(){Q||p.firstRequestHasFired||("function"===typeof L?J.afterResult(L).submit():J.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};w=document;"error"!==u&&(DIL.windowLoaded?
K():"complete"!==w.readyState&&"loaded"!==w.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0;K()}):(DIL.windowLoaded=!0,K()));if("error"!==u)try{DIL.xd.receiveMessage(function(a){v.receiveMessage(a.data)},v.getIframeHost(v.url))}catch(a){}p.declaredId.setDeclaredId(O,"init");p.processVisitorAPI();t.IS_IE_LESS_THAN_10&&q.replaceMethodsWithFunction(J,function(){return this});this.api=J;this.getStuffedVariable=function(a){var b=M.stuffed[a];b||"number"===typeof b||(b=q.getCookie(a))||
"number"===typeof b||(b="");return b};this.validators=r;this.helpers=q;this.constants=t;this.log=k;E&&(this.pendingRequest=m,this.requestController=p,this.setDestinationPublishingUrl=B,this.destinationPublishing=v,this.requestProcs=C,this.variables=M,this.callWindowLoadFunctions=K)},DIL.extendStaticPropertiesAndMethods=function(c){var f;if(c===Object(c))for(f in c)c.hasOwnProperty(f)&&(this[f]=c[f])},DIL.extendStaticPropertiesAndMethods({version:"7.0",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},
variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(c){this.windowLoaded="function"===typeof c?!!c():"boolean"===typeof c?c:!0},create:function(c){try{return new DIL(c)}catch(f){throw Error("Error in attempt to create DIL instance with DIL.create(): "+f.message);}},registerDil:function(c,f,k){f=f+"$"+k;f in this.dils||(this.dils[f]=c)},getDil:function(c,f){var k;"string"!==typeof c&&(c="");f||(f=0);k=c+"$"+f;return k in this.dils?
this.dils[k]:Error("The DIL instance with partner = "+c+" and containerNSID = "+f+" was not found")},dexGetQSVars:function(c,f,k){f=this.getDil(f,k);return f instanceof this?f.getStuffedVariable(c):""},xd:{postMessage:function(c,f,k){f&&k.postMessage(c,f.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))},receiveMessage:function(c,f){var k;try{c&&(k=function(g){if("string"===typeof f&&g.origin!==f||"[object Function]"===Object.prototype.toString.call(f)&&!1===f(g.origin))return!1;c(g)}),window[c?"addEventListener":
"removeEventListener"]("message",k,!1)}catch(g){}}}}),DIL.errorModule=function(){var c=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),f={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},k=!1;return{activate:function(){k=!0},handleError:function(g){if(!k)return"DIL error module has not been activated";g!==Object(g)&&
(g={});var w=g.name?(g.name+"").toLowerCase():"",u=[];g={name:w,filename:g.filename?g.filename+"":"",partner:g.partner?g.partner+"":"no_partner",site:g.site?g.site+"":document.location.href,message:g.message?g.message+"":""};u.push(w in f?f[w]:f.noerrortypedefined);c.api.pixels(u).logs(g).useImageRequest().submit();return"DIL error report sent"},pixelMap:f}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(c,f,k){var g="";f=f||"Error caught in DIL module/submodule: ";c===Object(c)?
g=f+(c.message||"err has no message"):(g=f+"err is not a valid object",c={});c.message=g;k instanceof DIL&&(c.partner=k.api.getPartner());DIL.errorModule.handleError(c);return this.errorMessage=g}}});

/* BT Code */

// Data object used for DTM tracking
window.BTShared = window.BTShared || {};
window.BTShared.analytics = window.BTShared.analytics || {};

window.BTShared.analytics.s = _satellite.getToolsByType('sc')[0].getS();
/*
 * Gets the orderJourneyKey based on the basket products
 */
window.BTShared.analytics.getOrderJourneyKey = function (products) {
    var orderJourneyKey;

    if (products) {
        var orderJourneyKeyMap = {
            ee_mobile_device: 'ee-handset',
            ee_tablet: 'ee-tablet',
            ee_sim_only: 'ee-sim-only',
            ee_mbb: 'ee-mbb'
        };

        products.forEach(function(product) {
            if (product && product.config.productType) {
                var productType = product.config.productType;

                if (!orderJourneyKey) {
                    orderJourneyKey = orderJourneyKeyMap[productType];

                } else if ((orderJourneyKey !== orderJourneyKeyMap[productType]) && (orderJourneyKey !== 'ee-multi-basket')) {
                    orderJourneyKey = 'ee-multi-basket';
                }

                if (product.config.perk) {
                    orderJourneyKey += '-perk';
                }

                if (product.config.isUpgrade) {
                    orderJourneyKey += '-upgrade';
                }
            }
        });

        // for watches separate flow.
        // Haven't made any changes in the code above to not affect previous logic
        var watches = getWatchProducts(products);

        if (!watches.length) {
            return orderJourneyKey;
        }

        orderJourneyKey = isWatchBrandSingle() ?
            'ee-' + watches[0].config.manufacturer.toLowerCase() + '-watch' :
            'ee-multi-basket';

        function getWatchProducts(products) {
            return products.filter(function(product) {
                return product.config.productType === 'ee_watch_device';
            });
        }

        function isWatchBrandSingle() {
            var watchesBrands = getWatchBrands(products);

            return watchesBrands.length === 1;
        }

        function getWatchBrands(products) {
            var watches = getWatchProducts(products);

            return watches.reduce(function(acc, product) {
                var brand = product.config.manufacturer.toLowerCase();

                if (acc.indexOf(brand) !== -1) {
                    return acc;
                }

                acc.push(brand);
                return acc;
            }, []);
        }
    }

    return orderJourneyKey;
};
/*
 * Gets the productString based on the basket products
 */
window.BTShared.analytics.getProductString = function (products, includeFullInfo) {
	var productString = '';

	var addProductToProductString = function (productString, productLabel, productPrice, quantity, productType, itemQuantity, totalQuantity) {
		// Calling features need to be special snow flakes
		if (productType && productType === 'call_features') {
			productLabel = ['x', quantity, ' ', productLabel].join('');
		}
		if (itemQuantity > 1 && productType && productType !== 'call_features') {
			productLabel = [productLabel, ' (', itemQuantity, ')'].join('');
		}
		// limit quantity
		quantity = totalQuantity ? totalQuantity : quantity;
		if (productString !== "") {
			productString = productString.concat(",");
		}
		productString = productString.concat(";"); //Leave category column blank
		productString = productString.concat("EEB:" + productLabel); //Append product name
		productString = productString.concat(";" + quantity); //Append quantity
		productString = productString.concat(";" + productPrice); //Append price
		productString = productString.concat(";;");

		return productString;
	};

	var calculateRevenueValue = function (price, contractLengthMonths, quantity) {
		var revenue = 0;

		if (price.monthly) {
			var monthlyRevenue = (price.monthly * quantity);
			if (contractLengthMonths) {
				monthlyRevenue = (monthlyRevenue * contractLengthMonths);
			}
			revenue += monthlyRevenue;
		}

		if (price.oneOff) {
			revenue += (price.oneOff * quantity);
		}

		if (price.delivery) {
			revenue += (price.delivery * quantity);
		}

		return revenue;
	};

	if (products) {
		for (var productIndex = 0; productIndex < products.length; productIndex++) {
			var product = products[productIndex];

			if (product) {
				if (!includeFullInfo) {
					productString = addProductToProductString(productString, product.config.title, '', (product.config.quantity) ? product.config.quantity : 1);

				} else {

					var productTitles = [],
					qubitProductString = '',
					qubitTotalCost = 0.0,
					qubitSubTotalCost = 0.0,
					pageLoadEvent,
					domElement,
					isCloudConnChrg = false;

					// Runs for each top level product
					var contractLengthMonths = null;
					if (product.config.monthsContract) {
						contractLengthMonths = product.config.monthsContract;
					}

					var prices = product.config.prices;

					if (prices) {
						for (var priceIndex = 0; priceIndex < prices.length; priceIndex++) {
							var price = prices[priceIndex];
							var revenue = calculateRevenueValue(price, contractLengthMonths, (product.config.quantity) ? product.config.quantity : 1).toFixed(2);
							var titleEnd = contractLengthMonths + " months";
							var productTitle = product.config.title;

							if ((price.label.toLowerCase().indexOf(titleEnd) === -1) && (productTitle.indexOf(price.label) !== -1)) {
								if (contractLengthMonths) {
									price.label += " - " + contractLengthMonths + " months";
								}
							}

							price.label = price.label.replace(/\,/g, ' -'); // removes all commas from price.label
							productString = addProductToProductString(productString, price.label, revenue, product.config.quantity);
							productTitles.push(price.label);
							qubitTotalCost += calculateRevenueValue(price, contractLengthMonths, product.config.quantity);
						}

						var options = product.config.options;

						if (options) {
							for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
								var option = options[optionIndex];
								if (option.numPriceBreakItemsSelected > 0) {
									var revenue = (option.priceBreakPrice * contractLengthMonths);
									qubitTotalCost += revenue;
									productString = addProductToProductString(productString, option.title, revenue.toFixed(2), option.numPriceBreakItemsSelected, option.priceBreakItems[0].productType, 0, product.config.quantity);
								}

								if (option.items) {
									for (var itemIndex = 0; itemIndex < option.items.length; itemIndex++) {
										var item = option.items[itemIndex];

										if (item.selected && item.title != "Spend cap") {
											contractLengthMonths = item.monthsContract ? item.monthsContract : contractLengthMonths;

                                            if (item.price){
                                                    var totalQuantity = ((item.availableQuantities && item.itemQuantity > 0) || item.perUser) ? item.itemQuantity : product.config.quantity;
                                                    var revenue = calculateRevenueValue(item.price, contractLengthMonths, totalQuantity).toFixed(2);

                                                    if (revenue) { // && parseFloat(revenue) !== 0) {
														if (item.switching || item.hasOwnProperty("stacError")) {
															totalQuantity = 1;
														}
                                                        productString = addProductToProductString(productString, item.title, revenue, product.config.quantity, item.productType, item.itemQuantity, totalQuantity);
													}
                                                    productTitles.push(item.title);
                                                    qubitTotalCost += calculateRevenueValue(item.price, contractLengthMonths, totalQuantity);
                                                }
											} 
											
                                            if(item.hasOwnProperty("spendCapOptions")) {
                                                if(item.spendCapValue){
                                                    productString = addProductToProductString(productString, "Spend Cap " + item.spendCapValue.text, "0.00", 1, item.productType, 1, 1);
                                                }
                                            
                                            }  
									}
								}
							}
						}

						if (product.config.prices) {
							for (var priceIndex = 0; priceIndex < product.config.prices.length; priceIndex++) {
								var priceObj = product.config.prices[priceIndex];

								if (priceObj.monthly) {
									qubitSubTotalCost += priceObj.monthly;
								}
								if (priceObj.oneOff) {
									qubitSubTotalCost += priceObj.oneOff
								}
							}
						}
					}
				}
			}
		}
	}
	return productString.toLowerCase();
};

window.BTShared.analytics.getFloodLightDetails = function (products) {
	var floodLightDetails = {
		revenue : '',
		tariff : '',
		voucherCode : '',
		contractType : '',
		mrc : '',
		discount : '',
		handset : '',
		allowancesMinutes : '',
		planLength : '',
		allowancesTexts : '',
		offerId : '',
		devicePrice : '',
		packageCount : '',
		productSkuCode : '',
		upgrade : '',
		packagePrice : '',
		product : '',
		allowancesData : '',
		orderId : '',
		testTransaction : '',
		refurb : '',
		pageType : '',
		affiliateCommissionCode : '',
		productQuantity : '',
		prodComm : '',
		totalRevenue : ''
	};

	var addToDetails = function (index, name, value) {
		value = (value || value === 0) ? value : '';

		if (index === 0) {
			floodLightDetails[name] += value;
		} else {
			floodLightDetails[name] += '|' + value;
		}
	};

	if (products) {
		for (var productIndex = 0; productIndex < products.length; productIndex++) {
			var product = products[productIndex];

			if (product && product.config && product.totals) {
				addToDetails(productIndex, 'revenue', '');
				addToDetails(productIndex, 'tariff', product.config.planTitle);

				var isMonthly = true;
				var handset = '';
				var devicePrice = '';

				if (product.config.prices) {
					for (var priceIndex = 0; priceIndex < product.config.prices; priceIndex++) {
						var price = product.config.prices[priceIndex];

						if (price.monthly) {
							isMonthly = true;
						} else if (price.oneOff || price.oneOff === 0) {
							handset = price.label;
							devicePrice = price.oneOff;
						}
					}
				}

				addToDetails(productIndex, 'contractType', (isMonthly) ? 'Pay Monthly' : 'One-off Payment');
				addToDetails(productIndex, 'mrc', product.totals.actualMonthly);
				addToDetails(productIndex, 'handset', handset);

				var allowancesMinutes = '';
				var allowancesTexts = '';
				var allowancesData = '';
				//collect allowance details
				if (product.config.details && product.config.details.tariff) {
					var tariff = product.config.details.tariff;
					allowancesData = tariff.data;
				}

				addToDetails(productIndex, 'allowancesMinutes', "Unlimited");
				addToDetails(productIndex, 'allowancesTexts', "Unlimited");
				addToDetails(productIndex, 'allowancesData', allowancesData);

				var planLength = '';
				if (product.config.monthsContract === 1) {
					planLength = '30Days';
				} else if (product.config.monthsContract) {
					planLength = product.config.monthsContract + 'Months';
				}
				addToDetails(productIndex, 'planLength', planLength);

				var deviceSku = (product.config.sku) ? product.config.sku : '';
				var planSku = (product.config.planSKU) ? product.config.planSKU : '';
				addToDetails(productIndex, 'offerId', deviceSku + '-' + planSku);
				addToDetails(productIndex, 'devicePrice', devicePrice);
				addToDetails(productIndex, 'packageCount', '1');
				addToDetails(productIndex, 'productSkuCode', deviceSku);
				addToDetails(productIndex, 'packagePrice', product.totals.actualMonthly);
				addToDetails(productIndex, 'product', (product.config.productType === 'ee_mobile_device' || product.config.productType === 'ee_tablet') ? product.config.manufacturer : '');
				addToDetails(productIndex, 'refurb', '');
				addToDetails(productIndex, 'productQuantity', product.config.quantity);
			}
		}
	}

	return floodLightDetails;
}

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
window.BTShared.analytics.s.split = new Function("l", "d", ""
		 + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
		 + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
window.BTShared.analytics.s.getPreviousValue = new Function("v", "c", "el", ""
		 + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
		 + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
		 + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
		 + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
		 + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
 * Plugin: getPercentPageViewed v1.71
 */
window.BTShared.analytics.s.getPercentPageViewed = new Function("n", ""
		 + "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
		 + "','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
		 + "rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
		 + ".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
		 + "ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
		 + "',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
		 + "a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
		 + "!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
		 + "if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
		 + "r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
		 + "|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
		 + "th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
		 + "|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
		 + "tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
		 + "_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
		 + "s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
		 + "nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
		 + "C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
		 + "=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
		 + ":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
		 + "v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
		 + "N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
		 + "Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
		 + ":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
		 + "','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
		 + "+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
		 + "_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
		 + "length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
		 + "ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");
/*
 * Plugin: getValOnce_v1.11
 */
window.BTShared.analytics.s.getValOnce = new Function("v", "c", "e", "t", ""
		 + "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
		 + "0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
		 + "==0?0:a);}return v==k?'':v");


/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.2.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.2.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var p=k.AppMeasurement.Pb;p||(p=null);var n=k,m,s;try{for(m=n.parent,s=n.location;m&&m.location&&s&&""+m.location!=""+s&&n.location&&""+m.location!=""+n.location&&m.location.host==s.host;)n=m,m=n.parent}catch(u){}a.F=function(a){try{console.log(a)}catch(b){}};a.Ma=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.wb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ea&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ea=0<d?c.substring(d):c}return a.Ea};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.wb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.L=[];a.ia=function(c,b,d){if(a.Fa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);
if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.L.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.L.length;){d=a.L.shift();if(b&&!d.t&&d.t>c){a.L.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));
break}a.Fa=1;a[d.m].apply(a,d.a);a.Fa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.P,(h=a.lightTrackVars)&&(h=","+h+","+a.na.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,
a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Nb,f=a[e].Mb));h&&(h=","+h+","+a.H.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",h,l,k,q,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,
m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.r(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),q=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Ma(q)&&("prop"==k?h="c"+q:"eVar"==k?h="v"+
q:"list"==k?h="l"+q:"hier"==k&&(h="h"+q,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.zb=function(){var c="",b,d,f,e,g,h,l,k,q="",m="",n=e="";if(a.lightProfileID)b=a.P,(q=a.lightTrackVars)&&(q=","+q+","+a.na.join(",")+",");else{b=a.g;if(a.pe||a.linkType)q=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(q=a[e].Nb,m=a[e].Mb));q&&(q=","+q+","+a.H.join(",")+",");m&&(m=","+m+",",q&&(q+=
",events,"));a.events2&&(n+=(""!=n?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=p;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&n?(g=n,n=
""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!q||0<=q.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e=
"aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e=
"cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;
case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":n&&(g+=(""!=g?",":"")+n);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],q,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e=
"mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],q,e));g="";break;default:a.Ma(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Sb||"undefined"!=""+a.Ib&&"HTML"!=
(""+a.Ib).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ia=function(a){var b=k.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,
1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.M=function(c){var b=a.D(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ia(c),e)?{id:e.substring(0,100),type:g}:0};a.Qb=function(c){for(var b=
a.D(c),d=a.M(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.D(c),d=a.M(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Hb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,h;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.M(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.M(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:
"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&(e=a.Ia(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,q=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(n=g[h])&&l.substring(l.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&
!f&&(l=e.toLowerCase(),a.La(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=0;h<g.length;h++)n=g[h],0<=l.indexOf(n)&&(q=1);q?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=
k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Ab=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):
0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",h)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],
g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),h--);a.cookieWrite("s_sq",e)}}}return c};a.Bb=function(){if(!a.Lb){var c=new Date,b=n.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",p="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&
(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.Rb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),
p=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=p;a.homepage=m;a.Lb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.eb=function(){return d.ib};d.jb=function(b){if(d.ib=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",
{get:d.eb,set:d.jb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Db=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,
c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,h,l;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(l in a[g])h[l]||(h[l]=a[g][l]);a[g]=h}};a.Va=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.vb=function(a){var b,d,f,e,g,h=0,l,k="",m="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(l=b.substring(d+
1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&l)))){if((a=l.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?k+=(k?"&":"")+e:m+=(m?"&":"")+e;k&&m?l=k+"&"+m:m=""}d=253-(l.length-m.length)-
b.length;a=b+(0<d?g.substring(0,d):"")+"?"+l}return a};a.ab=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.J=!1;a.lb=function(){a.J=!0;a.j()};a.ca=!1;a.V=!1;a.hb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.mb=
function(c){a.visitorOptedOut=c;a.W=!0;a.j()};a.Z=!1;a.S=!1;a.Xa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Za=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Ya=function(c){a.audienceManagerBlob=c;a.T=!0;a.j()};a.$a=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.I=!1;a.xa=function(){a.I=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.J||(a.ab(a.lb)?a.J=
!0:a.ea=!0);if(a.ea&&!a.J)return!1;b&&b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.hb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.mb]),a.visitorOptedOut!=p&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Xa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||
a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Za]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ya]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,f=a.aa&&!a.T&&!a.audienceManagerBlob,
e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.I||(a.$a(a.xa)?a.I=!0:a.da=!0);a.da&&!a.I&&(c=!1);return c};a.o=p;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.qb=c;f.pb=b;f.nb=d;a.o==p&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.kb(),a.o!=p))for(;0<a.o.length;)c=a.o.shift(),c.pb.apply(c.qb,c.nb)};a.kb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.fb=function(c){var b,d,f=p,e=p;if(!a.isReadyToTrack()){b=[];if(c!=p)for(d in f=
{},c)f[d]=c[d];e={};a.Va(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.xb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+
Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");a.fb(c)||(b&&a.R(b),c&&(d={},a.Va(d,0),a.R(c)),a.Db()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.xb()),a.Hb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||
(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Wa||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:n.document.referrer),a.Wa=1,a.referrer=a.vb(a.referrer),a.p("_g")),a.Ab()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),
a.Bb(),g+=a.zb(),a.Gb(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPreTrackCallback")};a.cb=function(c){a.wa(a.za,
c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPostTrackCallback")};a.bb=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.F(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=
c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=
void 0};a.tagContainerMarker="";a.Gb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=
f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Kb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.cb(d);a.tb(d);a.ka()};a.Ua=/{(%?)(.*?)(%?)}/;a.Ob=RegExp(a.Ua.source,"g");a.ub=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Ob),e=0;e<f.length;++e){var g=
f[e],h=g.match(a.Ua),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.yb());d.c=d.c.replace(g,a.escape(k))}}};a.yb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,
b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.ub(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,
3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.tb=function(c){a.i||a.Cb();a.i.push(c);a.ma=a.C();a.Sa()};a.Cb=function(){a.i=a.Eb();a.i||(a.i=[])};a.Eb=function(){var c,b;if(a.ra()){try{(b=k.localStorage.getItem(a.pa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ja=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.G&&a.B.va(),
a.q))return;a.Ka=p;if(a.qa)a.ma>a.O&&a.Qa(a.i),a.ua(500);else{var c=a.ob();if(0<c)a.ua(c);else if(c=a.Ga())a.q=1,a.Fb(c),a.Jb(c)}};a.ua=function(c){a.Ka||(c||(c=0),a.Ka=setTimeout(a.ka,c))};a.ob=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Pa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ga=function(){if(0<a.i.length)return a.i.shift()};a.Fb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+=
"\n\t"+a.unescape(c[d]);a.F(b)}};a.gb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.X=function(a){return k.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Jb=function(c){var b,d,f;a.gb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=
new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Ta&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||
(b.abort=function(){b.src=p}));b.Da=function(){try{b.G&&(clearTimeout(b.G),b.G=0)}catch(a){}};b.onload=b.va=function(){a.bb(c);b.Da();a.sb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ha=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.rb);a.q=0;a.ma>a.O&&a.Qa(a.i);a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ha())};a.Pa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,
e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Na)try{f.removeChild(a.Na)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Na=a.B}b.G=setTimeout(function(){b.G&&(b.complete?b.va():(a.trackOffline&&b.abort&&b.abort(),b.Ha()))},5E3);a.rb=c;a.B=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.K||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=
250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.sb=function(){if(a.ra()&&!(a.Oa>a.O))try{k.localStorage.removeItem(a.pa()),a.Oa=a.C()}catch(c){}};a.Qa=function(c){if(a.ra()){a.Sa();try{k.localStorage.setItem(a.pa(),k.JSON.stringify(c)),a.O=a.C()}catch(b){}}};a.Sa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ga()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+
"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.La=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Kb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=
typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>
e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}}};a.H="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.P=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.P.push("prop"+m)),a.g.push("eVar"+m),a.P.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(m);a.H=a.H.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Pa=0;a.ma=0;a.O=0;a.Oa=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ta=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Ta=!0}}catch(x){}a.ga=function(){a.ha&&(k.clearTimeout(a.ha),a.ha=p);a.l&&a.K&&a.l.dispatchEvent(a.K);a.A&&("function"==typeof a.A?a.A():
a.l&&a.l.href&&(a.d.location=a.l.href));a.l=a.K=a.A=0};a.Ra=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.N&&a.N==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var h=a.N=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.N==h&&(a.N=0)},1E4);f=a.Ja();a.track();if(f<a.Ja()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.La(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.K=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ra,30)};a.Ra();r?a.setAccount(r):a.F("Error, missing Report Suite ID in AppMeasurement initialization");a.loadModule("ActivityMap")}
function s_gi(r){var a,k=window.s_c_il,p,n,m=r.split(","),s,u,t=0;if(k)for(p=0;!t&&p<k.length;){a=k[p];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(n=a.account?a.account:a.oun,n=a.allAccounts?a.allAccounts:n.split(","),s=0;s<m.length;s++)for(u=0;u<n.length;u++)m[s]==n[u]&&(t=1);p++}t||(a=new AppMeasurement(r));return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,p,n;if(a)for(k=0;k<a.length;k++)p=a[k],n=s_gi(p.oun),n.setAccount(p.un),n.setTagContainer(p.tagContainerName);r.s_giq=0}s_pgicq();

 

//EE BUSINESS AAM CUSTOM CODE//
//DIL Instantiation
/*var s = s_c_il[1];
var _scDilObj = s_gi(a.account);

// the ID isn't present on EE site,  create the object without the declared id
 //EE Business uses the same Org Id (and partner name) as BT Business 
var objP = {
	partner : "btbusiness",
	containerNSID : 0,
	uuidCookie : {
		name : 'aam_uuid',
		days : 30
	},
	visitorService : {	
		namespace : 'ABEE7708562AAA0A7F000101@AdobeOrg'
	},
			useJSONPOnly: true
};

//now that I have configured the object of the argument, create my DIL instance
var btBusinessDil = DIL.create(objP);


//Data Collection Plugins

//get the listed search engine name
if (btBusinessDil) {
    var se = DIL.tools.getSearchReferrer();
    if (se && se.valid) {
        btBusinessDil.api.signals({
            c_se: se.name,
            c_st: se.keywords
        });
    }
}

//get the User Agent string	
{
    var aamUserAgent = navigator.userAgent;
    btBusinessDil.api.signals({
        c_userAgent: aamUserAgent
    });
}

//URL data collection
function objIsEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && prop !== "")
            return false;
    }
    return true;
}
var uriData = DIL.tools.decomposeURI(document.URL);
delete uriData.search;
delete uriData.href;
if (!objIsEmpty(uriData.uriParams)) {
    btBusinessDil.api.signals(uriData.uriParams, 'c_');
};
delete uriData.uriParams;
btBusinessDil.api.signals(uriData, 'c_').submit();

//SC Data collection
DIL.modules.siteCatalyst.init(_scDilObj, btBusinessDil, {
	names : ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
	iteratedNames : [{
			name : 'eVar',
			maxIndex : 75
		}, {
			name : 'prop',
			maxIndex : 75
		}, {
			name : 'pev',
			maxIndex : 3
		}, {
			name : 'hier',
			maxIndex : 4
		}
	]
});*/