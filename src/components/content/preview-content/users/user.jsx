import React from 'react';
import Avatars from '../../../../common/Avatar';

const UserPreviewBlock = (props) => {

    return (
        <div className='user'>
            <div className='userInfo'>
                <div className='avatarWrapper'><Avatars img={props.user.image} /></div>
                <div className='name'>{props.user.name}</div>
                <div className='age'>{props.user.age}</div>
                <div className='phone'>{props.user.phone}</div>
                <div className='description'>{props.user.phrase}</div>
            </div>
            <div className='player'>Player</div>

        </div>

    );
}


export default UserPreviewBlock;
