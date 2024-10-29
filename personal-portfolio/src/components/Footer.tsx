//Footer

function Footer() {
    const FooterLink = ({ children }: any) => {
        return <h1 className="text-xl m-4 hover:text-2xl hover:font-bold transition-all">{children}</h1>
    }

    return (
        <footer id="contact" className="w-full flex justify-center items-center flex-center pb-8">
            <a href="https://github.com/LU347" target="_blank" rel="noreferrer noopener">
                <FooterLink>GitHub</FooterLink>
            </a>
            <a href="https://www.linkedin.com/in/elishalucile-ong/" target="_blank" rel="noreferrer noopener">
                <FooterLink>LinkedIn</FooterLink>
            </a>
        </footer>
    );
}

export default Footer