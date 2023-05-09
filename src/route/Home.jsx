import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css';
import TodoIcon from '../../assets/pics/Todoicon.svg';
const Home = () => {
   if (localStorage.getItem('isAuth')) {
      window.location.href = '/todo';
   }
   return (
      <div className={classes.div} style={{ backgroundColor: 'black' }}>
         <img src={TodoIcon} alt="todo" />
         <h1 className={classes.h1}>Keep Track Of Daily Tasks In Life</h1>
         <Link className={classes.sign} to="/signup">
            Get Started
         </Link>
         ;
      </div>
   );
};

export default Home;
