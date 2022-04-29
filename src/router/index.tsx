import { componentRoutes } from '@router/routes/components'
import { exampleRoutes } from '@router/routes/example'
import { noneLayoutRoutes } from '@router/routes/noneLayout'

import type { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [noneLayoutRoutes, exampleRoutes, componentRoutes]

export default routes
