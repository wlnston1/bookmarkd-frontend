import {useState} from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages/Home'

function Index(props){
    const [newForm, setNewForm] = useState({
        name: '',
        url: ''
    })

    const loaded = () => {
        return props.site.map((site) => (
            <div key={site._id} className='site'>

                <Link to={`/site/${site._id}`}>
                    <h1>{site.name}</h1>
                </Link>

            </div>
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createSite(newForm)
        setNewForm({
            name: '',
            url:''
        })
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                value={newForm.name}
                name='name'
                placeholder='name'
                />
                <input
                type='text'
                value={newForm.url}
                name='url'
                placeholder='url'
                />
                <input type='submit' />
            </form>
            {props.site ? loaded() : loading()}
        </section>
    )
}

export default Index
