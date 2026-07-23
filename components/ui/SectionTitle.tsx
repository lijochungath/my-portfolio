type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">

      <p className="text-blue-400 uppercase tracking-[6px]">
        {subtitle}
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        {title}
      </h2>

    </div>
  );
}