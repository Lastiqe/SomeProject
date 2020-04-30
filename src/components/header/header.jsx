import React from 'react';
import Sort from './sort/sort';
import Preview from './preview/preview';
import { StyledHeader } from './styled-header';


const Header = () => {
    return (
        <StyledHeader>
            <div className='headerWrapper'>
                <Sort />
                <Preview />
            </div>
        </StyledHeader>

    );
}



export default Header;
