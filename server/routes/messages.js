const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  const messages = db.prepare(
    'SELECT * FROM messages ORDER BY created_at DESC'
  ).all()
  res.json(messages)
})

router.post('/', (req, res) => {
  const { name, graduation_year, content } = req.body

  if (!name || !name.trim()) {
    return res.status(400).json({ error: '请填写你的名字' })
  }
  if (!graduation_year || graduation_year < 1997 || graduation_year > 2026) {
    return res.status(400).json({ error: '毕业年份需在 1997-2026 之间' })
  }
  if (!content || !content.trim()) {
    return res.status(400).json({ error: '请填写你想说的话' })
  }
  if (content.length > 500) {
    return res.status(400).json({ error: '留言内容不能超过500字' })
  }

  const stmt = db.prepare(
    'INSERT INTO messages (name, graduation_year, content) VALUES (?, ?, ?)'
  )
  const result = stmt.run(name.trim(), graduation_year, content.trim())

  res.status(201).json({
    id: result.lastInsertRowid,
    name: name.trim(),
    graduation_year,
    content: content.trim(),
    created_at: new Date().toISOString(),
  })
})

module.exports = router
