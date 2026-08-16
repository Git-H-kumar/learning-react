
import { useNavigate } from 'react-router'

const Navigate = () => {

    const navigate = useNavigate();

  return (
    <div>
         <button onClick={()=>{
        navigate('/')
      }} className="bg-emerald-800 font-medium rounded py-2 px-4 my-10 mx-20 active:scale-95 cursor-pointer">Ghar wapsi</button>

       <button onClick={()=>{
        navigate(-1)
      }} className="bg-emerald-800 font-medium rounded py-2 px-4 my-10 mx-20 active:scale-95 cursor-pointer">previous page</button>

      <button onClick={()=>{
        navigate(+1)
      }} className="bg-emerald-800 font-medium rounded py-2 px-4 my-10 mx-20 active:scale-95 cursor-pointer">next page</button>
    </div>
  )
}

export default Navigate