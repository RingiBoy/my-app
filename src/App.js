import './App.css';
import Comments from './components/comments/Comments';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';

function App() {
  return (
    <div className='componentsCollumn'>
      <div className='lineBox'> <div className='line'> <Users/></div><div > <Posts className='line'/></div></div>
      <div className='lineC'><Comments/></div>
    </div>
  );
}

export default App;



