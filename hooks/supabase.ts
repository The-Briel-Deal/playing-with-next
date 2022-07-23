import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://agmyjawzllponpaqjqem.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbXlqYXd6bGxwb25wYXFqcWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg2MDI2NTAsImV4cCI6MTk3NDE3ODY1MH0.L_1K_uJIuyD2yrqd7aqg3gTYlQuT-F_5Yhw8ydJN7Gw')
export default supabase