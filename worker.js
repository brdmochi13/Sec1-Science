// Auto-generated — serves index.html via Cloudflare Workers
// Rebuilt from Sep 12 2026 working version
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Proxy to GitHub Pages
  const url = 'https://brdmochi13.github.io/Sec1-Science/'
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CloudflareWorker)' }
  })
  const body = await response.text()
  return new Response(body, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  })
}
