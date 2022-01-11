import './App.css';
import Comments from './components/Comments';
import Posts from './components/Posts';
import Users from './components/users/Users';

function App() {
  return (
    <div className='components'>
      <div><div><Users/></div><div><Posts/></div></div>
      <div><Comments/></div>
    </div>
  );
}

export default App;
