import { content, type Lang } from "./content";
export const supportedLangs: Lang[] = ["en","ru","ar"];
export function getLang(value:string):Lang { return supportedLangs.includes(value as Lang) ? value as Lang : "en"; }
export function getContent(lang:Lang){ return content[lang]; }
export function isRtl(lang:Lang){ return lang==="ar"; }
