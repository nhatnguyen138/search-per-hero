const express = require('express')
const router = express.Router()
const Heroes = require('../models/Heroes')

// @route GET api/search
// @desc Search for hero
// @access Public
router.get('/search/:input', async (req, res) => {
  try {
    const input = req.params.input
    const heroes = Heroes.list
    const results = []
    heroes.forEach(hero => {
      if (hero.name.toLowerCase().includes(input))
        results.push(hero)
    })
    return res.status(200).send({
      success: true,
      results: results
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({success: false, message: "Internal server error"})
  }
})

// @route GET api/:id
// @desc Get hero info
// @access Public
router.get('/:id', (req, res) => {
  try {
    const id = req.params.id
    const heroes = Heroes.list
    heroes.forEach(hero => {
      if (hero.id===id)
      return res.status(200).send({
        success: true,
        results: hero
      })
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({success: false, message: "Internal server error"})
  }
})

// @route PUT api/alter/:id
// @desc Alter hero stats
// @access Public
router.put('/alter/:id', (req, res) => {
  try {
    const id = req.params.id
    const stats = req.body.stats
    const heroes = Heroes.list
    heroes.forEach(hero => {
      if (hero.id===id) {
        hero.powerstats = stats
      return res.status(200).send({success: true, results: "Hero has been updated"})
      }
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({success: false, message: "Internal server error"})
  }
})

module.exports = router