/**
 * IndexNow API Route
 * Submits URLs to Bing, Yandex, and other IndexNow-compatible search engines
 * for near-instant indexing of new or updated pages.
 *
 * Usage: POST /api/indexnow with JSON body { urls: ["https://..."] }
 * Or:    GET  /api/indexnow?url=https://... to submit a single URL
 *
 * IndexNow key must be set in INDEXNOW_KEY environment variable and
 * a matching key file must exist at public/{key}.txt
 */

const SITE_URL = "https://facingnorthtravels.com";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "";

export default async function handler(req, res) {
  if (!INDEXNOW_KEY) {
    return res.status(500).json({ error: "INDEXNOW_KEY environment variable not set" });
  }

  let urlsToSubmit = [];

  if (req.method === "GET") {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: "url query parameter required" });
    urlsToSubmit = [url];
  } else if (req.method === "POST") {
    const { urls } = req.body;
    if (!Array.isArray(urls) || urls.length === 0) {
      return res.status(400).json({ error: "urls array required in body" });
    }
    urlsToSubmit = urls;
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = {
    host: "facingnorthtravels.com",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urlsToSubmit,
  };

  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return res.status(response.status).json({
      submitted: urlsToSubmit.length,
      urls: urlsToSubmit,
      indexnowStatus: response.status,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
