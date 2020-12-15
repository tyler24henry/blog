import { TiFlashOutline as icon } from 'react-icons/ti';

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Website URL',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'title',
            url: 'url',
        },
        prepare: ({ title, url }) => {
            return {
                title,
                subtitle: url,
            }
        }
    }
}