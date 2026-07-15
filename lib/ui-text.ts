import type { Lang } from './i18n';
export type Tri={en:string;ru:string;ar:string};
export const tr=(x:Tri,l:Lang)=>x[l];
export const ui={
centersEy:{en:'CENTERS OF EXCELLENCE',ru:'ЦЕНТРЫ ЭКСПЕРТИЗЫ',ar:'مراكز التميز'},
conditionsEy:{en:'CONDITIONS',ru:'ЗАБОЛЕВАНИЯ',ar:'الحالات'},
proceduresEy:{en:'SURGICAL PROCEDURES',ru:'ХИРУРГИЧЕСКИЕ ПРОЦЕДУРЫ',ar:'الإجراءات الجراحية'},
conditionEy:{en:'FOOT & ANKLE CONDITION',ru:'ЗАБОЛЕВАНИЕ СТОПЫ И ГОЛЕНОСТОПА',ar:'حالة القدم والكاحل'},
procedureEy:{en:'SURGICAL PROCEDURE',ru:'ХИРУРГИЧЕСКАЯ ПРОЦЕДУРА',ar:'إجراء جراحي'},
review:{en:'SPECIALIST REVIEW',ru:'ЭКСПЕРТНЫЙ РАЗБОР',ar:'مراجعة اختصاصي'},
caseReview:{en:'CASE REVIEW',ru:'РАЗБОР СЛУЧАЯ',ar:'مراجعة الحالة'},
learnCondition:{en:'Symptoms, diagnosis, treatment and recovery.',ru:'Симптомы, диагностика, лечение и восстановление.',ar:'الأعراض والتشخيص والعلاج والتعافي.'},
learnProcedure:{en:'Indications, planning, procedure and recovery.',ru:'Показания, планирование, операция и восстановление.',ar:'الدواعي والتخطيط والإجراء والتعافي.'},
needOpinion:{en:'Need an expert opinion?',ru:'Нужно экспертное мнение?',ar:'هل تحتاج إلى رأي خبير؟'},
considering:{en:'Considering surgery?',ru:'Рассматриваете операцию?',ar:'هل تفكر في الجراحة؟'},
sendImaging:{en:'Send your imaging and medical reports for a preliminary case review.',ru:'Отправьте снимки и медицинские документы для предварительного разбора.',ar:'أرسل الصور والتقارير الطبية للمراجعة الأولية.'},
};
