export const formatPopulation = (
  population?: string
): string | number | undefined => {
  if (isNaN(Number(population))) return population

  return Number(population).toLocaleString('pt-BR', {
    compactDisplay: 'short',
  })
}
