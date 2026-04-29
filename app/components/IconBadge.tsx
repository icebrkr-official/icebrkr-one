import type { LucideIcon } from 'lucide-react';

type IconTone = 'red' | 'green' | 'orange' | 'dark' | 'blue' | 'violet';
type IconSize = 'sm' | 'md' | 'lg';

const toneClasses: Record<IconTone, string> = {
  red: 'bg-[#E8302A]/10 text-brand-red border-[#E8302A]/15',
  green: 'bg-[#27AE60]/10 text-brand-green border-[#27AE60]/15',
  orange: 'bg-[#F5A623]/10 text-brand-orange border-[#F5A623]/15',
  dark: 'bg-[#0F1923]/10 text-brand-dark border-[#0F1923]/10',
  blue: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/15',
  violet: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/15',
};

const sizeClasses: Record<IconSize, string> = {
  sm: 'h-9 w-9 [&_svg]:h-[18px] [&_svg]:w-[18px]',
  md: 'h-11 w-11 [&_svg]:h-5 [&_svg]:w-5',
  lg: 'h-12 w-12 [&_svg]:h-[22px] [&_svg]:w-[22px]',
};

type IconBadgeProps = {
  icon: LucideIcon;
  tone: IconTone;
  size?: IconSize;
  className?: string;
};

export function IconBadge({
  icon: Icon,
  tone,
  size = 'md',
  className = '',
}: IconBadgeProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-[10px] border ${toneClasses[tone]} ${sizeClasses[size]} ${className}`.trim()}
    >
      <Icon strokeWidth={1.8} />
    </div>
  );
}

export type { IconTone };
