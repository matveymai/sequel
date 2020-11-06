const { json } = require('micro')
const { router, get, post } = require('microrouter')
const { Record } = require('./db')

const index = async () => {
  let rows = await Record.findAll()
  return JSON.stringify(rows, null, '  ')
}

const addRecord = async (req) => {
  const { text } = await json(req);
  await Record.create({
    text,
  })
}

const pages = (req, res) => {
  return JSON.stringify({
    query: req.query,
    params: req.params
  })
}

module.exports = router(
    get('/', index),
    post('/', addRecord),
    get('/pages/:page/*', pages)
)