const supabaseUrl = "https://pidlxjzkyvwajgqtuekh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZGx4anpreXZ3YWpncXR1ZWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTAzNTksImV4cCI6MjAzOTgyNjM1OX0.Apdn-kIQd0RTOJ5aeGXhRBGoOLy9MqKTPFg8SqUX7tE";
import { createClient } from "@supabase/supabase-js";

export const useSupabase = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  return { supabase };
};
