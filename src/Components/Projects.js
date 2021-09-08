import { useState } from 'react';
import Project from './Project'
import './Projects.css'
const Projects = (props) => {
    const projectData = [
        {
            id: '1',
            image: 'https://storage.tweakreviews.com/gadgets/Speech%20Recognition%20in%20Outlook/Tale%20til%20Tekst.png',
            name: 'Multi-Lingual Automatic Speech Recognition System using Kaldi Toolkit',
            description: 'Using Kaldi-ASR toolkit, we are training multi-lingual speech recognition system, the languages include Hindi, Tamil, Telugu, Marathi, Odia, Gujarati. The training is performed on the languages mentioned before, the relevant dataset is provided by the MUCS Challenge 2021 by IIT Bombay. Some of the challenges faced are Code-switching, Noise in the background, Mulitiple voices at the same time'
        },
        {
            id: '2',
            image: 'https://i.insider.com/5e98d90f29d6d9193c12a694?width=1000&format=jpeg&auto=webp',
            name: 'Identity Card border detection using U-Net Architecture, OpenCV',
            description: 'Using U-Net architecture trained a model that identifies the Identity Card in an image and returns the area at which the Card is present. The dataset is trained on 100 epochs in Google Colab. After identifying the Identity card from the model trained, Used contours from OpenCV library to detect the borders of the identity card. Succeeded in detecting the accurate borders even in a noisy image. The model was able to give accurate results even when the image is noisy, rotated or occluded.'
        },
        {
            id: '3',
            image: 'https://www.motoroids.com/wp-content/uploads/2014/07/traffic.jpg',
            name: 'Scheduling Traffic Signals using Scheduling Algorithms and YOLO Algorithm',
            description: 'Aim of the project is to minimize the traffic at the signal junction by prioritizing the vehicles count in each direction. Counts the number of vehicles in four directions at the signal junction using deep learning techniques and favours the direction in which the traffic is more. Using the priority scheduling algorithm and other scheduling algorithms in Operating Systems, we give the signals in such a way that the starvation of each direction is not too high. Scheduling the signals is to be done in a way that no lane is made to wait for much long time.'
        },
        {
            id: '4',
            image: 'https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg',
            name: 'Library Management System using Java and MySQL',
            description: 'Created a database using MySQL that stores all the required data including student ids and passwords, and the books they issued, their fine etc.. Using Java we built an applet and using SQL libraries in Java, performed CRUD operations, also calculated their fine based on the date of the book issued. Stored the book IDs the students issued and considered other factors necessary.'
        },
        {
            id: '5',
            image: 'https://i.postimg.cc/y892Lhsw/R-arm.png',
            name: 'Robotic Arm using Flex sensors, Arduino and 3d-printer ',
            description: 'Printed the parts of the arm using 3d Printer designed using Auto-Desk and assembled the individual parts. Using Flex sensors detected the angle bent by the finger of each finger in the hand, using Arduino code. Stimulated the hand using the angles measured by the fingers using Servo Motors.'
        }
    ];
    const [curr, setCurr] = useState(1);
    // console.log(curr===parseInt(props.object.id));
    const leftClick = () => {
        setCurr(curr===1?5:curr-1);
    }
    const rightClick = () => {
        setCurr(curr===5?1:curr+1);   

    }
    return(
        <div className='Right'>
            <h1 className="Heading">Projects</h1>
            <hr />
            <div className='Slider'>
                {projectData.map((object) => <Project curr={curr}object={object} key={object.id} leftClick={leftClick} rightClick={rightClick}/>)}
            </div>
            <p>*Codes can be found at the github account attached at Home page*</p>
        </div>
    );

}
export default Projects;