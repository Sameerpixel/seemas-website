import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Seema Girija Lal\'s Website',

  projectId: 'gvd21yr4',
  dataset: 'production1',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
