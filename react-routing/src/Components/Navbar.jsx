import { Link } from "react-router"


const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-cyan-900 items-center '>

        <h2 className='text-2xl font-bold'>PortFolio</h2>

        <div className='flex gap-10'>
          
          <Link className='text-lg font-medium' to='/'>Home</Link>

          <Link className='text-lg font-medium' to='/about'>About</Link>

          <Link className='text-lg font-medium' to='/product'>Product</Link>

          <Link className='text-lg font-medium' to='/course'>Course</Link>

        </div>
    </div>
  )
}

export default Navbar