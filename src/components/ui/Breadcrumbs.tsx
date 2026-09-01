import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type Crumb = {
  label: string;
  to?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  current?: boolean;
};

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm text-(--color-text-muted) ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const content = item.to ? (
          <Link
            to={item.to}
            onClick={(event) => {
              if (item.onClick) {
                item.onClick(event);
              }
            }}
            className={`hover:text-primary-600 transition-colors ${item.current ? 'text-(--color-text) font-semibold' : ''}`}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ) : (
          <span className={`cursor-default ${item.current ? 'text-(--color-text) font-semibold' : ''}`} aria-current={item.current ? 'page' : undefined}>
            {item.label}
          </span>
        );

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {content}
            {!isLast && <span className="text-gray-400">/</span>}
          </div>
        );
      })}
    </nav>
  );
}
