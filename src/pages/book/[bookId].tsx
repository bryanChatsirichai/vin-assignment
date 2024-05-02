import { useRouter } from "next/router";
import { Book } from "../../../types/BookType";
import Image from "next/image";

export default function BookDetail() {
  const router = useRouter();
  let receivedObject: Book | null = null;

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

  // You can use receivedObject directly as an object
  // image link return nothing api link to image on the server end seems to have issue
  return (
    <div>
      <p>Title: {JSON.stringify(receivedObject?.title, null, 2)}</p>
      <p>Author: {JSON.stringify(receivedObject?.author, null, 2)}</p>
      <p>Genre: {JSON.stringify(receivedObject?.genre, null, 2)}</p>
      <p>Description: {JSON.stringify(receivedObject?.description, null, 2)}</p>
      <img
        src="JSON.stringify(receivedObject?.image, null, 2)"
        alt="Book image"
      ></img>
      <p>ISBN: {JSON.stringify(receivedObject?.isbn, null, 2)}</p>
      <p>
        Published Data:
        {convertDateFormat(JSON.stringify(receivedObject?.published, null, 2))}
      </p>
      <p>Publisher: {JSON.stringify(receivedObject?.publisher, null, 2)}</p>
    </div>
  );
}

function convertDateFormat(originalDateStr: string) {
  // Original date string in yyyy/mm/dd format

  // Convert string to Date object
  const originalDate = new Date(originalDateStr);

  // Format Date object to dd/mm/yyyy format
  return originalDate.toLocaleDateString("en-GB");
}
