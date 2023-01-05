import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, Header, Search } from './Components'
import Details, { LoadingDetail } from './Components/Details'
import { useFetchUser } from './hooks'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [search, setSearch] = useState('projectashik');
  const {error, user, loading} = useFetchUser({
    username: search
  })

  return (
    <Container>
      <Header/>
      <Search search={search} setSeacrh={setSearch}/>
      {user && !loading && !error && <Details user={user}/>}
      {/* {loading && <p>Loading...</p>} */}
      {loading && <LoadingDetail/>}
      {error && <p>{error}</p>}

    </Container>
  )
}

export default App
