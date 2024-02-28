import React, { useState } from 'react';
import './CreateNewTask.css'; 

function Tasks() {

    let flashcards = [];
    var question = "";
    var answer = "";
    var totalCards;

    const [cardsVisible, setCardsVisible] = useState(false);

    //Should 'submit'/push each card 
    function submitFlashcard(){
        var card = {question, answer};
        flashcards.push(card);
    }

    function createFlashcard() {
       displayFlashcards();
    }
    
    function displayFlashcards() {
        setCardsVisible(!cardsVisible);
    }
    


    return (
      
        <div className="Tasks" id="flashcards-container">
            <h1>Begin by creating your study set!</h1>

            <div className="CreateNewTask-card">
                <div className="input-container"></div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={question}
                            placeholder="question"
                            //onChange={(e) => setQuestion(e.target.value)}
                            className="inputBox"
                        />
                    </div>
                    <div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={answer}
                            placeholder="answer"
                            //onChange={(e) => setAnswer(e.target.value)}
                            className="inputBox"
                        />
                    </div>
                    <div>
                        <button onClick={submitFlashcard}>Submit</button>
                    </div>
                </div>
            </div>
            <div>
                    <button onClick={displayFlashcards}>Toggle Flashcards</button>
                    {cardsVisible && <div id="idCards">{flashcards}</div>}
            </div>
        </div>
    );
};

export default Tasks;
