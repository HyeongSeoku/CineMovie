import MovieCardList from 'components/MoiveCard/MovieCardList'
import { useQuery } from 'react-query'
import { getPopularVideoList } from 'services/movie'
import { filterCardListData } from 'utils/filterCardListData'
import styles from '../tab.module.scss'

const TabContents = ({ id }: { id: string }) => {
  const { data: contentData } = useQuery([`#${id}_content_data`, id], () =>
    getPopularVideoList(id).then((data) => filterCardListData(data))
  )

  // FIXME: 아래 방식으로 고칠 것
  // const movieCardListProps = {
  //   data: { contentData },
  //   direction: 'row',
  // }

  return (
    <div className={styles.contentsContainer}>
      <ul>
        <MovieCardList data={contentData!} direction='row' />
      </ul>
    </div>
  )
}

export default TabContents
