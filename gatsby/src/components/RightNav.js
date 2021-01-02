import React from 'react';
import styled from 'styled-components';
import { CategoriesNav } from './CategoriesNav';
import { Connect } from './Connect';
import { RecentPosts } from './RecentPosts';

const StyledRightNav = styled.div`
    .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3rem;
    }
`;

export const RightNav = () => {
    return (
        <StyledRightNav>
            <div className="wrapper">
                <RecentPosts />
                <Connect />
                <CategoriesNav />
            </div>
        </StyledRightNav>
    )
}
