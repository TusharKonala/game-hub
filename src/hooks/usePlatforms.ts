// we are creating a hook to fetch the platform list from the server(rawg api)
// refer to rawg api documentation

import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;