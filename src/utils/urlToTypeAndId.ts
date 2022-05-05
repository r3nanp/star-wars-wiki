export const urlToIdAndType = (url: string): [id: string, type: string] => {
  const [, , , , type, id] = url.split('/')
  return [id, type]
}
