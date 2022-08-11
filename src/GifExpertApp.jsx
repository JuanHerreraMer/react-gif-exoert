import { useState } from 'react';
//import de archivo de barril
import { AddCategory, GifGrid  } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  
  const onAddCategory = ( newCategory ) => {
      // valida categoria unica
      if( categories.includes(newCategory) ) return;

      // setCategories([ newCategory, ...categories ]);
      setCategories(cat => [newCategory, ...cat])
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={ setCategories }
            // por lo general, cuando comienza por on es porque está emitiendo algo
            onNewCategory={ event => onAddCategory(event)}
        />

          { 
            categories.map( category => (
              <GifGrid 
                key={ category } 
                category={ category }
              /> 
            )) 
          }
    </>
  )
}
