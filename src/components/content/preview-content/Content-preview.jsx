import React, { useEffect, memo, useState } from 'react';
import UserPreviewBlock from './users/User';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { StyledUser, StyledPreview } from '../styled-content';
import Loader from '../../../common/Loader'



const ContentPreview = memo((props) => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [props.page, props.sortType])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return undefined;
        }

        if (props.page >= props.pagesTotalCount) {
            return undefined
        }
        props.getMoreUsers()
    }

    return (
        <StyledPreview>
            <TransitionGroup className='userWrapper'>
                {props.users.users.map((user, index) => {
                    return (
                        <CSSTransition
                            classNames={(index + 1) % 2 == 0 ? 'rightside' : 'leftside'}
                            key={index}
                            timeout={600} >
                            <StyledUser user={user.video} userId={index} >
                                <UserPreviewBlock user={user} key={index} />
                            </StyledUser>
                        </CSSTransition>
                    )
                })
                }
            </TransitionGroup>
            {props.loading && <Loader />}

        </StyledPreview>
    );
})

export default ContentPreview;
