export const ContactUs = () => {
    const phoneNumber = "+1 (123) 456-7890"
    const email = "supersandwichmakers@sandwich.comx"
    const address = `123 Road Street Townville, ST 12345 USA`
    
    return(
        <div>
            <h2 className="contact-heading">Contact Us!</h2>
            <div className="home-page">
                <div className="home-card">
                    <p>Phone Number: {phoneNumber}</p>
                    <p>Address: {address}</p>
                    <p>Email us at {email}</p>
                </div>
                <div className="home-card">
                    <p>Programmer:
                        <a 
                            href="https://www.linkedin.com/in/ezra-brewer"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: `yellow` }}
                            >
                                Ezra Brewer
                            </a>
                    </p>
                    <p>Email: ezjbrewer@gmail.com</p>
                    <p>Github:
                        <a
                            href="https://github.com/ezjbrewer"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: `yellow` }}
                            >
                                Projects
                        </a>
                    </p>
                </div>
            </div>
    </div>
    )
}