import React from 'react';
import styled from 'styled-components';
import { Currently } from './Currently';
import { Connect } from './Connect';

const StyledRightNav = styled.div`
    .nav-item-wrapper {
        margin-top: 3rem;
    }
`;

export const RightNav = () => {
    return (
        <StyledRightNav>
            <div className="fixed">
                <Currently />
                <div className="nav-item-wrapper">
                    <Connect />
                </div>
            </div>
        </StyledRightNav>
    )
}
