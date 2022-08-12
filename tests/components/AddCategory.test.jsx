import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en AddCategory.jsx', () => { 


    test('debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { value: 'Saitama' } } )
        expect(input.value).toBe('Saitama');
        
        // screen.debug()

     });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // Marcada como "mock"
        
        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change( input, { target: { value: inputValue } } )
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1); //Pregunta si fn fue llamada solo "x" veces [1 para el ejemplo]
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );//pregunta si fn fue llamada con valores dentro

     });

    test('no debe de llamar el onNewCategory si el input está vacio', () => { 
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>)
        const form = screen.getByRole('form');

        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

     });

    // test('', () => { 

    //  });


 });