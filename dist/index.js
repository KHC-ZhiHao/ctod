!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ctod=e():t.ctod=e()}(this||("undefined"!=typeof window?window:global),(()=>(()=>{"use strict";var t={336:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.ChatGPT3Broker=void 0;var u=n(470),s=n(550),c=n(860),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bot=new c.ChatGPT3,e}return o(e,t),e.prototype.request=function(t){return i(this,void 0,void 0,(function(){var e,n,r,o=this;return a(this,(function(s){switch(s.label){case 0:return this._install(),e=u.flow.createUuid(),n=null,[4,this.translator.compile(t)];case 1:return r=s.sent(),[4,u.flow.asyncWhile((function(u){var s=u.count,c=u.doBreak;return i(o,void 0,void 0,(function(){var o,i,u,l,f,p,h,d=this;return a(this,(function(a){switch(a.label){case 0:if(s>=10)return[2,c()];for(p in o=null,i="",u=!1,l={},f=function(t){l[t]={send:function(n){return d.plugins[t].send({id:e,data:n})}}},this.plugins)f(p);a.label=1;case 1:return a.trys.push([1,8,,12]),[4,this.hook.notify("talkBefore",{id:e,data:t,plugins:l,prompt:r.prompt})];case 2:return a.sent(),[4,this.bot.talk(r.prompt)];case 3:return o=a.sent(),i=o.text,[4,this.hook.notify("talkAfter",{id:e,data:t,prompt:r.prompt,response:o,parseText:i,changeParseText:function(t){i=t}})];case 4:return a.sent(),[4,this.translator.parse(i)];case 5:return n=a.sent().output,[4,this.hook.notify("succeeded",{id:e,output:n})];case 6:return a.sent(),[4,this.hook.notify("done",{id:e})];case 7:return a.sent(),c(),[3,12];case 8:return(h=a.sent()).isParserError?[4,this.hook.notify("parseFailed",{id:e,error:h.error,count:s,response:o,parserFails:h.parserFails,retry:function(){u=!0},changePrompt:function(t){r.prompt=t}})]:[3,10];case 9:if(a.sent(),!1===u)return[2,c()];a.label=10;case 10:return[4,this.hook.notify("done",{id:e})];case 11:throw a.sent(),h;case 12:return[2]}}))}))}))];case 2:return s.sent(),[2,n]}}))}))},e}(s.BaseBroker);e.ChatGPT3Broker=l},215:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},u=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},s=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.ChatGPT35Broker=void 0;var c=n(470),l=n(550),f=n(655),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bot=new f.ChatGPT35,e}return o(e,t),e.prototype.request=function(t){return i(this,void 0,void 0,(function(){var e,n,r,o,l,f,p,h=this;return a(this,(function(d){switch(d.label){case 0:return this._install(),e=c.flow.createUuid(),n=null,r={},[4,this.translator.compile(t)];case 1:for(p in o=d.sent(),l=[{role:"user",content:o.prompt}],f=function(t){r[t]={send:function(n){return h.plugins[t].send({id:e,data:n})}}},this.plugins)f(p);return[4,this.hook.notify("talkFirst",{id:e,data:t,plugins:r,messages:l,setPreMessages:function(t){l=s(s([],u(t),!1),[{role:"user",content:o.prompt}],!1)},changeMessages:function(t){l=t}})];case 2:return d.sent(),[4,c.flow.asyncWhile((function(r){var o=r.count,u=r.doBreak;return i(h,void 0,void 0,(function(){var r,i,s,c,f,p;return a(this,(function(a){switch(a.label){case 0:if(o>=10)return[2,u()];r=null,i="",s=!1,c=(null===(p=l.filter((function(t){return"user"===t.role})).slice(-1)[0])||void 0===p?void 0:p.content)||"",a.label=1;case 1:return a.trys.push([1,8,,15]),[4,this.hook.notify("talkBefore",{id:e,data:t,messages:l,lastUserMessage:c})];case 2:return a.sent(),[4,this.bot.talk(l)];case 3:return r=a.sent(),i=r.text,[4,this.hook.notify("talkAfter",{id:e,data:t,response:r,parseText:i,messages:r.newMessages,lastUserMessage:c,changeParseText:function(t){i=t}})];case 4:return a.sent(),l=r.newMessages,[4,this.translator.parse(r.text)];case 5:return n=a.sent().output,[4,this.hook.notify("succeeded",{id:e,output:n})];case 6:return a.sent(),[4,this.hook.notify("done",{id:e})];case 7:return a.sent(),u(),[3,15];case 8:return(f=a.sent()).isParserError?[4,this.hook.notify("parseFailed",{id:e,error:f.error,count:o,response:r,messages:l,lastUserMessage:c,parserFails:f.parserFails,retry:function(){s=!0},changeMessages:function(t){l=t}})]:[3,12];case 9:return a.sent(),!1!==s?[3,11]:[4,this.hook.notify("done",{id:e})];case 10:throw a.sent(),f;case 11:return[3,14];case 12:return[4,this.hook.notify("done",{id:e})];case 13:throw a.sent(),f;case 14:return[3,15];case 15:return[2]}}))}))}))];case 3:return d.sent(),[2,n]}}))}))},e}(l.BaseBroker);e.ChatGPT35Broker=p},550:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.BaseBroker=void 0;var o=n(470),i=n(15),a=n(87),u=function(){function t(t){var e;this.hook=new o.Hook,this.plugins={},this.installed=!1,this.log=new o.Log(null!==(e=t.name)&&void 0!==e?e:"no name"),this.params=t,this.translator=new a.Translator(r(r({},t),{parsers:[i.TextParser.JsonMessage()]}))}return t.prototype._install=function(){if(!1===this.installed&&(this.installed=!0,this.bot)){var t={bot:this.bot,log:this.log,attach:this.hook.attach.bind(this.hook),attachAfter:this.hook.attachAfter.bind(this.hook),translator:this.translator};if(this.params.install(t),this.params.plugins)for(var e in this.plugins="function"==typeof this.params.plugins?this.params.plugins():this.params.plugins,this.plugins)this.plugins[e].instance._params.onInstall(r(r({},t),{params:this.plugins[e].params,receive:this.plugins[e].receive}))}},t.prototype.request=function(t){throw Error("DON'T CALL THIS!")},t}();e.BaseBroker=u},15:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.TextParser=void 0;var a=i(n(959)),u=function(){function t(t){this.params=t}return t.JsonMessage=function(){var e=this;return new t({name:"JsonMessage",handler:function(t){return r(e,void 0,void 0,(function(){var e,n,r;return o(this,(function(o){return e=/{(?:[^{}]|(?:{[^{}]*}))*}/,n=(null===(r=t.match(e))||void 0===r?void 0:r[0])||"",[2,a.default.parse(n)]}))}))}})},Object.defineProperty(t.prototype,"name",{get:function(){return this.params.name},enumerable:!1,configurable:!0}),t.prototype.read=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.params.handler(t)];case 1:return[2,e.sent()]}}))}))},t}();e.TextParser=u},241:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Broker35Plugin=e.Broker3Plugin=void 0;var r=n(470),o=function(){function t(t){this._event=new r.Event,this._params=t}return t.prototype.use=function(t){var e=this;return{instance:this,params:t,send:function(t){e._event.emit("receive",t)},receive:function(t){e._event.on("receive",t)},__receiveData:null}},t}();e.Broker3Plugin=o;var i=function(){function t(t){this._event=new r.Event,this._params=t}return t.prototype.use=function(t){var e=this;return{instance:this,params:t,send:function(t){e._event.emit("receive",t)},receive:function(t){e._event.on("receive",t)},__receiveData:null}},t}();e.Broker35Plugin=i},87:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.Translator=void 0;var a=n(293),u=function(){function t(t){this.params=t}return Object.defineProperty(t.prototype,"__schemeType",{get:function(){return null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"__outputType",{get:function(){return null},enumerable:!1,configurable:!0}),t.prototype.compile=function(t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return e=(0,a.validate)(t,this.params.input),[4,this.params.question(e)];case 1:return n=r.sent(),[2,{scheme:e,prompt:n}]}}))}))},t.prototype.parse=function(t){return r(this,void 0,void 0,(function(){var e,n,r,u,s,c,l,f,p,h;return o(this,(function(o){switch(o.label){case 0:e=void 0,n="",r=[],o.label=1;case 1:o.trys.push([1,8,9,10]),u=i(this.params.parsers),s=u.next(),o.label=2;case 2:if(s.done)return[3,7];c=s.value,o.label=3;case 3:return o.trys.push([3,5,,6]),[4,c.read(t)];case 4:return e=o.sent(),n=c.name,[3,6];case 5:return l=o.sent(),e=void 0,r.push({name:c.name,error:l}),[3,6];case 6:return s=u.next(),[3,2];case 7:return[3,10];case 8:return f=o.sent(),p={error:f},[3,10];case 9:try{s&&!s.done&&(h=u.return)&&h.call(u)}finally{if(p)throw p.error}return[7];case 10:try{return[2,{output:(0,a.validate)(e,this.params.output),parserName:n,parserFails:r}]}catch(t){throw{isParserError:!0,error:t,parserFails:r}}return[2]}}))}))},t}();e.Translator=u},620:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ctod=e.templates=e.plugins=e.ImagesGenerations=e.Broker35Plugin=e.Broker3Plugin=e.ChatGPT35Broker=e.ChatGPT3Broker=e.ChatGPT35=e.ChatGPT3=e.Translator=e.TextParser=void 0;var a=i(n(241)),u=i(n(218)),s=i(n(298)),c=i(n(87)),l=n(15),f=n(860),p=n(655),h=n(336),d=n(215),y=n(283);e.TextParser=l.TextParser,e.Translator=c.Translator,e.ChatGPT3=f.ChatGPT3,e.ChatGPT35=p.ChatGPT35,e.ChatGPT3Broker=h.ChatGPT3Broker,e.ChatGPT35Broker=d.ChatGPT35Broker,e.Broker3Plugin=a.Broker3Plugin,e.Broker35Plugin=a.Broker35Plugin,e.ImagesGenerations=y.ImagesGenerations,e.plugins=u,e.templates=s,e.ctod={plugins:e.plugins,templates:e.templates,ChatGPT3:e.ChatGPT3,ChatGPT35:e.ChatGPT35,Translator:e.Translator,TextParser:e.TextParser,Broker3Plugin:e.Broker3Plugin,Broker35Plugin:e.Broker35Plugin,ChatGPT3Broker:e.ChatGPT3Broker,ChatGPT35Broker:e.ChatGPT35Broker,ImagesGenerations:e.ImagesGenerations},t.exports=e.ctod,t.exports.ctod=e.ctod,e.default=e.ctod},218:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.LimiterPlugin=e.RetryPlugin=e.PrintLogPlugin=void 0;var o=r(n(894)),i=r(n(829)),a=r(n(626));e.PrintLogPlugin=i.default,e.RetryPlugin=o.default,e.LimiterPlugin=a.default},626:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(241),a=n(470),u={limit:3,interval:6e4},s={event:new a.Event,schedule:null,waitTimes:[],waitQueue:[]};e.default={event:s.event,config:u,closeSchedule:function(){s.schedule&&(s.schedule.close(),s.schedule=null)},ver35:new i.Broker35Plugin({name:"limiter",params:function(){return{}},receiveData:function(){return{}},onInstall:function(t){var e=this,n=t.attach;null==s.schedule&&(s.schedule=new a.Schedule,s.schedule.add("calc queue",1e3,(function(){return r(e,void 0,void 0,(function(){var t,e;return o(this,(function(n){return t=Date.now(),s.waitTimes=s.waitTimes.filter((function(e){return t-e<u.interval})),s.waitTimes.length!==u.limit?(e=s.waitQueue.shift())&&(s.waitTimes.push(Date.now()),s.event.emit("run",{id:e})):s.waitTimes[0]&&s.event.emit("waitTimeChange",{waitTime:Math.floor(60-(t-s.waitTimes[0])/1e3)}),[2]}))}))})),s.schedule.play()),n("talkBefore",(function(){return r(e,void 0,void 0,(function(){var t;return o(this,(function(e){return t=a.flow.createUuid(),s.waitQueue.push(t),[2,new Promise((function(e){s.event.on("run",(function(n,r){var o=n.id,i=r.off;o===t&&(i(),e())}))}))]}))}))}))}})}},829:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(241);e.default={ver3:new i.Broker3Plugin({name:"print-log",params:function(){return{}},receiveData:function(){return{}},onInstall:function(t){var e=this,n=t.log,i=t.attach;i("talkBefore",(function(t){var i=t.prompt;return r(e,void 0,void 0,(function(){return o(this,(function(t){return n.print("Send:",{color:"green"}),n.print(i),[2]}))}))})),i("talkAfter",(function(t){var i=t.parseText;return r(e,void 0,void 0,(function(){return o(this,(function(t){return n.print("Receive:",{color:"red"}),n.print(i),[2]}))}))})),i("succeeded",(function(t){var i=t.output;return r(e,void 0,void 0,(function(){return o(this,(function(t){n.print("Output:",{color:"yellow"});try{n.print("\n"+JSON.stringify(i,null,4))}catch(t){n.print("\n"+i)}return[2]}))}))}))}}),ver35:new i.Broker35Plugin({name:"print-log",params:function(t){return{detail:t.boolean().required().default(!1)}},receiveData:function(){return{}},onInstall:function(t){var e=this,n=t.params,i=t.log,a=t.attach;a("talkBefore",(function(t){var a=t.lastUserMessage,u=t.messages;return r(e,void 0,void 0,(function(){return o(this,(function(t){return i.print("Send:",{color:"green"}),n.detail?i.print("\n"+JSON.stringify(u,null,4)):i.print("\n"+a),[2]}))}))})),a("talkAfter",(function(t){var n=t.parseText;return r(e,void 0,void 0,(function(){return o(this,(function(t){return i.print("Receive:",{color:"cyan"}),i.print("\n"+n),[2]}))}))})),a("succeeded",(function(t){var n=t.output;return r(e,void 0,void 0,(function(){return o(this,(function(t){i.print("Output:",{color:"yellow"});try{i.print("\n"+JSON.stringify(n,null,4))}catch(t){i.print("\n"+n)}return[2]}))}))}))}})}},894:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(241);e.default={ver35:new i.Broker35Plugin({name:"retry",params:function(t){return{retry:t.number().required().default(1),printWarn:t.boolean().required().default(!0)}},receiveData:function(){return{}},onInstall:function(t){var e=this,n=t.log,i=t.attach,a=t.params;i("parseFailed",(function(t){var i=t.count,u=t.retry,s=t.response,c=t.changeMessages;return r(e,void 0,void 0,(function(){return o(this,(function(t){return i<=a.retry&&(a.printWarn&&n.print("Is Failed, Retry ".concat(i," times.")),c(s.newMessages.slice(0,-1)),u()),[2]}))}))}))}})}},860:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ChatGPT3=void 0;var a=i(n(167)),u=function(){function t(){this.axios=a.default.create(),this.apiKey="",this.config={n:1,maxTokens:2048,temperature:1}}return t.prototype.setAxios=function(t){this.axios=t},t.prototype.setConfiguration=function(t){this.apiKey=t},t.prototype.setConfig=function(t){Object.assign(this.config,t)},t.prototype.talk=function(t){var e,n;return r(this,void 0,void 0,(function(){var r,i;return o(this,(function(o){switch(o.label){case 0:return[4,this.axios.post("https://api.openai.com/v1/completions",{model:"text-davinci-003",n:this.config.n,prompt:Array.isArray(t)?t.join("\n"):t,max_tokens:this.config.maxTokens,temperature:this.config.temperature},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey)}})];case 1:return r=o.sent(),i=r.data.choices||[],[2,{id:r.data.id,text:(null===(e=i[0])||void 0===e?void 0:e.text)||"",isDone:"stop"===(null===(n=i[0])||void 0===n?void 0:n.finish_reason),apiReseponse:r.data}]}}))}))},t}();e.ChatGPT3=u},655:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},a=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ChatGPT35=void 0;var s=u(n(167)),c=n(470),l=function(){function t(){this.axios=s.default.create(),this.apiKey="",this.config={n:1,model:"gpt-3.5-turbo",temperature:1}}return t.prototype.setAxios=function(t){this.axios=t},t.prototype.setConfiguration=function(t){this.apiKey=t},t.prototype.setConfig=function(t){Object.assign(this.config,t)},t.prototype.talk=function(t){var e,n;return void 0===t&&(t=[]),r(this,void 0,void 0,(function(){var r,i,a,u;return o(this,(function(o){switch(o.label){case 0:return r=c.json.jpjs(t),[4,this.axios.post("https://api.openai.com/v1/chat/completions",{model:this.config.model,n:this.config.n,messages:r,temperature:this.config.temperature},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey)}})];case 1:return i=o.sent(),a=i.data.choices||[],u=(null===(e=a[0])||void 0===e?void 0:e.message)||{role:"assistant",content:""},r.push(u),[2,{id:null==i?void 0:i.data.id,text:u.content,isDone:"stop"===(null===(n=a[0])||void 0===n?void 0:n.finish_reason),newMessages:r,apiReseponse:i.data}]}}))}))},t.prototype.chat=function(t,e){return void 0===e&&(e=[]),r(this,void 0,void 0,(function(){var n,r=this;return o(this,(function(o){switch(o.label){case 0:return[4,this.talk(a(a([],i(e),!1),[{role:"user",content:Array.isArray(t)?t.join("\n"):t}],!1))];case 1:return[2,{result:n=o.sent(),nextTalk:function(t){return r.chat(t,n.newMessages)}}]}}))}))},t}();e.ChatGPT35=l},283:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ImagesGenerations=void 0;var a=i(n(167)),u=function(){function t(){this.axios=a.default.create(),this.apiKey="",this.config={n:1,size:"1024x1024"}}return t.prototype.setAxios=function(t){this.axios=t},t.prototype.setConfiguration=function(t){this.apiKey=t},t.prototype.setConfig=function(t){Object.assign(this.config,t)},t.prototype.create=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.axios.post("https://api.openai.com/v1/images/generations",{prompt:t,n:this.config.n,size:this.config.size,response_format:"b64_json"},{timeout:3e5,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey)}})];case 1:return[2,e.sent().data]}}))}))},t}();e.ImagesGenerations=u},298:function(t,e){var n=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},r=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.requireJsonResponse=void 0,e.requireJsonResponse=function(t,e){return r(r([],n(Array.isArray(t)?t:[t]),!1),["Please respond using the following JSON format and minify the JSON without including any explanation: ","{",Object.entries(e).map((function(t){var e=n(t,2),r=e[0],o=e[1];return["/* ".concat(o.desc," */"),'"'.concat(r,'": ').concat(JSON.stringify(o.example))].join("\n")})).join(",\n"),"}"],!1).join("\n")}},293:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.validate=e.definedValidateSchema=void 0;var a=i(n(609));e.definedValidateSchema=function(t){return t},e.validate=function(t,e){return a.object(e(a)).required().validateSync(t||{})}},167:t=>{t.exports=require("axios")},959:t=>{t.exports=require("json5")},470:t=>{t.exports=require("power-helper")},609:t=>{t.exports=require("yup")}},e={};return function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(620)})()));