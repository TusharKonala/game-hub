
import genres from "../data/genres";

// we don't want to send an additional request to fetch the genre list instaed we copied the response object in
// genres.ts, hence we can render it without making an additonal request

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => ({data: genres, isLoading: false, error: null})


export default useGenres;