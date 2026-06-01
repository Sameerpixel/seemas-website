import {defineField, defineType} from 'sanity'

export const youtubeType = defineType({
  name: 'youtube',
  title: 'YouTube Videos',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
  ],
})