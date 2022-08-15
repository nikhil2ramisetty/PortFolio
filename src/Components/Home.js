import Nikhil from './DP1.jpg'
import './Home.css'
const Home = (props) => {
    return(
        <div className="Right">
            <h1 className='Heading'>Home</h1>
            <hr />
            <div className='Content'>
                <img className="Home-photo" src={Nikhil} />
                <h1>Nikhil Ramisetty</h1>
                <br />
                <br />
                <p>I'm Nikhil Ramisetty, an Machine Learning Researcher and Web development beginner. I like exploring and understanding different concepts about Computer Programming. I like working on Deep Neural Networks and Natural Language Processing and building Java applications.  </p>
                <br />
                <br />
                <br />
                <br />
                <hr id='Home'/>
                <br />
                <div className='fbox'>
                    
                    <a href="https://github.com/nikhil2ramisetty" target="_blank"><i class='fa fa-github' /></a>
                    <a href="mailto:ramisetty19100@iiitnr.edu.in" target="_blank"><i class='fa fa-envelope' /></a>
                    <a href="https://www.linkedin.com/in/nikhil-ramisetty-363b81189/" target="_blank" ><i class='fa fa-linkedin' /></a>

                </div>
            </div>
        </div>
    );

}
export default Home;
