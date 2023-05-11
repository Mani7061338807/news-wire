const news = require('../models/news')

exports.newsIndex = async(req,res)=>{
    try {
        const newsPosts = await news.find();
        res.status(200).json(newsPosts)
    } catch (error) {
        console.log(error)
        res.status(400).json({
			info: error.message
		});
    }
}

exports.createNews = async (req,res)=>{
    try {
       const newPost = new news({
          title:req.body.title,
          author:req.body.author,
          body:req.body.body
       }) 
       await newPost.save();
       res.status(200).json('saved')
    } catch (error) {
        console.log(error)
        res.status(400).json({
			info: error.message
		});
    }
}

exports.showNews = async(req,res)=>{
    try {
        const newsPost = await news.findById(req.params.id);
        res.status(200).json(newsPost)
    } catch (error) {
        console.log(error)
        res.status(400).json({
			info: error.message
		});
    }
}

exports.updateNews = async(req,res)=>{
    try {
        await news.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            author:req.body.author,
            body:req.body.body
        })
        res.status(200).json('ok')
    } catch (error) {
        console.log(error)
        res.status(400).json({
			info: error.message
		});
    }
}
exports.deleteNews = async(req,res)=>{
    try {
        await news.findByIdAndDelete(req.params.id);
        res.status(200).json('ok')
    } catch (error) {
        console.log(error)
        res.status(400).json({
			info: error.message
		});
    }
}
