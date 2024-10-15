const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const authRouter = require('./routes/authRoutes');
const marketRouter = require('./routes/marketRoutes');


const app = express();

//1) MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//2) Middleware to parse JSON bodies
app.use(express.static(`${__dirname}/public/uploads`));
app.use(express.static(`${__dirname}/public/products`));

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    req.currentTime = new Date().toISOString();
    next();
});


// 3) ROUTES
app.use('/api/v1', userRouter);
app.use('/api/v1', postRouter);
app.use('/api/v1', authRouter);
app.use('/api/v1', marketRouter);



//4) For all UNHANDLED ROUTES
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'Fail ❌',
        message: `Can't find ${req.originalUrl} on the server!`
    })
});

module.exports = app;