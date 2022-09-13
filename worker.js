export default {
  fetch: async (req, env) =>  {
    return new Response(JSON.stringify({ api, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}
