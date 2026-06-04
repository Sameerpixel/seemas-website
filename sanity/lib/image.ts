import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const builder = createImageUrlBuilder({
  projectId: "gvd21yr4",
  dataset: "production1",
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}