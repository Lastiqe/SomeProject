
import React from 'react';


const Sort = (props) => {

    const sorting = (sort, sortOrder) => {
        props.changeSortType(sort, sortOrder)
    }

    return (
        <div className='sortWrapper'>
            <div className='sortWrapper_inner'>
                <div onClick={() => sorting('id', props.sortOrder)} className='id'>ID</div>
                <div onClick={() => sorting('name', props.sortOrder)} className='name'>Имя</div>
                <div onClick={() => sorting('age', props.sortOrder)} className='age'>Возраст</div>
                <div onClick={() => sorting(props.sortType, 'fromGreat')} className='sortByGreat'>По возрастанию</div>
                <div onClick={() => sorting(props.sortType, 'toGreat')} className='sortByLess'>По убыванию</div>
            </div>

        </div>
    );
}

export default Sort;
