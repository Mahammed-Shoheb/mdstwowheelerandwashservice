import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Mission,
  Services,
  Visit,
  WhyChooseUs,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Mission />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
