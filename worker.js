const api = {
  icon: '⚡️☁️',
  name: 'webhooks.do',
  description: 'Webhook Storage',
  url: 'https://webhooks.do/api',
  type: 'https://apis.do/tools',
  endpoints: {
    webhook: 'https://webhooks.do/:namespace',
    details: 'https://webhooks.do/:namespace/:id',
  },
  site: 'https://webhooks.do',
  repo: 'https://github.com/drivly/webhooks.do',
}

export default {
  fetch: async (req, env) =>  {
    return new Response(JSON.stringify({ api, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}
