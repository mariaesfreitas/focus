type SectionDivisionProps = {
  title: string;
};

export function SectionDivision({ title }: SectionDivisionProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-6 w-full">
      <p className="text-cyan-950 text-3xl font-medium">{title}</p>
      <div className="mt-6 relative flex justify-center items-center border-2 border-customGold w-1/2 lg:w-1/4">
        <div className="absolute bg-customGold w-8 h-8 rounded-full"></div>
      </div>
    </div>
  );
}
