import React from 'react';
import ContentTable from './content-table/Content-table';
import ContentPreview from './preview-content/Content-preview';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StyledContent } from './styled-content';


const Content = (props) => {
    return (
        <StyledContent>
            <div className='contentWrapper'>
                <Switch>
                    <Route exact path='/'
                        render={() => <Redirect to={'/preview'} />} />
                    <Route path='/table' render={() => <ContentTable
                        users={props.users}
                        loadMoreUsers={props.loadMoreUsers}
                        page={props.page}
                        loading={props.loading} />} />
                    <Route path='/preview' render={() => <ContentPreview
                        users={props.users}
                        loadMoreUsers={props.loadMoreUsers}
                        page={props.page}
                        loading={props.loading} />} />
                </Switch>
            </div>
        </StyledContent>
    );
}

export default Content