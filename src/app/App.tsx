import {Router} from './routes/Router'
import {NotFoundPage} from './pages/ErrorPage/NotFoundPage'

const routes = [
    {path: '/404', element: <NotFoundPage/>},
    {path: '*', element: <NotFoundPage/>},
]

export default function App() {
    return <Router routes={routes}/>
}