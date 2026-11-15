import fs from 'node:fs/promises';
let pending=false;const key=process.env.MODERATION_KEY;
if(key){try{const r=await fetch('https://ha-ngan-event.placidoleander8.chatgpt.site/api/moderation/pending',{headers:{Authorization:'Bearer '+key},signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('HTTP '+r.status);const data=await r.json();pending=data.posts.length>0;console.log('Pending count: '+data.posts.length);}catch(e){console.warn('Queue not ready; keep submissions pending. '+e.message);}}else console.log('AI review not connected yet; no paid service is used.');
if(process.env.GITHUB_OUTPUT)await fs.appendFile(process.env.GITHUB_OUTPUT,'pending='+pending+'\n');
