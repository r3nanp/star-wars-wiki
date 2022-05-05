import { Resource } from './Resource'

export type Planets = Resource & {
  name: string
  population: string
  residents: string[]
}
