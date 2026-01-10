import SiteNavbar from "../../components/sections/SiteNavbar";
import Hero from "../../components/sections/Hero";
import Description from "@/components/sections/Description";
import Rules from "@/components/sections/Rules";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-dvh bg-custom-darkgreen text-white">
        <Hero />
        <section className="mt-8 min-h-[1000px]">
          <div className="px-3">
            <div>
              <Description />
              <hr className="m-4 text-zinc-500/30" />
              <Rules />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
