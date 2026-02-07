import * as z from "zod";

export const registerSchema = z.object({
    nip: z.string().min(5, "NIP must be at least 5 characters"),
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    dob: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["STAFF", "USER"]),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
