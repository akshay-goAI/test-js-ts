import { readCustomerRow } from "../infrastructure/customer-database.js";

export function loadCustomer(id: string): string {
  return readCustomerRow(id);
}
