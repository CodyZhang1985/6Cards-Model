export enum CardType {
  POWER = 'POWER',
  COMPUTE = 'COMPUTE',
  ALGO = 'ALGO',
  DATA = 'DATA',
  TALENT = 'TALENT',
  MARKET = 'MARKET'
}

export interface CardData {
  id: CardType;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  insight: string;
  color: string;
  iconName: string;
}

export interface ComparisonData {
  region: string;
  strengths: CardType[];
  weaknesses: CardType[];
  description: string;
  bottleneck?: string;
}

export interface GeminiResponse {
  text: string;
  isLoading: boolean;
  error?: string;
}