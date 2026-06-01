export const revalidate = 60;
import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title',
        maxLength: 96,
      },

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',

      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})