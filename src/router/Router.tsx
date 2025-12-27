import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface Route {
  path: string
  element: ReactNode
}

const getPath = () => window.location.pathname || '/'

function usePathname() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const handlePopState = () => setPath(getPath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return path
}

export function Router({ routes }: { routes: Route[] }) {
  const path = usePathname()

  const match = routes.find((route) => route.path === path)
  const fallback = routes.find((route) => route.path === '*')

  return <>{match ? match.element : fallback?.element ?? null}</>
}
