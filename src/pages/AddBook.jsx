//page to add a new book to the library
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErr = {};
    if (!form.title.trim()) newErr.title = "Title is required";
    if (!form.author.trim()) newErr.author = "Author is required";
    if (!form.category.trim()) newErr.category = "Category is required";
    if (!form.description.trim())
      newErr.description = "Description is required";
    if (!form.rating) newErr.rating = "Rating is required";
    else if (form.rating < 0 || form.rating > 5)
      newErr.rating = "Rating must be between 0 and 5";

    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(addBook(form));
    navigate("/books");
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Add a New Book</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Title</label>
            <input name="title" value={form.title} onChange={handleChange} />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>

          <div className="form-control">
            <label>Author</label>
            <input name="author" value={form.author} onChange={handleChange} />
            {errors.author && <span className="error">{errors.author}</span>}
          </div>

          <div className="form-control">
            <label>Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Fiction, Sci-Fi"
            />
            {errors.category && (
              <span className="error">{errors.category}</span>
            )}
          </div>

          <div className="form-control">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            {errors.description && (
              <span className="error">{errors.description}</span>
            )}
          </div>

          <div className="form-control">
            <label>Rating (0–5)</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={form.rating}
              onChange={handleChange}
            />
            {errors.rating && <span className="error">{errors.rating}</span>}
          </div>
          <button type="submit">Add Book</button>
        </form>
      </main>
    </>
  );
}
