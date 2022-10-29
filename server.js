const express = require('express');
const articleRouter = require('./routes/articles')
const app = express()


app.set('view engine', 'ejs')

app.use('/articles',articleRouter)

app.get('/',(req,res)=>{
    const articles = [
        {
        title:'Text article',
        createdAt: new Date(),
        description:'Text description'
    },
        {
        title:'Text article 2',
        createdAt: new Date(),
        description:'Text description 2'
    }
]
    res.render('articles/index.ejs',{articles: articles})
})
app.listen(5000)