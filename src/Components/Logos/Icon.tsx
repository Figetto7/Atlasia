

export default function LettermarkLogo({ size = 100, className = "", primaryColor = "currentColor", secondaryColor = "#6b7280" }: { size?: number; className?: string; primaryColor?: string; secondaryColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" >
      <circle cx="50" cy="50" r="45" stroke={secondaryColor} strokeWidth="2" fill="none" />

      <ellipse cx="50" cy="50" rx="45" ry="15" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.5" />

      <ellipse cx="50" cy="50" rx="45" ry="30" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.3" />

      <ellipse cx="50" cy="50" rx="15" ry="45" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.3" />

      <ellipse cx="50" cy="50" rx="30" ry="45" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.5" />

      <line x1="50" y1="5" x2="50" y2="95" stroke={secondaryColor} strokeWidth="1" opacity="0.5" />

      <path
        d="M 35 75 L 50 25 L 65 75 M 40 60 L 60 60"
        stroke={primaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
