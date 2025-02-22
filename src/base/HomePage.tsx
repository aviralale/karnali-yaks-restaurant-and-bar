import GoogleMaps from "@/components/GoogleMaps";
import Hero from "@/components/Hero";
import HeroCategories from "@/components/HeroCategories";
import HeroMenu from "@/components/HeroMenu";
import HomeLatest from "@/components/HomeLatest";

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
        <section
          className="bg-white"
          style={{
            padding: "2rem 15rem",
          }}
        >
          <HeroCategories />
        </section>
      </section>
      <section
        style={{
          padding: "2rem 15rem",
        }}
      >
        <HomeLatest />
      </section>
      <section
        className="bg-white"
        style={{
          padding: "2rem 15rem",
        }}
      >
        <GoogleMaps />
      </section>
    </main>
  );
};

export default HomePage;
