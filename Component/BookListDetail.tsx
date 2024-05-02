import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Book } from "../types/BookType";

const BookListDetail = ({ bookData }: { bookData: Book }) => {
  const router = useRouter();

  const myObject = bookData;

  const handleClick = () => {
    const serializedObject = encodeURIComponent(JSON.stringify(myObject));
    window.open(`/book/${bookData.id}?data=${serializedObject}`, "_blank");
  };

  return (
    <div>
      <p>Title:{bookData.title}</p>
      <p>Author:{bookData.author}</p>
      <p>Genre:{bookData.genre}</p>
      <p>Description:{bookData.description}</p>
      <p>ISBN:{bookData.isbn}</p>
      <p>Published Data:{convertDateFormat(bookData.published)}</p>
      <p>Publisher:{bookData.publisher}</p>
      <button onClick={handleClick}>Book details</button>
      <br></br>
      <br></br>
    </div>
  );
};

function convertDateFormat(originalDateStr: string) {
  // Original date string in yyyy/mm/dd format

  // Convert string to Date object
  const originalDate = new Date(originalDateStr);

  // Format Date object to dd/mm/yyyy format
  return originalDate.toLocaleDateString("en-GB");
}

export default BookListDetail;
