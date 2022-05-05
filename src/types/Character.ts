import { Resource } from './Resource'

export type Character = Resource & {
  name: string
  homeworld: string
}
