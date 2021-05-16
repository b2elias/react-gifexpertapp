export const getGifs = async (category) => {
  const api_key = "L5plmDzgdFqWSJ4JbFYioJFFbC89GFQj";
  const limit = 5;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${api_key}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};