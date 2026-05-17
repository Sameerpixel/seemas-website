import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'gvd21yr4',
  dataset: 'production1',
  apiVersion: '2025-05-17',
  useCdn: true,
})