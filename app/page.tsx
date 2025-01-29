import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wohnungsfinder from "./components/Wohnungsfinder";
import AptProvider from "./components/AptProvider";
import Navigation from "./components/Navigation";
import t from "./data/text.json";

export default function Home() {
  return (
    <AptProvider>
      <Header />
      <main className="w-screen h-desktop flex place-items-center place-content-center font-neue_kabel">
        <Sidebar t={t} />
        <aside className="h-full w-desktop">
          <Wohnungsfinder />
          <Navigation />
        </aside>
      </main>
    </AptProvider>
  );
}
