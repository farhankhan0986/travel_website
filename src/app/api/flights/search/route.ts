import { NextResponse } from "next/server";

// Mock flights — swap this body for a real Amadeus call when ready.
// Field names follow the shape we'll receive from Amadeus Flight Offers Search.
const mockResults = [
  {
    id: "1",
    airline: "American Airlines",
    flightNumber: "AA 234",
    origin: "JFK",
    destination: "MIA",
    departureTime: "08:30",
    arrivalTime: "11:15",
    duration: "2h 45m",
    stops: 0,
    cabin: "Economy",
    price: 189,
    currency: "USD",
  },
  {
    id: "2",
    airline: "Delta Air Lines",
    flightNumber: "DL 567",
    origin: "JFK",
    destination: "MIA",
    departureTime: "12:15",
    arrivalTime: "16:30",
    duration: "4h 15m",
    stops: 1,
    cabin: "Economy",
    price: 155,
    currency: "USD",
  },
  {
    id: "3",
    airline: "United Airlines",
    flightNumber: "UA 891",
    origin: "JFK",
    destination: "MIA",
    departureTime: "16:00",
    arrivalTime: "19:05",
    duration: "3h 05m",
    stops: 0,
    cabin: "Economy",
    price: 210,
    currency: "USD",
  },
];

export async function POST() {
  return NextResponse.json({ results: mockResults });
}
