"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wohnungsfinder from "./components/Wohnungsfinder";
import Navigation from "./components/Navigation";
import t from "./data/text.json";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-screen h-desktop flex place-items-center place-content-center">
        <Sidebar t={t} />
        <aside className="h-full w-desktop">
          <Wohnungsfinder />
          <Navigation />
        </aside>
      </main>
    </>
  );
}
