// Strategic mining assets - geopolitically critical mines
import { MINES } from './mines';
import type { Mine } from '@/types';

// Geopolitically critical mines (supply chain choke points)
export const STRATEGIC_ASSETS: Mine[] = [
  // Lithium - Critical for EV batteries
  ...MINES.filter(mine => 
    mine.commodity === 'lithium' && 
    mine.strategicTier === 1
  ),
  
  // Copper - Critical for electrification
  ...MINES.filter(mine => 
    mine.commodity === 'copper' && 
    mine.annualProduction && 
    mine.annualProduction > 500000 // > 500k tons/year
  ),
  
  // Gold - Strategic reserves
  ...MINES.filter(mine => 
    mine.commodity === 'gold' && 
    mine.annualProduction && 
    mine.annualProduction > 1000000 // > 1M ounces/year
  ),
  
  // High-risk conflict zone mines
  ...MINES.filter(mine => 
    mine.riskFactors?.politicalRisk === 'high' && 
    mine.strategicTier === 1
  ),
];

// Mines with Chinese ownership/control
export const CHINESE_CONTROLLED_MINES = MINES.filter(mine => 
  mine.ownerCountry?.includes('China') || 
  mine.operator.includes('China') ||
  mine.owner?.includes('China')
);

// Mines with Russian ownership/control
export const RUSSIAN_CONTROLLED_MINES = MINES.filter(mine => 
  mine.ownerCountry?.includes('Russia') || 
  mine.operator.includes('Russia') ||
  mine.owner?.includes('Russia')
);

// Western-controlled mines (US, Canada, Australia, EU)
export const WESTERN_CONTROLLED_MINES = MINES.filter(mine => 
  mine.ownerCountry?.includes('USA') || 
  mine.ownerCountry?.includes('Canada') ||
  mine.ownerCountry?.includes('Australia') ||
  mine.ownerCountry?.includes('UK') ||
  mine.ownerCountry?.includes('EU')
);

// Conflict mineral mines (DRC, Sudan, etc.)
export const CONFLICT_MINERAL_MINES = MINES.filter(mine => 
  mine.hostCountry.includes('DRC') ||
  mine.hostCountry.includes('Sudan') ||
  mine.hostCountry.includes('Myanmar') ||
  (mine.riskFactors?.politicalRisk === 'high' && 
   mine.commodityGroup === 'precious' || mine.commodityGroup === 'critical')
);

// Water-stressed mines (high water risk)
export const WATER_STRESSED_MINES = MINES.filter(mine => 
  mine.riskFactors?.waterRisk === 'high' ||
  (mine.commodity === 'lithium' && mine.hostCountry.includes('Chile')) ||
  (mine.commodity === 'copper' && mine.hostCountry.includes('Chile'))
);

// Export-dependent countries (mines that represent >10% of country's exports)
export const EXPORT_CRITICAL_MINES = MINES.filter(mine => {
  // These mines are critical to their host country's economy
  const criticalMines = [
    'escondida', // Chile - copper
    'collahuasi', // Chile - copper
    'grasberg', // Indonesia - copper/gold
    'kansanshi', // Zambia - copper
    'tarkwa', // Ghana - gold
    'kibali', // DRC - gold
    'atacama_lithium', // Chile - lithium
    'greenbushes_lithium', // Australia - lithium
  ];
  return criticalMines.includes(mine.id);
});

// Supply chain vulnerability analysis
export interface SupplyChainVulnerability {
  mineId: string;
  commodity: string;
  vulnerabilityScore: number; // 1-10
  vulnerabilities: string[];
  mitigationStrategies: string[];
}

export const SUPPLY_CHAIN_VULNERABILITIES: SupplyChainVulnerability[] = [
  {
    mineId: 'atacama_lithium',
    commodity: 'lithium',
    vulnerabilityScore: 8,
    vulnerabilities: [
      'Water stress in Atacama Desert',
      'Political pressure for nationalization',
      'Environmental protests',
      'Single geographic source'
    ],
    mitigationStrategies: [
      'Diversify to Australian hard-rock lithium',
      'Develop recycling infrastructure',
      'Explore alternative battery chemistries'
    ]
  },
  {
    mineId: 'grasberg',
    commodity: 'copper',
    vulnerabilityScore: 9,
    vulnerabilities: [
      'Papua conflict zone',
      'Environmental damage history',
      'Indigenous rights disputes',
      'Remote location with infrastructure challenges'
    ],
    mitigationStrategies: [
      'Develop alternative copper sources in stable jurisdictions',
      'Increase recycling rates',
      'Stockpile strategic reserves'
    ]
  },
  {
    mineId: 'kibali',
    commodity: 'gold',
    vulnerabilityScore: 7,
    vulnerabilities: [
      'DRC conflict region',
      'Artisanal mining conflicts',
      'Infrastructure challenges',
      'Political instability'
    ],
    mitigationStrategies: [
      'Conflict-free certification programs',
      'Local community engagement',
      'Diversify gold sources'
    ]
  }
];