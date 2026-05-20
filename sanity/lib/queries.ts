

export const articlesQuery = `
*[_type == "article"] | order(publishedAt desc){
  title,
  category,
  publishedAt,
  excerpt,
  body,
  coverImage,
  "slug": slug.current
}

`