import { GiFootprint as icon } from 'react-icons/gi';

export default {
    name: 'footnote',
    title: 'Footnote',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of footnote',
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
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare: ({ title }) => {
            return {
                title,
            }
        }
    }
}