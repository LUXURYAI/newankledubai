export default function Logo({compact=false}:{compact?:boolean}){
  return <span className={`logo-mark ${compact?'compact':''}`} aria-hidden="true">
    <svg viewBox="0 0 64 64" role="img"><circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M29 10c-.5 9-1.2 17-2.8 24.5-1.3 6-5 9.2-10.2 11.2M35 10c.4 10 .9 20 2.6 27.6 1.2 5.2 4.5 8.2 10.4 9.7M27.5 34c3.2 2.6 6.8 4 10.7 4.1M20 48c8.5 2.3 17 2.4 25.5.2M31.5 15v17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
}
