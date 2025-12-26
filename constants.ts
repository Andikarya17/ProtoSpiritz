
import { Player, Match } from './types';

export const PLAYERS: Player[] = [
  {
    id: '1',
    name: 'Lebron James',
    position: 'Forward',
    gender: 'Pria',
    height: '206cm',
    weight: '113kg',
    wingspan: '214cm',
    avgSpeed: '28km/j',
    jumpReach: '375cm',
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    summaryStats: {
      ppg: '25.7', rpg: '7.3', apg: '8.3', spg: '1.3', bpg: '0.5', tpg: '3.5',
      ft: '315', fg: '710', p3: '149', fta: '410', fga: '1310', p3a: '360',
      ftPct: '76.8%', fgPct: '54.2%', p3Pct: '41.4%'
    }
  },
  {
    id: '2',
    name: 'Anthony Davis',
    position: 'Center - Forward',
    gender: 'Pria',
    height: '208cm',
    weight: '115kg',
    wingspan: '227cm',
    avgSpeed: '24km/j',
    jumpReach: '380cm',
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png',
    summaryStats: {
      ppg: '24.7', rpg: '12.6', apg: '3.5', spg: '1.2', bpg: '2.3', tpg: '2.1',
      ft: '420', fg: '680', p3: '25', fta: '515', fga: '1220', p3a: '90',
      ftPct: '81.6%', fgPct: '55.7%', p3Pct: '27.8%'
    }
  },
  {
    id: '3',
    name: 'Jarred Vanderbilt',
    position: 'Forward',
    gender: 'Pria',
    height: '203cm',
    weight: '97kg',
    wingspan: '216cm',
    avgSpeed: '27km/j',
    jumpReach: '360cm',
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629020.png',
    summaryStats: {
      ppg: '5.2', rpg: '4.8', apg: '1.2', spg: '1.2', bpg: '0.2', tpg: '0.8',
      ft: '45', fg: '120', p3: '10', fta: '68', fga: '230', p3a: '35',
      ftPct: '66.2%', fgPct: '51.8%', p3Pct: '28.6%'
    }
  },
  {
    id: '4',
    name: 'Gabe Vincent',
    position: 'Guard',
    gender: 'Pria',
    height: '188cm',
    weight: '91kg',
    wingspan: '198cm',
    avgSpeed: '30km/j',
    jumpReach: '345cm',
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629731.png',
    summaryStats: {
      ppg: '9.4', rpg: '1.5', apg: '2.5', spg: '0.8', bpg: '0.1', tpg: '1.1',
      ft: '85', fg: '180', p3: '95', fta: '102', fga: '450', p3a: '280',
      ftPct: '83.3%', fgPct: '40.0%', p3Pct: '33.9%'
    }
  },
  {
    id: '5',
    name: 'Jaxson Hayes',
    position: 'Center',
    gender: 'Pria',
    height: '213cm',
    weight: '111kg',
    wingspan: '224cm',
    avgSpeed: '25km/j',
    jumpReach: '385cm',
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629637.png',
    summaryStats: {
      ppg: '4.3', rpg: '3.0', apg: '0.5', spg: '0.5', bpg: '0.4', tpg: '0.6',
      ft: '52', fg: '115', p3: '0', fta: '82', fga: '160', p3a: '2',
      ftPct: '63.4%', fgPct: '72.0%', p3Pct: '0%'
    }
  },
  {
    id: '6',
    name: 'Bronny James',
    position: 'Guard',
    gender: 'Pria',
    height: '188cm',
    weight: '95kg',
    wingspan: '201cm',
    avgSpeed: '31km/j',
    jumpReach: '365cm',
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1642277.png',
    summaryStats: {
      ppg: '0.7', rpg: '0.3', apg: '0.3', spg: '0.1', bpg: '0.1', tpg: '0.4',
      ft: '2', fg: '3', p3: '0', fta: '2', fga: '18', p3a: '11',
      ftPct: '100%', fgPct: '16.7%', p3Pct: '0%'
    }
  }
];

export const MATCHES: Match[] = [
  {
    id: 'm1',
    date: '28 November 2025',
    opponent: 'Dallas Mavericks',
    location: 'Crypto.com Arena',
    type: 'Pertandingan Resmi',
    status: 'Home',
    venue: 'Crypto.com Arena',
    score: '129 - 119',
    result: 'W'
  },
  {
    id: 'm2',
    date: '25 November 2025',
    opponent: 'Golden State Warriors',
    location: 'Chase Center',
    type: 'Friendly Match',
    status: 'Away',
    venue: 'Chase Center',
    score: '105 - 110',
    result: 'L'
  },
  {
    id: 'm3',
    date: '19 November 2025',
    opponent: 'Utah Jazz',
    location: 'Crypto.com Arena',
    type: 'Pertandingan Resmi',
    status: 'Home',
    venue: 'Crypto.com Arena',
    score: '115 - 98',
    result: 'W'
  }
];
