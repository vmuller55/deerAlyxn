import './forma.css'

const Forma = () => {
    return(
        <div className="formaContainer">
            <h2>Mes formations</h2>
            <div className="formaTab">
                <div className="formaContent perf">
                    <h3>Perfectionnement Gel</h3>
                    <h4>14h - 2 jours</h4>
                    <p>Révisions des bases</p>
                    <p>Préparation de la plaque</p>
                    <p>Manucure express</p>
                    <p>Extensions multi technique</p>
                    <p>Travail de différentes formes</p>
                    <p>Couleur sous cuticule</p>
                    <p>French paint</p>
                    <p>Incrustations</p>
                    <p>French reverse</p>
                </div>
                <div className="formaContent baby">
                    <h3>Perfect multi baby</h3>
                    <h4>14h - 2 jours</h4>
                    <p>Révisions des bases</p>
                    <p>Préparation de la plaque</p>
                    <p>Manucure express</p>
                    <p>Extensions multi technique</p>
                    <p>Travail de différentes formes</p>
                    <p>BabyBoomer en construction</p>
                    <p>BabyGlitter</p>
                    <p>BabyColor</p>
                    <p>BabyEffect</p>
                    <p>Ombré Milky</p>
                </div>
                <div className="formaContent coach">
                    <h3>Coaching privé</h3>
                    <h4>14h - 2 jours</h4>
                    <p>Le coaching privé est entièrement personnalisée</p>
                    <p>Le programme est fait sur mesure afin de s'adapter au mieux aux besoins de l'élève</p>
                </div>
            </div>
        </div>
    )
}

export default Forma