import { Resource } from './Resource'

export type Planets = Resource & {
  name: string
  population: string
  terrain: string
  residents: string[]
}
