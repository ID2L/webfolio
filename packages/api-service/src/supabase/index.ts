import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "supabase-types";

export type SupabaseTypedClient = SupabaseClient<Database>;
