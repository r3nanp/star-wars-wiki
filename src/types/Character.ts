import { Resource } from './Resource'

export type Character = Resource & {
  name: string
  homeworld: string
  gender: string
  hair_color: string
  birth_year: string
}
