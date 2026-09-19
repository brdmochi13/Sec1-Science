export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve the app from GitHub Pages (always fresh)
    const ghPagesUrl = 'https://brdmochi13.github.io/Sec1-Science/index.html';
    
    try {
      const response = await fetch(ghPagesUrl, {
        headers: { 'User-Agent': 'CloudflareWorker/1.0' }
      });
      
      const html = await response.text();
      
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Frame-Options': 'SAMEORIGIN'
        }
      });
    } catch (e) {
      return new Response('Service temporarily unavailable. Please visit https://brdmochi13.github.io/Sec1-Science/ directly.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
};
