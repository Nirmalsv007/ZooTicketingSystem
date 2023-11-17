import pricingRules from './pricingRules.js'

class Pricing {
  static calculateEntrancePrice(age) {
    const rule = pricingRules.find((rule) => age <= rule.maxAge);
    return rule ? rule.price : 500; // Default to 500
  }
}

export default Pricing
