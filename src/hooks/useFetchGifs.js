// custom hook
import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false)
    }

    //Este hook el primero argumento es lo que nosotros queremos ejecutar, el segundo argumento no es obligatorio
    // pero si necesario, en donde si se deja vacío con corchetes, este solo se ejecutará 1 vez
    // el segundo argumento es un arreglo con las dependencias
    useEffect( () => {
        getImages();
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
