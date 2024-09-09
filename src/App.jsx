import './App.css';
import { useFetch } from './hooks/useFetch';
import {ImageGallery} from "./components/imageGallery/imageGallery"


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
            <ImageGallery />
       
    </>
  );
}

export default App;



