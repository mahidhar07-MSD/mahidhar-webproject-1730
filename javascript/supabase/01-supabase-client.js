const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

async function getStudents() {
  const { data, error } = await supabase.from('students').select('*');

  if (error) {
    console.error('Error fetching students:', error.message);
    return;
  }

  console.log('Students:', data);
}

getStudents();
