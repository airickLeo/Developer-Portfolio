import { spaceInvaders, algobot, scraper } from "../assets"

const projects = [
    {
        name: "Steam Specials Scraper",
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