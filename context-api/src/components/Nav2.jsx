const Nav2 = (props) => {
  
  return (
    <div className="nav2">
        
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>

        <h3>{props.theme}</h3>

    </div>
  )
}

export default Nav2