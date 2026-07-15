export default function Logo({compact=false}:{compact?:boolean}){
  return <span className={compact?'logo-symbol compact':'logo-symbol'} aria-hidden="true">
    <svg viewBox="0 0 96 96" role="img">
      <circle cx="48" cy="48" r="43" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M42 17c1 14 2 25-1 37-2 9-8 15-15 20M55 17c-1 16-1 27 3 39 3 9 8 14 14 18M42 54c4 2 8 3 13 2M26 74c11-1 20 1 29 6M72 74c-8 0-13 2-18 6M35 61c-5 1-10 5-13 10M61 61c5 1 10 5 13 10M46 25v24M51 25v24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 76c4-8 8-12 13-13 5 1 9 5 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </span>
}
