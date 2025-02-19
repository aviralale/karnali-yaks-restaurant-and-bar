import Hero from "@/components/Hero";
import HeroMenu from "@/components/HeroMenu";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-24">
      <section
        style={{
          padding: "2rem 15rem",
        }}
      >
        <Hero />
      </section>
      <section
        className="bg-white"
        style={{
          padding: "2rem 15rem",
        }}
      >
        <HeroMenu />
      </section>
    </main>
  );
};

export default HomePage;
