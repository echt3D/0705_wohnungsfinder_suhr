"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wohnungsfinder from "./components/Wohnungsfinder";
import Navigation from "./components/Navigation";
import t from "./data/text.json";
import { Apartment } from "./utils/types";

export default function Home() {
  const [apartments, setApartments] = useState<Apartment[] | null>(null);
  useEffect(() => {
    fetch("/api/get-all-apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data.data));
  }, []);
  return (
    <>
      <Header />
      <main className="w-screen h-desktop flex place-items-center place-content-center">
        <Sidebar t={t} apartments={apartments} />
        <aside className="h-full w-desktop">
          <Wohnungsfinder />
          <Navigation />
        </aside>
      </main>
    </>
  );
}
