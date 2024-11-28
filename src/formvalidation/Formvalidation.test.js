import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Formvalidation";

describe('Login Component', () => {
    test('renders form inputs and submit button', () => {
        render(<Login />);
        
        const emailInput = screen.getByTestId('email-input');
        const passwordInput = screen.getByTestId('password-input');
        const submitButton = screen.getByTestId('submit-button');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('shows validation messages when inputs are invalid', async () => {
        render(<Login />);
        
        const submitButton = screen.getByTestId('submit-button');
        fireEvent.click(submitButton);

        const emailError = await screen.findByText('Email must be provided.');
        const passwordError = await screen.findByText('Password must be provided.');

        expect(emailError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
    });


    test('displays specific validation error for email format', async () => {
        render(<Login />);

        const emailInput = screen.getByTestId('email-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.click(submitButton);

        const emailFormatError = await screen.findByText('Email must be in email format.');
        expect(emailFormatError).toBeInTheDocument();
    });

    test('shows validation message when password format is invalid', async () =>{
        render(<Login />)
        const passwordInput = screen.getByTestId('password-input')
        const submitButton = screen.getByTestId('submit-button')

        fireEvent.change(passwordInput,{target:{value:'pss'}})
        fireEvent.click(submitButton)
        
        const passwordFormatError = await screen.findByText('Password must be at least four characters.')
        expect(passwordFormatError).toBeInTheDocument()
    })


    test('submits form with valid inputs', async () => {
        render(<Login />);

        const emailInput = screen.getByTestId('email-input');
        const passwordInput = screen.getByTestId('password-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(submitButton);

        expect(screen.queryByText('Email must be provided.')).toBeNull();
        expect(screen.queryByText('Password must be provided.')).toBeNull();
        expect(screen.queryByText('Email must be in email format.')).toBeNull();

        expect(emailInput.value).toBe('test@gmail.com');
        expect(passwordInput.value).toBe('password123');
    });
});
