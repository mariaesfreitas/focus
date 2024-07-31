type MenuItemProps = {
  href: string;
  title: string;
};

export function MenuItem({ href, title }: MenuItemProps) {
  return (
    <a
      href={href}
      className="text-center text-white font-bold text-xl relative group"
    >
      {title}
      <span className="absolute left-1/2 bottom-[-4px] w-[120%] h-[2px] bg-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2"></span>
    </a>
  );
}
