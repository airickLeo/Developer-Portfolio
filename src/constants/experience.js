import { meta, aws, acentury, cibc, gm, grantmatch, synmatrix, me } from "../assets"

const experience = [
    {
        id: "Software Engineer",
        companyName: "Meta",
        icon: meta,
        date: "September 2025 - December 2025",
        icon: meta,
        iconBg: "#ffffff",
        points: [
            "Joining as a software engineer intern on the Instagram Direct Media team"
        ],
    },
    {
        id: "Software Engineer",
        companyName: "Amazon Web Services",
        icon: aws,
        date: "May 2025 - August 2025",
        icon: aws,
        iconBg: "#ffffff",
        points: [
            "Built an on‑demand CLI tool and real‑time data emission system in Rust, providing live and historical observability into S3 Express object cataloging across 3,000+ buckets per region, enabling rapid on‑call investigations",
            "Implemented in‑memory and persistence‑layer checksums in the event pipeline, ensuring end‑to‑end data integrity",
            "Developed multi‑level metrics and progression estimators in the CLI to surface abnormalities in live and historical views",
            "Engineered strongly typed I/O and automated AWS credential retrieval in the CLI, streamlining developer workflows",
        ],
    },
    {
        id: "Software Engineer",
        companyName: "Canadian Imperial Bank of Commerce",
        icon: cibc,
        date: "May 2024 - December 2024",
        icon: cibc,
        iconBg: "#ffffff",
        points: [
            "Delivered reporting features for an enterprise fraud management application using React, Spring Boot, and Azure SQL, improving fraud analysis efficiency and reducing report generation time",
            "Engineered CI/CD pipelines with Jenkins and Docker for deploying 20+ core APIs on OpenShift, integrating Blackduck and Fortify for automated security scanning",
            "Automated database script transfers with environment setup from Artifactory to Jump Server using GitHub Actions",
            "Mitigated 95% of security vulnerabilities in enterprise applications through security fixes and JDK version migration",
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
            "Developed a JSON‑driven CLI application using TDD to automate enterprise web‑based workflows, streamlining the SDLC",
            "Built a single‑page application for uploading, editing, executing, and visualizing JSON files for the CLI application, improving user interaction and accessibility",
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
            "Led development of intuitive user interfaces for a data catalog web application using Plotly Dash and Bootstrap, leading to 30% increased user engagement and a more efficient data discovery process",
            "Implemented ETL pipelines using S3 to optimize data extraction, transformation, and storage in PostgreSQL database",
            "Developed Python scripts using BeautifulSoup and Selenium to extract 4,000+ data entries from 10+ online platforms",
        ]
    },
]

export default experience