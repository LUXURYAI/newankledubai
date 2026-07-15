import LegalPage from '@/components/LegalPage'; import {isLang} from '@/lib/i18n';
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLang(lang))return null;return <LegalPage lang={lang} kind="privacy"/>}
