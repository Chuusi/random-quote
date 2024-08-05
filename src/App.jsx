import { useState } from "react";
import "./App.css";

function App() {
    const quotes = [
        {
            quote: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
            author: "John Lennon",
        },
        {
            quote: "El único modo de hacer un gran trabajo es amar lo que haces.",
            author: "Steve Jobs",
        },
        {
            quote: "La imaginación es más importante que el conocimiento.",
            author: "Albert Einstein",
        },
        {
            quote: "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.",
            author: "León Tolstói",
        },
        {
            quote: "No juzgues cada día por la cosecha que recoges, sino por las semillas que plantas.",
            author: "Robert Louis Stevenson",
        },
        {
            quote: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
            author: "Robert Collier",
        },
        {
            quote: "La mayor gloria en la vida no está en no caer nunca, sino en levantarnos cada vez que caemos.",
            author: "Nelson Mandela",
        },
        {
            quote: "No he fracasado. He encontrado 10,000 maneras que no funcionan.",
            author: "Thomas Edison",
        },
        {
            quote: "Lo que no te mata, te hace más fuerte.",
            author: "Friedrich Nietzsche",
        },
        {
            quote: "En tres palabras puedo resumir todo lo que he aprendido sobre la vida: sigue adelante.",
            author: "Robert Frost",
        },
    ];
    const [quoteShow, setQuoteShow] = useState(quotes[0]);
    const [bgColor, setBgColor] = useState("0,0,0")

    const handleRandomQuote = () => {
        const quoteNumber = Math.floor(Math.random() * quotes.length);
        setQuoteShow(quotes[quoteNumber])
        setBgColor(randomRGB());      
    }

    const randomRGB = () => {
        const r = Math.floor(Math.random() * 255).toString();
        const g = Math.floor(Math.random() * 255).toString();
        const b = Math.floor(Math.random() * 255).toString();
        return (r+","+g+","+b)
    }

    return (
        <main style={{backgroundColor:`rgb(${bgColor})`}}>
            <div style={{color:`rgb(${bgColor})`}} id="quote-box" className="page container bg-white p-5 text-center">
                <h1 className="transition text-center pb-5">Random Quote</h1>
                <h3 id="text" className="text-center">
                    "{quoteShow.quote}
                </h3>
                <div className="row">
                    <div className="col-8"></div>
                    <p id="author" className="col-4 text-center">
                        - {quoteShow.author}
                    </p>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col-4 icons text-center">
                        <a 
                            className="twitter-share-button btn"
                            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quoteShow.quote}`}
                            target="_blank" 
                            rel="noreferrer" 
                            id="tweet-quote"
                            style={{
                                backgroundColor:`rgb(${bgColor})`, 
                                color:"white",
                                border:`1px solid rgb(${bgColor})`,
                                
                            }}
                        >
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                    <div className="col-4 random-quote text-center">
                        <button style={{backgroundColor:`rgb(${bgColor})`}} onClick={handleRandomQuote} id="new-quote" className="btn text-white myBtn">
                            Next quote
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
