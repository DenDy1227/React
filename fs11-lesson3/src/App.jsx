import { useEffect, useState } from 'react';
import axios from 'axios';
// Instruments
import './theme/index.css';
import { Button, Container } from './components/button';
import { Button as ButtonMui } from '@mui/material';
import { Card } from '@mui/material';
import { Input } from '@mui/material';
const api = {
    getPhotos: (query, page = 1) => `https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
}

function App() {

    const [page, setPage] = useState(9);
    const [listMovies, setListMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [inputValue, setinputValue] = useState('');

    useEffect(() => {
        setIsLoading(true);
        axios.get(api.getPhotos(query, page)).then(res =>
            setListMovies(res.data.hits)
        )
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            })
    }, [page, query]);
    console.log(listMovies);
    const onSearch = () => {
        setQuery(inputValue)
        setPage(1)
        setinputValue('')
    }

    const listJsx = listMovies.map((item) =>
        <>
            <Card key={item.id} variant="outlined" >
                <img src={item.webformatURL} alt='#' />
            </Card>
        </>
    )
    return (
        <>
            <ButtonMui variant="outlined" color="success" size="large" type='button' onClick={() => onSearch()}>Akcio!</ButtonMui>
            <Input label="Filled" type='text' onChange={(e) => setinputValue(e.target.value)}></Input>
            <ul className='wrapper'>
                {listJsx}
            </ul>

        </>

    )
}

export default App;







