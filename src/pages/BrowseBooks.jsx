//page to browse and search books in the library
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import { useState, useEffect } from "react";

export default function BrowseBooks() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const books = useSelector((state) => state.books.list);

  const filteredByCategory = category
    ? books.filter((b) => b.category.toLowerCase() === category.toLowerCase())
    : books;

  const filteredBooks = filteredByCategory.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ q: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm, setSearchParams]);

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Browse Books</h1>
        {category && (
          <p>
            Filtering by category: <strong>{category}</strong>
          </p>
        )}

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="book-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </main>
    </>
  )
}
