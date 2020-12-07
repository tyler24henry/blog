import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaRegHandPointRight } from 'react-icons/fa';

import { StyledRightNavHeader } from '../styles/RightNavStyles';

const CategoriesNavStyled = styled.div`
    .categories-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        .item-wrapper {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
            align-items: center;
            padding: 0.8rem 0.2rem;
            img {
                width: 15px;
            }
            a {
                font-size: 1.3rem;
                font-weight: 400;
            }
        }
    }
`;

export const CategoriesNav = () => {

    const { categories } = useStaticQuery(graphql`
        query {
            categories: allSanityCategory(filter: {navItem: {eq: true}}) {
                nodes {
                    id
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    return (
        <CategoriesNavStyled>
            <StyledRightNavHeader>Categories</StyledRightNavHeader>
            <div className="categories-wrapper">
                {categories.nodes.map(category => {
                    return (
                        <div className="item-wrapper" key={category.id}>
                            <FaRegHandPointRight />
                            <Link to={`/category/${category.slug.current}`}>{category.name}</Link>
                        </div>
                    )
                })}
            </div>
        </CategoriesNavStyled>
    )
}