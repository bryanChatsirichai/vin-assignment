import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Book } from "../../../types/BookType";
import BookListDetail from "../../../Component/BookListDetail";
import { json } from "stream/consumers";
export default function BookPage({ booksData }: { booksData: Book[] }) {
  const [books, setBooks] = useState(booksData);


  
  return (
    <main>
      <h1>List of books</h1>
      {books.length === 0 ? (
        <h1>No books found</h1>
      ) : (
        books.map((book) => (
            <BookListDetail bookData={book}></BookListDetail>
        ))
      )}
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakerapi.it/api/v1/books");
    const data: any = await res.json();
    const booksData: Book[] = data.data;
    // console.log(booksData);
    // Return the data as JSON
    return {
      props: {
        booksData: booksData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
