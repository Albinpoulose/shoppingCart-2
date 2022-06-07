const express = require('express')
const app = express()

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user')


const port = 4000

try {
    app.use('/admin',adminRouter );
    app.use('/',userRouter)
} catch (error) {
    console.log(error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})