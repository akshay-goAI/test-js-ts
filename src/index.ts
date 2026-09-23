import { buildCustomerLabel, CustomerService, CustomerStatus } from "./customer.js";
import { cycleA } from "./cycle-a.js";
import { loadCustomer } from "./api/customer-controller.js";

const service = new CustomerService();

console.log(buildCustomerLabel("Ada"));
console.log(service.findById("customer-1"));
console.log(CustomerStatus.Active);
console.log(cycleA());
console.log(loadCustomer("customer-1"));
