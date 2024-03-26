import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]
  
  const nextPerson = () => {
    setIndex((index) => {
      const newValue = (index + 1) % people.length;
      return newValue;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newValue = (index - 1 + people.length) % people.length;
      return newValue;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </div>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className=" btn btn-hipster" onClick={randomPerson}>
        random review
      </button>
    </article>
  </main>
};
export default App;
