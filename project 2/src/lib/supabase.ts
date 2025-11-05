import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface EmailSubmission {
  id?: string;
  email: string;
  designer_type?: string;
  created_at?: string;
}

export const submitEmail = async (email: string, designerType?: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('email_submissions')
      .insert([
        {
          email: email.toLowerCase().trim(),
          designer_type: designerType,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error submitting email:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error submitting email:', error);
    return false;
  }
};
