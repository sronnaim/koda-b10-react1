import { createBrowserRouter, RouterProvider } from "react-router"
import Entries from "./pages/Entries"
import Form from "./pages/Form"

const router = createBrowserRouter([{
  path: "/",
  Component: Form,
}, {
  path: "/entries",
  Component: Entries,
}])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}