import { supabase } from "@/lib/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";

export const fetchAll = async (table: string, limit: number = 0) => {
  const { data, error } = await supabase.from(table).select("*").limit(limit);

  handleErrorFetch(error);

  return { data, error };
};

export const fetchBySlug = async (table: string, slug: string) => {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("slug", slug)
    .single();

  handleErrorFetch(error);

  return { data, error };
};

const handleErrorFetch = (error: PostgrestError | null) => {
  if (error) console.error(error);
};
