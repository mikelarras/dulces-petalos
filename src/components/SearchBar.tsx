export const SearchBar = ({
  setSearch,
}: {
  setSearch: (text: string) => void;
}) => {
  const handleChange = (text: string) => {
    setSearch(text);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Busca en nuestra tienda"
        onChange={(event) => handleChange(event.target.value)}
      ></input>
    </div>
  );
};
