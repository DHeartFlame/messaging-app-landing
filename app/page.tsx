import Groups from "@/widgets/home/Groups";
import Hero from "@/widgets/home/Hero";
import Numbers from "@/widgets/home/Numbers";

export default function Home() {
  return (
    <main id="page" className="snap-y h-screen overflow-y-auto overflow-x-hidden snap-mandatory relative scroll-smooth">
      <Hero />
      <Numbers />
      <Groups />
      <section className="h-screen snap-start"></section>
      <section className="h-screen bg-primary snap-start"></section>
    </main>
  );
}
