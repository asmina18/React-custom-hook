import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
const { data } = useFetch (`https://jsonplaceholder.typicode.com/todos/1`)

  console.log("Fetched data", data);

  return (
    <>|
      {data && (
      <div>
        <p>{data.id}</p>
        <p>{data.title}</p>
      </div>
          
        
      )}
    </>
  );
}

export default App;



