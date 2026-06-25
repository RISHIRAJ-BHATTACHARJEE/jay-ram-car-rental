import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Read .env manually
const envPath = path.resolve('.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envConfig = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim();
    envConfig[key] = val;
  }
});

const supabaseUrl = envConfig.VITE_SUPABASE_URL;
const supabaseAnonKey = envConfig.VITE_SUPABASE_ANON_KEY;
const bucketName = envConfig.VITE_SUPABASE_BUCKET || 'storage-bucket';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase env vars");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  const { data, error } = await supabase.storage.from(bucketName).list("", {
    sortBy: { column: "created_at", order: "desc" },
  });

  if (error) {
    console.error("Error listing files:", error);
    return;
  }

  console.log("Checking public URLs for all files:");
  for (const file of data) {
    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(file.name);
    
    try {
      const res = await fetch(publicUrlData.publicUrl, { method: 'HEAD' });
      console.log(`- ${file.name}: status ${res.status}, URL: ${publicUrlData.publicUrl}`);
    } catch (e) {
      console.log(`- ${file.name}: Fetch error ${e.message}`);
    }
  }
}

run();
