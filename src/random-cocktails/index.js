import React from "react";

const RandomCocktails = () => {
    return(
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
)
}

export default RandomCocktails;

