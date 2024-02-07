
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    // each genre object retrieved from the server has a property called "background_image"
    // which contains the link of an image which represents the genre (refer to rawg api)
}


const useGenres = () => useData<Genre>('/genres');


export default useGenres;