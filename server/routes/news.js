const express = require('express');
const router = express.Router();
const news = require('../models/news')
const newsController = require('../controllers/news')

router.get('/api/news',newsController.newsIndex)

router.post('/api/news',newsController.createNews)

router.get('/api/news/:id',newsController.showNews)

router.patch('/api/news/:id',newsController.updateNews)

router.delete('/api/news/:id',newsController.deleteNews)
module.exports = router;