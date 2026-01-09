import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Inicio");

  return (
    <div>
      <h1>A casa vella</h1>
    </div>
  );
}
