
import React from 'react';


const Sort = () => {
    return (
        <div className='sortWrapper'>
            <div className='sortWrapper_innerTop'>
                <div className='id'>ID</div>
                <div className='name'>Имя</div>
                <div className='age'>Возраст</div>
            </div>
            <div className='sortWrapper_innerBot'>
                <div className='sortByGreat'>По возрастанию</div>
                <div className='sortByLess'>По убыванию</div>
            </div>
        </div>
    );
}

export default Sort;
