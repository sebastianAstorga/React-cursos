export const getGifts = async(categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mjoH65IJZFrBSg5t9tN6lz8aLmDhWJLz&q=${ categories }&limit=10`
    const res = await fetch(url);
    const { data } = await res.json();

   // console.log(data);

    const gifts = data.map(  (img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
     }))

     return gifts;
}