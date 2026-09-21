const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://your-project-url.supabase.co', 'your-anon-key');

async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error('Sign up error:', error.message);
    return;
  }

  console.log('User signed up:', data.user);
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error('Login error:', error.message);
    return;
  }

  console.log('Logged in user:', data.user);
}

// Example usage
// signUp('student@example.com', 'StrongPass123');
// signIn('student@example.com', 'StrongPass123');
