
import Link from 'next/link';

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link 
      href={pageRef} 
      className="text-slate-600 hover:text-blue-800 font-semibold text-lg tracking-wide px-4 py-2 rounded-md hover:bg-slate-100 transition-all duration-300"
    >
      {title}
    </Link>
  );
}