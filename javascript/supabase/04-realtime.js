const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://your-project-url.supabase.co', 'your-anon-key');

supabase
  .channel('students_changes')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'students' }, (payload) => {
    console.log('New student added:', payload.new);
  })
  .subscribe();

console.log('Realtime subscription started');
