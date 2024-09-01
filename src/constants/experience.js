import { acentury, cibc, gm, grantmatch, synmatrix } from "../assets"

const experience = [
    {
        id: "Software Engineer",
        companyName: "Canadian Imperial Bank of Commerce",
        icon: acentury,
        date: "May 2024 - December 2024",
        icon: cibc,
        iconBg: "#ffffff",
        points: [
            "Spearheaded the development of new user interfaces for the industrial fraud management application utilizing React",
            "Engineered CI/CD pipelines using Jenkins to containerize and deploy 12 core business APIs to OpenShift, supporting both integration testing and production environments, resulting in a 52% reduction in post‑deployment issues",
            "Reduced Aqua Scan vulnerabilities by 95% through implementing fixes and migrating JDK versions, ensuring compliance with corporate security standards and significantly enhancing overall system security",
            "Conducted extensive code reviews during UI development for the industrial fraud management application, reducing product errors by 20% and ensuring robust, user‑friendly interfaces"
        ]
    },
    {
        id: "Software Engineer",
        companyName: "SynMatrix",
        icon: acentury,
        date: "January 2023 - April 2023",
        icon: synmatrix,
        iconBg: "#ffffff",
        points: [
            "Designed a JSON‑driven, object‑oriented CLI application for web automation, validation, and testing of enterprise software utilizing JavaScript, Playwright, and TDD, ultimately expediting the SDLC",
            "Leveraged modularization, page‑object model, polymorphism, and the factory method to improve program encapsulation, scalability, abstraction, and efficiency by 64%",
            "Developed a single‑page application with React and Express.js, enabling users to upload, edit, execute and visualize input JSON files for the CLI application, enhancing user interaction and accessibility",
            "The CLI application served as a prototype to drive the AI‑based technical support platform and was recognized by various development teams for its innovation and utility"
        ]
    },
    {
        id: "Data Engineer",
        companyName: "GrantMatch",
        icon: gm,
        date: "May 2022 - August 2022",
        icon: grantmatch,
        iconBg: "#cccccc",
        points: [
            "Led the design and implementation of intuitive user interfaces for a data catalog web application utilizing Python Dash and Bootstrap, leading to 30% increased user engagement and a more efficient data discovery process",
            "Utilized HTTP Requests, BeautifulSoup, and Selenium to program automated scripts that perform user login and extract desired information from over 10 online database platforms with 4000+ data entries",
            "Implemented ETL pipelines to transform semi‑structured and unstructured data and implemented AWS Lambda Triggers to map 549 scraped funding programs into the intermediate PostgreSQL database"
        ]
    },
]

export default experience