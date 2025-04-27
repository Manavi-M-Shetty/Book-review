import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Review = () => {
  const { id } = useParams(); // book ID from URL
  const user = JSON.parse(localStorage.getItem("user"));
  console.warn(user)
  const [book, setBook] = useState('');
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
      userName: user.name,
      Bookname: book.title,
      comment

    }

    let result = await fetch(`http://localhost:8000/add-review/${id}`, {
      method: 'post',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    if (result.ok) {
      setMessage("Review submitted successfully!");
      setComment("");
    } else {
      setMessage("Failed to submit review.");
    }
    navigate('/');
    console.warn(result);
  }


  return (
    <div>
      <ul className="register">
        <input type="text" value={user ? user.name : 'Loading...'} className="input-box" placeholder="Name" readOnly />
        <input type="text" value={book && book.title ? book.title : 'Loading...'} className="input-box" placeholder="Book Title" readOnly />
        <textarea type="text" onChange={(e) => setComment(e.target.value)} value={comment} className="input-box" placeholder="Review"></textarea>
        <button className="button" type="button" onClick={handleClick}>Add review</button>
      </ul>

    </div>
  )

}
export default Review;