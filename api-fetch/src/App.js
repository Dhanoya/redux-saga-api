import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './state';
import './App.css';

function App() {
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats)

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
