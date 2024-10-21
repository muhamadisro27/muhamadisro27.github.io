import { supabase } from "@/lib/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";

export const fetchAll = async (
  table: string,
  limit: number = 0
) => {
  let query = supabase.from(table).select("*");

  if (limit > 0) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

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
