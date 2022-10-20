import axios from "axios";

async function FetchApi (query = "", page = 1, per_page = 12){
    const ApiKey = "29226751-f0ce60e58b224fb7f016bc6a2";
    const URL = "https://pixabay.com/api/";
    try{
        const response = await axios.get(URL, 
            {
                params:{
                    key: ApiKey,
                    q: query,
                    page,
                    per_page
                }
            })
        // console.log(response);
        response.data.hits = response.data.hits.map(item => {
            return {
                id: item.id,
                webformatURL: item.webformatURL,
                largeImageURL: item.largeImageURL
            }
        }) 
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export { FetchApi }; 

