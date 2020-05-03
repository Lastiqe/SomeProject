import React from 'react';
import ContentPreview from './preview-content/Content-preview';
import { Route } from 'react-router-dom';
import { StyledContent } from './styled-content';


const Content = (props) => {
    return (
        <StyledContent>
            <div className='contentWrapper'>
                <Route path='/preview' render={() => <ContentPreview
                    users={props.users}
                    loadMoreUsers={props.loadMoreUsers}
                    page={props.page}
                    loading={props.loading} />} />
            </div>
        </StyledContent>
    );
}

export default Content