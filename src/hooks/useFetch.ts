import { supabase } from "@/lib/supabaseClient";

const fetchAll = async (table: string, limit: number = 0) => {
  const { data, error } = await supabase.from(table).select("*").limit(limit);

  if (error) console.error(error);

  return { data, error };
};

export default fetchAll;
