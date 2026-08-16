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
  const locationMap: Record<string, {name: string, latitude: number, longitude: number, timezone: string}> = {
    'नई दिल्ली': { name: 'New Delhi', latitude: 28.6139, longitude: 77.2090, timezone: 'Asia/Kolkata' },
    'delhi': { name: 'New Delhi', latitude: 28.6139, longitude: 77.2090, timezone: 'Asia/Kolkata' },
    'mumbai': { name: 'Mumbai', latitude: 19.0760, longitude: 72.8777, timezone: 'Asia/Kolkata' },
    'kolkata': { name: 'Kolkata', latitude: 22.5726, longitude: 88.3639, timezone: 'Asia/Kolkata' },
    'chennai': { name: 'Chennai', latitude: 13.0827, longitude: 80.2707, timezone: 'Asia/Kolkata' },
    'bengaluru': { name: 'Bengaluru', latitude: 12.9716, longitude: 77.5946, timezone: 'Asia/Kolkata' },
    'hyderabad': { name: 'Hyderabad', latitude: 17.3850, longitude: 78.4867, timezone: 'Asia/Kolkata' },
    'lucknow': { name: 'Lucknow', latitude: 26.8467, longitude: 80.9462, timezone: 'Asia/Kolkata' },
    'jaipur': { name: 'Jaipur', latitude: 26.9124, longitude: 75.7873, timezone: 'Asia/Kolkata' },
    'patna': { name: 'Patna', latitude: 25.5941, longitude: 85.1376, timezone: 'Asia/Kolkata' },
    'chandigarh': { name: 'Chandigarh', latitude: 30.7333, longitude: 76.7794, timezone: 'Asia/Kolkata' },
  };

  const locKey = Object.keys(locationMap).find(k => locationStr.toLowerCase().includes(k)) || 'नई दिल्ली';
  const place = locationMap[locKey];

  const dateObj = new Date(`${dateStr}T12:00:00Z`); // Panchang usually calculated around noon or sunrise

  return provider.getPanchang(dateObj, place);
}

export async function calculateRashifalAction(rashiSlug: string) {
  // Use current IST time for Daily Rashifal by default if no date string provided
  // In a real app we'd let user select the date, but for Daily Rashifal it's today.
  const utcNow = new Date();
  
  // Create IST date approximation: add 5.5 hours, get local YMD, then use 12:00 UTC for transit calculation midpoint
  const istTime = new Date(utcNow.getTime() + (5.5 * 3600000));
  const dateStr = `${istTime.getUTCFullYear()}-${String(istTime.getUTCMonth()+1).padStart(2, '0')}-${String(istTime.getUTCDate()).padStart(2, '0')}`;
  
  const calcDate = new Date(`${dateStr}T12:00:00Z`);
  return provider.getDailyRashifal(calcDate, rashiSlug);
}
