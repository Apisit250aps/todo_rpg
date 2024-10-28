import { createHashRouter } from "react-router-dom"
import IndexPage from "../pages/index.page"

const router = createHashRouter([
  {
    path: "/",
    element: <IndexPage />
  }
])

export default router
