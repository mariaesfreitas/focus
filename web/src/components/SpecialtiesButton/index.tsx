type SpecialtiesButtonProps = {
  title: string;
  href: string;
};

export function SpecialtiesButton({ title, href }: SpecialtiesButtonProps) {
  return (
    <button className="bg-cyan-950 p-12 w-72 h-72">
      <a href={href} className="text-white text-bold text-3xl text-center">
        {title}
      </a>
    </button>
  );
}
