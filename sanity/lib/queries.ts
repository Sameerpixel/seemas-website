

export const articlesQuery = `
*[_type == "article"] | order(publishedAt desc){
  title,
  category,
  publishedAt,
  excerpt,
  "slug": slug.current,
  coverImage
}
`
export const galleryQuery = `
*[_type == "gallery"] | order(date desc){
  title,
  description,
  location,
  date,
  image
}
`
export const featuredGalleryQuery = `
*[_type == "gallery" && featured == true]
| order(date desc)[0...10]{
  title,
  image,
  date,
  location
}
`
export const articlesGalleryQuery = `
*[_type == "gallery" && featuredArticles == true]
| order(date desc){
  title,
  image,
  date,
  location
}
`
export const testimonialsQuery = `
*[_type == "testimonial" && featured == true]{
  quote,
  name,
  role
}
`;