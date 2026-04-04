import './index.css';
import Card from './Components/Card';
import Button from './Components/Button';

const App = () => {
  return (
    <div className='parent'>
      <h1 id='child1'>Hello, World!</h1>
      <h1 id='child2'>Welcome to React App</h1>
      <Card user="Harshda" age={18} img="https://plus.unsplash.com/premium_photo-1714367960766-e85b2bc71cee?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
        <p>Click the button to view profile</p>
        <Button>View Profile</Button>
      </Card>
      <Card user="Saraswati" age={18} img="https://images.unsplash.com/photo-1774258161371-d5ad244af3d5?q=80&w=368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
        <Button>View Profile</Button>
      </Card>
      <Card user="Raj" age={20} img="https://images.unsplash.com/photo-1774575902298-564503f168a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
        <Button>View Profile</Button>
      </Card>
    </div>
  );
}
 export default App
