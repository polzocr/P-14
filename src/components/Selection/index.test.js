import Selection from "./index";
import {render, screen} from '@testing-library/react'

describe('testing Selection component', () => {
    it('should render default value', () => {
        const arrayElements = [1, 2, 3]
        render(<Selection elements={arrayElements} />)
        expect(screen.getByText('Choose an option')).toBeTruthy()
        expect(screen.getByLabelText('selected_value')).toBeTruthy()
    })
    it('should render a correct select element', () =>{
        const arrayElements = [1,2,3]
        const title = 'Number'
        const name = 'selected_number'

        const Render = render(<Selection elements={arrayElements} title={title} name={name}/>)
        expect(Render).toMatchSnapshot()
    })
})