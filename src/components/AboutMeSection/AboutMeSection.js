import React from 'react';
import './AboutMeSection.css';
import image from '../images/CircleProfile.png';
import beyondtrustlogo from '../images/beyondtrustlogo.png';
import iqblade from '../images/iqblade.png';
import edgehilluniversity from '../images/edgehilluniversity.png';
import bandq from '../images/bandq.png';
import microsoft from '../images/microsoft.png';
import sas from '../images/sas.png';
import roq from '../images/roq.png';
import barclays from '../images/barclays.png';
import ukfast from '../images/ukfast.png';
import milexa from '../images/milexa.png';
import yozu from '../images/yozu.png';
import Experience from '../Experience';
import Education from '../Education';
import ExtraCurricular from '../ExtraCurricular';

function AboutMeSection(){
    return(
        <div className="about-me">
            <div className="spacer"></div>
            <div className="profile-overview">
                <div className="profile-picture">
                    <img class="myprofilepic" src={image} alt="Profile" />
                </div>
                <div className="profile-info">
                    <p>Mohammed Qureshi</p> 
                    <p>Full Stack Software Developer</p> 
                    <p>North West, United Kingdom</p>
                </div>
            </div>
            <div className="information-area">
                <h2 className="header-title"> About Me</h2>
                <p className="about-me-body-text"> Graduate Computer Science BSc student with a passion for technology and exploring current and upcoming technology. Interested in software analysis and development and hoping to secure a graduate position in software engineering. Would also enjoy working in other IT sectors such as cybersecurity and data development. </p>
                <h2 className="header-title"> Experience </h2>
                <Experience logo={yozu} jobtitle="Software Developer" company="Yozu - Full-Time" dateworked="June 2021 - Present" location="North West, England, United Kingdom" description="As a Software Developer I will be working with Ruby on Rails and React JS, Currently just starting this role so will update further into the role."/>
                <Experience logo={beyondtrustlogo} jobtitle="Graduate QA Engineer" company="Beyond Trust - Full-time" dateworked="June 2020 - June 2021 • 1 Year" location="Manchester, England, United Kingdom" description="As a QA Engineer, my main responsibility is ensuring the products our company provides are at a high standard before they leave the production line and go to customers. I have to ensure there is no bugs or issues with functionality so when it arrives to the customer, they will have a smooth and welcoming experience. During my time at BeyondTrust, I have tried to go further by looking into cypress a JavaScript framework for automation and have set up a system and tests along with side the current ones. I have also explored Angular during hackathon weeks to up my skills and improve myself. I have always gone out of my way to building tools that can further my learning and also help make my day to day life easier and help my team."/>
                <Experience logo={bandq} jobtitle="Customer Advisor" company="B&Q" dateworked="March 2017 - June 2020 • 3 Years 4 Months" location="Wallasey, England, United Kingdom" description="As a customer service adviser I am trained to work on a checkout also the returns desk and the self service area and I make direct contact with customers to make sure they have had the best experience in the business today and make sure they leave happy so they can return again also I make sure to give it my all with my can do attitude and I even managed to pass the mystery shopper."/>
                <Experience logo={edgehilluniversity} jobtitle="Admissions Advocate" company="Edge Hill University" dateworked="October 2019 - April 2020 • 7 Months" location="Ormskirk, England, United Kingdom" description="As part of this role, I worked directly under the admissions team at Edge Hill to represent the university when prospective applicants came on site for their interviews. My main responsibilities include leading the applicants in a tour of the campus and answering their questions in that setting. I have also helped in the delivery of a Q&A session, in a lecture theatre. This job has helped me improve my confidence and team working skills which have been essential parts of the job."/>
                <Experience logo={edgehilluniversity} jobtitle="Student Guide" company="Edge Hill University" dateworked="March 2019 - April 2020 • 1 Year 2 Months" location="Ormskirk, England, United Kingdom" description="As a Student Guide at Edge Hill Univerisity my role is to show perspective students around campus and show them all the benefit of coming to the University and what they can get out of the University also I am here to help answer questions people may have on the University also this does not only help the University as I already have experience I can share and it helps improve my communication skills and confidence levels being able to speak to anyone and in front of people."/>
                <Experience logo={iqblade} jobtitle="Trainee Software Engineer" company="IQBlade" dateworked="February 2018 - July 2018 • 6 Month" location="Liverpool, England, United Kingdom" description="Alongside my studies, at University I decided to take on some voluntary work experience as a software developer. I completed this experience with IQBlade and I do this by arranging one session a week with James the lead software developer at IQBlade. We covered things such as Spring MVC also Lombock and Maven and I also looked into MySQL databases and setting one up and reading and writing data to it also using IntelliJ as my IDE and each week we could learn something new to develop my current skills and go onto creating an application to show developments in my skills as this is a language I did not work with before this."/>
                <h2 className="header-title"> Education </h2>
                <Education logo={edgehilluniversity} universityname="Edge Hill University" degree="BSc Computer Science 2.1" dateattendeed="September 2017 - May 2020" location="Ormskirk, England, United Kingdom" modules="Foundations of Computer Science, Digital World, Programming, Web Design and Development, Databases, Employability, Data Analytics, Statistical Inference, Introduction to Security, Software Engineering, Research and Development Project, Complex System, Research and Development Methods, Mathematical Models, Internet Security. " researchproject="I conducted research on product reviews for a set company and set up a program where I will be able to use AI to analyse the review and detect the emotions that It gives off to help support business in improving their product. Features will be added to automatically analyse certain features within the product itself. "/>
                <h2 className="header-title"> Licenses & Certifications </h2>
                <Experience logo={sas} jobtitle="SAS Programming 1: Essentials" company="SAS" dateworked="Issued January 2020"/>
                <Experience logo={microsoft} jobtitle="MTA - HTML5 Application Development Fundamentals" company="Microsoft" dateworked="Issued April 2018"/>
                <h2 className="header-title"> Extra-Curricular Technical Learning </h2>
                <ExtraCurricular logo={roq} date="January 2020" certification="ROQ Test Lab Visits" />
                <ExtraCurricular logo={roq} date="November 2019" certification="ROQ Defectives Challenge" />
                <ExtraCurricular logo={barclays} date="November 2018" certification="Barclays Technology Challenge" />
                <ExtraCurricular logo={ukfast} date="October 2018" certification="UK FAST Cyber Challenge" />
                <ExtraCurricular logo={milexa} date="October 2018" certification="Milexa Web Challenge" />
            </div>
        </div>
    )
}

export default AboutMeSection;