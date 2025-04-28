import { useState } from "react"
import { AddCategory, GridGif } from "./components";;

export const GifApp = () => {
   
    const [categories , setCategories] = useState(['One Punch']);
    
    const onAddCategory = (onNewValue) => {
        if(categories.includes(onNewValue)) return;

        setCategories([onNewValue,...categories])
    }

    return(
      <>
          <h1>GifApp</h1>
          <AddCategory 
            //setCategories={ setCategories }
            onNewValue = { onAddCategory }
          />
            { categories.map( (categories) => (
                  <GridGif key={ categories } categories = {categories}/>
            ))
            }
      </>
    )
}