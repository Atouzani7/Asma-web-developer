import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
// import Test from "@/components/Test";


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen w-full font-Avenir text-base sm:text-lg md:text-xl lg:text-2xl " >

      <main className="flex-grow p-4">
        <Header />
        <Introduction />
        <Skills />
        <Project />
        <Contact />
        {/* <Test /> */}
      </main>
      <Footer />
    </div>
  );
}
