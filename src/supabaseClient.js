
import { createClient } from '@supabase/supabase-js'

// supabaseUrl - Project URL
const supabaseUrl = 'https://your-project-id.supabase.co'

// supabaseKey - Anon Public API Key or anon key
const supabaseKey = 'your-anon-public-key'

export const supabase = createClient(supabaseUrl, supabaseKey)
