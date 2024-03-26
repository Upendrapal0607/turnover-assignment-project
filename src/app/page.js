"use client"
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

export default function Home() {
  return (
    <main className="min-h-screen">
         <BrowserRouter>
 <App/>
      </BrowserRouter>
    </main>
  );
}
