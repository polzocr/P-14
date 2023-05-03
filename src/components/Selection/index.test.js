import Selection from "./index";
import { render, screen, fireEvent,  } from '@testing-library/react'

describe('testing Selection component', () => {
    it('should render default value', () => {
        const arrayElements = [1, 2, 3]
        render(<Selection elements={arrayElements} />)
        expect(screen.getByText('Choose an option')).toBeTruthy()
        expect(screen.getByLabelText('selected_value')).toBeTruthy()
        expect(screen.getByRole('option', { name: 'Choose an option' }).selected).toBe(true)
    })
    it('should render a correct select element', () =>{
        const arrayElements = [1,2,3]
        const title = 'Number'
        const name = 'selected_number'

        const Render = render(<Selection elements={arrayElements} title={title} name={name}/>)
        expect(Render).toMatchSnapshot()
    })
    it('should trigger the function', async () => {
        const arrayElements = [1, 2, 3]
        const mockChange = jest.fn();
        render(<Selection elements={arrayElements} onChange={mockChange}/>)

        const selectComp = screen.getByTestId('test-select')
        const optionChoosed = screen.getByText('1')

        fireEvent.change(selectComp, { target: { value: '1' } });
        expect(optionChoosed.selected).toBe(true)
        expect(mockChange).toHaveBeenCalledTimes(1);

    })
})