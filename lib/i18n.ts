export const languages = ["en", "ru", "ar"] as const;
export type Lang = typeof languages[number];
export function isLang(v: string): v is Lang { return languages.includes(v as Lang); }
export function dir(lang: Lang){ return lang === "ar" ? "rtl" : "ltr"; }
