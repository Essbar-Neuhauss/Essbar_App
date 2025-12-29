import { Router } from './router/Router'
import { NotFoundPage } from './pages/NotFoundPage'

const routes = [
  { path: '/', element: <NotFoundPage /> },
  { path: '/404', element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
]

export default function App() {
  return <Router routes={routes} />
}
