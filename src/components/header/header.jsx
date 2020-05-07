import React from 'react';
import Sort from './sort/sort';
import Preview from './preview/preview';
import { StyledHeader } from './styled-header';


const Header = (props) => {

    return (
        <StyledHeader sortType={props.sortType} sortOrder={props.sortOrder} >
            <div className='headerWrapper'>
                <Sort sortType={props.sortType}
                    changeSortType={props.changeSortType}
                    sortOrder={props.sortOrder} />
            </div>
        </StyledHeader>

    );
}



export default Header;
