export const featuredArticleQuery = `
*[_type == "article" && featured == true][0]{
  title,
  excerpt,
  publishedAt,
  category,
  "slug": slug.current,
  coverImage
}
`

export const articlesQuery = `
*[_type == "article"] | order(publishedAt desc){
  title,
  category,
  publishedAt,
  "slug": slug.current,
  coverImage
}
`