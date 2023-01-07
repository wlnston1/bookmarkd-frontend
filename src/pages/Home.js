import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Display from '../components/Display'
import Show from '../components/Header'
import Index from '../components/Index'


function Home(props) {
  const [site, setSite] = useState([])
  const URL = 'http://localhost:3001/'

  const getSite = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setSite(data)
  }

  const createSite = async(site) => {
    // POST
    await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'Application.json'
      },
      body: JSON.stringify(site)
    })

    // GET
    getSite()
  }

  const updateSite = async(site, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        'Content-Type': "Application/json"
      },
      body: JSON.stringify(site)
    })

    getSite()
  }

  const deleteSite = async(id) => {
    await fetch(URL + id, {
      method: 'DELETE'
    })

    getSite()
  }

  useEffect(() => {
    getSite()
  }, [])


    return (
    <main>
      <Routes>
        <Route
        exact 
        path='/'
        element={<Index site={site} createSite={createSite}/>} />
        <Route
        path='/site/:id'
        element={
          <Show
          site={site}
          updateSite={updateSite}
          deleteSite={deleteSite}
          />
        } />
      </Routes>
    </main>
      )
  }
  
  export default Home;