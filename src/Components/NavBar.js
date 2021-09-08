import './NavBar.css'
const NavBar = (props) => {
    const clickHandler = (event) =>{
        props.clickHandler(event.target.innerHTML);
    };
    return(
        <div className='navbar'>
            <ul>
                <li tabIndex='-1' className='Ele' onClick={clickHandler}>HOME</li>
                <li tabIndex='-1' className='Ele' onClick={clickHandler}>ABOUT</li>
                <li tabIndex='-1' className='Ele' onClick={clickHandler}>PROJECTS</li>
                <li tabIndex='-1' className='Ele' onClick={clickHandler}>EDUCATION</li>
                <li tabIndex='-1' className='Ele' onClick={clickHandler}>CONTACT</li> 
            </ul>
        </div>
    );
}
export default NavBar;