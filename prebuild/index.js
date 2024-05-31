let r;function i(r,i,n,o){Object.defineProperty(r,i,{get:n,set:o,enumerable:!0,configurable:!0})}var n,o,a,s=globalThis;function l(r){return r&&r.__esModule?r.default:r}var u={},c={},p=s.parcelRequirec7f5;null==p&&((p=function(r){if(r in u)return u[r].exports;if(r in c){var i=c[r];delete c[r];var n={id:r,exports:{}};return u[r]=n,i.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(r,i){c[r]=i},s.parcelRequirec7f5=p);var h=p.register;h("hseGh",function(r,i){var n;r.exports,n=function(r,i,n,o){return class extends n{constructor(i,n){if(super(),!(i=o.getElement(i)))return;this._element=i,this._config=this._getConfig(n),r.set(this._element,this.constructor.DATA_KEY,this)}dispose(){for(let n of(r.remove(this._element,this.constructor.DATA_KEY),i.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this)))this[n]=null}_queueCallback(r,i,n=!0){o.executeAfterTransition(r,i,n)}_getConfig(r){return r=this._mergeConfigObj(r,this._element),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}static getInstance(i){return r.get(o.getElement(i),this.DATA_KEY)}static getOrCreateInstance(r,i={}){return this.getInstance(r)||new this(r,"object"==typeof i?i:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(r){return`${r}${this.EVENT_KEY}`}}},r.exports=n(p("jsbBG"),p("2dv2H"),p("9rOsm"),p("klrI4"))}),h("jsbBG",function(r,i){var n;r.exports,n=function(){let r=new Map;return{set(i,n,o){r.has(i)||r.set(i,new Map);let a=r.get(i);if(!a.has(n)&&0!==a.size){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(n,o)},get:(i,n)=>r.has(i)&&r.get(i).get(n)||null,remove(i,n){if(!r.has(i))return;let o=r.get(i);o.delete(n),0===o.size&&r.delete(i)}}},r.exports=n()}),h("2dv2H",function(r,i){var n;r.exports,n=function(r){let i=/[^.]*.*.gpx"===r||"kml"===r)return i=new DOMParser().parseFromString(i,"text/xml"),U(l(M)[r](i));throw"Unknown file format: "+r},allTracks:r=>O(V(r,"LineString").features),tracks:r=>O(V(r,"LineString").features.filter(j)),alternative:r=>O(V(r,"LineString").features.filter(q)),waypoints:r=>O((r=V(r,"Point")).features.map(r=>B(r.geometry.coordinates,{title:r.properties.name,symbol:r.properties.sym?r.properties.sym.toLowerCase():"embassy-11"}))),pois:r=>O(r.map(r=>B(r.coords,r.props))),slopes(r,i){let n=O([]);for(let o of r.features){let r=o.geometry.coordinates,a=Math.pow(10,-i.smoothing),s=i.slopeThreshold/100,l=i.steepSlopeThreshold/100;for(let i of L.slopes(r,a,s)){let o=R("LineString",r.slice(i.start,i.end));o.properties.slopesign=Math.sign(i.slope),o.properties.slope=Math.abs(i.slope),o.properties.slope>=l?o.properties.symbol="gradient-steep":o.properties.symbol="gradient",n.features.push(o)}}return n},emptyFeatureCollection:()=>O([])},Z=function(r,i){let[n,o]=w.dimensions(i.format);n-=2*i.margin,o-=2*i.margin;let a=n/1e3*i.scale,s=o/1e3*i.scale,l=(n-2*i.padding)/1e3*i.scale,u=(o-2*i.padding)/1e3*i.scale,c=[],p=new C(r.features[0].geometry.coordinates[0][1]);for(let i of r.features)for(let r of i.geometry.coordinates){if(function(r,i){if(0==r.length)return!1;for(let n of r)if(i[1]>=n.bbox.getSouth()&&i[1]<=n.bbox.getNorth()&&i[0]>=n.bbox.getWest()&&i[0]<=n.bbox.getEast())return!0;return!1}(c,r))continue;let i=p.cloneBounds();p.extend(r),p.largerThan(l,u)&&(p.revertTo(i),p.resize(a,s),c.push(p.toFeature()),(p=new C(r[1])).extend(r))}return p.resize(a,s),c.push(p.toFeature()),{type:"FeatureCollection",features:c}},X={},H={},W={};W=p("UtToO");const K=["Failed to fetch","NetworkError when attempting to fetch resource.","The Internet connection appears to be offline.","Network request failed"];class Y extends Error{constructor(r){super(),r instanceof Error?(this.originalError=r,{message:r}=r):(this.originalError=Error(r),this.originalError.stack=this.stack),this.name="AbortError",this.message=r}}const J=(r,i,n)=>{let o=n.retries-(i-1);return r.attemptNumber=i,r.retriesLeft=o,r},$=r=>K.includes(r),Q=(r,i)=>new Promise((n,o)=>{i={onFailedAttempt:()=>{},retries:10,...i};let a=W.operation(i);a.attempt(async s=>{try{n(await r(s))}catch(r){if(!(r instanceof Error)){o(TypeError(`Non-error was thrown: "${r}". You should only throw errors.`));return}if(r instanceof Y)a.stop(),o(r.originalError);else if(r instanceof TypeError&&!$(r.message))a.stop(),o(r);else{J(r,s,i);try{await i.onFailedAttempt(r)}catch(r){o(r);return}a.retry(r)||o(a.mainError())}}})});(H=Q).default=Q,H.AbortError=Y;var tt={};tt="function"==typeof Promise?Promise:p("bFMMk");const{fetch:te}=p("4fuvr")({Promise:tt});var tr={};tr=r=>encodeURIComponent(r).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`);var ti={},tn="%[a-f0-9]{2}",to=RegExp("("+tn+")|([^%]+?)","gi"),ta=RegExp("("+tn+")+","gi");ti=function(r){if("string"!=typeof r)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(i){return function(r){for(var i={"%FE%FF":"��","%FF%FE":"��"},n=ta.exec(r);n;){try{i[n[0]]=decodeURIComponent(n[0])}catch(r){var o=function(r){try{return decodeURIComponent(r)}catch(o){for(var i=r.match(to)||[],n=1;n<i.length;n++)i=(r=(function r(i,n){try{return[decodeURIComponent(i.join(""))]}catch(r){}if(1===i.length)return i;n=n||1;var o=i.slice(0,n),a=i.slice(n);return Array.prototype.concat.call([],r(o),r(a))})(i,n).join("")).match(to)||[];return r}}(n[0]);o!==n[0]&&(i[n[0]]=o)}n=ta.exec(r)}i["%C2"]="�";for(var a=Object.keys(i),s=0;s<a.length;s++){var l=a[s];r=r.replace(RegExp(l,"g"),i[l])}return r}(r)}};var ts={};ts=(r,i)=>{if(!("string"==typeof r&&"string"==typeof i))throw TypeError("Expected the arguments to be of type `string`");if(""===i)return[r];let n=r.indexOf(i);return -1===n?[r]:[r.slice(0,n),r.slice(n+i.length)]};var tl={};tl=function(r,i){for(var n={},o=Object.keys(r),a=Array.isArray(i),s=0;s<o.length;s++){var l=o[s],u=r[l];(a?-1!==i.indexOf(l):i(l,u,r))&&(n[l]=u)}return n};const tu=r=>null==r;function tc(r){if("string"!=typeof r||1!==r.length)throw TypeError("arrayFormatSeparator must be single character string")}function tp(r,i){return i.encode?i.strict?tr(r):encodeURIComponent(r):r}function th(r,i){return i.decode?ti(r):r}function tf(r){let i=r.indexOf("#");return -1!==i&&(r=r.slice(0,i)),r}function td(r){let i=(r=tf(r)).indexOf("?");return -1===i?"":r.slice(i+1)}function tm(r,i){return i.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):i.parseBooleans&&null!==r&&("true"===r.toLowerCase()||"false"===r.toLowerCase())&&(r="true"===r.toLowerCase()),r}function ty(r,i){tc((i=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},i)).arrayFormatSeparator);let n=function(r){let i;switch(r.arrayFormat){case"index":return(r,n,o)=>{if(i=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),!i){o[r]=n;return}void 0===o[r]&&(o[r]={}),o[r][i[1]]=n};case"bracket":return(r,n,o)=>{if(i=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),!i){o[r]=n;return}if(void 0===o[r]){o[r]=[n];return}o[r]=[].concat(o[r],n)};case"comma":case"separator":return(i,n,o)=>{let a="string"==typeof n&&n.includes(r.arrayFormatSeparator),s="string"==typeof n&&!a&&th(n,r).includes(r.arrayFormatSeparator);n=s?th(n,r):n;let l=a||s?n.split(r.arrayFormatSeparator).map(i=>th(i,r)):null===n?n:th(n,r);o[i]=l};default:return(r,i,n)=>{if(void 0===n[r]){n[r]=i;return}n[r]=[].concat(n[r],i)}}}(i),o=Object.create(null);if("string"!=typeof r||!(r=r.trim().replace(/^[?#&]/,"")))return o;for(let a of r.split("&")){if(""===a)continue;let[r,s]=ts(i.decode?a.replace(/\+/g," "):a,"=");s=void 0===s?null:["comma","separator"].includes(i.arrayFormat)?s:th(s,i),n(th(r,i),s,o)}for(let r of Object.keys(o)){let n=o[r];if("object"==typeof n&&null!==n)for(let r of Object.keys(n))n[r]=tm(n[r],i);else o[r]=tm(n,i)}return!1===i.sort?o:(!0===i.sort?Object.keys(o).sort():Object.keys(o).sort(i.sort)).reduce((r,i)=>{let n=o[i];return n&&"object"==typeof n&&!Array.isArray(n)?r[i]=function r(i){return Array.isArray(i)?i.sort():"object"==typeof i?r(Object.keys(i)).sort((r,i)=>Number(r)-Number(i)).map(r=>i[r]):i}(n):r[i]=n,r},Object.create(null))}n=(r,i)=>{if(!r)return"";tc((i=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},i)).arrayFormatSeparator);let n=n=>i.skipNull&&tu(r[n])||i.skipEmptyString&&""===r[n],o=function(r){switch(r.arrayFormat){case"index":return i=>(n,o)=>{let a=n.length;return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:null===o?[...n,[tp(i,r),"[",a,"]"].join("")]:[...n,[tp(i,r),"[",tp(a,r),"]=",tp(o,r)].join("")]};case"bracket":return i=>(n,o)=>void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:null===o?[...n,[tp(i,r),"[]"].join("")]:[...n,[tp(i,r),"[]=",tp(o,r)].join("")];case"comma":case"separator":return i=>(n,o)=>null==o||0===o.length?n:0===n.length?[[tp(i,r),"=",tp(o,r)].join("")]:[[n,tp(o,r)].join(r.arrayFormatSeparator)];default:return i=>(n,o)=>void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:null===o?[...n,tp(i,r)]:[...n,[tp(i,r),"=",tp(o,r)].join("")]}}(i),a={};for(let i of Object.keys(r))n(i)||(a[i]=r[i]);let s=Object.keys(a);return!1!==i.sort&&s.sort(i.sort),s.map(n=>{let a=r[n];return void 0===a?"":null===a?tp(n,i):Array.isArray(a)?a.reduce(o(n),[]).join("&"):tp(n,i)+"="+tp(a,i)}).filter(r=>r.length>0).join("&")},o=(r,i)=>{i=Object.assign({decode:!0},i);let[n,o]=ts(r,"#");return Object.assign({url:n.split("?")[0]||"",query:ty(td(r),i)},i&&i.parseFragmentIdentifier&&o?{fragmentIdentifier:th(o,i)}:{})},a=(r,i)=>{i=Object.assign({encode:!0,strict:!0},i);let o=tf(r.url).split("?")[0]||"",a=n(Object.assign(ty(td(r.url),{sort:!1}),r.query),i);a&&(a=`?${a}`);let s=function(r){let i="",n=r.indexOf("#");return -1!==n&&(i=r.slice(n)),i}(r.url);return r.fragmentIdentifier&&(s=`#${tp(r.fragmentIdentifier,i)}`),`${o}${a}${s}`},(r,i,n)=>{let{url:s,query:l,fragmentIdentifier:u}=o(r,n=Object.assign({parseFragmentIdentifier:!0},n));return a({url:s,query:tl(l,i),fragmentIdentifier:u},n)};const tg={fetchMode:null,endpoint:"https://overpass-api.de/api/interpreter",retryOpts:{minTimeout:500,retries:3}};X=(r,i={})=>{if("string"!=typeof(i=Object.assign({},tg,i)).endpoint)throw Error("opt.endpoint must be a string");let o=i.endpoint+"?"+n({data:r}),a={redirect:"follow",headers:{accept:"application/json","user-agent":"http://github.com/derhuerst/vbb-osm-relations"}};null!==i.fetchMode&&(a.mode=i.fetchMode);let s=Object.assign({},tg.retryOpts,i.retryOpts||{});return H(()=>te(o,a).then(r=>{if(!r.ok){let i=Error(r.statusText);if(i.statusCode=r.status,i.reponseBody=null,!r.headers.has("content-length")||parseInt(r.headers.get("content-length"))>1024)throw i;return r.text().then(r=>{throw i.reponseBody=r,i},()=>{throw i})}return r.json()}).then(r=>{if(!r||!Array.isArray(r.elements)){let i=Error("invalid response");throw i.responseBody=r,i}return r.elements}),s)};const t_=new Map;t_.set("atm",{query:"amenity~'atm|bank'",sym:"bank-11"}),t_.set("bakery",{query:"shop=bakery",sym:"bakery-11"}),t_.set("bike_shop",{query:"shop=bicycle",sym:"bicycle-11"}),t_.set("cafe",{query:"amenity=cafe",sym:"cafe-11"}),t_.set("camping",{query:"tourism=camp_site",sym:"campsite-11"}),t_.set("drinking_water",{query:"amenity=drinking_water",sym:"drinking-water-11"}),t_.set("graveyard",{query:"landuse=cemetery][amenity=grave_yard",sym:"cemetery-11"}),t_.set("hospitals",{query:"amenity=hospital",sym:"hospital-11"}),t_.set("information",{query:"information=office",sym:"information-11"}),t_.set("pharmacy",{query:"amenity=pharmacy",sym:"pharmacy-11"}),t_.set("picnic",{query:"tourism=picnic_site",sym:"picnic-site-11"}),t_.set("restaurant",{query:"amenity=restaurant",sym:"restaurant-11"}),t_.set("shelter",{query:"amenity=shelter",sym:"shelter-11"}),t_.set("supermarket",{query:"shop~'supermarket|convenience'",sym:"grocery-11"});var tv={loadPOIs(r,i){let n=[];return r.forEach(r=>{n.push(function(r,i){if(!t_.has(i))throw Error("Tag "+i+" unknown");return l(X)(function(r,i){let n=[r.getSouth(),r.getWest(),r.getNorth(),r.getEast()].join(",");return`\
    [out:json][timeout:25];
    node[${t_.get(i).query}](${n});
    out;`}(r,i),{fetchmode:"cors"}).then(r=>{let n=[];return r.forEach(r=>n.push({coords:[r.lon,r.lat],props:{name:r.tags.name||i[0].toUpperCase()+i.substr(1),symbol:t_.get(i).sym}})),n}).catch(r=>{throw r})}(r.bbox,i))}),Promise.all(n).then(r=>r.reduce((r,i)=>r.concat(i))).catch(r=>{throw r})},mapping:()=>t_};class tx{constructor(r,i){this._id=r,this._geojson=i||{}}get id(){return this._id}set id(r){this._id=r}get minzoom(){return 0}get geojson(){return this._geojson}set geojson(r){this._geojson=r}get features(){return this._geojson.features}addLayer(r){x.add(r,track)}updateLayerData(r){r.getSource(this._id).setData(this._geojson)}clearLayerData(r){r.getSource(this._id).setData({type:"FeatureCollection",features:[]})}get before(){return"country-label-lg"}get layer(){}}class tb extends tx{get layer(){return{id:this._id,source:this._id,type:"line",layout:{"line-join":"round","line-cap":"square"},paint:{"line-color":"#ff0000","line-width":3,"line-opacity":.6}}}}class tw extends tb{constructor(r,i){super(r,i)}get layer(){let r=super.layer;return r.paint["line-dasharray"]=[3,2],r}}class tE extends tx{get layer(){return{id:this._id,source:this._id,type:"line",paint:{"line-color":"#444444","line-width":2,"line-offset":-3,"line-opacity":.6,"line-dasharray":{stops:[[0,[1e3,0]],[12,[3,2]]]}}}}}class tT extends tx{get layer(){return{id:this._id,source:this._id,type:"symbol",layout:{"icon-image":"marker-11","icon-offset":[0,-5],"icon-ignore-placement":!0,"text-field":"{title} km","text-anchor":"bottom","text-offset":[0,-.5],"text-size":11,"text-optional":!0},paint:{"text-color":"#000000"}}}}class tS extends tT{constructor(r,i){super(r,i)}get layer(){let r=super.layer;return r.paint["text-color"]="#404040",r}}class tA extends tx{get layer(){return{id:this._id,source:this._id,type:"symbol",layout:{"icon-image":"{symbol}","icon-ignore-placement":!0,"icon-allow-overlap":!0,"text-field":"{title}","text-anchor":"top","text-offset":[0,.5],"text-size":11,"text-allow-overlap":!0,"text-optional":!0}}}}class tI extends tx{get layer(){return{id:this._id,source:this._id,type:"symbol",layout:{"symbol-placement":"line-center","symbol-spacing":125,"icon-ignore-placement":!0,"icon-allow-overlap":!0,"icon-image":"{symbol}","icon-rotate":["*.*.gpx")},i.send()}),tM.trackFile.addEventListener("change",function(){tO(this.files[0]),this.value=null}),tM.querySelector("#remove-track").addEventListener("click",()=>{r.name="",tR.resetInvalidForms(),tF(),r.clearTracks()}),tM.style.addEventListener("change",function(){r.style=tZ(this.value)}),tM.scale.addEventListener("change",()=>tU()),tR.add({form:tM.scale,validity:r=>r>=5e3,msg:tB.translateString("validate_scale")}),tM.paperformat.addEventListener("change",()=>tU()),tM.milemarkers.addEventListener("change",()=>r.updateMilemarkers(tM.milemarkers.value)),tR.add({form:tM.milemarkers,validity:r=>r>=0,msg:tB.translateString("validate_larger_zero")}),tM.margin.addEventListener("change",()=>tU()),tR.add({form:tM.margin,validity:r=>r>=0&&r<=50,msg:tB.translateString("validate_between_zero_and_fifty")}),tM.padding.addEventListener("change",()=>tU()),tR.add({form:tM.padding,validity:r=>r>=0&&r<=50,msg:tB.translateString("validate_between_zero_and_fifty")}),tM.dpi.addEventListener("change",()=>{tj(),tU()}),tR.add({form:tM.dpi,validity:r=>r>0,msg:tB.translateString("validate_larger_zero")}),tM.trackWidth.addEventListener("change",()=>r.changeTrackStyle({property:"line-width",value:parseInt(tM.trackWidth.value,10)})),tR.add({form:tM.trackWidth,validity:r=>r>0,msg:tB.translateString("validate_larger_zero")}),tM.trackColor.addEventListener("change",()=>r.changeTrackStyle({property:"line-color",value:tM.trackColor.value})),tM.showWaypoints.addEventListener("change",()=>r.toggleVisibility("waypoints",tM.showWaypoints.checked)),tM.smoothing.addEventListener("change",()=>tV()),tM.slopeThreshold.addEventListener("change",()=>{tM.steepSlopeThreshold.min=tM.slopeThreshold.value,tM.steepSlopeThreshold.value<tM.slopeThreshold.value&&(tM.steepSlopeThreshold.value=tM.slopeThreshold.value),tV()}),tM.steepSlopeThreshold.addEventListener("change",()=>{tV()}),i=0,n='<div class="row">',tv.mapping().forEach((r,o)=>{n+=`<div class="col form-check form-check-inline">
      <input id="${o}" data-tag="${o}" type="checkbox" class="form-check-input disableable" disabled>
      <label class="form-check-label" for="${o}" data-trn="${o}"></label>
      </div>
      `,i++%2&&(n+='</div><div class="row">')}),n+="</div>",document.getElementById("overpass").innerHTML=n,Array.from(document.getElementById("overpass").getElementsByTagName("input")).forEach(i=>{i.addEventListener("change",()=>{r.loadPOIs(i.dataset.tag,i.checked)})}),tL.addEventListener("click",tq),tB.translateAll()}();