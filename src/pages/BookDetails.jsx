//page to display detailed information about a specific book
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <>
        <Navbar />
        <main className="container">
          <h1>Book not found</h1>
          <button onClick={() => navigate("/books")}>Back to Browse</button>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>{book.title}</h1>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Category:</strong> {book.category}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        <p>
          <strong>Rating:</strong> {book.rating}
        </p>
        <button onClick={() => navigate("/books")}>Back to Browse</button>
      </main>
    </>
  )
}
