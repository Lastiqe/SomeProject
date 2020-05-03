import React, { useState, useEffect } from 'react';
import UserPreviewBlock from './users/User';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { StyledUser, StyledPreview } from '../styled-content';
import Loader from '../../../common/Loader'



const ContentPreview = (props) => {

    let [loadingStatus, setLoadingStatus] = useState(null)

    useEffect(() => {
        setLoadingStatus(props.loading)
    }, [props.loading])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return undefined;
        }
        if (props.loading) return undefined
        props.loadMoreUsers(props.page + 1)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [props.page])



    return (
        <StyledPreview>
            <TransitionGroup className='userWrapper'>
                {props.users.users.map((user, index) => {
                    return (
                        <CSSTransition
                            classNames={(index + 1) % 2 == 0 ? 'rightside' : 'leftside'}
                            key={index}
                            timeout={600 * ((index + 1) % 10 == 0 ? 10 : (index + 1) % 10)} >
                            <StyledUser user={user.video} userId={index} >
                                <UserPreviewBlock user={user} key={index} />
                            </StyledUser>
                        </CSSTransition>
                    )
                })
                }
            </TransitionGroup>
            {props.loading ? <Loader /> : <div onScroll={handleScroll} />}
        </StyledPreview>
    );
}

export default ContentPreview;
