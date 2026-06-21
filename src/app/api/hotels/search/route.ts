import { NextResponse } from "next/server";

// Mock hotels swap this body for a real Amadeus Hotel Search call when ready.
const mockResults = [
  {
    id: "1",
    name: "The Ritz-Carlton Orlando",
    stars: 5,
    location: "Orlando, FL",
    pricePerNight: 389,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "Hilton Miami Downtown",
    stars: 4,
    location: "Miami, FL",
    pricePerNight: 229,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "Wyndham Grand Las Vegas",
    stars: 4,
    location: "Las Vegas, NV",
    pricePerNight: 149,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=400&q=80",
  },
];

export async function POST() {
  return NextResponse.json({ results: mockResults });
}
