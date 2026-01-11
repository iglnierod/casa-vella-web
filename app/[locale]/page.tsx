import SiteNavbar from "../../components/sections/SiteNavbar";
import Hero from "../../components/sections/Hero";
import Description from "@/components/sections/Description";
import Rules from "@/components/sections/Rules";
import Separator from "@/components/ui/Separator";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="bg-custom-darkgreen min-h-dvh text-white">
        <Hero />
        <section className="mt-8">
          <div className="px-3">
            <div>
              <Description />
              <Separator />
              <div className="grid grid-cols-1 gap-8">
                <Rules />
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
