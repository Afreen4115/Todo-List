import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoLists from './todolist';

const App = () => {
  // State for the input value
  const [inputList, setInputList] = useState("");

  // State for storing and displaying todo items
  const [items, setItems] = useState([]);

  // State for managing the visibility of the error message
  const [showError, setShowError] = useState(false);

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem('todoItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  // Handle input value change
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  // Add a new todo item to the list
  const listofitems = () => {
    if (inputList.trim() === "") {
      // Show error message
      setShowError(true);

      // Set a timeout to hide the error message after 2 seconds
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      // Add the new item to the list
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      // Clear the input field
      setInputList("");
      // Hide the error message
      setShowError(false);
    }
  };

  // Delete a todo item from the list
  const deleteitems = (id) => {
    setItems((olditems) => {
      return olditems.filter((_, index) => index !== id);
    });
  };

  return (
    <>
      {/* Main container */}
      <div className='main-div'>
        <div className='centre-div'>
          <br />
          {/* Title */}
          <h1>TODO List</h1>
          <br />
          {/* Input for adding tasks */}
          <input type="text" placeholder="Add tasks" onChange={itemEvent} value={inputList} />
          {/* Button to add a task */}
          <button onClick={listofitems}>+</button>
          {/* Display the list of todo items */}
          <ol>
            {items.map((itemval, index) => {
              return <TodoLists key={index} text={itemval} id={index} onSelect={deleteitems} />;
            })}
          </ol>
        </div>
      </div>

      {/* Error message for empty input */}
      {showError && (
        <div className="error-message">
          <p>Task cannot be empty!</p>
          {/* Button to close the error message */}
          <button onClick={() => setShowError(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default App;
