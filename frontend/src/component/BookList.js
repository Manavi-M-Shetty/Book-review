import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const BookList = () => {
    const [books, setBooks] = useState([])    
    const user = JSON.parse(localStorage.getItem("user"));


    useEffect(() => {
        getBooks();
    },[])


    const getBooks = async () => {
        let books = await fetch('http://localhost:8000/books')
        books = await books.json();
        setBooks(books)
    }


    return (
        <div className="book-list">
            <h1>Book List</h1>
            {
                books.length > 0 ? (
                    <table className="book-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Description</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.description}</td>
                                    <td><Link to={`/book-details/${item._id}`}>Details</Link>
                                        {user && (
                                            <>
                                                {" | "}
                                                <Link to={`/add-review/${item._id}`}>Add review</Link>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (

                    <h2>No books found</h2>

                )
            }
        </div>
    );
}


export default BookList;