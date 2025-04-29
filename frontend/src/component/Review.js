import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Review = () => {
  const { id } = useParams(); // book ID from URL
  const user = JSON.parse(localStorage.getItem("user"));
  console.warn(user)
  const [books, setBook] = useState({});
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:8000/add-review/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.warn(data)
      setBook(data);
    }
    fetchBook();
  }, [id])
  const handleClick = async () => {
    const review = {
      user: user._id,
      book: books._id,
      comment

    }
    try {
      let result = await fetch(`http://localhost:8000/add-review/${id}`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!result.ok) {
        throw new Error("Failed to submit review");
      }

      result = await result.json();
      setMessage("Review submitted successfully!");
      setComment("");
      navigate('/');
    } catch (error) {
      console.error("Review submission failed:", error);
      setMessage("Failed to submit review.");
    }



  }



  return (
    <div>
      <ul className="register">
        <input type="text" value={user && user.name ? user.name : 'Loading...'} className="input-box" placeholder="Name" readOnly />
        <input type="text" value={books && books.title ? books.title : 'Loading...'} className="input-box" placeholder="Book Title" readOnly />
        <textarea type="text" onChange={(e) => setComment(e.target.value)} value={comment} className="input-box" placeholder="Review"></textarea>
        <button className="button" type="button" onClick={handleClick}>Add review</button>
      </ul>

    </div>
  )

}
export default Review;