
export interface Player {
  id: string;
  name: string;
  position: string;
  gender: string;
  height: string;
  weight: string;
  wingspan: string;
  avgSpeed: string;
  jumpReach: string;
  image: string;
  summaryStats: SummaryStats;
}

export interface SummaryStats {
  ppg: string;
  rpg: string;
  apg: string;
  spg: string;
  bpg: string;
  tpg: string;
  ft: string;
  fg: string;
  p3: string;
  fta: string;
  fga: string;
  p3a: string;
  ftPct: string;
  fgPct: string;
  p3Pct: string;
}

export interface Match {
  id: string;
  date: string;
  opponent: string;
  location: string;
  type: string;
  status: 'Home' | 'Away';
  venue: string;
  score: string;
  result: 'W' | 'L';
}

export interface MatchStats {
  points: number;
  rebounds: number;
  assist: number;
  steals: number;
  blocks: number;
  turnovers: number;
  ft: number;
  fta: number;
  fg: number;
  fga: number;
  p3: number;
  p3a: number;
}
