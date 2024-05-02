import React from "react";
import { Book } from "../types/BookType";
import { useRouter } from "next/router";

const BookDetail = () => {
  const router = useRouter();
  let receivedObject = null;

  if (Array.isArray(router.query.data)) {
    // If router.query.data is an array, take the first element
    receivedObject =
      router.query.data.length > 0
        ? JSON.parse(decodeURIComponent(router.query.data[0]))
        : null;
  } else {
    // If router.query.data is a string, decode and parse it directly
    receivedObject = router.query.data
      ? JSON.parse(decodeURIComponent(router.query.data))
      : null;
  }

  return (
    <div>
      <h1>Received Data</h1>
      <pre>{JSON.stringify(receivedObject, null, 2)}</pre> <br></br>
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

export default BookDetail;
