(()=>{var e={672:()=>{class e{constructor(e,t){if(e.length<2||e.length>10)throw new Error("Имя должно содержать от 2 до 10 символов");if(!["Bowman","Swordsman","Magician","Daemon","Undead","Zombie"].includes(t))throw new Error("Invalid character type. Allowed types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.");this.name=e,this.type=t,this.health=100,this.level=1,this.attack=0,this.defence=0}}const t=new class extends e{constructor(e){super(e,"Bowman"),this.attack=25,this.defence=25}}("Bowman");console.log(t);const s=new class extends e{constructor(e){super(e,"Swordsman"),this.attack=40,this.defence=10}}("Swordsman");console.log(s);const n=new class extends e{constructor(e){super(e,"Magician"),this.attack=10,this.defence=40}}("Magician");console.log(n);const o=new class extends e{constructor(e){super(e,"Undead"),this.attack=25,this.defence=25}}("Undead");console.log(o);const a=new class extends e{constructor(e){super(e,"Zombie"),this.attack=40,this.defence=10}}("Zombie");console.log(a);const c=new class extends e{constructor(e){super(e,"Daemon"),this.attack=10,this.defence=40}}("Daemon");console.log(c)}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(672)})()})();