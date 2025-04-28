import { GifItem, Loading } from "./index"
import { useFetchGifts } from "../hooks/useFetchGifts"



export const GridGif = ( {categories} ) => {
    
   const {image , isLoading } = useFetchGifts( categories );

   console.log(isLoading);

  

    return (
        <>
          <h3> { categories } </h3>
          {
            isLoading && ( <Loading/>)
          }
          <div>
            {
               image.map( (image) => (
                 <GifItem key={image.id} 
                  {...image}
                 />
               ))
            }
          </div>
        </>
    )
}