function getImagePath(imagePathFromLocalJson: string): string {
  return require(`../../public/${imagePathFromLocalJson}`)
}

export { getImagePath }
