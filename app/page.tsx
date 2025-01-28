import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wohnungsfinder from "./components/Wohnungsfinder";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-screen h-desktop flex place-items-center place-content-center font-neue_kabel">
        <Sidebar />
        <Wohnungsfinder />
      </main>
    </>
  );
}
