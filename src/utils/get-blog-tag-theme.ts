export default function getBlogTagTheme(theme: string): string {
  const tagThemes: Record<string, string> = {
    announcement: 'bg-[#E0E7FF] text-[#382E9E]',
    industry: 'bg-[#FEF6CD] text-[#8A420F]',
    explanation: 'bg-[#D1FAE5] text-[#056049]',
    engineering: 'bg-gray-94',
    'how-to': 'bg-[#F9E8FF] text-[#8E1B98]',
    'case-study': 'bg-[#CFFAFE] text-[#176782]',
  };

  return tagThemes[theme] || '';
}
