
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Project from "@/components/Project";
import Skills from "@/components/Skills";


export default function Home() {

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <div className="flex flex-col min-h-screen w-full font-Avenir text-base sm:text-lg md:text-xl lg:text-2xl " >
      <main className="flex-grow p-4">
        <Header />
        <Introduction />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
