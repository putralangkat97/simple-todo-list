const axios = require('axios');

const baseUrl = process.env.API_URL

function getEndPoint(url) {
    return `${baseUrl}/api/${url}`
}

const getTodo = async () => {
    const axiosConfig = {
        url: getEndPoint('list'),
        method: 'get'
    }

    try {
        return await axios(axiosConfig)
    } catch (err) {
        console.error("back", err)
    }
}

module.exports = {
    getTodo
}