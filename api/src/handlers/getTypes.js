const axios = require("axios");

const getTypes = async (req, res, URL) => {
try {
    const {data} = await axios(URL);
    return data.results; 
} catch (error) {
    return res.status(400).send({"error": error.message})
}
}

module.exports = getTypes;