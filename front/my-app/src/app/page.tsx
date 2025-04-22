
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div className="  font-[family-name:var(--font-gatwick)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Navbar />
        <Footer />
      </main>

    </div>
  );
}
