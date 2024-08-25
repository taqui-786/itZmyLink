"use server";

import { auth } from "@/components/auth";
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

  type CreateCustomPathResponse = 
  | { status: "exists"; message: string }
  | { status: "notAuthenticated"; message: string }
  | { status: "created"; message: string };

export const createCustomPath = async (path: string,localLink:string): Promise<CreateCustomPathResponse> => {
  const session = await auth();
  if (session?.user) {
    const supabase = await supabaseServer();
    const isExists = await supabase.from('links').select('*').eq('path', path);

    if (isExists.data?.length) {
      return { status: "exists", message: `This '/${path}' already exists.` };
    }

    const create = await supabase.from('links').insert({ path, email: session.user?.email, link:localLink });
    
    if (create.statusText === 'Created') {
      return { status: "created", message: "Link created successfully" };
    }
  }
  
  return { status: "notAuthenticated", message: "Not authenticated" };
};
  