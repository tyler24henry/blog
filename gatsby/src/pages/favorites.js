import React from 'react';
import { Favorites } from '../components/Favorites';
import SEO from '../components/SEO';

export default function FavoritesPage() {
    return (
        <>
            <SEO title="Favorite Things - Tyler Henry" />
            <Favorites />
        </>
    )
}