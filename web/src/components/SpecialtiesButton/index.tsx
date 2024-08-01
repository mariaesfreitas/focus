import Link from 'next/link';

type SpecialtiesButtonProps = {
  title: string;
  href: string;
};

export function SpecialtiesButton({ title, href }: SpecialtiesButtonProps) {
  return (
    <Link
      href={href}
      passHref
      className="bg-cyan-950 p-12 w-72 h-72 flex items-center justify-center"
    >
      <p className="text-white text-bold text-3xl text-center">{title}</p>
    </Link>
  );
}
