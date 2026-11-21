// Sholani School SMIS v6-ONLINE — Supabase settings
// 1. په supabase.com کې وړیا اکاونټ جوړ کړئ (وړیا پلان، کارت نه غواړي).
// 2. نوی project جوړ کړئ، بیا Settings > API ته لاړ شئ.
// 3. Project URL او anon public key دلته ولیکئ (د YOUR-PROJECT او
//    PASTE-YOUR-ANON-KEY-HERE پر ځای).
// تر څو چې دا ځای‌نيونکي (placeholders) پر ځای وي، سایټ په ډیمو حالت کې
// کار کوي — اپلوډ یوازې په دې وسیله کې ښکاري، ټولو ته نه.
// anon key عامه ده (په براوزر کې ښکاري) — خوندي ده، ځکه RLS په
// supabase-setup.sql کې anonymous لیکنه په بشپړ ډول بنده کړې ده.
window.ONLINE_CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "PASTE-YOUR-ANON-KEY-HERE",
  BUCKET: "school-media"
};
