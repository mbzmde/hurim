import { createClient } from "@supabase/supabase-js";
import process from "process";

export const supabase = createClient(
  "https://fykzbdtxkyjhaaaisgun.supabase.co",
  process.env.VUE_APP_SUPABASE_KEY
);
