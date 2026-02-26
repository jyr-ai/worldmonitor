// Major mines database for commodities variant
// Focus: Gold, Silver, Copper, Lithium in Africa, South America, Australia, Asia
import type { Mine } from '@/types';

export const MINES: Mine[] = [
  // ==================== GOLD MINES ====================
  {
    id: 'muruntau',
    name: 'Muruntau Gold Mine',
    lat: 41.54, lon: 64.78,
    commodity: 'gold',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 2000000, // ounces
    productionUnit: 'oz',
    reserves: 170000000,
    grade: '2.5 g/t Au',
    operator: 'Navoi Mining & Metallurgy Combinat',
    owner: 'Government of Uzbekistan',
    ownerCountry: 'Uzbekistan',
    hostCountry: 'Uzbekistan',
    region: 'Kyzyikum Desert',
    significance: 'World\'s largest gold mine by production',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'medium',
      laborRisk: 'high'
    },
    discoveryYear: 1958,
    productionStart: 1969
  },
  {
    id: 'grasberg',
    name: 'Grasberg Mine',
    lat: -4.05, lon: 137.11,
    commodity: 'gold',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 1500000, // ounces
    productionUnit: 'oz',
    reserves: 25000000,
    grade: '0.8 g/t Au',
    operator: 'Freeport-McMoRan',
    owner: 'Freeport-McMoRan',
    ownerCountry: 'USA',
    hostCountry: 'Indonesia',
    region: 'Papua Province',
    significance: 'World\'s largest gold mine by reserves, also major copper producer',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'high',
      laborRisk: 'high'
    },
    discoveryYear: 1936,
    productionStart: 1972
  },
  {
    id: 'carlin_trend',
    name: 'Carlin Trend Operations',
    lat: 40.95, lon: -116.12,
    commodity: 'gold',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 1200000, // ounces
    productionUnit: 'oz',
    reserves: 15000000,
    grade: '2.1 g/t Au',
    operator: 'Newmont Corporation',
    owner: 'Newmont Corporation',
    ownerCountry: 'USA',
    hostCountry: 'USA',
    region: 'Nevada, USA',
    significance: 'Largest gold mining district in North America',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'low',
      environmentalRisk: 'medium',
      laborRisk: 'low'
    },
    discoveryYear: 1961,
    productionStart: 1965
  },
  {
    id: 'kibali',
    name: 'Kibali Gold Mine',
    lat: 3.05, lon: 29.78,
    commodity: 'gold',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 750000, // ounces
    productionUnit: 'oz',
    reserves: 11000000,
    grade: '3.5 g/t Au',
    operator: 'Barrick Gold',
    owner: 'Barrick Gold',
    ownerCountry: 'Canada',
    hostCountry: 'DRC',
    region: 'Ituri Province, DRC',
    significance: 'One of Africa\'s largest gold mines, major investment in conflict region',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'medium',
      laborRisk: 'high'
    },
    discoveryYear: 1903,
    productionStart: 2013
  },
  {
    id: 'tarkwa',
    name: 'Tarkwa Gold Mine',
    lat: 5.28, lon: -2.00,
    commodity: 'gold',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 500000, // ounces
    productionUnit: 'oz',
    reserves: 8000000,
    grade: '1.3 g/t Au',
    operator: 'Gold Fields',
    owner: 'Gold Fields',
    ownerCountry: 'South Africa',
    hostCountry: 'Ghana',
    region: 'Western Region, Ghana',
    significance: 'Largest gold mine in Ghana, Africa\'s second largest gold producer',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'medium',
      laborRisk: 'medium'
    },
    discoveryYear: 1877,
    productionStart: 1998
  },

  // ==================== SILVER MINES ====================
  {
    id: 'fresnillo',
    name: 'Fresnillo Mine',
    lat: 23.17, lon: -102.87,
    commodity: 'silver',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 22000000, // ounces
    productionUnit: 'oz',
    reserves: 500000000,
    grade: '250 g/t Ag',
    operator: 'Fresnillo plc',
    owner: 'Fresnillo plc',
    ownerCountry: 'Mexico',
    hostCountry: 'Mexico',
    region: 'Zacatecas, Mexico',
    significance: 'World\'s largest primary silver mine',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'medium',
      laborRisk: 'medium'
    },
    discoveryYear: 1554,
    productionStart: 1554
  },
  {
    id: 'saucito',
    name: 'Saucito Mine',
    lat: 23.18, lon: -102.90,
    commodity: 'silver',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 18000000, // ounces
    productionUnit: 'oz',
    reserves: 300000000,
    grade: '220 g/t Ag',
    operator: 'Fresnillo plc',
    owner: 'Fresnillo plc',
    ownerCountry: 'Mexico',
    hostCountry: 'Mexico',
    region: 'Zacatecas, Mexico',
    significance: 'Second largest silver mine in the world',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'medium',
      laborRisk: 'medium'
    },
    discoveryYear: 2008,
    productionStart: 2011
  },
  {
    id: 'dukat',
    name: 'Dukat Silver Mine',
    lat: 62.50, lon: 155.50,
    commodity: 'silver',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 12000000, // ounces
    productionUnit: 'oz',
    reserves: 150000000,
    grade: '400 g/t Ag',
    operator: 'Polymetal International',
    owner: 'Polymetal International',
    ownerCountry: 'Russia',
    hostCountry: 'Russia',
    region: 'Magadan Oblast, Russia',
    significance: 'One of Russia\'s largest silver mines',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'high',
      laborRisk: 'medium'
    },
    discoveryYear: 1979,
    productionStart: 2000
  },
  {
    id: 'greens_creek',
    name: 'Greens Creek Mine',
    lat: 58.09, lon: -135.00,
    commodity: 'silver',
    commodityGroup: 'precious',
    status: 'producing',
    annualProduction: 8000000, // ounces
    productionUnit: 'oz',
    reserves: 100000000,
    grade: '15 oz/t Ag',
    operator: 'Hecla Mining',
    owner: 'Hecla Mining',
    ownerCountry: 'USA',
    hostCountry: 'USA',
    region: 'Alaska, USA',
    significance: 'Largest silver mine in the United States',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'low',
      environmentalRisk: 'high',
      laborRisk: 'low'
    },
    discoveryYear: 1973,
    productionStart: 1989
  },

  // ==================== COPPER MINES ====================
  {
    id: 'escondida',
    name: 'Escondida Mine',
    lat: -24.27, lon: -69.07,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 1200000, // metric tons
    productionUnit: 't',
    reserves: 32000000,
    grade: '0.7% Cu',
    operator: 'BHP',
    owner: 'BHP (57.5%), Rio Tinto (30%), JECO (12.5%)',
    ownerCountry: 'Australia/UK/Japan',
    hostCountry: 'Chile',
    region: 'Atacama Desert, Chile',
    significance: 'World\'s largest copper mine, produces 5% of global copper',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'high',
      waterRisk: 'high'
    },
    discoveryYear: 1981,
    productionStart: 1990
  },
  {
    id: 'collahuasi',
    name: 'Collahuasi Mine',
    lat: -20.95, lon: -68.70,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 600000, // metric tons
    productionUnit: 't',
    reserves: 25000000,
    grade: '0.8% Cu',
    operator: 'Anglo American/Glencore',
    owner: 'Anglo American (44%), Glencore (44%), Mitsui (12%)',
    ownerCountry: 'UK/Switzerland/Japan',
    hostCountry: 'Chile',
    region: 'Tarapacá Region, Chile',
    significance: 'Second largest copper mine in Chile',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1978,
    productionStart: 1999
  },
  {
    id: 'morenci',
    name: 'Morenci Mine',
    lat: 33.07, lon: -109.37,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 500000, // metric tons
    productionUnit: 't',
    reserves: 15000000,
    grade: '0.3% Cu',
    operator: 'Freeport-McMoRan',
    owner: 'Freeport-McMoRan',
    ownerCountry: 'USA',
    hostCountry: 'USA',
    region: 'Arizona, USA',
    significance: 'Largest copper mine in North America',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'low',
      environmentalRisk: 'medium',
      laborRisk: 'low',
      waterRisk: 'high'
    },
    discoveryYear: 1872,
    productionStart: 1937
  },
  {
    id: 'kansanshi',
    name: 'Kansanshi Mine',
    lat: -12.10, lon: 26.43,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 250000, // metric tons
    productionUnit: 't',
    reserves: 8000000,
    grade: '0.7% Cu',
    operator: 'First Quantum Minerals',
    owner: 'First Quantum Minerals',
    ownerCountry: 'Canada',
    hostCountry: 'Zambia',
    region: 'Northwestern Province, Zambia',
    significance: 'Largest copper mine in Africa',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'medium',
      laborRisk: 'medium',
      waterRisk: 'medium'
    },
    discoveryYear: 1899,
    productionStart: 2005
  },
  {
    id: 'grasberg_copper',
    name: 'Grasberg (Copper Operations)',
    lat: -4.05, lon: 137.11,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 600000, // metric tons
    productionUnit: 't',
    reserves: 18000000,
    grade: '0.8% Cu',
    operator: 'Freeport-McMoRan',
    owner: 'Freeport-McMoRan',
    ownerCountry: 'USA',
    hostCountry: 'Indonesia',
    region: 'Papua Province, Indonesia',
    significance: 'One of world\'s largest copper-gold deposits',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'high',
      laborRisk: 'high'
    },
    discoveryYear: 1936,
    productionStart: 1972
  },

  // ==================== LITHIUM MINES ====================
  {
    id: 'greenbushes_lithium',
    name: 'Greenbushes Lithium Mine',
    lat: -33.86, lon: 116.01,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'producing',
    annualProduction: 1500000, // tons LCE
    productionUnit: 't LCE',
    reserves: 180000000,
    grade: '2.1% Li₂O',
    operator: 'Talison Lithium',
    owner: 'Tianqi Lithium (51%), Albemarle (49%)',
    ownerCountry: 'China/USA',
    hostCountry: 'Australia',
    region: 'Greenbushes, Western Australia',
    significance: 'World\'s largest hard-rock lithium mine, supplies 25% of global lithium',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'low',
      environmentalRisk: 'medium',
      laborRisk: 'low'
    },
    discoveryYear: 1886,
    productionStart: 1983
  },
  {
    id: 'atacama_lithium',
    name: 'Salar de Atacama',
    lat: -23.50, lon: -68.33,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'producing',
    annualProduction: 1200000, // tons LCE
    productionUnit: 't LCE',
    reserves: 9000000,
    grade: '0.15% Li',
    operator: 'SQM/Albemarle',
    owner: 'SQM (Chile), Albemarle (USA)',
    ownerCountry: 'Chile/USA',
    hostCountry: 'Chile',
    region: 'Atacama Desert, Chile',
    significance: 'World\'s largest brine lithium operation, lowest production cost',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1960,
    productionStart: 1984
  },
  {
    id: 'pilgangoora',
    name: 'Pilgangoora Lithium Project',
    lat: -21.03, lon: 118.91,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'producing',
    annualProduction: 380000, // tons LCE
    productionUnit: 't LCE',
    reserves: 160000000,
    grade: '1.2% Li₂O',
    operator: 'Pilbara Minerals',
    owner: 'Pilbara Minerals',
    ownerCountry: 'Australia',
    hostCountry: 'Australia',
    region: 'Pilbara, Western Australia',
    significance: 'Major hard-rock lithium producer, key supplier to Chinese battery makers',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'low',
      environmentalRisk: 'medium',
      laborRisk: 'low'
    },
    discoveryYear: 2009,
    productionStart: 2018
  },
  {
    id: 'wodgina',
    name: 'Wodgina Lithium Mine',
    lat: -21.15, lon: 118.60,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'producing',
    annualProduction: 750000, // tons LCE
    productionUnit: 't LCE',
    reserves: 150000000,
    grade: '1.2% Li₂O',
    operator: 'Mineral Resources/Albemarle',
    owner: 'Mineral Resources (50%), Albemarle (50%)',
    ownerCountry: 'Australia/USA',
    hostCountry: 'Australia',
    region: 'Pilbara, Western Australia',
    significance: 'One of world\'s largest hard-rock lithium mines, joint venture between Australian and US companies',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'low',
      environmentalRisk: 'medium',
      laborRisk: 'low'
    },
    discoveryYear: 1993,
    productionStart: 2017
  },
  {
    id: 'cauchari_olaroz',
    name: 'Cauchari-Olaroz Lithium Project',
    lat: -23.80, lon: -66.80,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'producing',
    annualProduction: 40000, // tons LCE
    productionUnit: 't LCE',
    reserves: 4500000,
    grade: '592 mg/L Li',
    operator: 'Lithium Americas/ Ganfeng Lithium',
    owner: 'Lithium Americas (44.8%), Ganfeng Lithium (46.7%)',
    ownerCountry: 'Canada/China',
    hostCountry: 'Argentina',
    region: 'Jujuy Province, Argentina',
    significance: 'Major lithium brine project in Argentina\'s Lithium Triangle',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 2010,
    productionStart: 2023
  },

  // ==================== ADDITIONAL SOUTH AMERICAN MINES ====================
  
  // Chile - Copper
  {
    id: 'chuquicamata',
    name: 'Chuquicamata Mine',
    lat: -22.29, lon: -68.90,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 320000, // metric tons
    productionUnit: 't',
    reserves: 12000000,
    grade: '0.7% Cu',
    operator: 'Codelco',
    owner: 'Codelco (Chilean state-owned)',
    ownerCountry: 'Chile',
    hostCountry: 'Chile',
    region: 'Antofagasta Region, Chile',
    significance: 'World\'s largest open-pit copper mine by excavated volume, owned by Chilean state',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'high',
      waterRisk: 'high'
    },
    discoveryYear: 1910,
    productionStart: 1915
  },
  {
    id: 'el_teniente',
    name: 'El Teniente Mine',
    lat: -34.09, lon: -70.38,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 460000, // metric tons
    productionUnit: 't',
    reserves: 11000000,
    grade: '0.86% Cu',
    operator: 'Codelco',
    owner: 'Codelco (Chilean state-owned)',
    ownerCountry: 'Chile',
    hostCountry: 'Chile',
    region: 'O\'Higgins Region, Chile',
    significance: 'World\'s largest underground copper mine',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'medium',
      laborRisk: 'high',
      waterRisk: 'medium'
    },
    discoveryYear: 1904,
    productionStart: 1906
  },
  {
    id: 'los_pelambres',
    name: 'Los Pelambres Mine',
    lat: -31.63, lon: -70.50,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 360000, // metric tons
    productionUnit: 't',
    reserves: 8000000,
    grade: '0.6% Cu',
    operator: 'Antofagasta Minerals',
    owner: 'Antofagasta plc',
    ownerCountry: 'Chile/UK',
    hostCountry: 'Chile',
    region: 'Coquimbo Region, Chile',
    significance: 'Major copper mine with significant molybdenum byproduct',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1920,
    productionStart: 1999
  },

  // Peru - Copper
  {
    id: 'cerro_verde',
    name: 'Cerro Verde Mine',
    lat: -16.55, lon: -71.60,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 500000, // metric tons
    productionUnit: 't',
    reserves: 12000000,
    grade: '0.4% Cu',
    operator: 'Freeport-McMoRan',
    owner: 'Freeport-McMoRan (53.6%), Sumitomo (21%), Buenaventura (19.6%)',
    ownerCountry: 'USA/Japan/Peru',
    hostCountry: 'Peru',
    region: 'Arequipa Region, Peru',
    significance: 'One of Peru\'s largest copper mines',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1800,
    productionStart: 1976
  },
  {
    id: 'antamina',
    name: 'Antamina Mine',
    lat: -9.53, lon: -77.05,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 450000, // metric tons
    productionUnit: 't',
    reserves: 9000000,
    grade: '1.0% Cu',
    operator: 'BHP/Glencore',
    owner: 'BHP (33.75%), Glencore (33.75%), Teck (22.5%), Mitsubishi (10%)',
    ownerCountry: 'Australia/Switzerland/Canada/Japan',
    hostCountry: 'Peru',
    region: 'Ancash Region, Peru',
    significance: 'World\'s largest combined copper-zinc mine',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1952,
    productionStart: 2001
  },
  {
    id: 'las_bambas',
    name: 'Las Bambas Mine',
    lat: -14.05, lon: -72.30,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 400000, // metric tons
    productionUnit: 't',
    reserves: 7500000,
    grade: '0.6% Cu',
    operator: 'MMG Limited',
    owner: 'MMG Limited (Chinese state-owned)',
    ownerCountry: 'China',
    hostCountry: 'Peru',
    region: 'Apurímac Region, Peru',
    significance: 'One of world\'s largest copper mines, Chinese-owned',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'high',
      laborRisk: 'high',
      waterRisk: 'medium'
    },
    discoveryYear: 2003,
    productionStart: 2016
  },

  // Brazil - Iron Ore (added as industrial commodity)
  {
    id: 'carajas',
    name: 'Carajás Mine',
    lat: -6.08, lon: -50.17,
    commodity: 'iron_ore',
    commodityGroup: 'industrial',
    status: 'producing',
    annualProduction: 150000000, // metric tons
    productionUnit: 't',
    reserves: 7000000000,
    grade: '66% Fe',
    operator: 'Vale',
    owner: 'Vale',
    ownerCountry: 'Brazil',
    hostCountry: 'Brazil',
    region: 'Pará State, Brazil',
    significance: 'World\'s largest iron ore mine, supplies China\'s steel industry',
    strategicTier: 1,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'medium'
    },
    discoveryYear: 1967,
    productionStart: 1985
  },
  {
    id: 'sossego',
    name: 'Sossego Mine',
    lat: -5.60, lon: -50.40,
    commodity: 'copper',
    commodityGroup: 'base',
    status: 'producing',
    annualProduction: 100000, // metric tons
    productionUnit: 't',
    reserves: 3000000,
    grade: '0.8% Cu',
    operator: 'Vale',
    owner: 'Vale',
    ownerCountry: 'Brazil',
    hostCountry: 'Brazil',
    region: 'Pará State, Brazil',
    significance: 'Major copper mine in Brazil\'s Carajás mineral province',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'medium'
    },
    discoveryYear: 1997,
    productionStart: 2004
  },

  // Argentina - Lithium
  {
    id: 'hombre_muerto',
    name: 'Hombre Muerto Salt Flat',
    lat: -25.20, lon: -67.20,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'producing',
    annualProduction: 25000, // tons LCE
    productionUnit: 't LCE',
    reserves: 3500000,
    grade: '750 mg/L Li',
    operator: 'Livent Corporation',
    owner: 'Livent Corporation',
    ownerCountry: 'USA',
    hostCountry: 'Argentina',
    region: 'Catamarca Province, Argentina',
    significance: 'One of the highest-grade lithium brine deposits in the world',
    strategicTier: 2,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1970,
    productionStart: 1998
  },
  {
    id: 'olacapato',
    name: 'Olacapato Lithium Project',
    lat: -24.50, lon: -66.50,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'development',
    annualProduction: 0, // not yet producing
    productionUnit: 't LCE',
    reserves: 2000000,
    grade: '450 mg/L Li',
    operator: 'Eramet',
    owner: 'Eramet (French mining group)',
    ownerCountry: 'France',
    hostCountry: 'Argentina',
    region: 'Salta Province, Argentina',
    significance: 'Major lithium development project in Argentina\'s Lithium Triangle',
    strategicTier: 3,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'medium',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 2010,
    productionStart: 2026
  },

  // Bolivia - Lithium (potential)
  {
    id: 'uyuni',
    name: 'Salar de Uyuni',
    lat: -20.13, lon: -67.49,
    commodity: 'lithium',
    commodityGroup: 'critical',
    status: 'exploration',
    annualProduction: 0, // not yet producing
    productionUnit: 't LCE',
    reserves: 21000000,
    grade: '0.1% Li',
    operator: 'Yacimientos de Litio Bolivianos (YLB)',
    owner: 'Bolivian state',
    ownerCountry: 'Bolivia',
    hostCountry: 'Bolivia',
    region: 'Potosí Department, Bolivia',
    significance: 'World\'s largest salt flat, contains largest lithium reserves but challenging extraction',
    strategicTier: 3,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1600,
    productionStart: 2025
  },

  // Chile - Gold
  {
    id: 'pascua_lama',
    name: 'Pascua-Lama Project',
    lat: -29.33, lon: -70.00,
    commodity: 'gold',
    commodityGroup: 'precious',
    status: 'care_maintenance',
    annualProduction: 0,
    productionUnit: 'oz',
    reserves: 18000000,
    grade: '0.8 g/t Au',
    operator: 'Barrick Gold',
    owner: 'Barrick Gold',
    ownerCountry: 'Canada',
    hostCountry: 'Chile/Argentina',
    region: 'Border of Chile and Argentina',
    significance: 'Controversial binational gold project suspended due to environmental concerns',
    strategicTier: 3,
    supplyChainRole: 'primary',
    riskFactors: {
      politicalRisk: 'high',
      environmentalRisk: 'high',
      laborRisk: 'medium',
      waterRisk: 'high'
    },
    discoveryYear: 1977,
    productionStart: undefined
  }
];
