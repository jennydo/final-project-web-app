function App() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FoodAlgorithms</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recommendation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Profile
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Login</a></li>
                                <li><a className="dropdown-item" href="#">Register</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

        </nav>


        <div className="w-100">
            <img alt="Homepage Banner" className={'w-100'} src={'https://media.istockphoto.com/id/1398788867/photo/decorative-abstract-fragility-blue-shade-wavy-background.jpg?b=1&s=170667a&w=0&k=20&c=M_8ioW-qyip4-DwB041vBB8KOsKFhMTudJjcEDfjmhc='}/>
        </div>

        <div className={'container'}>
            <h3>Recommended Recipe</h3>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img src="https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Eton Mess</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card">
                            <img src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" className="float-start" alt="..."/>
                            <div className="card-body float-end">
                                <p className="card-title">Eton Mess</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card">
                            <img src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" className="float-start" alt="..."/>
                            <div className="card-body float-end">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  );
}

export default App;
