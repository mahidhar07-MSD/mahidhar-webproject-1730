const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://your-project-url.supabase.co', 'your-anon-key');

async function uploadFile(file) {
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(`public/${file.name}`, file, { upsert: true });

  if (error) {
    console.error('Upload error:', error.message);
    return;
  }

  console.log('Uploaded file:', data);
}

async function getPublicUrl(path) {
  const { data } = supabase.storage.from('avatars').getPublicUrl(path);
  console.log('Public URL:', data.publicUrl);
}
