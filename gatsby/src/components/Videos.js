import React from 'react';
import styled from 'styled-components';

const VideosStyles = styled.div`
    .page-wrapper {

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
