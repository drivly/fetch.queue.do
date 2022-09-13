const api = {
  icon: '⚡️☁️',
  name: 'fetch.queue.do',
  description: 'Fetch Queue',
  url: 'https://fetch.queue.do/api',
  type: 'https://apis.do/tools',
  endpoints: {
    webhook: 'https://fetch.queue.do/:namespace',
    details: 'https://fetch.queue.do/:namespace/:id',
  },
  site: 'https://fetch.queue.do',
  repo: 'https://github.com/drivly/webhooks.do',
}

export default {
  fetch: async (req, env) =>  {
    const { user } = await env.CTX.fetch(req).then(res => res.json())
    const { origin, hostname, pathname } = new URL(req.url)
    return new Response(JSON.stringify({ api, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}
