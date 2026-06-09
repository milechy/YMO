import Link from 'next/link';

interface BlogCardProps {
  date: string;
  category: string;
  title: string;
  excerpt?: string;
  href: string;
  onDark?: boolean;
}

export function BlogCard({ date, category, title, excerpt, href, onDark = false }: BlogCardProps) {
  return (
    <Link
      href={href}
      className={`group block border-t py-6 hover:border-brand-yellow transition-colors duration-300 ${
        onDark ? 'border-brand-border' : 'border-black/10'
      }`}
    >
      <div className="flex items-center gap-4 mb-3">
        <time
          className={`font-mono text-xs ${onDark ? 'text-brand-gray' : 'text-brand-gray'}`}
        >
          {date}
        </time>
        <span className="text-[10px] bg-brand-yellow text-brand-black px-2 py-0.5 font-bold tracking-wider">
          {category}
        </span>
      </div>
      <h3
        className={`font-bold leading-snug group-hover:text-brand-yellow transition-colors duration-200 ${
          onDark ? 'text-brand-white' : 'text-brand-black'
        }`}
      >
        {title}
      </h3>
      {excerpt && (
        <p className="mt-2 text-brand-gray text-sm line-clamp-2 leading-relaxed">{excerpt}</p>
      )}
    </Link>
  );
}
