"use server";

import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema, loginSchema, LoginSchema } from "@/lib/validations/auth";

export async function registerAction(data: RegisterSchema) {
    const result = registerSchema.safeParse(data);

    if (!result.success) {
        return { error: "Invalid form data" };
    }

    const { email, password, role, nip, fullName, dob, address, phoneNumber } = result.data;

    const cookieStore = cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name) {
                    return cookieStore.get(name)?.value;
                },
                set(name, value, options) {
                    cookieStore.set({ name, value, ...options });
                },
                remove(name, options) {
                    cookieStore.set({ name, value: "", ...options });
                },
            },
        }
    );

    // 1. Sign up with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                role,
            },
        },
    });

    if (authError) {
        return { error: authError.message };
    }

    if (!authData.user) {
        return { error: "Registration failed" };
    }

    try {
        // 2. Create User record in Prisma
        const user = await prisma.user.create({
            data: {
                id: authData.user.id, // Link with Supabase ID
                email,
                fullName,
                role: role as "STAFF" | "USER", // Type assertion for Prisma Enum
            },
        });

        // 3. Create specific profile based on role
        if (role === "STAFF") {
            await prisma.staff.create({
                data: {
                    nip,
                    fullName, // Redundant but requested in schema
                    dob: new Date(dob),
                    address,
                    phoneNumber,
                    email,
                    role: "STAFF",
                    userId: user.id,
                },
            });
        }
    } catch (error: any) {
        console.error("Prisma error:", error);
        // Rollback? ideally yes, but for now just return error
        return { error: "Database error: " + error.message };
    }

    return { success: true };
}

export async function loginAction(data: LoginSchema) {
    const result = loginSchema.safeParse(data);

    if (!result.success) {
        return { error: "Invalid form data" };
    }

    const { email, password } = result.data;
    const cookieStore = cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name) {
                    return cookieStore.get(name)?.value;
                },
                set(name, value, options) {
                    cookieStore.set({ name, value, ...options });
                },
                remove(name, options) {
                    cookieStore.set({ name, value: "", ...options });
                },
            },
        }
    );

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}
