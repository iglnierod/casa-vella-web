import Paw from "@/public/paw.svg";
import SmokingNo from "@/public/smoking-no.svg";
import Users from "@/public/users.svg";
import Gavel from "@/public/gavel.svg";
import Clock from "@/public/clock.svg";
import BalloonOff from "@/public/balloon-off.svg";
import Key from "@/public/key.svg";
import Image from "next/image";
import RuleCard from "../ui/RuleCard";

export default function Rules() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="flex items-center gap-2">
        <Image src={Gavel} alt="gavel icon" width={28} />
        <h3 className="text-2xl font-bold">Reglas de la casa</h3>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <RuleCard icon={Users} title={"No pets"} desc={"Help us stay clean"} />
        <RuleCard icon={Clock} title={"No pets"} desc={"Help us stay clean"} />
        <RuleCard icon={Paw} title={"No pets"} desc={"Help us stay clean"} />
        <RuleCard icon={SmokingNo} title={"No pets"} desc={"Help us stay clean"} />
        <RuleCard icon={BalloonOff} title={"No pets"} desc={"Help us stay clean"} />
        <RuleCard icon={Key} title={"No pets"} desc={"Help us stay clean"} />
      </div>
    </div>
  );
}
