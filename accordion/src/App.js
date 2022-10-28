import logo from './logo.svg';
import './App.css';
import questions from './data,js';
import SingleQuestion from './Question'

function App() {
  return (
    <main>
    <div className='container'>
      <h3>questions and answers about login</h3>
      <section className='info'>
        {questions.map((question) => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </section>
    </div>
  </main>
  );
}

export default App;
