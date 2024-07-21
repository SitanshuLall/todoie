import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import { useEffect } from 'react';
import UseEffectComponent from './components/UseEffectComponent';
function App() {
  useEffect(() => {
    console.log('App component mounted')
  }, []);

  return (
    <div className="App">
        {/* <h1 className='heading'>Todoie</h1> */}
        <UseEffectComponent/>
        <Header title="Todoie app"/>
        <TodoItem text="Eat"/>
        <TodoItem completed={true} text="Code"/>
        <TodoItem text="Conquer"/>
        <TodoItem text="Repeat"/>
        <Button/>
    </div>
  );
}

export default App;
