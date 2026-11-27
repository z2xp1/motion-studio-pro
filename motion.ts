import type {Layer,Keyframe,Scene} from '../types';
const clamp=(v:number,a=0,b=1)=>Math.max(a,Math.min(b,v));
export function ease(t:number){t=clamp(t);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
export function sample(layer:Layer,time:number){const local=time-layer.start;const enter=ease(clamp(local/.8));const exit=ease(clamp((layer.duration-local)/.55));const k=layer.keyframes;
 let props={x:layer.x,y:layer.y,scale:layer.scale,rotation:layer.rotation,opacity:layer.opacity,tracking:0};
 if(k.length){let a=k[0],b=k[k.length-1];for(let i=0;i<k.length-1;i++){if(local>=k[i].time&&local<=k[i+1].time){a=k[i];b=k[i+1];break}}const span=Math.max(.001,b.time-a.time),p=ease(clamp((local-a.time)/span));for(const key of ['x','y','scale','rotation','opacity','tracking'] as const){const av=a[key]??props[key],bv=b[key]??av;props[key]=av+(bv-av)*p}}
 return {...props,opacity:props.opacity*enter*exit,scale:props.scale*(.86+.14*enter),y:props.y+(1-enter)*36};}
export function sceneAt(scenes:Scene[],time:number){return scenes.find(s=>time>=s.start&&time<s.start+s.duration)||scenes[scenes.length-1]}
