import './App.css';
import { GroceryList } from './GroceryList';
import image from './man.jpg';
function App() {
  return (
    <div className='container'>
      <img src='https://import.cdn.thinkific.com/397660/courses/1600282/shopping-211128-142332.jpg' width='200px' alt='shopping'/>
      <h1>Grocery List</h1>
      <GroceryList />
      <img src={ image } width='200px' alt='man'/>
    </div>
  );
}

export default App;
