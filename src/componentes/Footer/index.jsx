//que sea jsx o js es indiferente
import "./Footer.css"

const Footer = () => {
    return(
        <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
            <div className="redes">
                <a href="https://www.facebook.com/profile.php?id=100008322632715" target="_blank">
                    <img src="/img/facebook.png" alt="Facebook"/>
                </a>
                <a href="https://twitter.com/Gonza_villalba8" target="_blank">
                    <img src="/img/twitter.png" alt="Twitter"/>
                </a>
                <a href="https://www.instagram.com/gonza_villalba02/" target="_blank">
                    <img src="/img/instagram.png" alt="Instagram"/>
                </a>
            </div>
            <img className="logo" src="/img/Logo.png" alt="org"/>
            <strong>Desarrollado por Gonzalo Emiliano Villalba</strong>
        </footer>
    )
}

export default Footer