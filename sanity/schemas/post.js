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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
            description: 'Summary of blog post',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            description: 'Paste in the blog post',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
        prepare: ({ title, image }) => {
            return {
                title,
                image,
            };
        },
    },
};