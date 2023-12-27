import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fvfravoyhyhsfvhjavir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2ZnJhdm95aHloc2Z2aGphdmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzgxOTEsImV4cCI6MjAxOTI1NDE5MX0.I-HnspyAQ3cxPt8QV-mR3vcWyCI7dO0avWuhn9rjF8k";
export const supabase = createClient(supabaseUrl, supabaseKey);
