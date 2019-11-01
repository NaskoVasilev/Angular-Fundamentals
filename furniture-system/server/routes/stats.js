const express = require('express')
const Furniture = require('../models/Furniture');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Furniture.find({}).then((furniture) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        furniture: furniture.length,
        users: users.length
      })
    })
  })
})

module.exports = router
