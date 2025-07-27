const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const url = "https://replit.com/join/vctakptqip-pm-gamergamer";
const webhook = ""; // Optional webhook

async function check() {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    if (res.status !== 200) {
      console.log(`[${new Date().toISOString()}] ❌ ${res.status} ERROR`);
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `❌ Replit link check failed: ${res.status}`
          })
        });
      }
    } else {
      console.log(`[${new Date().toISOString()}] ✅ Link is OK`);
    }
  } catch (e) {
    console.error(`[${new Date().toISOString()}] ⚠️ Error: ${e.message}`);
  }
}

check();
