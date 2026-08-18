export function getTodayIST(): Date {
  const utcNow = new Date();
  // IST is UTC + 5:30
  const istOffsetMs = 5.5 * 3600 * 1000;
  const istTime = new Date(utcNow.getTime() + istOffsetMs);
  
  return istTime;
}

export function getTodayISTDateString(): string {
  const istTime = getTodayIST();
  const year = istTime.getUTCFullYear();
  const month = String(istTime.getUTCMonth() + 1).padStart(2, '0');
  const date = String(istTime.getUTCDate()).padStart(2, '0');
  
  return `${year}-${month}-${date}`;
}
