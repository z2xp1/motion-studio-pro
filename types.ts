export type ShapeKind='text'|'circle'|'rect'|'line'|'ring'|'triangle'|'particles';
export type EffectKind='glow'|'glitch'|'grain'|'vignette'|'rgb'|'blur';
export type TransitionKind='none'|'zoom'|'whip'|'radial'|'glitch'|'wipe'|'flip';
export type Keyframe={time:number;x?:number;y?:number;scale?:number;rotation?:number;opacity?:number;tracking?:number};
export type Layer={id:string;name:string;kind:ShapeKind;text?:string;color:string;accent?:string;x:number;y:number;scale:number;rotation:number;opacity:number;size:number;start:number;duration:number;track:number;effect?:EffectKind;keyframes:Keyframe[];fontSize?:number;transition?:TransitionKind};
export type Scene={id:string;name:string;start:number;duration:number;style:string;bg:string;transition:TransitionKind;layers:Layer[]};
export type Project={name:string;fps:number;width:number;height:number;scenes:Scene[]};
