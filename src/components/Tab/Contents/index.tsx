interface IContents {
  movie: JSX.Element
  tv: JSX.Element
  anime: JSX.Element
  myList: JSX.Element

  [key: string]: any
}

const MovieContents = () => {
  return <div>Movie</div>
}

const TvContents = () => {
  return <div>TV</div>
}

const AnimeContents = () => {
  return <div>Anime</div>
}

const MyListContents = () => {
  return <div>MyList</div>
}

const TAB_CONTENTS: IContents = {
  movie: <MovieContents />,
  tv: <TvContents />,
  anime: <AnimeContents />,
  myList: <MyListContents />,
}

export const TabContents = ({ id }: { id: string }) => {
  return <div>{TAB_CONTENTS[id]}</div>
}
