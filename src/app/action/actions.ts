"use server"

import { createClient } from "@/app/utils/supabase/server"

export const addBooking = async (formData: object, table: string) => {
  const supabase = await createClient(); 
  const { data, error } = await supabase
    .from(table)
    .insert(formData)
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return Array.isArray(data) ? data : data?.[0];
};