import Selection from "./index";
import {render, screen} from '@testing-library/react'

describe('Theu firsteu testeu', () => {
    it('shouldadou someuthing', () =>{
        const arrayElements = [1,2,3]
        const title = 'Number'
        const name = 'selected_number'

        const Render = render(<Selection elements={arrayElements} title={title} name={name}/>)
        expect(Render).toMatchSnapshot()
    })
})