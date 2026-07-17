// serverless-save-theme.js
// This file is a ready-to-deploy serverless endpoint implementation to persist a shared theme
// for the Ever After Events site. It is provided as a standalone file; to deploy on Vercel,
// place it in the project under /api/save-theme.js. To deploy on Netlify, adapt the code
// into /netlify/functions/save-theme.js.

// Usage notes (Vercel):
// 1. Add environment variables to your Vercel project: GITHUB_TOKEN, REPO_OWNER, REPO_NAME
// 2. Copy this file to /api/save-theme.js in the project (root of repository)
// 3. POST to /.vercel/functions/save-theme (or /api/save-theme when deployed) with JSON body:
//    { "theme": { ... }, "message": "Optional commit message" }
// 4. The function will create/update the file shared/theme-shared.json in the repo via the GitHub API.

// Security: keep GITHUB_TOKEN secret and grant it only the required scopes (repo contents). You
// should protect this endpoint with some authentication in production (for example, a simple
// bearer token in environment variables and check it on incoming requests).

const fetch = require('node-fetch')

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const token = process.env.GITHUB_TOKEN
  const owner = process.env.REPO_OWNER
  const repo = process.env.REPO_NAME
  const adminSecret = process.env.ADMIN_SECRET // optional simple auth

  if (!token || !owner || !repo) {
    return res.status(500).json({ error: 'GITHUB_TOKEN, REPO_OWNER and REPO_NAME must be configured in env' })
  }

  if (adminSecret) {
    const headerToken = (req.headers['x-admin-token'] || req.headers['authorization'] || '').replace(/^Bearer\s+/i, '')
    if (!headerToken || headerToken !== adminSecret) return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const payload = req.body
    if (!payload || !payload.theme) return res.status(400).json({ error: 'Missing theme in request body' })

    const path = 'shared/theme-shared.json'
    const getUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    const headers = { Authorization: `token ${token}`, 'User-Agent': 'ever-after-events' }

    const getRes = await fetch(getUrl, { headers })
    const getJson = await getRes.json()

    const content = Buffer.from(JSON.stringify(payload.theme, null, 2)).toString('base64')

    const commitMessage = payload.message || 'Update shared theme via serverless function'

    const body = getRes.status === 200
      ? { message: commitMessage, content, sha: getJson.sha }
      : { message: commitMessage, content }

    const putRes = await fetch(getUrl, { method: 'PUT', headers: { ...headers, 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    const putJson = await putRes.json()

    if (putRes.status >= 400) {
      return res.status(putRes.status).json({ error: putJson })
    }

    return res.status(200).json({ ok: true, result: putJson })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'unexpected_error', details: String(err) })
  }
}
