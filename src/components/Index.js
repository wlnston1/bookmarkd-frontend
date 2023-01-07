import {useState} from 'react'
import {Link} from 'react-router-dom'

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
        setNewSite({
            name: '',
            url:''
        })
    }
}

export default Index
