import React from 'react';
import styled from 'styled-components';

const VideosStyles = styled.div`
    @media(max-width: 414px){
        width: 90vw;
        margin: 2rem auto 1rem auto;
    }
    .page-wrapper {
        h1 {
            @media(max-width: 414px){
                font-size: 2.6rem;
            }
        }
    }
`;

export const Videos = () => {
    return (
        <VideosStyles>
            <div className="page-wrapper">
                <h1>No videos yet. They will be uploaded ASAP!</h1>
            </div>
        </VideosStyles>
    )
}
