import stratforge from "../../public/stratforge.jpeg"
import ps from "../../public/ps.jpeg"
import orga from "../../public/orga.jpeg"
import tripsygo from "../../public/tipsygo.jpeg"
import zoho from "../../public/zoho.png"
import dsac from "../../public/dsac.png"

interface ExpData{
    id: string
    position: string
    organization: string
    duration: string 
    Description: string 
    skills: any
    link: string
    image: any
}


export const ExperienceData = [
    {
        id : "1",
        position : "Full Stack Engineer",
        organization : "Stratforge",
        duration : "Present",
        Description : "As a software developer I am responsible for the complete software development process from conception to deployment,Maintaining and upgrading the software following deployment and Managing the end-to-end life cycle for the production of software and applications.",
        skills : ["Fast-Api","Django","pyspark","kubernetes","Devops","python","React JS"],
        link : "https://stratforge.com/",
        image: stratforge

    },
    {
        id : "2",
        position : "Data Engineer",
        organization : "PurpleSlate",
        duration : "01/2023-05/2023",
        Description : "As a data engineer is responsible for collecting, managing, and converting raw data into information that can be interpreted and can be used in downstream data\
        sources such as Elastic and also responsible for managing Data Pipelines, Data\
        Marts from Data Warehouses (through ETL) and Scheduled Orchestration for\
        maintaining the Streaming Data resources from Azure.",
        skills : ["Python","Pyspark","SQL","Databricks","React Js","Data Modelling","Data Warehousing","Data Lake","Redux","Apache Kafka"],
        link : "https://www.purpleslate.com/",
        image: ps

    },
    {
        id : "3",
        position : "Software Developer",
        organization : "OrgaPlants",
        duration : "05/2022 - 01/2023",
        Description : "As a software developer I am responsible for the complete software development process from conception to deployment,Maintaining and upgrading the software following deployment and Managing the end-to-end life cycle for the production of software and applications also Overseeing and guiding the analyzing, writing, building, and deployment of software and Overseeing the automated testing and providing feedback to management during the development process,Modifying and testing changes to previously developed programs",
        skills : ["Full-Stack Development" , "API Development" , "Coding Standards" , "Redux.js" , "Agile Methodologies" , "JavaScript" , "React Native" , "PySpark" , "React.js" , "Amazon Web Services (AWS)" , "Software Development" , "Google Cloud Platform (GCP)" , "Google Analytics" , "Python (Programming Language)" , "Django" , "Django REST Framework"],
        link : "https://orgaplants.com",
        image: orga

    },

    {
        id : "4",
        position : "Co-Founder",
        organization : "TripsyGo",
        duration : "03/2022 - Present",
        Description : "We, at ‘TripsyGo’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.",
        skills : ["Agile Methodologies" , "Java" , "Project Management" ,"Engineering"],
        link : "http://tripsygo.com/",
        image: tripsygo

    },
    {
        id : "5",
        position : "Summer-Intern",
        organization : "Zoho Corporation",
        duration : "04/2022 - 6/2022",
        Description : "As a Java Developer,I have played a pivotal role in creating high-performance and reliable software solutions. My responsibilities includeDesigning and developing scalable Java applications, adhering to industry best practices.Collaborating with cross-functional teams to define project requirements and deliver on-time solutions.Utilizing frameworks like Spring and Hibernate to build robust web applications and microservices.Optimizing code and databases for improved performance and efficiency.Conducting rigorous testing and quality assurance to ensure software reliability.Participating in code reviews and mentoring junior developers to maintain code quality.Staying updated with the latest Java technologies and security standards.",
        skills : ["HTML" , "Java" , "Core Java" , "SQL", "Problem Solving", "Database"],
        link : "https://www.zoho.com/",
        image: zoho

    },
    {
        id : "6",
        position : "Data Engineer",
        organization : "DSAC - KCE",
        duration : "04/2020 - 3/2022",
        Description : "During my internship as a Data Engineer, I gained valuable hands-on experience in the world of data engineering and contributed to various data-related projects. My key responsibilities included:During my internship as a Data Engineer at DSAC, I gained valuable hands-on experience in the world of data engineering and contributed to various data-related projects. My key responsibilities included,Collaborating with the data engineering team to design, build, and maintain data pipelines.Extracting, transforming, and loading (ETL) data from various sources into data warehouses.Assisting in data modeling and database design for efficient storage and retrieval.Writing and optimizing SQL queries to extract insights from large datasets.Developing and maintaining data integration solutions using tools like Apache Kafka, Apache Nifi, and Apache Spark..",
        skills : ["Data Warehousing" , "Apache Spark" , "Data Analysis" , "Analytical Skills" , "R (Programming Language)" , "Google Analytics" , "Python (Programming Language)"],
        link : "https://www.dsackce.com/",
        image: dsac

    },
        
]