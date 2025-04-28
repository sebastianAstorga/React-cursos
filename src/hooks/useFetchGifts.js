import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifts'


export const useFetchGifts = ( categories ) =>{

    const [ currenteGif, setCurrentGift ] = useState([]);
    const [ isLoading , setIsLoading ] = useState(true);

    const getImages = async() =>{
      const newImages = await getGifts(categories);
      setCurrentGift(newImages);
      setIsLoading(false);
    }
    useEffect( ()=>{
      setTimeout(()=> {
        getImages()
      },5000)
    }, [])


    return {
        image: currenteGif,
        isLoading
    }
}