
export default function FullNameSymbol({ size = 200,  className = "", color = "currentColor"}: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size * 0.3} viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M 8 15 Q 15 8 25 12 Q 30 14 35 10"
        stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />

      <path d="M 10 45 L 20 20 L 30 45 M 15 35 L 25 35" 
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <path d="M 40 20 L 55 20 M 47.5 20 L 47.5 45"
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <path d="M 65 20 L 65 45 L 75 45" 
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <path d="M 85 45 L 95 20 L 105 45 M 90 35 L 100 35" 
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <path d="M 125 25 Q 120 20 115 25 Q 115 30 120 32.5 Q 125 35 125 40 Q 125 45 120 45 Q 115 45 115 40" 
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <path d="M 135 20 L 145 20 M 140 20 L 140 45 M 135 45 L 145 45"
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  
      <path d="M 155 45 L 165 20 L 175 45 M 160 35 L 170 35"
        stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      

    </svg>
  );
}