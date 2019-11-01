const express = require('express')
const authCheck = require('../middleware/auth-check');
const Furniture = require('../models/Furniture');

const router = new express.Router()

function validateFurnitureForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.year = parseInt(payload.year)
  payload.price = parseInt(payload.price)

  if (!payload || typeof payload.make !== 'string' || payload.make.length < 3) {
    isFormValid = false
    errors.make = 'Make must be more than 3 symbols.'
  }

  if (!payload || typeof payload.model !== 'string' || payload.model.length < 3) {
    isFormValid = false
    errors.model = 'Model must be more than 3 symbols.'
  }

  if (!payload || !payload.year || payload.year < 1950 || payload.year > 2050) {
    isFormValid = false
    errors.year = 'Year must be between 1950 and 2050.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const furniture = req.body
  furniture.creator = req.user._id
  const validationResult = validateFurnitureForm(furniture)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Furniture.create(furniture)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Furniture added successfully.',
        furniture
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Furniture.find({})
    .then((furniture) => {
      return res.status(200).json(furniture)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Furniture.findById(id)
    .then((furniture) => {
      if (!furniture) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        make: furniture.make,
        model: furniture.model,
        year: furniture.year,
        description: furniture.description,
        price: furniture.price,
        image: furniture.image,
      }

      if (furniture.material) {
        response.material = furniture.material
      }

      res.status(200).json(response)
    })
})


router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Furniture.find({creator: user})
    .then((furniture) => {
      return res.status(200).json(furniture)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Furniture.findById(id)
    .then((furniture) => {
      if (!furniture) {
        return res.status(200).json({
          success: false,
          message: 'Furniture does not exists!'
        })
      }

      if ((furniture.creator.toString() != user && !req.user.roles.includes("Admin"))) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      Furniture.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Furniture deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const furniture = req.body;

  if (!furniture) {
    return res.status(404).json({
      success: false,
      message: 'Furniture does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validateFurnitureForm(furniture)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Furniture.findByIdAndUpdate(id, furniture)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Furniture edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Furniture.findById(id)
    .then(furniture => {
      if (!furniture) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        make: furniture.make,
        model: furniture.model,
        year: furniture.year,
        description: furniture.description,
        price: furniture.price,
        image: furniture.image
      }

      if (furniture.material) {
        response.material = furniture.material
      }

      res.status(200).json(response)
    })
})

module.exports = router
