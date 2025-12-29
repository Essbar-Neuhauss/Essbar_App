import {Router} from './routes/Router'
import {NotFoundPage} from './pages/ErrorPage/NotFoundPage'
import {HomePage} from './pages/HomePage/HomePage'

const routes = [
    {path: '/', element: <HomePage/>},
    {path: '/404', element: <NotFoundPage/>},
    {path: '*', element: <NotFoundPage/>},
]

export default function App() {
    return <Router routes={routes}/>
}
