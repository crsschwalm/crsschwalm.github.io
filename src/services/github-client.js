import axios from 'axios';

const apiURL = 'https://o9ik7ex0rd.execute-api.us-east-1.amazonaws.com/dev'
// const apiURL = 'https://o9ik7ex0rd.execute-api.us-east-1.amazonaws.com/prod'

export const githubGQL = async (query) => {
    try {
        const res = await axios.post(`${apiURL}/api/github`, { query });
        return res.data
    } catch (err) {
        console.warn(err)
        return {}
    }
}