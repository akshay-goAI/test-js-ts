import { nanoid } from "nanoid";
import type { JsonValue } from "type-fest";

export enum CustomerStatus {
  Active = "active",
}

export class CustomerService {
  findById(id: string): { id: string; requestId: string } {
    return { id, requestId: nanoid() };
  }

  }
}

export function buildCustomerLabel(name: string): string {
  return `Customer: ${name}`;
}
