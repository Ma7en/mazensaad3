function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="text padd-15">
                        <p>
                            &copy; Copyright
                            <span> Mazen Saad </span>
                            <span className="dateYear">
                                {new Date().getFullYear()}
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
