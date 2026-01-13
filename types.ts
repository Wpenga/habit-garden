
export enum HabitType {
  SLEEP = 'SLEEP',
  WATER = 'WATER',
  RUNNING = 'RUNNING'
}

export interface Habit {
  id: string;
  type: HabitType;
  name: string;
  target: string;
  current: number;
  total: number;
  unit: string;
  icon: string;
  color: string;
}

export interface UserStats {
  level: number;
  rank: string;
  vitality: number;
  streak: number;
  monthlyGrowth: number;
}

export interface DayProgress {
  day: number;
  status: 'full' | 'bud' | 'sprout' | 'withered' | 'empty';
}
