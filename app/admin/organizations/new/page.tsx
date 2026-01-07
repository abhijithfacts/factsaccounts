// "use client"
// import { z } from "zod"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { Button } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { organizationSchema } from "@/lib/validations/org"
// import { toast } from "sonner"

// export default function NewOrganizationForm() {
//     const form = useForm<z.infer<typeof organizationSchema>>({
//         resolver: zodResolver(organizationSchema),
//         defaultValues: {
//             name: "",
//             currency: "USD",
//             plan: "basic",
//         },
//     })

//     async function onSubmit(values: z.infer<typeof organizationSchema>) {
//         try {
//             // API call to create organization and Clerk Org
//             console.log(values)
//             toast.success("Organization created successfully")
//         } catch (error) {
//             toast.error("Something went wrong")
//         }
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                     {/* Section 1: Business Identity */}
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Business Identity</CardTitle>
//                             <CardDescription>Primary legal details for the company.</CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-4">
//                             <FormField
//                                 control={form.control}
//                                 name="name"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Legal Name</FormLabel>
//                                         <FormControl><Input placeholder="Acme Holdings LLC" {...field} /></FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name="taxId"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Tax ID / VAT Number</FormLabel>
//                                         <FormControl><Input placeholder="12-3456789" {...field} /></FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                         </CardContent>
//                     </Card>

//                     {/* Section 2: Fiscal Settings */}
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Accounting Settings</CardTitle>
//                             <CardDescription>Configure currency and fiscal periods.</CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-4">
//                             <FormField
//                                 control={form.control}
//                                 name="currency"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Base Currency</FormLabel>
//                                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                             <FormControl>
//                                                 <SelectTrigger><SelectValue placeholder="Select currency" /></SelectTrigger>
//                                             </FormControl>
//                                             <SelectContent>
//                                                 <SelectItem value="USD">USD - US Dollar</SelectItem>
//                                                 <SelectItem value="EUR">EUR - Euro</SelectItem>
//                                                 <SelectItem value="GBP">GBP - British Pound</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name="fiscalYearEnd"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Fiscal Year End</FormLabel>
//                                         <FormControl><Input type="date" {...field} /></FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                         </CardContent>
//                     </Card>
//                 </div>

//                 <Card>
//                     <CardHeader><CardTitle>Full Address</CardTitle></CardHeader>
//                     <CardContent>
//                         <FormField
//                             control={form.control}
//                             name="address"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormControl>
//                                         <Input placeholder="123 Financial Way, Ste 400, New York, NY" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                     </CardContent>
//                 </Card>

//                 <div className="flex justify-end gap-4">
//                     <Button variant="outline" type="button">Cancel</Button>
//                     <Button type="submit">Create Organization</Button>
//                 </div>
//             </form>
//         </Form>
//     )
// }