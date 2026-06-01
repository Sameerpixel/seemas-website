export const revalidate = 300;
import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",

  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
    }),

    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "role",
      title: "Role / Location",
      type: "string",
    }),

    defineField({
      name: "featured",
      title: "Show On Explore Page",
      type: "boolean",
      initialValue: true,
    }),
  ],
});