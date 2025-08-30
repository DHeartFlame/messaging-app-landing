import Hero from "@/widgets/home/Hero";

export default function Home() {
  return (
    <main className="snap-y h-screen overflow-y-auto overflow-x-hidden snap-mandatory relative scroll-smooth">
      <Hero />
      <section className="h-screen bg-tertiary snap-start"></section>
      <section className="h-screen snap-start"></section>
      <section className="h-screen snap-start"></section>
      <section className="h-screen bg-primary snap-start"></section>
    </main>
  );
}
