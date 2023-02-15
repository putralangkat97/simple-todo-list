const express = require('express')
const next = require('next')
// const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8088
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev,
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const csrf = require('csurf')
    const cookieSession = require('cookie-session')
    const cacheControl = require('express-cache-controller')

    const server = express()
    // server.use(cors());
    server.set('etag', false); // turn off
    server.disable('x-powered-by')
    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))

    server.use(
        cookieSession({
            name: 'nxfe.sid',
            keys: [process.env.APP_KEY],
            maxAge: 24 * 60 * 60 * 1000,
        })
    )

    const rateLimit = require('express-rate-limit')
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
    // server.use('/api', limiter)
    server.use(cacheControl({
        noCache: true
    }));

    const router = require('./server/route')
    server.use('/api', router)

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})