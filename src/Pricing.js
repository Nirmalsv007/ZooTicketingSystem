import { find } from './pricingRules';

class Pricing {
  static calculateEntrancePrice(age) {
    const rule = find((rule) => age <= rule.maxAge);
    return rule ? rule.price : 0;
  }
}

export default Pricing;
