// Group mines by operator/company for analysis
import { MINES } from './mines';
import type { Mine } from '@/types';

// Group mines by operator
export const MINES_BY_OPERATOR: Record<string, Mine[]> = MINES.reduce((acc, mine) => {
  const operator = mine.operator;
  if (!acc[operator]) {
    acc[operator] = [];
  }
  acc[operator].push(mine);
  return acc;
}, {} as Record<string, Mine[]>);

// Get all unique operators
export const ALL_OPERATORS = Array.from(new Set(MINES.map(mine => mine.operator)));

// Operator production summaries
export interface OperatorSummary {
  operator: string;
  totalMines: number;
  producingMines: number;
  commodities: string[];
  countries: string[];
  strategicTier1Mines: number;
  estimatedAnnualProduction: number;
  riskProfile: 'low' | 'medium' | 'high';
}

export const OPERATOR_SUMMARIES: OperatorSummary[] = Object.entries(MINES_BY_OPERATOR).map(([operator, mines]) => {
  const commodities = Array.from(new Set(mines.map(mine => mine.commodity)));
  const countries = Array.from(new Set(mines.map(mine => mine.hostCountry)));
  const strategicTier1Mines = mines.filter(mine => mine.strategicTier === 1).length;
  const producingMines = mines.filter(mine => mine.status === 'producing').length;
  
  // Calculate risk profile
  let riskScore = 0;
  mines.forEach(mine => {
    if (mine.riskFactors) {
      if (mine.riskFactors.politicalRisk === 'high') riskScore += 3;
      else if (mine.riskFactors.politicalRisk === 'medium') riskScore += 2;
      else if (mine.riskFactors.politicalRisk === 'low') riskScore += 1;
      
      if (mine.riskFactors.environmentalRisk === 'high') riskScore += 2;
      else if (mine.riskFactors.environmentalRisk === 'medium') riskScore += 1;
    }
  });
  
  const riskProfile = riskScore > 10 ? 'high' : riskScore > 5 ? 'medium' : 'low';
  
  // Estimate annual production
  const estimatedAnnualProduction = mines.reduce((sum, mine) => {
    return sum + (mine.annualProduction || 0);
  }, 0);
  
  return {
    operator,
    totalMines: mines.length,
    producingMines,
    commodities,
    countries,
    strategicTier1Mines,
    estimatedAnnualProduction,
    riskProfile
  };
});

// Major mining companies
export const MAJOR_MINING_COMPANIES = {
  // Global diversified miners
  bhp: {
    name: 'BHP',
    headquarters: 'Australia/UK',
    marketCap: '~$150B',
    keyCommodities: ['iron ore', 'copper', 'coal', 'nickel'],
    keyMines: ['escondida']
  },
  rioTinto: {
    name: 'Rio Tinto',
    headquarters: 'UK/Australia',
    marketCap: '~$120B',
    keyCommodities: ['iron ore', 'aluminum', 'copper', 'diamonds'],
    keyMines: [] // Add specific Rio Tinto mines if in database
  },
  glencore: {
    name: 'Glencore',
    headquarters: 'Switzerland',
    marketCap: '~$70B',
    keyCommodities: ['copper', 'cobalt', 'zinc', 'coal', 'nickel'],
    keyMines: ['mutanda', 'collahuasi']
  },
  vale: {
    name: 'Vale',
    headquarters: 'Brazil',
    marketCap: '~$60B',
    keyCommodities: ['iron ore', 'nickel', 'copper'],
    keyMines: [] // Add specific Vale mines if in database
  },
  
  // Gold majors
  newmont: {
    name: 'Newmont Corporation',
    headquarters: 'USA',
    marketCap: '~$50B',
    keyCommodities: ['gold', 'copper', 'silver'],
    keyMines: ['carlin_trend']
  },
  barrick: {
    name: 'Barrick Gold',
    headquarters: 'Canada',
    marketCap: '~$30B',
    keyCommodities: ['gold', 'copper'],
    keyMines: ['kibali']
  },
  
  // Copper specialists
  freeport: {
    name: 'Freeport-McMoRan',
    headquarters: 'USA',
    marketCap: '~$70B',
    keyCommodities: ['copper', 'gold'],
    keyMines: ['grasberg', 'grasberg_copper', 'morenci']
  },
  
  // Lithium specialists
  albemarle: {
    name: 'Albemarle',
    headquarters: 'USA',
    marketCap: '~$15B',
    keyCommodities: ['lithium'],
    keyMines: ['greenbushes_lithium', 'atacama_lithium', 'wodgina']
  },
  sqm: {
    name: 'SQM',
    headquarters: 'Chile',
    marketCap: '~$12B',
    keyCommodities: ['lithium', 'potassium', 'iodine'],
    keyMines: ['atacama_lithium']
  },
  
  // Silver specialists
  fresnillo: {
    name: 'Fresnillo plc',
    headquarters: 'Mexico',
    marketCap: '~$5B',
    keyCommodities: ['silver', 'gold'],
    keyMines: ['fresnillo', 'saucito']
  },
  hecla: {
    name: 'Hecla Mining',
    headquarters: 'USA',
    marketCap: '~$3B',
    keyCommodities: ['silver', 'gold', 'lead', 'zinc'],
    keyMines: ['greens_creek']
  }
};

// Operators by country of origin
export const OPERATORS_BY_COUNTRY: Record<string, string[]> = {
  usa: ['Freeport-McMoRan', 'Newmont Corporation', 'Albemarle', 'Hecla Mining'],
  canada: ['Barrick Gold', 'First Quantum Minerals', 'Lithium Americas'],
  australia: ['BHP', 'Rio Tinto', 'Pilbara Minerals', 'Mineral Resources', 'Talison Lithium'],
  uk: ['BHP', 'Rio Tinto', 'Anglo American', 'Fresnillo plc'],
  switzerland: ['Glencore'],
  chile: ['SQM'],
  mexico: ['Fresnillo plc'],
  russia: ['Polymetal International', 'Nornickel'],
  china: ['Tianqi Lithium', 'Ganfeng Lithium', 'China Northern Rare Earth'],
  southAfrica: ['Gold Fields', 'Anglo American Platinum']
};

// Risk analysis by operator
export const OPERATOR_RISK_ANALYSIS = OPERATOR_SUMMARIES.map(summary => ({
  operator: summary.operator,
  riskProfile: summary.riskProfile,
  highRiskCountries: summary.countries.filter(country => {
    const countryMines = MINES.filter(m => m.hostCountry === country && m.operator === summary.operator);
    return countryMines.some(mine => mine.riskFactors?.politicalRisk === 'high');
  }),
  diversificationScore: summary.countries.length > 3 ? 'high' : summary.countries.length > 1 ? 'medium' : 'low',
  commodityConcentration: summary.commodities.length > 3 ? 'diversified' : summary.commodities.length > 1 ? 'moderate' : 'concentrated'
}));

// Top operators by commodity
export const TOP_OPERATORS_BY_COMMODITY = {
  gold: OPERATOR_SUMMARIES
    .filter(summary => summary.commodities.includes('gold'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
  
  copper: OPERATOR_SUMMARIES
    .filter(summary => summary.commodities.includes('copper'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
  
  lithium: OPERATOR_SUMMARIES
    .filter(summary => summary.commodities.includes('lithium'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
  
  silver: OPERATOR_SUMMARIES
    .filter(summary => summary.commodities.includes('silver'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
};