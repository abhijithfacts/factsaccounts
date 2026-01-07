import * as z from "zod"

export const organizationSchema = z.object({
    name: z.string().min(2, "Company name is required"),
    email: z.string().email("Invalid contact email"),
    taxId: z.string().min(5, "Tax/VAT ID is required for invoicing"),
    currency: z.string().default("USD"),
    fiscalYearEnd: z.string(),
    plan: z.enum(["basic", "pro", "enterprise"]).default("basic"),
    address: z.string().min(10, "Full business address is required"),
})