import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../../components/Login/index.js';

describe('funcionamiento Login', () => {
    test('Revisar el funcionamiento del render del login', () => {
        
        render(<Login/>);
        const loginUsuario = screen.getByTestId("form");
        expect( loginUsuario ).toBeInTheDocument();
    
    });
})
