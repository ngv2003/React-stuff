import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App() {

    return(
      <>
    
        <Header/>
        <List/> 
        <UserGreeting isLoggedIn={true} username="NGV"/>
        <UserGreeting isLoggedIn={true}/>
        <Student name="maxon" age={28} isMarried={true}/>
        <Student name="Nimai" age={28} isMarried={false}/>
        <Student name="harshad" age={28} isMarried={false}/>
        <Card/>
        <Button/>
        <Food/>
        <Footer/>

      </>
    );
}

export default App
