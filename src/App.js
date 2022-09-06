import './App.css';
import {useState} from "react";

function App() {

    const questions = [
        {
            questionText: 'Столица США?',
            answerOptions: [
                {answerText: 'Бостон', isCorrect: false},
                {answerText: 'Вашингтон', isCorrect: true},
                {answerText: 'Нью-Йорк', isCorrect: false},
                {answerText: 'Лос-Анджелес', isCorrect: false},
            ]
        },
        {
            questionText: 'Дата выпуска игры "Дота 2"?',
            answerOptions: [
                {answerText: '13 августа 2015 г.', isCorrect: false},
                {answerText: '2 апреля 2017 г.', isCorrect: false},
                {answerText: '25 марта 2009 г.', isCorrect: false},
                {answerText: '9 июля 2013 г.', isCorrect: true},
            ]
        },
        {
            questionText: 'Главный антагонист 3 сезона ОСД',
            answerOptions: [
                {answerText: 'Демогоргон', isCorrect: false},
                {answerText: 'Истязатель разума в физическом облике', isCorrect: true},
                {answerText: 'Векна', isCorrect: false},
                {answerText: 'Демопсы', isCorrect: false},
            ]
        },
        {
            questionText: 'Что НЕ является язык программирования?',
            answerOptions: [
                {answerText: 'Python', isCorrect: false},
                {answerText: 'Kotlin', isCorrect: false},
                {answerText: 'HTML', isCorrect: true},
                {answerText: 'PHP', isCorrect: false},
            ]
        },
        {
            questionText: 'Главный персонаж ОСД?',
            answerOptions: [
                {answerText: 'Оди', isCorrect: true},
                {answerText: 'Демогоргон', isCorrect: false},
                {answerText: 'Лукас', isCorrect: false},
                {answerText: 'Макс', isCorrect: false},
            ]
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOptionClick = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const refresh = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }


    /// Comment
  return (
    <div className="app">

        {
            showScore
                ? <div className="section-score">
                    <div>Правильных ответов {score} из {questions.length}</div>
                    <button className='refresh-btn' onClick={refresh}>Пройти тест ещё раз</button>
                  </div>
                :       <div className='quizz'>
                    <div className='question-section'>

                        <div className='question-count'>
                            <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
                        </div>

                        <div className="question-text">{questions[currentQuestion].questionText}</div>

                    </div>

                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map(item => (
                            <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>)
                        )}
                    </div>
                </div>
        }



    </div>
  );
}

export default App;
