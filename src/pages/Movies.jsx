import MovieList from '../components/MovieList';
import MovieCreate from '../components/MovieCreate';
import { MovieProvider } from "../context/MovieContext"
import Button from '@mui/material/Button';

export default function Movies() {

    return (
        <MovieProvider>
            <Button variant="outlined" color="error">
                Primary
            </Button>
            <MovieList />
            <MovieCreate />
        </MovieProvider>
    )
}