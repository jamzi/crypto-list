import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './Header';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        selectedFiatCurrency: 'EUR',
        classes: { }
    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <Header {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Header', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();

            expect(enzymeWrapper.find('h3').text()).toBe('Crypto List');
            expect(enzymeWrapper.find('.selectedFiatCurrency').text()).toBe('EUR'); // initial fiat currency
        });
    })
})