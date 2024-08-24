"use server";

import { supabaseServer } from "./supabaseServer";

export const isUserExists = async (email: string) => {
  const supabase = await supabaseServer()
    .from("users")
    .select("*")
    .eq("email", email);
    
  if (supabase.data?.length) {
    return { status: "exists"};
  }
  return { status: "success" };
};

export const createUser = async (payload:any) => {
    const supabase = await supabaseServer().from('users').insert({fullname:payload?.name, email: payload?.email})
      
    if (supabase.statusText === 'Created') {
      return { status: "success"};
    }
    return { status: "error", message: supabase.error };
  };