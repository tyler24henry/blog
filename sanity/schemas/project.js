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
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
    preview: {
        select: {
            title: 'title',
            url: 'url',
            image: 'image',
        },
        prepare: ({ title, url, image }) => {
            return {
                title,
                subtitle: url,
                media: image,
            }
        }
    }
}