export const PRICE_PER_KG = 150;
export const MIN_GROUP_SIZE = 10;
export function priceForQuantity(quantity) { return Math.max(1, Math.floor(Number(quantity) || 1)) * PRICE_PER_KG; }
export function groupBookingError(people) { return Number(people) >= MIN_GROUP_SIZE ? '' : 'Group bookings require a minimum of 10 members.'; }
