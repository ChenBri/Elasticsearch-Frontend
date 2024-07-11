function Header({ header, subHeader }) {
    return (
        <div className="pt-6 pb-12 text-center font-mono">
            <header className="text-4xl underline">{header}</header>
            <p  className="text-xl mx-32">{subHeader}</p>
        </div>
    );
}

export default Header;
