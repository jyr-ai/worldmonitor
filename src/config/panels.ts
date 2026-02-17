// Variant-aware panel and map layer configuration
// This file now imports from modular variant configurations
import { SITE_VARIANT } from './variant';

// Import all variant configurations
import * as fullVariant from './variants/full';
import * as techVariant from './variants/tech';
import * as commodityVariant from './variants/commodity';

// Select the appropriate variant based on SITE_VARIANT
const getVariantConfig = () => {
  switch (SITE_VARIANT) {
    case 'tech':
      return techVariant;
    case 'commodity':
      return commodityVariant;
    case 'full':
    default:
      return fullVariant;
  }
};

const variant = getVariantConfig();

// Export variant-aware configurations
export const DEFAULT_PANELS = variant.DEFAULT_PANELS;
export const DEFAULT_MAP_LAYERS = variant.DEFAULT_MAP_LAYERS;
export const MOBILE_DEFAULT_MAP_LAYERS = variant.MOBILE_DEFAULT_MAP_LAYERS;

// Re-export shared constants from base variant
export const MONITOR_COLORS = variant.MONITOR_COLORS;
export const STORAGE_KEYS = variant.STORAGE_KEYS;