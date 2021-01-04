import { MdKeyboardHide as icon } from 'react-icons/md';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {isUniqueAcrossAllDocuments} from '../utils/isUniqueAcrossAllDocuments';

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
                isUnique: isUniqueAcrossAllDocuments,
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
            },
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
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'H5', value: 'h5'},
                        {title: 'H6', value: 'h6'},
                        {title: 'Quote', value: 'blockquote'},
                        {title: 'Image caption', value: 'imageCaption'},
                    ],
                    marks: {
                        annotations: [
                          {
                            title: 'External Link',
                            name: 'link',
                            type: 'object',
                            blockEditor: {
                              icon: FaExternalLinkAlt,
                            },
                            fields: [
                              {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                                validation: Rule =>
                                  Rule.uri({
                                    allowRelative: true,
                                    scheme: ['https', 'http', 'mailto', 'tel']
                                  })
                              },
                              {
                                title: 'Open in new tab',
                                name: 'blank',
                                description: 'Read https://css-tricks.com/use-target_blank/',
                                type: 'boolean'
                              }
                            ]
                          }
                        ]
                      },
                },
                {
                    type: 'footnote',
                },
                {
                    type: 'image',
                },
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