import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import HotelsClient from "./HotelsClient";

export const metadata: Metadata = {
  title: "Hotels - Tripile",
  description: "Search hotels with a real agent standing by.",
};

export default function HotelsPage() {
  return (
    <>
      <Nav />
      <HotelsClient />
    </>
  );
}
