//page to display when a route is not found (404)
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <main className="container">
      <h1>404 - Page Not Found</h1>
      <p>
        No match found for URL: <code>{location.pathname}</code>
      </p>
      <Link to="/">Go back to Home</Link>
    </main>
  )
}
