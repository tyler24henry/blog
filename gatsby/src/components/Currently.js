import React from 'react';
import styled from 'styled-components';

const StyledCurrently = styled.div`
    #header {
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--grey);
        color: var(--black);
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
    }
    .links {
        display: grid;
        grid-template-columns: 1fr;
        .item-wrapper {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
            align-items: center;
            padding: 0.8rem 0.2rem;
            span {
                font-size: 1.3rem;
                font-weight: 400;
                align-self: start;
            }
            .item {
                font-size: 1.3rem;
                font-weight: 400;
            }
        }
    }
`;

export const Currently = () => {
    return (
        <StyledCurrently>
            <p id="header">Now reading, watching, etc.</p>
            <div className="links">
                <div className="item-wrapper">
                    <span>🗣️</span>
                    <a href="https://youtu.be/54l8_ewcOlY" target="_blank" className="item">Awakening From The Meaning Crisis</a>
                </div>
                <div className="item-wrapper">
                    <span>📚</span>
                    <a href="https://www.amazon.com/Invent-Wander-Collected-Writings-Introduction-ebook/dp/B08BCCT6MW" target="_blank" className="item">Invent and Wander</a>
                </div>
                <div className="item-wrapper">
                    <span>🍿</span>
                    <a href="https://www.imdb.com/name/nm0005139/" target="_blank" className="item">Mike Leigh films</a>
                </div>
            </div>
        </StyledCurrently>
    )
}
