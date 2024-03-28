import pro1 from "../assets/proper.png"
import pro2 from "../assets/project2.png"
import port from '../assets/portfo.png'
import badge from '../assets/badge .png'


const DisplayData = [
    {
        imgsrc: pro1,
        title: "PropertyList Trade",
        text: "Property Management Website built for users to publish, explore, bid, and sell properties online. Project was developed using a 3-tier architecture, utilizing Spring-boot, Hibernate, Spring data JPA, React.js, Postgres SQL, and JWT token. I implemented the JWT token to authorize activeties for different users on the platform, along with the property service integrated with front-end interface. During an on-campus course at Maharishi Interntional University.",
        view: "https://github.com/omarkhris/WAA-Final-project",
    },
    {
        imgsrc: pro2,
        title: "WardrobeWiz",
        text: "E-commerce website course project implemented to demonstrate how to design flexible, scalable, testable, and resilient software systems using microservices. Developed product service and user service, containerized to run on a Kubernetes cluster and integrated to operate independently and loosely coupled. Leveraged tools including Java, Spring Boot, Spring (Hibernate, Cloud, Eureka, Security), MongoDB, MySQL, Docker, and Azure Cloud."
        ,
        view: "https://github.com/omarkhris/SA-WardrobeWiz",
    },
    {
        imgsrc: port,
        title: "Personal Portfolio",
        text: " The Personal Portfolio Website is a dynamic web application developed using React.js and hosted on the Amazon Web Services (AWS) platform. This project serves as a showcase of an individual's skills, projects, and experiences, providing a professional online presence to attract potential employers, clients, or collaborators. The portfolio website leverages several AWS services to enhance its functionality and scalability, including: Amazon S3 Bucket, CloudFront, Lambda, Route 53, EC2, API Gateway, API Gateway, ECS, Auto Scaling Group, SNS."
        ,
        view: "https://www.omarkhrissat.com/",
    },

    {
        imgsrc: badge,
        title: "Badge & Membership System",
        text: " The Badge & Membership System is a RESTful application designed to manage access control within a university environment, catering to a diverse community comprising thousands of students, staff, and faculty. The system revolves around the concept of \"badges\" that uniquely identify each member and \"memberships\" that grant access to various university facilities and services. Features: Badge Management, Membership Control, Types of Memberships, Access Authorization. Technologies Used: Java, Spring Framework, Database Management System, Authentication and Authorization.",
        view: "https://github.com/omarkhris/EAProjectMyWork",
    },
    
    {
        imgsrc: pro1,
        title: "Bank System",
        text: " Implemented a simple bank system to demonstrate and apply spring key concepts of Aspect-Oriented programming, Dependency Injection, Data Access Objects and Java Message Service. " +
            "Also comprehensive logging strategy using SLF4J and Logback enhanced monitoring and debugging capabilities.",
        view: "https://github.com/omarkhris/bankSystem",
    }
]

export default DisplayData;