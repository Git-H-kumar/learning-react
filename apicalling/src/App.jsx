import axios from 'axios'



const App = () => {
  
  const getData =async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response);
    
  }

  return (
    <div>
      <button onClick={getData}>data do...</button>
    </div>
  )
}

export default App