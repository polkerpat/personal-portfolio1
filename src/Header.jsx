function Header({name, matricNo}) {
    return (
        <header>
            <h1>{name}</h1>
            <p>Matric Number: {matricNo} </p>
            <p>THIS IS MY PORTFOLIO!</p>
        </header>
    );
}

export default Header;