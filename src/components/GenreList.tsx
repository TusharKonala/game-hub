import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  // in 'useGenres.ts' we fetched data using the generic hook

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
