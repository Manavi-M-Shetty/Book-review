import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`http://localhost:8000/books/${id}`,{
        method:'GET',
        headers: {
            "Content-Type": "application/json"
          }

      })
      const data = await res.json();
      setBook(data.book);
      setReviews(data.reviews);
    };

    fetchDetails();
  }, [id]);

  if (!book) return <p className="text-center mt-10 text-lg">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
      <p className="text-gray-600 mb-4"><strong>Description:</strong> {book.description}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Reviews</h3>
      <div className="space-y-3">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className="bg-gray-100 p-3 rounded-lg shadow">
              <p className="font-medium">{r.user.name}</p>
              <p className="text-gray-700">{r.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default BookDetails;