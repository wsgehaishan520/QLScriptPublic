/*
软件名称：哈啰
版本：0.0.4
抓包位置：首页 福利中心 查看更多 抓包 api.hellobike.com/api?urser 请求里面的 TOKEN
定时:一天一次
变量名：hlToken
多账号用&隔开
export hlToken="23fexxxxxxxxxxxxxxxxxxxxxxxxxxxx"
奖励：奖励金可换手机话费抵用券，便宜充话费
*/
const _0x389411=_0x4d39;(function(_0x7b3aed,_0x2ef8a3){const _0x219594=_0x4d39,_0x5adf9=_0x7b3aed();while(!![]){try{const _0x390367=-parseInt(_0x219594(0x1e2))/0x1*(-parseInt(_0x219594(0x1e0))/0x2)+-parseInt(_0x219594(0x1ec))/0x3*(parseInt(_0x219594(0x1d8))/0x4)+-parseInt(_0x219594(0x1eb))/0x5+-parseInt(_0x219594(0x1e8))/0x6*(-parseInt(_0x219594(0x1dc))/0x7)+-parseInt(_0x219594(0x1f4))/0x8+parseInt(_0x219594(0x1db))/0x9+parseInt(_0x219594(0x1d5))/0xa;if(_0x390367===_0x2ef8a3)break;else _0x5adf9['push'](_0x5adf9['shift']());}catch(_0x480ab0){_0x5adf9['push'](_0x5adf9['shift']());}}}(_0xc102,0xce09a));const axios=require(_0x389411(0x1d2));function _0x4d39(_0x3eb44c,_0x545b67){const _0xc10201=_0xc102();return _0x4d39=function(_0x4d3914,_0x59f643){_0x4d3914=_0x4d3914-0x1d0;let _0xb06f56=_0xc10201[_0x4d3914];return _0xb06f56;},_0x4d39(_0x3eb44c,_0x545b67);}let hlToken=process[_0x389411(0x1f8)][_0x389411(0x1de)];!hlToken&&(console[_0x389411(0x1dd)](_0x389411(0x1f7)),process['exit'](0x1));let tokens=hlToken['includes']('&')?hlToken[_0x389411(0x1f0)]('&'):[hlToken];const SIGN_URL='https://api.hellobike.com/api?common.welfare.signAndRecommend',POINT_URL=_0x389411(0x1ee);async function requestPost(_0x3b1aee,_0x1d60b9,_0x277345){const _0x17f805=_0x389411;try{const _0x5989b2={'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Mobile)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/96.0.4664.104\x20Mobile\x20Safari/537.36','Content-Type':_0x17f805(0x1d6),'Authorization':_0x277345},_0x44d747=await axios[_0x17f805(0x1d3)](_0x3b1aee,_0x1d60b9,{'headers':_0x5989b2});return _0x44d747[_0x17f805(0x1f5)];}catch(_0xea967c){return console[_0x17f805(0x1ea)](_0x17f805(0x1f1),_0xea967c[_0x17f805(0x1d7)]?_0xea967c[_0x17f805(0x1d7)]['data']:_0xea967c[_0x17f805(0x1ef)]),null;}}async function signIn(_0x34d077,_0x1a938f){const _0x5b299b=_0x389411;console[_0x5b299b(0x1dd)](_0x5b299b(0x1d1)+(_0x1a938f+0x1)+_0x5b299b(0x1fa));const _0x5b52fc={'from':'h5','systemCode':0x3e,'platform':0x4,'version':_0x5b299b(0x1e3),'action':_0x5b299b(0x1da),'token':_0x34d077,'pointType':0x1},_0x4940a9=await requestPost(SIGN_URL,_0x5b52fc,_0x34d077);if(_0x4940a9&&_0x4940a9[_0x5b299b(0x1f5)]){const {bountyCountToday:_0xcd307a,didSignToday:_0x496aca}=_0x4940a9[_0x5b299b(0x1f5)];if(_0xcd307a)return console[_0x5b299b(0x1dd)](_0x5b299b(0x1e1)+(_0x1a938f+0x1)+_0x5b299b(0x1f6)+_0xcd307a),!![];else{if(_0x496aca)return console[_0x5b299b(0x1dd)](_0x5b299b(0x1f2)+(_0x1a938f+0x1)+_0x5b299b(0x1f3)),![];}}return console[_0x5b299b(0x1dd)](_0x5b299b(0x1d0)+(_0x1a938f+0x1)+'\x20签到失败，API\x20返回异常:',JSON['stringify'](_0x4940a9)),![];}async function getRewards(_0x5380f3,_0x1447b8){const _0x2b5d00=_0x389411;console[_0x2b5d00(0x1dd)]('💰\x20查询账号\x20'+(_0x1447b8+0x1)+_0x2b5d00(0x1e6));const _0xfb3730={'from':'h5','systemCode':0x3d,'platform':0x4,'version':_0x2b5d00(0x1e3),'action':_0x2b5d00(0x1e5),'token':_0x5380f3,'pointType':0x1},_0xf366f9=await requestPost(POINT_URL,_0xfb3730,_0x5380f3);if(_0xf366f9&&_0xf366f9[_0x2b5d00(0x1f5)]&&_0xf366f9['data'][_0x2b5d00(0x1e7)]!==undefined){const _0x1af42b=_0xf366f9[_0x2b5d00(0x1f5)][_0x2b5d00(0x1e7)];console[_0x2b5d00(0x1dd)]('🎉\x20账号\x20'+(_0x1447b8+0x1)+_0x2b5d00(0x1ed)+_0x1af42b);}else console['log'](_0x2b5d00(0x1d0)+(_0x1447b8+0x1)+_0x2b5d00(0x1e9),JSON[_0x2b5d00(0x1e4)](_0xf366f9));}function _0xc102(){const _0x252742=['points','24XHUbvN','\x20查询奖励金失败，API\x20返回异常:','error','2254910vgXnXj','3puJyNJ','\x20可用奖励金：','https://api.hellobike.com/api?user.taurus.pointInfo','message','split','❌\x20请求失败:','⚠️\x20账号\x20','\x20今天已经签到过了！','11359680EmTOcz','data','\x20签到成功！获得奖励金\x20+','❌\x20未设置环境变量\x20hlToken，请检查配置！','env','✨✨✨\x20哈啰签到脚本启动\x20✨✨✨','\x20开始签到...','❌\x20账号\x20','\x0a🚀\x20账号\x20','axios','post','\x0a🎉\x20所有账号任务执行完毕！','16508740vGrDBP','application/json','response','893852VWBewm','length','common.welfare.signAndRecommend','342450vfFeXW','2037917SANNdn','log','hlToken','random','2PYLQVJ','✅\x20账号\x20','84887arhOPN','6.46.0','stringify','user.taurus.pointInfo','\x20奖励金...'];_0xc102=function(){return _0x252742;};return _0xc102();}((async()=>{const _0x1c8492=_0x389411;console['log'](_0x1c8492(0x1f9));for(let _0x274007=0x0;_0x274007<tokens[_0x1c8492(0x1d9)];_0x274007++){let _0x562af6=tokens[_0x274007];await signIn(_0x562af6,_0x274007)&&(await new Promise(_0x8b3f08=>setTimeout(_0x8b3f08,Math[_0x1c8492(0x1df)]()*0xbb8+0x7d0)),await getRewards(_0x562af6,_0x274007));}console[_0x1c8492(0x1dd)](_0x1c8492(0x1d4));})());
