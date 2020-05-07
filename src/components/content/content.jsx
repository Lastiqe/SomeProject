import React from 'react';
import ContentPreview from './preview-content/Content-preview';
import { Route } from 'react-router-dom';
import { StyledContent } from './styled-content';


const Content = (props) => {

    return (
        <StyledContent>
            <div className='contentWrapper'>
                <Route path='/' render={() => <ContentPreview
                    users={props.users}
                    loadMoreUsers={props.loadMoreUsers}
                    page={props.page}
                    limit={props.limit}
                    loading={props.loading}
                    usersTotalCounting={props.usersTotalCount}
                    pagesTotalCount={props.pagesTotalCount}
                    getMoreUsers={props.getMoreUsers}
                    sortType={props.sortType} />} />
            </div>
        </StyledContent>
    );
}

export default Content