//page for the home screen of the library application
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

export default function Home() {
  const books = useSelector((state) => state.books.list);
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Others"];

  const popularBooks = books.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="container">
        <section>
          <h1>Welcome to our Digital Library📚</h1>
          <p>Browse books by category, search, and add your own favorites.</p>
        </section>

        <section>
          <h2>Book Categories</h2>
          <ul className="category-list">
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Popular Books</h2>
          <div className="book-grid">
            {popularBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
