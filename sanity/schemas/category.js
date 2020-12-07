import { MdKeyboardHide as icon } from 'react-icons/md';

export default {
    name: 'category',
    title: 'Categories',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string',
            description: 'Name of category',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Image of category',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'Description of category',
        },
        {
            name: 'navItem',
            title: 'Nav item',
            type: 'boolean',
            description: 'Is this category a nav item?',
            options: {
                layout: 'checkbox',
            }
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'description',
            navItem: 'navItem',
        },
        prepare: ({ title, media, subtitle, navItem }) => {
            return {
                title: `${title}${navItem ? ' 💪' : ''}`,
                media, subtitle,
            }
        }
    }
}