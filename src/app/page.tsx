import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Keywords } from "@/components/Keywords";
import { Works } from "@/components/Works";
import { DesignWorks } from "@/components/DesignWorks";
import { Outro } from "@/components/Outro";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <main>
        <Profile />
        <Keywords />
        <Works />
        <DesignWorks />
        <Outro />
      </main>
      <Footer />
    </>
  );
}
