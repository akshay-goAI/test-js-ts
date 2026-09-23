import { nanoid } from "nanoid";
import type { JsonValue } from "type-fest";

export enum CustomerStatus {
  Active = "active",
  Suspended = "suspended",
  Deleted = "deleted"
}

export interface LegacyCustomerRecord {
  legacyId: string;
  payload: JsonValue;
}

export type UnusedCustomerTuple = [id: string, status: CustomerStatus];

export class CustomerService {
  findById(id: string): { id: string; requestId: string } {
    return { id, requestId: nanoid() };
  }

  deleteAllCustomers(): void {
    console.log("dangerous demo method");
  }
}

// fallow-ignore-next-line unused-export -- deliberately stale showcase suppression
export function buildCustomerLabel(name: string): string {
  return `Customer: ${name}`;
}

export function abandonedFormatter(name: string): string {
  return name.toUpperCase();
}
