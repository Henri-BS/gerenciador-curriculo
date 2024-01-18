import IGithub from "assets/img/github.png"
import ILinkedIn from "assets/img/linkedin.png"
import IGmail from "assets/img/email.png"

function Footer() {
    const links = {
        github: "https://github.com/Henri-BS",
        email: "mailto:hbsantos720@gmail.com",
        linkedin: "https://www.linkedin.com/in/h-b-santos-1758351a3/"
    }

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">© 2024</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href={links.github} color="inherit">
                            <img width="24" height="24" src={IGithub}/>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href={links.email}>
                            <img width="24" height="24" src={IGmail}/>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href={links.linkedin}>
                            <img width="24" height="24" src={ILinkedIn}/>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;