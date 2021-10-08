import { useEffect, useState } from "react"

const useFetch = (endpoint) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {

        const res = await fetch(endpoint)
        if (!res.ok) throw Error(res.statusText)
        const result = await res.json()
        setData(result.filter(r => r !== null))

      } catch (e) {

        setError(e);
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [endpoint])

  return { data, error, loading }
}

export default useFetch