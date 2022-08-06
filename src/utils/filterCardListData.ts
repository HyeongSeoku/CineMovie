export const filterCardListData = (list: IMovie[]) => {
  const arr: ICard[] = []
  list.forEach((data) => {
    const {
      id,
      poster_path: posterPath,
      release_date: releaseDate,
      original_language: originalLanguage,
      title,
      original_title: originalTitle,
    } = data
    arr.push({ id, posterPath, releaseDate, originalLanguage, title, originalTitle })
  })
  return arr
}
