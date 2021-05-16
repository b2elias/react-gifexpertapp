import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const handleAdd = () => {
    console.log("Perro");
    //setCategories(['Demon Slayer', ...categories])
    setCategories((cats) => [...cats, "Digimon"]); //Estado anterios, nuevo estado
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category, inx) => {
          return <GifGrid key={inx} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
