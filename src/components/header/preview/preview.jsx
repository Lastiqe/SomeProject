import React from 'react';
import { NavLink } from 'react-router-dom';


const Preview = () => {
    return (
        <div className='previewWrapper'>
            <NavLink to='/table'>
                <span className='table'>ТАБЛИЦА</span>
            </NavLink>
            <NavLink to='/preview'>
                <span className='preview'>ПРЕВЬЮ</span>
            </NavLink>

        </div>
    );
}


export default Preview;
