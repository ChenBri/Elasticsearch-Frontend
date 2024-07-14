function Header({ header, subHeader }) {
    return (
        <div className="pt-4 pb-6 text-center font-mono">
            <header className="text-4xl underline">{header}</header>
            <p  className="text-xl mx-32">{subHeader}</p>
        </div>
    );
}

export default Header;
