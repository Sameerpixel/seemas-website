export const revalidate = 300;
import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',

  
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
defineField({
  name: 'featured',
  title: 'Featured On Homepage',
  type: 'boolean',
  initialValue: true,
}),

defineField({
  name: 'featuredArticles',
  title: 'Featured On Articles Page',
  type: 'boolean',
  initialValue: false,
}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
  ],
})