import React from 'react';
import { StyledUser } from '../../styled-content';



const UserPreviewBlock = (props) => {

    return (

        <div className='userWrapper'>
            <User status={true} />
        </div>
    );
}

const User = (props) => {
    return (
        <StyledUser fullDisplayToggle={props.status}>
            <div className='user'>
                <div className='userInfo'>
                    <div className='name'>Василий Уткин</div>
                    <div className='age'>возраст: 35 </div>
                    <div className='phone'>+7 (934)892-12-21</div>
                    <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem optio doloremque reiciendis minus iste ad nesciunt commodi deserunt sint! </div>
                </div>
                <div className='player'>Player</div>

            </div>
        </StyledUser >
    );
}


export default UserPreviewBlock;
