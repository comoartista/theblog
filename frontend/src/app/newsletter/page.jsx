import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import React from "react";

export default function Newsletter() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="c-container flex-grow flex flex-col items-center justify-center">
        {" "}
        <Subscribe />
      </main>
      <Footer className="" />
    </div>
  );
}
