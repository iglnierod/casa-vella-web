import Image, { StaticImageData } from "next/image";

export default async function RuleCard({
  icon,
  title,
  desc,
}: {
  icon: StaticImageData;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-zinc-600 bg-green-200/5 p-4 sm:max-w-sm">
      <Image src={icon} width={28} alt="icon" className="" />
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">{title}</h5>
        <p className="text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}
