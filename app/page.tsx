"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wohnungsfinder from "./components/Wohnungsfinder";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-screen h-desktop flex place-items-center place-content-center">
        <Sidebar />
        <aside className="h-full w-full xl:w-desktop relative">
          <Wohnungsfinder />
          <Navigation />
        </aside>
      </main>
    </>
  );
}
