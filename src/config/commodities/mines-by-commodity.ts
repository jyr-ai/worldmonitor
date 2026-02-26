// Group mines by commodity type for filtering
import { MINES } from './mines';
import type { Mine } from '@/types';

export const MINES_BY_COMMODITY: Record<string, Mine[]> = {
  gold: MINES.filter(mine => mine.commodity === 'gold'),
  silver: MINES.filter(mine => mine.commodity === 'silver'),
  copper: MINES.filter(mine => mine.commodity === 'copper'),
  lithium: MINES.filter(mine => mine.commodity === 'lithium'),
};

// Get all unique commodities from mines
export const ALL_COMMODITIES = Array.from(new Set(MINES.map(mine => mine.commodity)));

// Get mines by commodity group
export const MINES_BY_COMMODITY_GROUP: Record<string, Mine[]> = {
  precious: MINES.filter(mine => mine.commodityGroup === 'precious'),
  base: MINES.filter(mine => mine.commodityGroup === 'base'),
  critical: MINES.filter(mine => mine.commodityGroup === 'critical'),
  industrial: MINES.filter(mine => mine.commodityGroup === 'industrial'),
};

// Strategic mines (tier 1)
export const STRATEGIC_MINES = MINES.filter(mine => mine.strategicTier === 1);

// Producing mines only
export const PRODUCING_MINES = MINES.filter(mine => mine.status === 'producing');

// Development/exploration mines
export const DEVELOPMENT_MINES = MINES.filter(mine => 
  mine.status === 'development' || mine.status === 'exploration'
);

// High-risk mines (political or environmental risk high)
export const HIGH_RISK_MINES = MINES.filter(mine => 
  mine.riskFactors && (
    mine.riskFactors.politicalRisk === 'high' || 
    mine.riskFactors.environmentalRisk === 'high'
  )
);

// Mines by region
export const MINES_BY_REGION: Record<string, Mine[]> = {
  africa: MINES.filter(mine => 
    mine.hostCountry.includes('DRC') || 
    mine.hostCountry.includes('Ghana') || 
    mine.hostCountry.includes('Zambia') ||
    mine.hostCountry.includes('South Africa')
  ),
  southAmerica: MINES.filter(mine => 
    mine.hostCountry.includes('Chile') || 
    mine.hostCountry.includes('Argentina') || 
    mine.hostCountry.includes('Brazil') ||
    mine.hostCountry.includes('Peru')
  ),
  australia: MINES.filter(mine => mine.hostCountry.includes('Australia')),
  asia: MINES.filter(mine => 
    mine.hostCountry.includes('Indonesia') || 
    mine.hostCountry.includes('Uzbekistan') ||
    mine.hostCountry.includes('Russia') ||
    mine.hostCountry.includes('China')
  ),
  northAmerica: MINES.filter(mine => 
    mine.hostCountry.includes('USA') || 
    mine.hostCountry.includes('Canada') ||
    mine.hostCountry.includes('Mexico')
  ),
};