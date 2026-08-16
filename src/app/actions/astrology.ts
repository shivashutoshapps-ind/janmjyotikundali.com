'use server';

import { AstronomyEngineProvider } from '@/lib/astrology/AstronomyEngineProvider';
import { BirthData } from '@/lib/astrology/types';

const provider = new AstronomyEngineProvider();

export async function calculateRashiAction(data: BirthData) {
  return provider.calculateRashi(data);
}

export async function calculateNakshatraAction(data: BirthData) {
  return provider.calculateNakshatra(data);
}

export async function calculateLagnaAction(data: BirthData) {
  return provider.calculateLagna(data);
}

export async function calculateKundliAction(data: BirthData) {
  return provider.calculateKundli(data);
}

export async function calculatePanchangAction(dateStr: string, locationStr: string) {
  // Simple mock location mapping for development deterministic test cases
  const locationMap: Record<string, {name: string, latitude: number, longitude: number, timezone: string}> = {
    'नई दिल्ली': { name: 'New Delhi', latitude: 28.6139, longitude: 77.2090, timezone: 'Asia/Kolkata' },
    'mumbai': { name: 'Mumbai', latitude: 19.0760, longitude: 72.8777, timezone: 'Asia/Kolkata' },
  };

  const locKey = Object.keys(locationMap).find(k => locationStr.toLowerCase().includes(k)) || 'नई दिल्ली';
  const place = locationMap[locKey];

  const dateObj = new Date(`${dateStr}T12:00:00Z`); // Panchang usually calculated around noon or sunrise

  return provider.getPanchang(dateObj, place);
}
