import axios from 'axios';
// we downloaded axios using "npm i axios"
// axios is used to make http requests

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    // we took this link from games list in rawg api, we altered the link to make it more general
    // we basically removed the endpoint "/games"
    // The baseURL is set to 'https://api.rawg.io/api'. This is the base URL that will be prepended to
    //  relative URLs when making requests. In this case, all requests will be made to the Rawg API.
    params: {
        key: '7a595651350c4b3ab2b8631ea2a00b11'
        // this api key is taken from rawg api
    }
    // In the context of an HTTP request, a "parameter" typically refers to data that is sent 
    // along with the request. Parameters are used to
    //  provide additional information to the server or to modify the behavior of the request
    // The params object is used to set default parameters that will be included in every request made
    //  with this Axios instance. In this case, it includes a key parameter with the
    //  value '7a595651350c4b3ab2b8631ea2a00b11'. This is an API key used for authentication with the Rawg API.
})

// refer to apiclient ss in React notes folder

// The RAWG Video Games Database (RAWG API) is a RESTful API that provides access to a
//  comprehensive database of video games, including information
//  about games, developers, platforms, genres, and more. Developers often use such APIs to 
//  integrate video game-related data into their applications, websites, or services.
// An API key is a form of authentication and authorization used by APIs to control access and
//  identify the source of requests. In the case of the RAWG API, an API key is likely required 
//  for the following reasons:
// Authentication: An API key serves as a way to authenticate the client (your application)
//  with the API server. It allows the API to verify that the requests are coming from an authorized source.
// Authorization: API keys are often associated with usage quotas and permissions. 
// By using an API key, the API provider can track and manage the usage of their 
// API, ensuring that each client stays within its allocated limits.
// Developer Tracking: API keys provide a way for the API provider to track the usage
//  of their API by individual developers or applications. This tracking can be useful for
//   analytics, monitoring, and billing purposes.