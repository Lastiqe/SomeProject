import React from 'react';
import ContentTable from './content-table/content-table';
import ContentPreview from './preview-content/preview-content';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StyledContent } from './styled-content';


const Content = () => {
    return (
        <StyledContent>
            <div className='contentWrapper'>
                <Switch>
                    <Route exact path='/'
                        render={() => <Redirect to={'/preview'} />} />
                    <Route path='/table' render={() => <ContentTable />} />
                    <Route path='/preview' render={() => <ContentPreview />} />
                </Switch>
            </div>

        </StyledContent>
    );
}

export default Content;
