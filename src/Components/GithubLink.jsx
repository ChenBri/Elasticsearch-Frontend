function GithubLink({ link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="border-2 border-black  h-min hover:invert duration-700">
                <img src="https://img.shields.io/badge/GitHub-ffffff?style=for-the-badge&logo=github&logoColor=black" alt="Github project" />
            </div>
        </a>
    );
}

export default GithubLink;
