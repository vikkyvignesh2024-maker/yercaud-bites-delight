import { describe, expect, it } from 'vitest';
import { priceForQuantity, groupBookingError } from '../../js/rules.js';
describe('User-supplied café rules',()=>{
 it('charges ₹150 per KG for 1, 2 and 3 KG',()=>{expect(priceForQuantity(1)).toBe(150);expect(priceForQuantity(2)).toBe(300);expect(priceForQuantity(3)).toBe(450);});
 it('requires 10 members and reports the exact validation message',()=>{expect(groupBookingError(9)).toBe('Group bookings require a minimum of 10 members.');expect(groupBookingError(10)).toBe('');});
});
