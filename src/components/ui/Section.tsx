type SectionProps = {
  children: React.ReactNode;
  label: string;
};

export const Section = ({ children, label }: SectionProps) => {
  return (
    <section className="w-full md:w-10/12 m-auto mt-4 p-4" aria-label={label}>
      {children}
    </section>
  );
};
