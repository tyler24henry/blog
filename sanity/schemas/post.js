import { MdKeyboardHide as icon } from 'react-icons/md';

export default {
    name: 'post',
    title: 'Blog posts',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of blog post',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'imageSubtitle',
            title: 'Image subtitle',
            type: 'string',
            description: 'Text that goes under image',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
            description: 'Summary of blog post',
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                }
            ]
        },
        {
            name: 'footnotes',
            title: 'Footnotes',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'footnote'}]}],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            category0: 'categories.0.name',
            category1: 'categories.1.name',
            category2: 'categories.2.name',
        },
        prepare: ({ title, media, ...categories }) => {
            const cats = Object.values(categories).filter(Boolean);
            return {
                title,
                media,
                subtitle: cats.join(', '),
            };
        },
    },
};