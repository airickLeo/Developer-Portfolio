import { spaceInvaders, algobot, scraper, mealForU, newtonianApples } from "../assets"

const projects = [
    {
        name: "MealForU",
        description:
            "A dietary fullstack application dedicated to help you find the perfect meal suiting your diets",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Express.js",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "orange-text-gradient",
            },
        ],
        image: mealForU,
        source_code_link: "https://github.com/airickLeo/MealForU",
    },
    {
        name: "Newtonian Apples",
        description:
            "A physics simulation web app designated to engage students with physics and enhance their learning experience",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "WebGL",
                color: "green-text-gradient",
            },
            {
                name: "C#",
                color: "pink-text-gradient",
            },
            {
                name: "Material UI",
                color: "orange-text-gradient",
            },
        ],
        image: newtonianApples,
        source_code_link: "https://github.com/airickLeo/NewtonianApples",
    },
    {
        name: "Steam DBot",
        description:
            "Automated bot created utilizing BeautifulSoup library and parallel programming concepts to extract details for discounted games from Steam API",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "NumPy",
                color: "green-text-gradient",
            },
            {
                name: "Pandas",
                color: "pink-text-gradient",
            },
        ],
        image: scraper,
        source_code_link: "https://github.com/airickLeo/Steam-_Specials_Scraper",
    },
    {
        name: "Personal AlgoBot",
        description:
            "Automated bot that selects 20 of the best stocks from a list of option to create a safe porfolio, providing detailed analysis for the selection process",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "NumPy",
                color: "green-text-gradient",
            },
            {
                name: "Pandas",
                color: "pink-text-gradient",
            },
            {
                name: "Matplotlib",
                color: "orange-text-gradient"
            }
        ],
        image: algobot,
        source_code_link: "https://github.com/airickLeo/Personal-Algo-Bot",
    },
    {
        name: "Space Invaders",
        description:
            "Objected Oriented Space-Invaders game with automated difficulty increase, sound track, and user-friendly menu",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "pygame",
                color: "green-text-gradient",
            }
        ],
        image: spaceInvaders,
        source_code_link: "https://github.com/airickLeo/Space-Invaders",
    }
]

export default projects