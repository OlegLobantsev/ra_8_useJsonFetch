/* eslint-disable react/prop-types */
import useJsonFetch from '../hooks/useJsonFetch'
export const Example = ({path}) => {
  const [data, loading, error] = useJsonFetch(
    `http://localhost:7070/${path}`,
    []
  )

  if (loading) return <div>Загрузка..</div>
  if (error) {
    console.log('error', error)
    return <div>Ошибка загрузки данных..</div>
  }
  return <div className="row-span-4">{JSON.stringify(data)}</div>
}
