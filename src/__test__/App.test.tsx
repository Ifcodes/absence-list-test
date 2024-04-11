import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'



 describe('renders count button and click events', () => {
    render(<App />)

    test('should render button', () => { 
        const buttonElement = screen.getByRole('count-toggle')
    
        expect(buttonElement).toBeInTheDocument()
     })

     test('should render Hello World', () => { 
        const buttonElement = screen.getByRole('count-toggle')
    
        expect(buttonElement).toBeInTheDocument()
     })
 })