import { Api } from "../lib/axios"

export const postData = async (endpoint, body) => {
    try {
        const data = await Api.post(endpoint, body)
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }

}