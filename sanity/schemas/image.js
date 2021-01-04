import { AiFillCamera as icon } from 'react-icons/ai';

// this is a top level schema => used to put images in post's content

export default {
    name: 'image',
    title: 'Post Image',
    type: 'document',
    icon,
    fields: [
        {
            name: 'alt',
            title: 'Alt',
            type: 'string',
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
            alt: 'alt',
            image: 'image',
        },
        prepare: ({ alt, image }) => {
            return {
                title: alt,
                media: image,
            }
        }
    }
}