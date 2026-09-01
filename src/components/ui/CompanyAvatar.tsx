interface CompanyAvatarProps {
  name: string;
  logo?: string;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'rounded';
  className?: string;
  logoClassName?: string;
  fallbackClassName?: string;
}

const sizeClasses: Record<NonNullable<CompanyAvatarProps['size']>, string> = {
  sm: 'h-16 w-16',
  md: 'h-20 w-20',
  lg: 'h-24 w-24',
};

const shapeClasses: Record<NonNullable<CompanyAvatarProps['shape']>, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-md',
};

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join('');

export default function CompanyAvatar({
  name,
  logo,
  size = 'md',
  shape = 'circle',
  className = '',
  logoClassName = '',
  fallbackClassName = '',
}: CompanyAvatarProps) {
  const baseClasses = `${sizeClasses[size]} ${shapeClasses[shape]} ${className}`.trim();

  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className={`${baseClasses} object-contain ${logoClassName}`.trim()}
      />
    );
  }

  return (
    <div
      className={`${baseClasses} flex items-center justify-center ${fallbackClassName}`.trim()}
    >
      {getInitials(name)}
    </div>
  );
}
