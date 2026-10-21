// Standard Cloudflare Worker entry point to serve static assets
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
