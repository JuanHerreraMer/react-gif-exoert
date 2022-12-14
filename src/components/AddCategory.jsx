import { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        const value = inputValue.trim();
        if(value.length < 1) return;

        onNewCategory( value );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
          type="text" 
          placeholder="Buscar gifs"
          value={ inputValue }
        //   onChange={ (e) => onInputChanged(e) }
        // onChange se debe enviar event, pero si es solo el unico argumento que se usa se puede dejar vacío y 
        // por defecto enviara el event
          onChange={ onInputChanged }
        ></input>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}