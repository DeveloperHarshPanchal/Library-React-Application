//redux slice to manage the books state in the library application
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialBooks } from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: initialBooks,
  },
  reducers: {
    addBook: {
      reducer(state, action) {
        state.list.unshift(action.payload);
      },
      prepare({ title, author, category, description, rating }) {
        return {
          payload: {
            id: nanoid(),
            title,
            author,
            category,
            description,
            rating: Number(rating),
          },
        };
      },
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
