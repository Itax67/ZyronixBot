/* 
╭━━━━┳╮╱╱╭┳━━━┳━━━┳━╮╱╭┳━━┳━╮╭━╮
╰━━╮━┃╰╮╭╯┃╭━╮┃╭━╮┃┃╰╮┃┣┫┣┻╮╰╯╭╯
╱╱╭╯╭┻╮╰╯╭┫╰━╯┃┃╱┃┃╭╮╰╯┃┃┃╱╰╮╭╯
╱╭╯╭╯╱╰╮╭╯┃╭╮╭┫┃╱┃┃┃╰╮┃┃┃┃╱╭╯╰╮
╭╯━╰━╮╱┃┃╱┃┃┃╰┫╰━╯┃┃╱┃┃┣┫┣┳╯╭╮╰╮
╰━━━━╯╱╰╯╱╰╯╰━┻━━━┻╯╱╰━┻━━┻━╯╰━╯

All rights reserved. Copyright © Maazin Ahamed 2023. No part of this Zyronix WhatsApp Multi-Device Bot project may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, contact maazinkingmc@gmail.com

This project is licensed under GPL-3.0 license.

WhatsApp: https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I
Github: https://github.com/mznking
YouTube: https://youtube.com/@mznking
*/










































































































































































const _0x52d8a8=_0x3a0e;(function(_0x3d778c,_0x6af507){const _0x2daa63=_0x3a0e,_0x1dc57b=_0x3d778c();while(!![]){try{const _0x19ee97=parseInt(_0x2daa63(0xfd))/0x1*(parseInt(_0x2daa63(0x168))/0x2)+parseInt(_0x2daa63(0xde))/0x3*(parseInt(_0x2daa63(0x110))/0x4)+parseInt(_0x2daa63(0x16d))/0x5*(-parseInt(_0x2daa63(0x11e))/0x6)+-parseInt(_0x2daa63(0x198))/0x7*(parseInt(_0x2daa63(0xbd))/0x8)+-parseInt(_0x2daa63(0x111))/0x9+parseInt(_0x2daa63(0xb3))/0xa+parseInt(_0x2daa63(0xd0))/0xb;if(_0x19ee97===_0x6af507)break;else _0x1dc57b['push'](_0x1dc57b['shift']());}catch(_0x2c95c0){_0x1dc57b['push'](_0x1dc57b['shift']());}}}(_0xa36e,0xc9e24));import{smsg}from'./lib/simple.js';import{format}from'util';import{fileURLToPath}from'url';import _0x262a2c,{join}from'path';import{unwatchFile,watchFile,readFileSync}from'fs';import _0x3480bf from'chalk';import _0x332d70 from'node-fetch';import{WelcomeLeave}from'./lib/welcome.js';const isNumber=_0x3b1ebe=>typeof _0x3b1ebe==='number'&&!isNaN(_0x3b1ebe),delay=_0x982a1f=>isNumber(_0x982a1f)&&new Promise(_0x1c5a2b=>setTimeout(function(){clearTimeout(this),_0x1c5a2b();},_0x982a1f)),{getAggregateVotesInPollMessage,makeInMemoryStore}=await(await import('@whiskeysockets/baileys'))[_0x52d8a8(0xf5)];import _0x2c42d7 from'pino';const store=makeInMemoryStore({'logger':_0x2c42d7()['child']({'level':_0x52d8a8(0x183),'stream':_0x52d8a8(0x118)})});let reactionsHandler=async(_0x5abc2d,{conn:_0x190e34})=>{const _0x5e38fb=_0x52d8a8,_0x17568d=_0x5e38fb(0xbf);if(_0x5abc2d[_0x5e38fb(0xa4)]===_0x17568d&&_0x5abc2d['text'])try{await _0x190e34[_0x5e38fb(0x113)](_0x5abc2d['chat'],'👨‍💻');}catch(_0x129352){console[_0x5e38fb(0xa5)](_0x129352);}};export async function handler(_0x59fde3){const _0x13e6db=_0x52d8a8;this[_0x13e6db(0xa8)]=this[_0x13e6db(0xa8)]||[];if(!_0x59fde3)return;this[_0x13e6db(0x16c)](_0x59fde3['messages'])[_0x13e6db(0x124)](console[_0x13e6db(0xa5)]);let _0x307367=_0x59fde3[_0x13e6db(0xb0)][_0x59fde3[_0x13e6db(0xb0)]['length']-0x1];if(!_0x307367)return;if(global['db']['data']==null)await global[_0x13e6db(0x197)]();try{_0x307367=smsg(this,_0x307367)||_0x307367;if(!_0x307367)return;_0x307367['exp']=0x0,_0x307367[_0x13e6db(0x15a)]=![],_0x307367[_0x13e6db(0x14a)]=![],_0x307367['chicken']=![];try{let _0x36cfcf=global['db'][_0x13e6db(0x185)][_0x13e6db(0x11d)][_0x307367[_0x13e6db(0xa4)]];if(typeof _0x36cfcf!==_0x13e6db(0x170))global['db']['data'][_0x13e6db(0x11d)][_0x307367[_0x13e6db(0xa4)]]={};if(_0x36cfcf){if(!isNumber(_0x36cfcf[_0x13e6db(0x129)]))_0x36cfcf['exp']=0x0;if(!isNumber(_0x36cfcf['credit']))_0x36cfcf[_0x13e6db(0x15a)]=0xa;if(!isNumber(_0x36cfcf[_0x13e6db(0x14a)]))_0x36cfcf[_0x13e6db(0x14a)]=0x0;if(!isNumber(_0x36cfcf[_0x13e6db(0xb5)]))_0x36cfcf['chicken']=0x0;if(!isNumber(_0x36cfcf['lastclaim']))_0x36cfcf[_0x13e6db(0x180)]=0x0;if(!(_0x13e6db(0xad)in _0x36cfcf))_0x36cfcf[_0x13e6db(0xad)]=![];if(!_0x36cfcf[_0x13e6db(0xad)]){if(!('name'in _0x36cfcf))_0x36cfcf[_0x13e6db(0xeb)]=_0x307367[_0x13e6db(0xeb)];if(!isNumber(_0x36cfcf[_0x13e6db(0xf7)]))_0x36cfcf[_0x13e6db(0xf7)]=-0x1;if(!isNumber(_0x36cfcf['regTime']))_0x36cfcf['regTime']=-0x1;}if(!isNumber(_0x36cfcf[_0x13e6db(0x127)]))_0x36cfcf['afk']=-0x1;if(!('afkReason'in _0x36cfcf))_0x36cfcf['afkReason']='';if(!(_0x13e6db(0xf4)in _0x36cfcf))_0x36cfcf['banned']=![];if(!isNumber(_0x36cfcf['warn']))_0x36cfcf[_0x13e6db(0x156)]=0x0;if(!isNumber(_0x36cfcf[_0x13e6db(0x160)]))_0x36cfcf['level']=0x0;if(!(_0x13e6db(0x17e)in _0x36cfcf))_0x36cfcf[_0x13e6db(0x17e)]=_0x13e6db(0x15d);if(!(_0x13e6db(0xe3)in _0x36cfcf))_0x36cfcf['autolevelup']=![];}else global['db']['data'][_0x13e6db(0x11d)][_0x307367[_0x13e6db(0xa4)]]={'exp':0x0,'credit':0x0,'bank':0x0,'chicken':0x0,'lastclaim':0x0,'registered':![],'name':_0x307367['name'],'age':-0x1,'regTime':-0x1,'afk':-0x1,'afkReason':'','banned':![],'warn':0x0,'level':0x0,'role':_0x13e6db(0x15d),'autolevelup':![]};let _0x545abf=global['db'][_0x13e6db(0x185)][_0x13e6db(0x149)][_0x307367[_0x13e6db(0xbe)]];if(typeof _0x545abf!==_0x13e6db(0x170))global['db'][_0x13e6db(0x185)]['chats'][_0x307367[_0x13e6db(0xbe)]]={};if(_0x545abf){if(!(_0x13e6db(0xe5)in _0x545abf))_0x545abf[_0x13e6db(0xe5)]=!![];if(!(_0x13e6db(0x100)in _0x545abf))_0x545abf[_0x13e6db(0x100)]=![];if(!(_0x13e6db(0x98)in _0x545abf))_0x545abf[_0x13e6db(0x98)]=![];if(!('antiToxic'in _0x545abf))_0x545abf[_0x13e6db(0x175)]=![];if(!('detect'in _0x545abf))_0x545abf[_0x13e6db(0xf6)]=![];if(!(_0x13e6db(0xdd)in _0x545abf))_0x545abf['getmsg']=!![];if(!('isBanned'in _0x545abf))_0x545abf[_0x13e6db(0x194)]=![];if(!(_0x13e6db(0x179)in _0x545abf))_0x545abf[_0x13e6db(0x179)]=![];if(!(_0x13e6db(0x18c)in _0x545abf))_0x545abf[_0x13e6db(0x18c)]='';if(!(_0x13e6db(0x141)in _0x545abf))_0x545abf['sDemote']='';if(!(_0x13e6db(0x140)in _0x545abf))_0x545abf[_0x13e6db(0x140)]=![];if(!(_0x13e6db(0x145)in _0x545abf))_0x545abf[_0x13e6db(0x145)]='';if(!(_0x13e6db(0x12b)in _0x545abf))_0x545abf[_0x13e6db(0x12b)]='';if(!(_0x13e6db(0xaf)in _0x545abf))_0x545abf[_0x13e6db(0xaf)]=![];if(!(_0x13e6db(0x104)in _0x545abf))_0x545abf[_0x13e6db(0x104)]=![];if(!('viewStory'in _0x545abf))_0x545abf[_0x13e6db(0x159)]=![];if(!('welcome'in _0x545abf))_0x545abf[_0x13e6db(0x162)]=![];if(!('chatbot'in _0x545abf))_0x545abf[_0x13e6db(0xdf)]=![];if(!isNumber(_0x545abf['expired']))_0x545abf[_0x13e6db(0xa6)]=0x0;}else global['db']['data']['chats'][_0x307367[_0x13e6db(0xbe)]]={'antiDelete':!![],'antiLink':![],'antiSticker':![],'antiToxic':![],'detect':![],'expired':0x0,'getmsg':!![],'isBanned':![],'nsfw':![],'sBye':'','sDemote':'','simi':![],'sPromote':'','sticker':![],'sWelcome':'','useDocument':![],'viewOnce':![],'viewStory':![],'welcome':![],'chatbot':![]};let _0x49f6a1=global['db'][_0x13e6db(0x185)]['settings'][this['user'][_0x13e6db(0x152)]];if(typeof _0x49f6a1!==_0x13e6db(0x170))global['db'][_0x13e6db(0x185)][_0x13e6db(0x151)][this[_0x13e6db(0xb2)][_0x13e6db(0x152)]]={};if(_0x49f6a1){if(!(_0x13e6db(0x107)in _0x49f6a1))_0x49f6a1[_0x13e6db(0x107)]=![];if(!(_0x13e6db(0x12f)in _0x49f6a1))_0x49f6a1[_0x13e6db(0x12f)]=![];if(!(_0x13e6db(0x9c)in _0x49f6a1))_0x49f6a1[_0x13e6db(0x9c)]=![];if(!('restartDB'in _0x49f6a1))_0x49f6a1[_0x13e6db(0x101)]=0x0;if(!('status'in _0x49f6a1))_0x49f6a1['status']=0x0;}else global['db'][_0x13e6db(0x185)][_0x13e6db(0x151)][this[_0x13e6db(0xb2)][_0x13e6db(0x152)]]={'self':![],'autoread':![],'restrict':![],'restartDB':0x0,'status':0x0};}catch(_0x10aa98){console[_0x13e6db(0xa5)](_0x10aa98);}if(opts[_0x13e6db(0xd5)])return;if(opts[_0x13e6db(0xdb)]&&_0x307367['chat'][_0x13e6db(0x14d)](_0x13e6db(0x139)))return;if(opts['gconly']&&!_0x307367[_0x13e6db(0xbe)][_0x13e6db(0x14d)](_0x13e6db(0x139)))return;if(opts[_0x13e6db(0x155)]&&_0x307367[_0x13e6db(0xbe)]!==_0x13e6db(0x15c))return;if(typeof _0x307367['text']!==_0x13e6db(0x171))_0x307367[_0x13e6db(0x17b)]='';const _0x4ed627=[conn[_0x13e6db(0xf3)](global['conn'][_0x13e6db(0xb2)]['id']),...global['owner'][_0x13e6db(0x105)](([_0x59340e])=>_0x59340e)][_0x13e6db(0x105)](_0x522053=>_0x522053[_0x13e6db(0xc1)](/[^0-9]/g,'')+_0x13e6db(0xb8))['includes'](_0x307367[_0x13e6db(0xa4)]),_0x1357dd=_0x4ed627||_0x307367[_0x13e6db(0x147)]||_0x307367[_0x13e6db(0xa4)]==='94789481495@s.whatsapp.net',_0x51ffbf=_0x1357dd||global['mods']['map'](_0x3468f1=>_0x3468f1[_0x13e6db(0xc1)](/[^0-9]/g,'')+'@s.whatsapp.net')[_0x13e6db(0x131)](_0x307367['sender'])||_0x307367[_0x13e6db(0xa4)]===_0x13e6db(0xbf),_0x2106df=_0x4ed627||global[_0x13e6db(0x164)][_0x13e6db(0x105)](_0x376f7b=>_0x376f7b[_0x13e6db(0xc1)](/[^0-9]/g,'')+_0x13e6db(0xb8))['includes'](_0x307367[_0x13e6db(0xa4)])||_0x307367[_0x13e6db(0xa4)]===_0x13e6db(0xbf);if(opts[_0x13e6db(0xa1)]&&_0x307367[_0x13e6db(0x17b)]&&!(_0x51ffbf||_0x2106df)){let _0xb316a5=this['msgqueque'],_0x257f35=0x3e8*0x5;const _0x2839=_0xb316a5[_0xb316a5[_0x13e6db(0x144)]-0x1];_0xb316a5['push'](_0x307367['id']||_0x307367['key']['id']),setInterval(async function(){const _0x432880=_0x13e6db;if(_0xb316a5[_0x432880(0x109)](_0x2839)===-0x1)clearInterval(this);await delay(_0x257f35);},_0x257f35);}if(process[_0x13e6db(0x17d)][_0x13e6db(0x182)]&&process[_0x13e6db(0x17d)]['MODE'][_0x13e6db(0xac)]()===_0x13e6db(0x112)&&!(_0x4ed627||_0x1357dd))return;if(_0x307367[_0x13e6db(0x158)])return;_0x307367[_0x13e6db(0x129)]+=Math[_0x13e6db(0x177)](Math[_0x13e6db(0x10d)]()*0xa);let _0x40deac,_0x56c04f=global['db'][_0x13e6db(0x185)]&&global['db'][_0x13e6db(0x185)]['users']&&global['db'][_0x13e6db(0x185)][_0x13e6db(0x11d)][_0x307367[_0x13e6db(0xa4)]];const _0x5b0596=(_0x307367[_0x13e6db(0xd4)]?(conn[_0x13e6db(0x149)][_0x307367['chat']]||{})['metadata']||await this[_0x13e6db(0x18d)](_0x307367[_0x13e6db(0xbe)])[_0x13e6db(0x124)](_0x1f4038=>null):{})||{},_0x2cb9fa=(_0x307367[_0x13e6db(0xd4)]?_0x5b0596[_0x13e6db(0xf1)]:[])||[],_0x5b4c6d=(_0x307367[_0x13e6db(0xd4)]?_0x2cb9fa['find'](_0x1ddb0d=>conn[_0x13e6db(0xf3)](_0x1ddb0d['id'])===_0x307367[_0x13e6db(0xa4)]):{})||{},_0x20587d=(_0x307367[_0x13e6db(0xd4)]?_0x2cb9fa[_0x13e6db(0xd9)](_0x13a3b3=>conn['decodeJid'](_0x13a3b3['id'])==conn[_0x13e6db(0xb2)][_0x13e6db(0x152)]):{})||{},_0x32a03c=_0x5b4c6d?.[_0x13e6db(0x10f)]==_0x13e6db(0x13a)||![],_0x53d9aa=_0x32a03c||_0x5b4c6d?.[_0x13e6db(0x10f)]==_0x13e6db(0x10f)||![],_0x457bb=_0x20587d?.[_0x13e6db(0x10f)]||![],_0x1694fb=_0x262a2c[_0x13e6db(0x134)](_0x262a2c[_0x13e6db(0x186)](fileURLToPath(import.meta['url'])),_0x13e6db(0xdc));for(let _0x1f1a87 in global[_0x13e6db(0x199)]){let _0x397592=global[_0x13e6db(0x199)][_0x1f1a87];if(!_0x397592)continue;if(_0x397592[_0x13e6db(0x166)])continue;const _0x1e387e=join(_0x1694fb,_0x1f1a87);if(typeof _0x397592[_0x13e6db(0x9e)]===_0x13e6db(0xc3))try{await _0x397592[_0x13e6db(0x9e)][_0x13e6db(0x103)](this,_0x307367,{'chatUpdate':_0x59fde3,'__dirname':_0x1694fb,'__filename':_0x1e387e});}catch(_0x49efdc){console[_0x13e6db(0xa5)](_0x49efdc);for(let [_0x1a4528]of global[_0x13e6db(0xa7)][_0x13e6db(0x163)](([_0x59a1e8,_0x5e2ad2,_0x457832])=>_0x457832&&_0x59a1e8)){let _0x4b89c7=(await conn[_0x13e6db(0xf2)](_0x1a4528))[0x0]||{};if(_0x4b89c7[_0x13e6db(0x96)])_0x307367[_0x13e6db(0x130)]((_0x13e6db(0x9a)+_0x1f1a87+_0x13e6db(0x138)+_0x307367[_0x13e6db(0xa4)]+_0x13e6db(0x13d)+_0x307367[_0x13e6db(0xbe)]+_0x13e6db(0x15e)+_0x307367[_0x13e6db(0x17b)]+_0x13e6db(0xed))['trim'](),_0x4b89c7[_0x13e6db(0x152)]);}}if(!opts[_0x13e6db(0x9c)]){if(_0x397592[_0x13e6db(0x195)]&&_0x397592['tags'][_0x13e6db(0x131)](_0x13e6db(0x10f)))continue;}const _0x5bd23f=_0xb5b21e=>_0xb5b21e[_0x13e6db(0xc1)](/[|\\{}()[\]^$+*?.]/g,_0x13e6db(0xba));let _0x228ef4=_0x397592['customPrefix']?_0x397592[_0x13e6db(0x16a)]:conn[_0x13e6db(0x150)]?conn['prefix']:global[_0x13e6db(0x150)],_0x4428a2=(_0x228ef4 instanceof RegExp?[[_0x228ef4['exec'](_0x307367[_0x13e6db(0x17b)]),_0x228ef4]]:Array[_0x13e6db(0x133)](_0x228ef4)?_0x228ef4[_0x13e6db(0x105)](_0x1f9e0a=>{const _0x2742bb=_0x13e6db;let _0x59c4f8=_0x1f9e0a instanceof RegExp?_0x1f9e0a:new RegExp(_0x5bd23f(_0x1f9e0a));return[_0x59c4f8[_0x2742bb(0x161)](_0x307367[_0x2742bb(0x17b)]),_0x59c4f8];}):typeof _0x228ef4==='string'?[[new RegExp(_0x5bd23f(_0x228ef4))[_0x13e6db(0x161)](_0x307367[_0x13e6db(0x17b)]),new RegExp(_0x5bd23f(_0x228ef4))]]:[[[],new RegExp()]])[_0x13e6db(0xd9)](_0x3a6596=>_0x3a6596[0x1]);if(typeof _0x397592['before']===_0x13e6db(0xc3)){if(await _0x397592[_0x13e6db(0xcd)][_0x13e6db(0x103)](this,_0x307367,{'match':_0x4428a2,'conn':this,'participants':_0x2cb9fa,'groupMetadata':_0x5b0596,'user':_0x5b4c6d,'bot':_0x20587d,'isROwner':_0x4ed627,'isOwner':_0x1357dd,'isRAdmin':_0x32a03c,'isAdmin':_0x53d9aa,'isBotAdmin':_0x457bb,'isPrems':_0x2106df,'chatUpdate':_0x59fde3,'__dirname':_0x1694fb,'__filename':_0x1e387e}))continue;}if(typeof _0x397592!==_0x13e6db(0xc3))continue;if(_0x40deac=(_0x4428a2[0x0]||'')[0x0]){let _0x22c53b=_0x307367[_0x13e6db(0x17b)]['replace'](_0x40deac,''),[_0x3f4a25,..._0x28e863]=_0x22c53b[_0x13e6db(0x157)]()[_0x13e6db(0xfc)]` `[_0x13e6db(0x163)](_0x208e67=>_0x208e67);_0x28e863=_0x28e863||[];let _0xf4e882=_0x22c53b['trim']()[_0x13e6db(0xfc)]` `[_0x13e6db(0xb6)](0x1),_0x4d2f64=_0xf4e882[_0x13e6db(0x134)]` `;_0x3f4a25=(_0x3f4a25||'')[_0x13e6db(0xac)]();let _0x5ab17a=_0x397592['fail']||global[_0x13e6db(0x178)],_0x4b24af=_0x397592[_0x13e6db(0x13f)]instanceof RegExp?_0x397592[_0x13e6db(0x13f)]['test'](_0x3f4a25):Array[_0x13e6db(0x133)](_0x397592['command'])?_0x397592[_0x13e6db(0x13f)]['some'](_0x1a5867=>_0x1a5867 instanceof RegExp?_0x1a5867['test'](_0x3f4a25):_0x1a5867===_0x3f4a25):typeof _0x397592[_0x13e6db(0x13f)]===_0x13e6db(0x171)?_0x397592[_0x13e6db(0x13f)]===_0x3f4a25:![];if(!_0x4b24af)continue;_0x307367[_0x13e6db(0x14e)]=_0x1f1a87;if(_0x307367[_0x13e6db(0xbe)]in global['db'][_0x13e6db(0x185)][_0x13e6db(0x149)]||_0x307367[_0x13e6db(0xa4)]in global['db'][_0x13e6db(0x185)][_0x13e6db(0x11d)]){let _0x195fa0=global['db']['data']['chats'][_0x307367['chat']],_0x382298=global['db'][_0x13e6db(0x185)][_0x13e6db(0x11d)][_0x307367['sender']];if(_0x1f1a87!=_0x13e6db(0xe0)&&_0x195fa0?.['isBanned'])return;if(_0x1f1a87!=_0x13e6db(0x12e)&&_0x382298?.['banned'])return;}if(_0x397592[_0x13e6db(0xa9)]&&_0x397592['owner']&&!(_0x4ed627||_0x1357dd)){_0x5ab17a(_0x13e6db(0xa7),_0x307367,this);continue;}if(_0x397592[_0x13e6db(0xa9)]&&!_0x4ed627){_0x5ab17a(_0x13e6db(0xa9),_0x307367,this);continue;}if(_0x397592[_0x13e6db(0xa7)]&&!_0x1357dd){_0x5ab17a(_0x13e6db(0xa7),_0x307367,this);continue;}if(_0x397592[_0x13e6db(0x191)]&&!_0x51ffbf){_0x5ab17a('mods',_0x307367,this);continue;}if(_0x397592['premium']&&!_0x2106df){_0x5ab17a('premium',_0x307367,this);continue;}if(_0x397592['group']&&!_0x307367['isGroup']){_0x5ab17a('group',_0x307367,this);continue;}else{if(_0x397592['botAdmin']&&!_0x457bb){_0x5ab17a(_0x13e6db(0x128),_0x307367,this);continue;}else{if(_0x397592[_0x13e6db(0x10f)]&&!_0x53d9aa){_0x5ab17a(_0x13e6db(0x10f),_0x307367,this);continue;}}}if(_0x397592['private']&&_0x307367[_0x13e6db(0xd4)]){_0x5ab17a('private',_0x307367,this);continue;}if(_0x397592['register']==!![]&&_0x56c04f['registered']==![]){_0x5ab17a(_0x13e6db(0xcf),_0x307367,this);continue;}_0x307367[_0x13e6db(0x119)]=!![];let _0x2736e7=_0x13e6db(0x129)in _0x397592?parseInt(_0x397592[_0x13e6db(0x129)]):0x11;if(_0x2736e7>0xc8)_0x307367[_0x13e6db(0x130)](_0x13e6db(0x188));else _0x307367[_0x13e6db(0x129)]+=_0x2736e7;if(!_0x2106df&&_0x397592['credit']&&global['db'][_0x13e6db(0x185)][_0x13e6db(0x11d)][_0x307367[_0x13e6db(0xa4)]][_0x13e6db(0x15a)]<_0x397592[_0x13e6db(0x15a)]*0x1){this[_0x13e6db(0x130)](_0x307367[_0x13e6db(0xbe)],_0x13e6db(0xe9),_0x307367);continue;}if(_0x397592[_0x13e6db(0x160)]>_0x56c04f[_0x13e6db(0x160)]){this['reply'](_0x307367[_0x13e6db(0xbe)],_0x13e6db(0x196)+_0x397592[_0x13e6db(0x160)]+_0x13e6db(0x14f)+_0x56c04f['level'],_0x307367);continue;}let _0x443e2d={'match':_0x4428a2,'usedPrefix':_0x40deac,'noPrefix':_0x22c53b,'_args':_0xf4e882,'args':_0x28e863,'command':_0x3f4a25,'text':_0x4d2f64,'conn':this,'participants':_0x2cb9fa,'groupMetadata':_0x5b0596,'user':_0x5b4c6d,'bot':_0x20587d,'isROwner':_0x4ed627,'isOwner':_0x1357dd,'isRAdmin':_0x32a03c,'isAdmin':_0x53d9aa,'isBotAdmin':_0x457bb,'isPrems':_0x2106df,'chatUpdate':_0x59fde3,'__dirname':_0x1694fb,'__filename':_0x1e387e};try{await _0x397592[_0x13e6db(0x103)](this,_0x307367,_0x443e2d);if(!_0x2106df)_0x307367[_0x13e6db(0x15a)]=_0x307367[_0x13e6db(0x15a)]||_0x397592['credit']||![];}catch(_0x36ac49){_0x307367[_0x13e6db(0xa5)]=_0x36ac49,console['error'](_0x36ac49);if(_0x36ac49){let _0x3b35d6=format(_0x36ac49);for(let _0x1adfd6 of Object[_0x13e6db(0xae)](global[_0x13e6db(0xee)]))_0x3b35d6=_0x3b35d6['replace'](new RegExp(_0x1adfd6,'g'),_0x13e6db(0xca));if(_0x36ac49[_0x13e6db(0xeb)])for(let [_0x540afb]of global[_0x13e6db(0xa7)]['filter'](([_0x421fa9,_0x3397e3,_0xb3b8f6])=>_0xb3b8f6&&_0x421fa9)){let _0x51480b=(await this['onWhatsApp'](_0x540afb))[0x0]||{};if(_0x51480b[_0x13e6db(0x96)])return _0x307367[_0x13e6db(0x130)](('*🗂️\x20Command:*\x20'+_0x307367[_0x13e6db(0x14e)]+_0x13e6db(0x138)+_0x307367[_0x13e6db(0xa4)]+_0x13e6db(0x13d)+_0x307367[_0x13e6db(0xbe)]+'\x0a*💻\x20Command:*\x20'+_0x40deac+_0x3f4a25+'\x20'+_0x28e863[_0x13e6db(0x134)]('\x20')+_0x13e6db(0x184)+_0x3b35d6+'\x0a')[_0x13e6db(0x157)](),_0x51480b[_0x13e6db(0x152)]);}_0x307367[_0x13e6db(0x130)](_0x3b35d6);}}finally{if(typeof _0x397592[_0x13e6db(0xaa)]==='function')try{await _0x397592[_0x13e6db(0xaa)][_0x13e6db(0x103)](this,_0x307367,_0x443e2d);}catch(_0x559290){console['error'](_0x559290);}if(_0x307367[_0x13e6db(0x15a)])_0x307367[_0x13e6db(0x130)](_0x13e6db(0x13b)+ +_0x307367['credit']+'*');}break;}}}catch(_0x154671){console[_0x13e6db(0xa5)](_0x154671);}finally{if(opts[_0x13e6db(0xa1)]&&_0x307367[_0x13e6db(0x17b)]){const _0x1d0684=this[_0x13e6db(0xa8)][_0x13e6db(0x109)](_0x307367['id']||_0x307367['key']['id']);if(_0x1d0684!==-0x1)this[_0x13e6db(0xa8)][_0x13e6db(0xfb)](_0x1d0684,0x1);}let _0x1f7f76,_0xe89dfb=global['db'][_0x13e6db(0x185)][_0x13e6db(0x108)];if(_0x307367){_0x307367['sender']&&(_0x1f7f76=global['db']['data']['users'][_0x307367[_0x13e6db(0xa4)]])&&(_0x1f7f76[_0x13e6db(0x129)]+=_0x307367['exp'],_0x1f7f76['credit']-=_0x307367['credit']*0x1,_0x1f7f76['bank']-=_0x307367[_0x13e6db(0x14a)],_0x1f7f76[_0x13e6db(0xb5)]-=_0x307367[_0x13e6db(0xb5)]);let _0xd900b9;if(_0x307367[_0x13e6db(0x14e)]){let _0x4401d5=+new Date();if(_0x307367[_0x13e6db(0x14e)]in _0xe89dfb){_0xd900b9=_0xe89dfb[_0x307367[_0x13e6db(0x14e)]];if(!isNumber(_0xd900b9[_0x13e6db(0xd2)]))_0xd900b9[_0x13e6db(0xd2)]=0x1;if(!isNumber(_0xd900b9[_0x13e6db(0xd6)]))_0xd900b9['success']=_0x307367[_0x13e6db(0xa5)]!=null?0x0:0x1;if(!isNumber(_0xd900b9['last']))_0xd900b9[_0x13e6db(0xc9)]=_0x4401d5;if(!isNumber(_0xd900b9[_0x13e6db(0xe8)]))_0xd900b9['lastSuccess']=_0x307367[_0x13e6db(0xa5)]!=null?0x0:_0x4401d5;}else _0xd900b9=_0xe89dfb[_0x307367['plugin']]={'total':0x1,'success':_0x307367[_0x13e6db(0xa5)]!=null?0x0:0x1,'last':_0x4401d5,'lastSuccess':_0x307367[_0x13e6db(0xa5)]!=null?0x0:_0x4401d5};_0xd900b9[_0x13e6db(0xd2)]+=0x1,_0xd900b9[_0x13e6db(0xc9)]=_0x4401d5,_0x307367['error']==null&&(_0xd900b9[_0x13e6db(0xd6)]+=0x1,_0xd900b9[_0x13e6db(0xe8)]=_0x4401d5);}}try{if(!opts[_0x13e6db(0xea)])await(await import(_0x13e6db(0x10c)))[_0x13e6db(0xf5)](_0x307367,this);}catch(_0xa3070){console[_0x13e6db(0xb4)](_0x307367,_0x307367[_0x13e6db(0x99)],_0xa3070);}if(process[_0x13e6db(0x17d)][_0x13e6db(0xfe)])await conn[_0x13e6db(0x193)]([_0x307367[_0x13e6db(0x154)]]);if(process[_0x13e6db(0x17d)][_0x13e6db(0xc6)]&&_0x307367[_0x13e6db(0x154)][_0x13e6db(0x97)]==='status@broadcast')await conn[_0x13e6db(0x193)]([_0x307367['key']]);}}export async function participantsUpdate({id:_0x55df27,participants:_0x27ae74,action:_0x436597}){const _0x5f17c5=_0x52d8a8;if(opts['self']||this[_0x5f17c5(0x12c)])return;if(global['db'][_0x5f17c5(0x185)]==null)await loadDatabase();const _0xe322bd=global['db'][_0x5f17c5(0x185)]['chats'][_0x55df27]||{};switch(_0x436597){case _0x5f17c5(0x142):if(_0xe322bd[_0x5f17c5(0x162)]){let _0x1ca2cb=await this[_0x5f17c5(0x18d)](_0x55df27)||(conn[_0x5f17c5(0x149)][_0x55df27]||{})[_0x5f17c5(0x117)];for(let _0x3b1094 of _0x27ae74){let _0x54308d,_0x4e5ce9;try{_0x54308d=await this[_0x5f17c5(0xc5)](_0x3b1094,_0x5f17c5(0x106)),_0x4e5ce9=await this[_0x5f17c5(0xc5)](_0x55df27,_0x5f17c5(0x106));}catch(_0x40a86b){console[_0x5f17c5(0xa5)](_0x5f17c5(0x13e)+_0x40a86b),_0x54308d=_0x5f17c5(0x9d),_0x4e5ce9=_0x5f17c5(0x9d);}finally{let _0x5138fd=(_0xe322bd[_0x5f17c5(0x12b)]||this[_0x5f17c5(0x162)]||conn[_0x5f17c5(0x162)]||_0x5f17c5(0x9b))[_0x5f17c5(0xc1)](_0x5f17c5(0x174),await this[_0x5f17c5(0xe4)](_0x55df27))[_0x5f17c5(0xc1)]('@desc',_0x1ca2cb['desc']?.['toString']()||_0x5f17c5(0xa5))[_0x5f17c5(0xc1)](_0x5f17c5(0xab),'@'+_0x3b1094[_0x5f17c5(0xfc)]('@')[0x0]),_0x544c31=_0x1ca2cb['participants'][_0x5f17c5(0x144)],_0x1c48eb=_0x5f17c5(0xb7)+await this['getName'](_0x3b1094)+_0x5f17c5(0x167)+_0x544c31+_0x5f17c5(0xe6),_0x28dd89=_0x5f17c5(0x17a)+encodeURIComponent(await this[_0x5f17c5(0xe4)](_0x3b1094))+_0x5f17c5(0x17f)+encodeURIComponent(await this[_0x5f17c5(0xe4)](_0x55df27))+'&guildIcon='+encodeURIComponent(_0x4e5ce9)+_0x5f17c5(0x102)+encodeURIComponent(_0x544c31[_0x5f17c5(0x12d)]())+_0x5f17c5(0xd3)+encodeURIComponent(_0x54308d)+_0x5f17c5(0x18b)+encodeURIComponent(_0x5f17c5(0x18f));try{let _0x3dde3d=await _0x332d70(_0x28dd89),_0x5dbd39=await _0x3dde3d[_0x5f17c5(0x126)]();this[_0x5f17c5(0x10e)](_0x55df27,{'text':_0x5138fd,'contextInfo':{'mentionedJid':[_0x3b1094],'externalAdReply':{'title':'ZYRONIX\x20BOT\x20-\x20MD','body':_0x5f17c5(0x192),'thumbnailUrl':_0x28dd89,'sourceUrl':'https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I','mediaType':0x1,'renderLargerThumbnail':!![]}}});}catch(_0x4a8d52){console[_0x5f17c5(0xa5)](_0x5f17c5(0x16f)+_0x4a8d52);}}}}break;case _0x5f17c5(0x176):if(_0xe322bd[_0x5f17c5(0x162)]){let _0x199e9e=await this[_0x5f17c5(0x18d)](_0x55df27)||(conn[_0x5f17c5(0x149)][_0x55df27]||{})[_0x5f17c5(0x117)];for(let _0x5171c4 of _0x27ae74){let _0x54096c,_0x18bc0b;try{_0x54096c=await this['profilePictureUrl'](_0x5171c4,_0x5f17c5(0x106)),_0x18bc0b=await this[_0x5f17c5(0xc5)](_0x55df27,_0x5f17c5(0x106));}catch(_0x588f6e){console['error'](_0x5f17c5(0x13e)+_0x588f6e),_0x54096c=_0x5f17c5(0x9d),_0x18bc0b=_0x5f17c5(0x9d);}finally{let _0x285061=(_0xe322bd['sBye']||this['bye']||conn[_0x5f17c5(0xd7)]||_0x5f17c5(0x16b))[_0x5f17c5(0xc1)](_0x5f17c5(0xab),'@'+_0x5171c4[_0x5f17c5(0xfc)]('@')[0x0]),_0x221a2c=_0x199e9e['participants'][_0x5f17c5(0x144)],_0x321a2c=_0x5f17c5(0xec)+_0x221a2c+_0x5f17c5(0xfa),_0x5060ec=_0x5f17c5(0x14c)+encodeURIComponent(await this[_0x5f17c5(0xe4)](_0x5171c4))+'&guildName='+encodeURIComponent(await this[_0x5f17c5(0xe4)](_0x55df27))+_0x5f17c5(0xa0)+encodeURIComponent(_0x18bc0b)+_0x5f17c5(0x102)+encodeURIComponent(_0x221a2c[_0x5f17c5(0x12d)]())+_0x5f17c5(0xd3)+encodeURIComponent(_0x54096c)+_0x5f17c5(0x18b)+encodeURIComponent(_0x5f17c5(0x18f));try{let _0x4d2c52=await _0x332d70(_0x5060ec),_0x120cc3=await _0x4d2c52['buffer']();this[_0x5f17c5(0x10e)](_0x55df27,{'text':_0x285061,'contextInfo':{'mentionedJid':[_0x5171c4],'externalAdReply':{'title':_0x5f17c5(0x18e),'body':_0x5f17c5(0x172),'thumbnailUrl':_0x5060ec,'sourceUrl':'https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I','mediaType':0x1,'renderLargerThumbnail':!![]}}});}catch(_0x2d99fd){console[_0x5f17c5(0xa5)](_0x5f17c5(0x120)+_0x2d99fd);}}}}break;case _0x5f17c5(0x137):const _0x287d67=(_0xe322bd[_0x5f17c5(0x145)]||this[_0x5f17c5(0xd8)]||conn[_0x5f17c5(0xd8)]||_0x5f17c5(0x146))[_0x5f17c5(0xc1)](_0x5f17c5(0xab),'@'+_0x27ae74[0x0][_0x5f17c5(0xfc)]('@')[0x0]);_0xe322bd[_0x5f17c5(0xf6)]&&this[_0x5f17c5(0x10e)](_0x55df27,{'text':_0x287d67[_0x5f17c5(0x157)](),'mentions':[_0x27ae74[0x0]]});break;case'demote':const _0x420e6b=(_0xe322bd[_0x5f17c5(0x141)]||this[_0x5f17c5(0xd1)]||conn[_0x5f17c5(0xd1)]||'```@user,\x20was\x20demoted\x20as\x20a\x20member```')[_0x5f17c5(0xc1)]('@user','@'+_0x27ae74[0x0][_0x5f17c5(0xfc)]('@')[0x0]);_0xe322bd[_0x5f17c5(0xf6)]&&this[_0x5f17c5(0x10e)](_0x55df27,{'text':_0x420e6b[_0x5f17c5(0x157)](),'mentions':[_0x27ae74[0x0]]});break;}}export async function groupsUpdate(_0x5b939d){const _0x14e6f3=_0x52d8a8;if(opts[_0x14e6f3(0x107)])return;for(const _0x29d7f6 of _0x5b939d){const _0x5d656c=_0x29d7f6['id'];if(!_0x5d656c)continue;let _0x295929=global['db'][_0x14e6f3(0x185)][_0x14e6f3(0x149)][_0x5d656c]||{};const _0xa6d6ce={'revoke':'🔁','closeGc':'🔇','openGc':'🔊','infoLock':'🔒','infoUnlock':'🔓'};let _0x4011cd='';if(!_0x295929[_0x14e6f3(0xf6)])continue;if(_0x29d7f6['desc'])_0x4011cd=(_0x295929[_0x14e6f3(0x136)]||this['sDesc']||conn['sDesc']||_0x14e6f3(0x132))[_0x14e6f3(0xc1)](_0x14e6f3(0x121),_0x29d7f6[_0x14e6f3(0xc8)]);else{if(_0x29d7f6[_0x14e6f3(0xef)])_0x4011cd=(_0x295929['sSubject']||this['sSubject']||conn[_0x14e6f3(0xa3)]||'*'+_0xa6d6ce[_0x14e6f3(0xef)]+'\x20*Group\x20name\x20changed.*\x0a@subject')[_0x14e6f3(0xc1)]('@subject',_0x29d7f6[_0x14e6f3(0xef)]);else{if(_0x29d7f6[_0x14e6f3(0x189)])_0x4011cd=(_0x295929[_0x14e6f3(0xc4)]||this[_0x14e6f3(0xc4)]||conn[_0x14e6f3(0xc4)]||_0x14e6f3(0xe2))['replace'](_0x14e6f3(0x15b),_0x29d7f6[_0x14e6f3(0x189)]);else{if(_0x29d7f6[_0x14e6f3(0xcb)])_0x4011cd=(_0x295929[_0x14e6f3(0x11a)]||this[_0x14e6f3(0x11a)]||conn[_0x14e6f3(0x11a)]||'*'+_0xa6d6ce[_0x14e6f3(0xcb)]+'\x20Group\x20invite\x20link\x20revoked.*\x0a@revoke')[_0x14e6f3(0xc1)](_0x14e6f3(0x9f),_0x29d7f6[_0x14e6f3(0xcb)]);else{if(_0x29d7f6[_0x14e6f3(0xe7)]===!![])_0x4011cd=_0x295929['sAnnounceOn']||this['sAnnounceOn']||conn[_0x14e6f3(0x114)]||'*'+_0xa6d6ce['closeGc']+_0x14e6f3(0xbb);else{if(_0x29d7f6[_0x14e6f3(0xe7)]===![])_0x4011cd=_0x295929['sAnnounceOff']||this[_0x14e6f3(0x11f)]||conn[_0x14e6f3(0x11f)]||'*'+_0xa6d6ce[_0x14e6f3(0xc0)]+_0x14e6f3(0x116);else{if(_0x29d7f6['restrict']===!![])_0x4011cd=_0x295929[_0x14e6f3(0x143)]||this[_0x14e6f3(0x143)]||conn[_0x14e6f3(0x143)]||'*'+_0xa6d6ce[_0x14e6f3(0xff)]+_0x14e6f3(0x173);else _0x29d7f6[_0x14e6f3(0x9c)]===![]&&(_0x4011cd=_0x295929[_0x14e6f3(0xc7)]||this['sRestrictOff']||conn[_0x14e6f3(0xc7)]||'*'+_0xa6d6ce[_0x14e6f3(0x11c)]+'\x20Group\x20info\x20change\x20option\x20unlocked!*');}}}}}}if(!_0x4011cd)continue;await this[_0x14e6f3(0x10e)](_0x5d656c,{'text':_0x4011cd,'mentions':this['parseMention'](_0x4011cd)});}}export async function deleteUpdate(_0x5b41ea){const _0x4f945f=_0x52d8a8;try{if(typeof process['env'][_0x4f945f(0x18a)]===_0x4f945f(0xcc)||process[_0x4f945f(0x17d)][_0x4f945f(0x18a)]['toLowerCase']()===_0x4f945f(0xb1))return;const {fromMe:_0x141cc7,id:_0x3d3d35,participant:_0x15684c}=_0x5b41ea;if(_0x141cc7)return;let _0x3be27c=this['serializeM'](this['loadMessage'](_0x3d3d35));if(!_0x3be27c)return;let _0x20fa57=global['db'][_0x4f945f(0x185)][_0x4f945f(0x149)][_0x3be27c[_0x4f945f(0xbe)]]||{};await this[_0x4f945f(0x130)](_0x3be27c[_0x4f945f(0xbe)],'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🗑️\x20*Antidelete\x20activated\x20in\x20this\x20chat.*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20off\x20antidelete\x20-\x20for\x20deactivate.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20👇\x20*Here\x20is\x20the\x20deleted\x20message.*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'[_0x4f945f(0x157)](),_0x3be27c,{'mentions':[_0x15684c]}),this['copyNForward'](_0x3be27c['chat'],_0x3be27c,![])['catch'](_0x4c7bf8=>console[_0x4f945f(0xb4)](_0x4c7bf8,_0x3be27c));}catch(_0x3ac3ec){console['error'](_0x3ac3ec);}}export async function pollUpdate(_0x5aed44){const _0x38a994=_0x52d8a8;for(const {key:_0x17d10b,update:_0x1348a5}of _0x5aed44){if(_0x5aed44[_0x38a994(0xe1)]){const _0x403f07=await this['serializeM'](this[_0x38a994(0xf8)](_0x17d10b['id']));if(_0x403f07){const _0x44efe6=await getAggregateVotesInPollMessage({'message':_0x403f07[_0x38a994(0xf0)],'pollUpdates':_0x403f07[_0x38a994(0xe1)]});_0x5aed44['pollUpdates'][0x0][_0x38a994(0xc2)]=_0x44efe6,await console['log'](_0x44efe6),this[_0x38a994(0x153)](_0x5aed44,_0x5aed44[_0x38a994(0xe1)][0x0][_0x38a994(0xc2)]||_0x44efe6[_0x38a994(0x163)](_0x285c68=>_0x285c68['voters'][_0x38a994(0x144)]!==0x0)[0x0]?.[_0x38a994(0xeb)],_0x5aed44[_0x38a994(0xf0)]);}}}}export async function presenceUpdate(_0x12b019){const _0x57e3dd=_0x52d8a8,_0x299cd8=_0x12b019['id'],_0x46b80a=Object['keys'](_0x12b019[_0x57e3dd(0x187)]),_0x1451e6=_0x12b019[_0x57e3dd(0x187)][_0x46b80a]?.[_0x57e3dd(0x123)],_0x5b59b5=global['db'][_0x57e3dd(0x185)][_0x57e3dd(0x11d)][_0x46b80a[0x0]];if(_0x5b59b5?.['afk']&&_0x1451e6===_0x57e3dd(0x148)&&_0x5b59b5[_0x57e3dd(0x127)]>-0x1){if(_0x5b59b5['banned']){_0x5b59b5[_0x57e3dd(0x127)]=-0x1,_0x5b59b5[_0x57e3dd(0xa2)]=_0x57e3dd(0xb9);return;}await console[_0x57e3dd(0xb4)](_0x57e3dd(0xf9));const _0x284d9f=_0x46b80a[0x0][_0x57e3dd(0xfc)]('@')[0x0],_0x5e21ef=new Date()-_0x5b59b5[_0x57e3dd(0x127)],_0x41383d='\x0a@'+_0x284d9f+_0x57e3dd(0x169)+(_0x5b59b5[_0x57e3dd(0xa2)]?_0x5b59b5[_0x57e3dd(0xa2)]:_0x57e3dd(0x10a))+_0x57e3dd(0x115)+_0x5e21ef[_0x57e3dd(0xce)]()+'.\x0a';this[_0x57e3dd(0x130)](_0x299cd8,_0x41383d,null,{'mentions':this[_0x57e3dd(0x12a)](_0x41383d)}),_0x5b59b5[_0x57e3dd(0x127)]=-0x1,_0x5b59b5['afkReason']='';}}global[_0x52d8a8(0x178)]=(_0x518429,_0x4e9ef1,_0x158c07)=>{const _0x241278=_0x52d8a8,_0x2cfd2f=_0x241278(0x10b),_0x2e0719={'restrict':'⛔','noAdmin':'😬'},_0x199b79={'owner':'*'+_0x2e0719[_0x241278(0x9c)]+'\x20This\x20is\x20an\x20owner\x20command!*','moderator':'*'+_0x2e0719[_0x241278(0x9c)]+_0x241278(0x15f),'premium':'*'+_0x2e0719[_0x241278(0x9c)]+_0x241278(0x181),'group':'*'+_0x2e0719[_0x241278(0x9c)]+_0x241278(0x16e),'private':'*'+_0x2e0719[_0x241278(0x9c)]+_0x241278(0x190),'admin':''+_0x2cfd2f+_0x2e0719[_0x241278(0x9c)]+_0x241278(0x135)+_0x2cfd2f,'botAdmin':_0x2e0719[_0x241278(0x122)]+_0x241278(0x125),'unreg':_0x2e0719['restrict']+_0x241278(0x14b),'nsfw':'*'+_0x2e0719[_0x241278(0x9c)]+_0x241278(0xbc),'restrict':'*'+_0x2e0719[_0x241278(0x9c)]+_0x241278(0x17c)}[_0x518429];if(_0x199b79)return _0x4e9ef1[_0x241278(0x130)](_0x199b79);};function _0xa36e(){const _0x3fb0a4=['simi','sDemote','add','sRestrictOn','length','sPromote','```@user,\x20was\x20promoted\x20as\x20an\x20Admin!😊```','fromMe','composing','chats','bank','\x20*You\x27re\x20not\x20registered\x20to\x20use\x20this\x20feature.*','https://welcome.guruapi.tech/leave-image?username=','endsWith','plugin','\x20to\x20use\x20this\x20command.*\x0aYour\x20level\x20is\x20','prefix','settings','jid','appenTextMessage','key','swonly','warn','trim','isBaileys','viewStory','credit','@icon','status@broadcast','Tadpole','\x0a*💻\x20Command:*\x20','\x20This\x20is\x20a\x20moderator\x20command!*','level','exec','welcome','filter','prems','reloadHandler','disabled',',\x20our\x20','369276tKZoPy','\x20back!\x0a🎭\x20Reason:\x20','customPrefix','Hello,\x20@user','pushMessage','465230kjAPNd','\x20This\x20is\x20a\x20group\x20command!*','Error\x20generating\x20welcome\x20image:\x20','object','string','👋\x20Goodbye!','\x20Group\x20info\x20change\x20option\x20locked!*','@group','antiToxic','remove','ceil','dfail','nsfw','https://welcome.guruapi.tech/welcome-image?username=','text','\x20*This\x20feature\x20is\x20disabled.*','env','role','&guildName=','lastclaim','\x20This\x20is\x20a\x20premium\x20command!*','MODE','fatal','\x0a📄\x20*Error\x20Logs:*\x0a','data','dirname','presences','cheater','icon','ANTI_DELETE','&background=','sBye','groupMetadata','ZYRONIX\x20BOT\x20-\x20MD','https://cdn.wallpapersafari.com/71/19/7ZfcpT.png','\x20This\x20is\x20a\x20inbox\x20command!*','mods','👏\x20Welcome\x20to\x20group!','readMessages','isBanned','tags','📊\x20*Level\x20required\x20','loadDatabase','5593MTvAFQ','plugins','exists','remoteJid','antiSticker','quoted','*🗂️\x20Command:*\x20','Welcome,\x20@user','restrict','https://i.imgur.com/8B4jwGq.jpeg','all','@revoke','&guildIcon=','queque','afkReason','sSubject','sender','error','expired','owner','msgqueque','rowner','after','@user','toLowerCase','registered','values','useDocument','messages','false','user','1470450BHOvOp','log','chicken','slice','👏\x20Welcome,\x20','@s.whatsapp.net','User\x20Banned\x20from\x20AFK.','\x5c$&','\x20The\x20group\x20chat\x20was\x20muted!*','\x20*This\x20feature\x20is\x20not\x20activated\x20in\x20the\x20group!*','11792tzkJHa','chat','94789481495@s.whatsapp.net','openGc','replace','vote','function','sIcon','profilePictureUrl','AUTO_STATUS_VIEW','sRestrictOff','desc','last','#HIDDEN#','revoke','undefined','before','toTimeString','unreg','24108018hSLuaV','sdemote','total','&avatar=','isGroup','nyimak','success','bye','spromote','find','__filename','pconly','./plugins','getmsg','11439ALkJYh','chatbot','owner-unbanchat.js','pollUpdates','*Group\x20icon\x20changed.*','autolevelup','getName','antiDelete','th\x20member!','announce','lastSuccess','🪙\x20*You\x20don\x27t\x20have\x20enough\x20gold.*','noprint','name','👋\x20Goodbye,\x20our\x20','\x0a${format(e)}','APIKeys','subject','message','participants','onWhatsApp','decodeJid','banned','default','detect','age','loadMessage','AFK','th\x20group\x20member!','splice','split','5oUjLkR','AUTO_READ_RECEIPTS','infoLock','antiLink','restartDB','&memberCount=','call','viewOnce','map','image','self','stats','indexOf','No\x20Reason','```','./lib/print.js','random','sendMessage','admin','296wYUXXn','7155225dgbvUt','private','reaction','sAnnounceOn','\x0a⏰\x20During:\x20','\x20Group\x20chat\x20unmuted!*','metadata','store','isCommand','sRevoke','redBright','infoUnlock','users','48JAKhzW','sAnnounceOff','Error\x20generating\x20leave\x20image:\x20','@desc','noAdmin','lastKnownPresence','catch','\x20*I\x27m\x20not\x20an\x20admin\x20here*','buffer','afk','botAdmin','exp','parseMention','sWelcome','isInit','toString','owner-unbanuser.js','autoread','reply','includes','*Group\x20description\x20changed.*\x0a@desc','isArray','join','\x20You\x20are\x20not\x20an\x20admin.','sDesc','promote','\x0a*👤\x20Sender:*\x20','g.us','superadmin','You\x20used\x20*','Update\x20handler.js','\x0a*💬\x20Chat:*\x20','Error\x20retrieving\x20profile\x20picture:\x20','command'];_0xa36e=function(){return _0x3fb0a4;};return _0xa36e();}let file=global[_0x52d8a8(0xda)](import.meta['url'],!![]);function _0x3a0e(_0x1b552b,_0xe7f5c3){const _0xa36e01=_0xa36e();return _0x3a0e=function(_0x3a0e02,_0xe53585){_0x3a0e02=_0x3a0e02-0x96;let _0x43ca58=_0xa36e01[_0x3a0e02];return _0x43ca58;},_0x3a0e(_0x1b552b,_0xe7f5c3);}watchFile(file,async()=>{const _0x43b405=_0x52d8a8;unwatchFile(file),console[_0x43b405(0xb4)](_0x3480bf[_0x43b405(0x11b)](_0x43b405(0x13c)));if(global[_0x43b405(0x165)])console[_0x43b405(0xb4)](await global['reloadHandler']());});
