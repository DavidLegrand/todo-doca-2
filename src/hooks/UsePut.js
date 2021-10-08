import { arrToObj } from "api"
import { useEffect, useState } from "react"

const usePut = (endpoint, body, method = 'PUT') => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const putData = async () => {
      setLoading(true);
      setError(null);

      const options = {
        method: method,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arrToObj(body))
      }

      try {
        const res = await fetch(endpoint, options)
        if (!res.ok) throw Error(res.statusText)
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false)
      }
    }
    if (body && body.length)
      putData()
  }, [endpoint, body, method])

  return { error, loading }
}

export default usePut