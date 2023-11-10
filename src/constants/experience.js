import { acentury, gm } from "../assets"

const experience = [
    {
        id: "Software Developer",
        companyName: "Acentury",
        icon: acentury,
        date: "January 2023 - April 2023",
        iconBg: "#ffffff",
        points: [
            "Utilized JavaScript, Playwright, and TDD to innovate a JSON-driven, object-oriented web automation and front-end testing software tool that performs unit, integration, performance, and end-to-end testing for the enterprise software, ultimately expediting the SDLC",
            "Leveraged modularization, page-object model, polymorphism, and the factory method to improve program encapsulation, scalability, abstraction, and cohesion",
            "Developed a single-page application with React and Express.js, enabling users to upload, edit, execute and visualize input JSON files",
            "The tool served as a prototype to drive the AI based technical support platform and was recognized by multiple development teams"
        ]
    },
    {
        id: "Data Engineer",
        companyName: "GrantMatch",
        icon: gm,
        date: "May 2022 - August 2022",
        iconBg: "#cccccc",
        points: [
            "Developed automated scripts in Python using Scrapy, Selenium, and beautifulSoup with multithreaded design to extract data from static and dynamic websites",
            "Designed UI of web applications using Python Dash and Dash Bootstrap",
            "Built pipelines and lambda triggers to transform and map data into PostgreSQL database"
        ]
    },
]

export default experience