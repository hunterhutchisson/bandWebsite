const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

//static assets
app.use(express.static('public'))

//templates
app.set('view engine', 'ejs')

//routes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})