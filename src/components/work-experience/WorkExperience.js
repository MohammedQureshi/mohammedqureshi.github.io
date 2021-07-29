import Card from "../card/Card";

import beyondtrustlogo from '../../images/company_logos/beyondtrustlogo.png'
import bandq from '../../images/company_logos/bandq.png'
import edgehilluniversity from '../../images/company_logos/edgehilluniversity.png'
import iqblade from '../../images/company_logos/iqblade.png'
import notdisclosed from '../../images/company_logos/notdisclosed.png'

class WorkExperience{
    constructor(companyLogo, jobTitle, companyName, position, startDate, endDate,timeOverall, location, description){
        this.companyLogo = companyLogo ?? "";
        this.jobTitle = jobTitle ?? "";
        this.companyName = companyName ?? "";
        this.position = position ?? "";
        this.startDate = startDate ?? "";
        this.endDate = endDate ?? "";
        this.timeOverall = timeOverall ?? "";
        this.location = location ?? "";
        this.description = description ?? "";
    }
}

function WorkExperienceList(){
    const workExperiencesList = [
        new WorkExperience(
            notdisclosed,
            "Junior Software Engineer", 
            "Undisclosed", 
            "Full-Time", 
            "June 2021", 
            "Present", 
            "Less than 1 Year",
            "North West, England, United Kingdom", 
            "As a Junior Software Engineer I will be working full-stack and this includes working on front end and backend and databases bugs or features, I am currently working with Ruby on Rails frontend and backend and also MySQL and further shall come along the line."
        ),
        new WorkExperience(
            beyondtrustlogo,
            "Graduate QA Engineer", 
            "BeyondTrust", 
            "Full-Time", 
            "June 2020", 
            "June 2021", 
            "1 Year",
            "Manchester, England, United Kingdom", 
            "As a QA Engineer, my main responsibility is ensuring the products our company provides are at a high standard before they leave the production line and go to customers. I have to ensure there is no bugs or issues with functionality so when it arrives to the customer, they will have a smooth and welcoming experience. During my time at BeyondTrust, I have tried to go further by looking into cypress a JavaScript framework for automation and have set up a system and tests along with side the current ones. I have also explored Angular during hackathon weeks to up my skills and improve myself. I have always gone out of my way to building tools that can further my learning and also help make my day to day life easier and help my team."
        ),
        new WorkExperience(
            bandq,
            "Customer Advisor", 
            "B&Q", 
            "Part-Time", 
            "March 2017", 
            "June 2020", 
            "3 Years 4 Months",
            "Wallasey, England, United Kingdom", 
            "As a customer service adviser I am trained to work on a checkout also the returns desk and the self service area and I make direct contact with customers to make sure they have had the best experience in the business today and make sure they leave happy so they can return again also I make sure to give it my all with my can do attitude and I even managed to pass the mystery shopper."
        ),
        new WorkExperience(
            edgehilluniversity,
            "Admissions Advocate", 
            "Edge Hill University", 
            "Part-Time", 
            "October 2019", 
            "April 2020", 
            "7 Months",
            "Ormskirk, England, United Kingdom", 
            "As part of this role, I worked directly under the admissions team at Edge Hill to represent the university when prospective applicants came on site for their interviews. My main responsibilities include leading the applicants in a tour of the campus and answering their questions in that setting. I have also helped in the delivery of a Q&A session, in a lecture theatre. This job has helped me improve my confidence and team working skills which have been essential parts of the job."
        ),
        new WorkExperience(
            edgehilluniversity,
            "Student Guide", 
            "Edge Hill University", 
            "Part-Time", 
            "March 2019", 
            "April 2020", 
            "1 Year 2 Months",
            "Ormskirk, England, United Kingdom", 
            "As a Student Guide at Edge Hill Univerisity my role is to show perspective students around campus and show them all the benefit of coming to the University and what they can get out of the University also I am here to help answer questions people may have on the University also this does not only help the University as I already have experience I can share and it helps improve my communication skills and confidence levels being able to speak to anyone and in front of people."
        ),
        new WorkExperience(
            iqblade,
            "Trainee Software Engineer", 
            "IQBlade", 
            "Part-Time", 
            "February 2018", 
            "July 2018", 
            "6 Month",
            "Liverpool, England, United Kingdom", 
            "Alongside my studies, at University I decided to take on some voluntary work experience as a software developer. I completed this experience with IQBlade and I do this by arranging one session a week with James the lead software developer at IQBlade. We covered things such as Spring MVC also Lombock and Maven and I also looked into MySQL databases and setting one up and reading and writing data to it also using IntelliJ as my IDE and each week we could learn something new to develop my current skills and go onto creating an application to show developments in my skills as this is a language I did not work with before this."
        ),
    ];

    let experienceList = workExperiencesList.map((workExperience ,index) =>{
        return <Card workExperiences={workExperience} key={index} />
    })
    
    return experienceList
}

export default WorkExperienceList