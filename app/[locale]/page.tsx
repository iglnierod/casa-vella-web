import SiteNavbar from "../../components/sections/SiteNavbar";
import Hero from "../../components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-dvh bg-custom-darkgreen text-white">
      <SiteNavbar />
      <Hero />
      <div className="min-h-250">
        <h1>Hola</h1>
      </div>
    </main>
  );
}
