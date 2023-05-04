import React, {useState, useEffect} from 'react';
import './App.css';
//import bgImage from './Assets/quote-background-img.jpg';

function App() {
  const [quote, setQuote] = useState("It is more blessed to give than to recieve. By this shall all men know that you are my disciples.");
  const [author, setAuthor] = useState("Jesus Christ");
  const fetchQuote = () => {
    const url = "https://dummyjson.com/quotes/random";
    fetch(url).then(
      (response) => response.json()).then((result) => {
        let quote = result.quote;
        let author = result.author;
        setTimeout(setQuote(quote), 7000);
        setTimeout(setAuthor(author), 7000);
      }).catch((error) => alert(error));
  }
  useEffect(() => {
    if(quote === null){
      fetchQuote();
    }
  })
  return (
    <div className="App">
      <div id="quote-box">
        <div id="fetched-data">
          <p id="text">{quote}</p>
          <p id="author">- {author}</p>
        </div>
        <hr id="divider" />
        <div id="actions">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote+" - "+author}`} target="_blank"><button id="tweet-btn">Tweet Quote</button></a>
          <button id="new-quote" onClick = {() => fetchQuote()}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
