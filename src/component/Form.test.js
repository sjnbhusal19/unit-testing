import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe('Form Component', () => {
  test('renders form inputs and submit button', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name-input');
    const inputEmail = screen.getByTestId('email-input');
    const inputButton = screen.getByTestId('button-input');

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputButton).toBeInTheDocument();
  });

  test('shows success message when form is submitted with valid input', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name-input');
    const inputEmail = screen.getByTestId('email-input');
    const inputButton = screen.getByTestId('button-input');

    fireEvent.change(inputName, { target: { value: 'test project' } });
    fireEvent.change(inputEmail, { target: { value: 'test@gmail.com' } });
    fireEvent.click(inputButton);

    const successMessage = screen.getByTestId('success-test');
    expect(successMessage).toBeInTheDocument();
  });

  test('does not show success message if invalid name and email', () => {
    render(<Form />);
    const inputButton = screen.getByTestId('button-input');
    fireEvent.click(inputButton);

    const successMessage = screen.queryByTestId('success-test'); // Use queryByTestId
    expect(successMessage).toBeNull();
  });
});



















// import { fireEvent, render, screen } from "@testing-library/react"
// import Form from "./Form"

// describe('Component',()=>{
// test('renders form input and submit',()=>{
//     render(<Form />) 
//     const inputName = screen.getByTestId('name-input')
//     expect(inputName).toBeInTheDocument()

//     const inputEmail = screen.getByText('email-input')
//     expect(inputEmail).toBeInTheDocument()

//     const inputButton = screen.getByText('button-input')
//     expect(inputButton).toBeInTheDocument()
// })
// })

// describe('Form Component',()=>{
// test ("show sucess message when form is submitted with valid input",()=>{
//     render(<Form />)
//     const inputName = screen.getByTestId('name-input')
//     const inputEmail = screen.getByText('email-input')
//     const inputButton = screen.getByText('button-input')

//     fireEvent.change(inputName,{target:{value:'test project'}})
//     fireEvent.change(inputEmail,{target:{value:'test@gmail.com'}})

//     fireEvent.click(inputButton)

//     const successMessage = screen.getByText('Form submitted successfully!')
//     expect(successMessage).toBeInTheDocument()

// })

// test('doesnot show success message if invalid name and email',()=>{
//     render(<Form />)
//     const inputButton = screen.getByTestId('button-input')
//     fireEvent.click(inputButton)
//     const successMessage = screen.getByTestI('success-test')

//         expect(successMessage).toBeNull()
    
// })
// })