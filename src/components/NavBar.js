const NavBar = () => {

    return (
        <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>Tune Editor - DEV VERSION</title>
            <link rel="stylesheet" href="assets/css/style.css" />
            <script src="assets/js/scale.fix.js"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <div className="wrapper">
                <header>
                    <h1>Locked Tune View/Editor (Beta)</h1>
                    <p>Forza Horizon 5 Tune Viewer/Editor</p>
                    <p className="view"><a href="https://discordapp.com/users/Root.#6923/">Contact me on Discord</a></p>
                    <p className="view"><a href="https://github.com/ldalvik/TuneEditorReactApp/">View project on Github</a></p>
                    <ul>
                        <li><a href="https://discordapp.com/users/Root.#6923/">Message me on<strong>Discord</strong></a></li>
                        <li><a href="https://github.com/ldalvik/TuneEditorReactApp/">View On <strong>GitHub</strong></a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}
export default NavBar