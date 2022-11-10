(()=>{var e={192:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:true});const i=r(t(943));if(process.argv.length<3){console.log("Specify how many numbers to generate");process.exit(1)}if(!/^\d+$/.test(process.argv[2])){console.log("Invalid number:",process.argv[2]);process.exit(1)}const o=parseInt(process.argv[2]);const u=(0,i.default)("stay");let f=new Float64Array(o);for(let e=0;e<o;e++){f[e]=u()}const c=new BigUint64Array(f.buffer);console.log(c.toString())},943:(e,n,t)=>{var r=t(177);var i=t(938);var o=t(151);var u=t(536);var f=t(467);var c=t(290);var s=t(486);s.alea=r;s.xor128=i;s.xorwow=o;s.xorshift7=u;s.xor4096=f;s.tychei=c;e.exports=s},177:function(e,n,t){e=t.nmd(e);(function(e,n,t){function Alea(e){var n=this,t=Mash();n.next=function(){var e=2091639*n.s0+n.c*2.3283064365386963e-10;n.s0=n.s1;n.s1=n.s2;return n.s2=e-(n.c=e|0)};n.c=1;n.s0=t(" ");n.s1=t(" ");n.s2=t(" ");n.s0-=t(e);if(n.s0<0){n.s0+=1}n.s1-=t(e);if(n.s1<0){n.s1+=1}n.s2-=t(e);if(n.s2<0){n.s2+=1}t=null}function copy(e,n){n.c=e.c;n.s0=e.s0;n.s1=e.s1;n.s2=e.s2;return n}function impl(e,n){var t=new Alea(e),r=n&&n.state,i=t.next;i.int32=function(){return t.next()*4294967296|0};i.double=function(){return i()+(i()*2097152|0)*11102230246251565e-32};i.quick=i;if(r){if(typeof r=="object")copy(r,t);i.state=function(){return copy(t,{})}}return i}function Mash(){var e=4022871197;var mash=function(n){n=String(n);for(var t=0;t<n.length;t++){e+=n.charCodeAt(t);var r=.02519603282416938*e;e=r>>>0;r-=e;r*=e;e=r>>>0;r-=e;e+=r*4294967296}return(e>>>0)*2.3283064365386963e-10};return mash}if(n&&n.exports){n.exports=impl}else if(t&&t.amd){t((function(){return impl}))}else{this.alea=impl}})(this,true&&e,typeof define=="function"&&define)},290:function(e,n,t){e=t.nmd(e);(function(e,n,t){function XorGen(e){var n=this,t="";n.next=function(){var e=n.b,t=n.c,r=n.d,i=n.a;e=e<<25^e>>>7^t;t=t-r|0;r=r<<24^r>>>8^i;i=i-e|0;n.b=e=e<<20^e>>>12^t;n.c=t=t-r|0;n.d=r<<16^t>>>16^i;return n.a=i-e|0};n.a=0;n.b=0;n.c=2654435769|0;n.d=1367130551;if(e===Math.floor(e)){n.a=e/4294967296|0;n.b=e|0}else{t+=e}for(var r=0;r<t.length+20;r++){n.b^=t.charCodeAt(r)|0;n.next()}}function copy(e,n){n.a=e.a;n.b=e.b;n.c=e.c;n.d=e.d;return n}function impl(e,n){var t=new XorGen(e),r=n&&n.state,prng=function(){return(t.next()>>>0)/4294967296};prng.double=function(){do{var e=t.next()>>>11,n=(t.next()>>>0)/4294967296,r=(e+n)/(1<<21)}while(r===0);return r};prng.int32=t.next;prng.quick=prng;if(r){if(typeof r=="object")copy(r,t);prng.state=function(){return copy(t,{})}}return prng}if(n&&n.exports){n.exports=impl}else if(t&&t.amd){t((function(){return impl}))}else{this.tychei=impl}})(this,true&&e,typeof define=="function"&&define)},938:function(e,n,t){e=t.nmd(e);(function(e,n,t){function XorGen(e){var n=this,t="";n.x=0;n.y=0;n.z=0;n.w=0;n.next=function(){var e=n.x^n.x<<11;n.x=n.y;n.y=n.z;n.z=n.w;return n.w^=n.w>>>19^e^e>>>8};if(e===(e|0)){n.x=e}else{t+=e}for(var r=0;r<t.length+64;r++){n.x^=t.charCodeAt(r)|0;n.next()}}function copy(e,n){n.x=e.x;n.y=e.y;n.z=e.z;n.w=e.w;return n}function impl(e,n){var t=new XorGen(e),r=n&&n.state,prng=function(){return(t.next()>>>0)/4294967296};prng.double=function(){do{var e=t.next()>>>11,n=(t.next()>>>0)/4294967296,r=(e+n)/(1<<21)}while(r===0);return r};prng.int32=t.next;prng.quick=prng;if(r){if(typeof r=="object")copy(r,t);prng.state=function(){return copy(t,{})}}return prng}if(n&&n.exports){n.exports=impl}else if(t&&t.amd){t((function(){return impl}))}else{this.xor128=impl}})(this,true&&e,typeof define=="function"&&define)},467:function(e,n,t){e=t.nmd(e);(function(e,n,t){function XorGen(e){var n=this;n.next=function(){var e=n.w,t=n.X,r=n.i,i,o;n.w=e=e+1640531527|0;o=t[r+34&127];i=t[r=r+1&127];o^=o<<13;i^=i<<17;o^=o>>>15;i^=i>>>12;o=t[r]=o^i;n.i=r;return o+(e^e>>>16)|0};function init(e,n){var t,r,i,o,u,f=[],c=128;if(n===(n|0)){r=n;n=null}else{n=n+"\0";r=0;c=Math.max(c,n.length)}for(i=0,o=-32;o<c;++o){if(n)r^=n.charCodeAt((o+32)%n.length);if(o===0)u=r;r^=r<<10;r^=r>>>15;r^=r<<4;r^=r>>>13;if(o>=0){u=u+1640531527|0;t=f[o&127]^=r+u;i=0==t?i+1:0}}if(i>=128){f[(n&&n.length||0)&127]=-1}i=127;for(o=4*128;o>0;--o){r=f[i+34&127];t=f[i=i+1&127];r^=r<<13;t^=t<<17;r^=r>>>15;t^=t>>>12;f[i]=r^t}e.w=u;e.X=f;e.i=i}init(n,e)}function copy(e,n){n.i=e.i;n.w=e.w;n.X=e.X.slice();return n}function impl(e,n){if(e==null)e=+new Date;var t=new XorGen(e),r=n&&n.state,prng=function(){return(t.next()>>>0)/4294967296};prng.double=function(){do{var e=t.next()>>>11,n=(t.next()>>>0)/4294967296,r=(e+n)/(1<<21)}while(r===0);return r};prng.int32=t.next;prng.quick=prng;if(r){if(r.X)copy(r,t);prng.state=function(){return copy(t,{})}}return prng}if(n&&n.exports){n.exports=impl}else if(t&&t.amd){t((function(){return impl}))}else{this.xor4096=impl}})(this,true&&e,typeof define=="function"&&define)},536:function(e,n,t){e=t.nmd(e);(function(e,n,t){function XorGen(e){var n=this;n.next=function(){var e=n.x,t=n.i,r,i,o;r=e[t];r^=r>>>7;i=r^r<<24;r=e[t+1&7];i^=r^r>>>10;r=e[t+3&7];i^=r^r>>>3;r=e[t+4&7];i^=r^r<<7;r=e[t+7&7];r=r^r<<13;i^=r^r<<9;e[t]=i;n.i=t+1&7;return i};function init(e,n){var t,r,i=[];if(n===(n|0)){r=i[0]=n}else{n=""+n;for(t=0;t<n.length;++t){i[t&7]=i[t&7]<<15^n.charCodeAt(t)+i[t+1&7]<<13}}while(i.length<8)i.push(0);for(t=0;t<8&&i[t]===0;++t);if(t==8)r=i[7]=-1;else r=i[t];e.x=i;e.i=0;for(t=256;t>0;--t){e.next()}}init(n,e)}function copy(e,n){n.x=e.x.slice();n.i=e.i;return n}function impl(e,n){if(e==null)e=+new Date;var t=new XorGen(e),r=n&&n.state,prng=function(){return(t.next()>>>0)/4294967296};prng.double=function(){do{var e=t.next()>>>11,n=(t.next()>>>0)/4294967296,r=(e+n)/(1<<21)}while(r===0);return r};prng.int32=t.next;prng.quick=prng;if(r){if(r.x)copy(r,t);prng.state=function(){return copy(t,{})}}return prng}if(n&&n.exports){n.exports=impl}else if(t&&t.amd){t((function(){return impl}))}else{this.xorshift7=impl}})(this,true&&e,typeof define=="function"&&define)},151:function(e,n,t){e=t.nmd(e);(function(e,n,t){function XorGen(e){var n=this,t="";n.next=function(){var e=n.x^n.x>>>2;n.x=n.y;n.y=n.z;n.z=n.w;n.w=n.v;return(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^(e^e<<1))|0};n.x=0;n.y=0;n.z=0;n.w=0;n.v=0;if(e===(e|0)){n.x=e}else{t+=e}for(var r=0;r<t.length+64;r++){n.x^=t.charCodeAt(r)|0;if(r==t.length){n.d=n.x<<10^n.x>>>4}n.next()}}function copy(e,n){n.x=e.x;n.y=e.y;n.z=e.z;n.w=e.w;n.v=e.v;n.d=e.d;return n}function impl(e,n){var t=new XorGen(e),r=n&&n.state,prng=function(){return(t.next()>>>0)/4294967296};prng.double=function(){do{var e=t.next()>>>11,n=(t.next()>>>0)/4294967296,r=(e+n)/(1<<21)}while(r===0);return r};prng.int32=t.next;prng.quick=prng;if(r){if(typeof r=="object")copy(r,t);prng.state=function(){return copy(t,{})}}return prng}if(n&&n.exports){n.exports=impl}else if(t&&t.amd){t((function(){return impl}))}else{this.xorwow=impl}})(this,true&&e,typeof define=="function"&&define)},486:function(e,n,t){(function(n,r,i){var o=256,u=6,f=52,c="random",s=i.pow(o,u),a=i.pow(2,f),l=a*2,p=o-1,d;function seedrandom(e,n,t){var f=[];n=n==true?{entropy:true}:n||{};var p=mixkey(flatten(n.entropy?[e,tostring(r)]:e==null?autoseed():e,3),f);var d=new ARC4(f);var prng=function(){var e=d.g(u),n=s,t=0;while(e<a){e=(e+t)*o;n*=o;t=d.g(1)}while(e>=l){e/=2;n/=2;t>>>=1}return(e+t)/n};prng.int32=function(){return d.g(4)|0};prng.quick=function(){return d.g(4)/4294967296};prng.double=prng;mixkey(tostring(d.S),r);return(n.pass||t||function(e,n,t,r){if(r){if(r.S){copy(r,d)}e.state=function(){return copy(d,{})}}if(t){i[c]=e;return n}else return e})(prng,p,"global"in n?n.global:this==i,n.state)}function ARC4(e){var n,t=e.length,r=this,i=0,u=r.i=r.j=0,f=r.S=[];if(!t){e=[t++]}while(i<o){f[i]=i++}for(i=0;i<o;i++){f[i]=f[u=p&u+e[i%t]+(n=f[i])];f[u]=n}(r.g=function(e){var n,t=0,i=r.i,u=r.j,f=r.S;while(e--){n=f[i=p&i+1];t=t*o+f[p&(f[i]=f[u=p&u+n])+(f[u]=n)]}r.i=i;r.j=u;return t})(o)}function copy(e,n){n.i=e.i;n.j=e.j;n.S=e.S.slice();return n}function flatten(e,n){var t=[],r=typeof e,i;if(n&&r=="object"){for(i in e){try{t.push(flatten(e[i],n-1))}catch(e){}}}return t.length?t:r=="string"?e:e+"\0"}function mixkey(e,n){var t=e+"",r,i=0;while(i<t.length){n[p&i]=p&(r^=n[p&i]*19)+t.charCodeAt(i++)}return tostring(n)}function autoseed(){try{var e;if(d&&(e=d.randomBytes)){e=e(o)}else{e=new Uint8Array(o);(n.crypto||n.msCrypto).getRandomValues(e)}return tostring(e)}catch(e){var t=n.navigator,i=t&&t.plugins;return[+new Date,n,i,n.screen,tostring(r)]}}function tostring(e){return String.fromCharCode.apply(0,e)}mixkey(i.random(),r);if(true&&e.exports){e.exports=seedrandom;try{d=t(113)}catch(e){}}else if(typeof define=="function"&&define.amd){define((function(){return seedrandom}))}else{i["seed"+c]=seedrandom}})(typeof self!=="undefined"?self:this,[],Math)},113:e=>{"use strict";e.exports=require("crypto")}};var n={};function __nccwpck_require__(t){var r=n[t];if(r!==undefined){return r.exports}var i=n[t]={id:t,loaded:false,exports:{}};var o=true;try{e[t].call(i.exports,i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete n[t]}i.loaded=true;return i.exports}(()=>{__nccwpck_require__.nmd=e=>{e.paths=[];if(!e.children)e.children=[];return e}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(192);module.exports=t})();