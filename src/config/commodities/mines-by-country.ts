// Group mines by country for filtering and analysis
import { MINES } from './mines';
import type { Mine } from '@/types';

// Group mines by host country
export const MINES_BY_COUNTRY: Record<string, Mine[]> = MINES.reduce((acc, mine) => {
  if (!acc[mine.hostCountry]) {
    acc[mine.hostCountry] = [];
  }
  acc[mine.hostCountry].push(mine);
  return acc;
}, {} as Record<string, Mine[]>);

// Get all unique countries
export const ALL_COUNTRIES = Array.from(new Set(MINES.map(mine => mine.hostCountry)));

// Country production summaries
export interface CountryProductionSummary {
  country: string;
  totalMines: number;
  producingMines: number;
  commodities: string[];
  strategicTier1Mines: number;
  estimatedAnnualProduction: number;
  riskProfile: 'low' | 'medium' | 'high';
}

export const COUNTRY_PRODUCTION_SUMMARIES: CountryProductionSummary[] = Object.entries(MINES_BY_COUNTRY).map(([country, mines]) => {
  const commodities = Array.from(new Set(mines.map(mine => mine.commodity)));
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
  
  // Estimate annual production (simplified)
  const estimatedAnnualProduction = mines.reduce((sum, mine) => {
    return sum + (mine.annualProduction || 0);
  }, 0);
  
  return {
    country,
    totalMines: mines.length,
    producingMines,
    commodities,
    strategicTier1Mines,
    estimatedAnnualProduction,
    riskProfile
  };
});

// Top producing countries by commodity
export const TOP_PRODUCING_COUNTRIES = {
  gold: COUNTRY_PRODUCTION_SUMMARIES
    .filter(summary => summary.commodities.includes('gold'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
  
  copper: COUNTRY_PRODUCTION_SUMMARIES
    .filter(summary => summary.commodities.includes('copper'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
  
  lithium: COUNTRY_PRODUCTION_SUMMARIES
    .filter(summary => summary.commodities.includes('lithium'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
  
  silver: COUNTRY_PRODUCTION_SUMMARIES
    .filter(summary => summary.commodities.includes('silver'))
    .sort((a, b) => b.estimatedAnnualProduction - a.estimatedAnnualProduction)
    .slice(0, 5),
};

// High-risk countries (multiple high-risk mines)
export const HIGH_RISK_COUNTRIES = COUNTRY_PRODUCTION_SUMMARIES
  .filter(summary => summary.riskProfile === 'high')
  .sort((a, b) => b.totalMines - a.totalMines);

// Countries with strategic tier 1 mines
export const COUNTRIES_WITH_STRATEGIC_MINES = COUNTRY_PRODUCTION_SUMMARIES
  .filter(summary => summary.strategicTier1Mines > 0)
  .sort((a, b) => b.strategicTier1Mines - a.strategicTier1Mines);

// Country dependency analysis (mines as % of GDP/exports)
export const COUNTRY_DEPENDENCY_ANALYSIS = {
  chile: {
    dependency: 'very high',
    majorCommodities: ['copper', 'lithium'],
    exportShare: '50% of exports',
    gdpContribution: '10% of GDP',
    keyMines: ['escondida', 'collahuasi', 'atacama_lithium']
  },
  drc: {
    dependency: 'high',
    majorCommodities: ['copper', 'cobalt', 'gold'],
    exportShare: '80% of exports',
    gdpContribution: '25% of GDP',
    keyMines: ['kibali', 'mutanda', 'tenke']
  },
  australia: {
    dependency: 'high',
    majorCommodities: ['iron ore', 'coal', 'lithium', 'gold'],
    exportShare: '60% of exports',
    gdpContribution: '8% of GDP',
    keyMines: ['greenbushes_lithium', 'pilgangoora', 'wodgina']
  },
  indonesia: {
    dependency: 'medium',
    majorCommodities: ['coal', 'nickel', 'copper', 'gold'],
    exportShare: '25% of exports',
    gdpContribution: '5% of GDP',
    keyMines: ['grasberg']
  },
  zambia: {
    dependency: 'very high',
    majorCommodities: ['copper'],
    exportShare: '70% of exports',
    gdpContribution: '15% of GDP',
    keyMines: ['kansanshi']
  }
};