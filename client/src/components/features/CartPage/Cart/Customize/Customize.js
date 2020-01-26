import React, {Component} from "react";
import axios from "axios";
import {Grid, Cell, Card, CardActions, CardTitle, CardText, CardMenu, Tabs, Tab, Button} from "react-mdl";
import "./Customize.css";
import EdiText from 'react-editext';
// import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import ja from "date-fns/locale/fr";
// registerLocale("fr", ja);


class Commande extends Component {
    state={
        activeTab : 0,
        mainDeuvre:15000,
        prixDeTissu: "",
        nomDeTissu:"",
        prixTotal:"",
        imageDuTissu:"https://www.planetetissus.fr/Files/113061/Img/22/POLY-LAINE-11-GDE.jpg",
        epaules:"",
        bras:"",
        poignet:"",
        lgBras:"",
        lgVeste:"",
        poitrine:"",
        ventre:"",
        ceinture:"",
        dos:"",
        hanche:"",
        entrejambe:"",
        mollet:"", 
        chevilles:"",
        cuisse:"",
        genou:"",
        lgJambe:"",
        nomDuClient:"",
        cel:"",
        email:"",
        addess:"",
        dateChoisie:"",
        dateDeLivraison:"",
        consignes:"Decris model"

    }
// ===========HAUT==========================================
    onSaveEpaules = val => {this.setState({epaules: val})}
    onSaveBras = val => {this.setState({bras: val})}
    onSavePognet = val => {this.setState({poignet: val})}
    onSaveLgBras = val => {this.setState({lgBras: val})}
    onSaveLgVeste = val => {this.setState({lgVeste: val})}
    onSavePoitrine= val => {this.setState({poitrine: val})}
    onSaveVentre= val => {this.setState({ventre: val})}
    onSaveCeinture= val => {this.setState({ceinture: val})}
    onSaveDos= val => {this.setState({dos: val})}

// ==========BAS===========================================
    onSaveHanche= val => {this.setState({hanche: val})}
    onSaveCuisse= val => {this.setState({cuisse: val})}
    onSaveLgJambe= val => {this.setState({lgJambe: val})}
    onSaveGenou= val => {this.setState({genou: val})}
    onSaveEntrejambe = val => {this.setState({entrejambe: val})}
    onSaveMollet = val => {this.setState({mollet: val})}
    onSaveChevilles = val => {this.setState({chevilles: val})}

// =========PANNIER=========================================
    onSaveConsignes = val => {this.setState({consignes:val})}
    onSaveNomDuClient = val => {this.setState({nomDuClient: val})}
    onSaveCel = val => {this.setState({cel: val})}
    onSaveEmail = val => {this.setState({email: val})}
    onSaveAddress = val => {this.setState({addess:val})}
// ============ Date De Livraison =========================
handleDateDeLivraison = date =>{
    // let formatted_date = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()
    // console.log(formatted_date)
    // console.log(date)
    this.setState({
        dateChoisie: date,
        dateDeLivraison: date
    });
  }
// ==========No De Tissu==================================
    tissuChoise = event =>{
        // event.preventDefault()
        // alert(event.target.value)
        let tissu = event.currentTarget.dataset.value;
        let details = event.currentTarget.dataset.details;
        let prix = event.currentTarget.dataset.prix
        let id = event.currentTarget.dataset.id


        console.log(`Page ${tissu}, Details: ${details}, Prix: ${prix}, ID: ${id}`)
        this.setState({
            nomDeTissu: tissu,
            details: details,
            prixDeTissu: parseInt(prix)
        })
    }
// =========SUBMIT=========================================

    commande = e =>{
        // console.log(this.state)
        let data = this.state;
        data.prixTotal = this.state.prixDeTissu + this.state.mainDeuvre
        alert(data.prixTotal)
        axios
        .post("/api/commmander", this.state)
        .then(res => console.log(res.data)) // re-direct to login on successful register
        .catch(err =>
          console.log("Cached ERROR...")
        );
    }


    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div>
                    <Grid className="demo-grid-1">
                        <Cell col={3}>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/epaules.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', position:"relative", bottom:"20px", background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '200'}}>
                                        <h5>Epaules: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                name= "epaules"
                                                value={this.state.epaules}
                                                onSave={this.onSaveEpaules}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>

                        </Cell>
                        <Cell col={3}>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/bras.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        <h5>Bras: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                name="bras"
                                                value= {this.state.bras}
                                                onSave={this.onSaveBras}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3}>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/poignet.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        <h5>Poignet: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                value={this.state.poignet}
                                                onSave={this.onSavePognet}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3}>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/longueur_bras_3.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    <h5>Lg Bras: </h5>
                                    <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                value={this.state.lgBras}
                                                onSave={this.onSaveLgBras}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>

                    <Grid className="demo-grid-1">
                        <Cell col={3}>

                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/longueur_veste_3.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        <h5>Lg Veste: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                value={this.state.lgVeste}
                                                onSave={this.onSaveLgVeste}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3}>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/poitrine.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        <h5>Poitrine: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                value={this.state.poitrine}
                                                onSave={this.onSavePoitrine}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3}>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/ventre.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        <h5>Ventre: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                value={this.state.ventre}
                                                onSave={this.onSaveVentre}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3}>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/taille.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        <h5>Ceintur: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                value={this.state.ceinture}
                                                onSave={this.onSaveCeinture}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>

                    <Grid className="demo-grid-1">
                        <Cell col={3}>
                            <br/>
                            <Card shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/dos.jpg")}) center / cover`, margin: 'auto'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        <h5>Dos: </h5>
                                        <br/>
                                        <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                            <EdiText
                                                type='text'
                                                value={this.state.dos}
                                                onSave={this.onSaveDos}
                                            />
                                        </span>
                                    </span>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return(<div>
                <br/>
                <br/>
                <Grid className="demo-grid-1" id="haut" >
                    <Cell col={3}>
                        <Card  shadow={0} style={{width: '100%', height: '150px', background: `url(${require("../../../../Images/Mesurments/hanche.jpg")}) center / cover`, margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                <h5>Hanche: </h5>
                                <br/>
                                    <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                        <EdiText
                                            type='text'
                                            value={this.state.hanche}
                                            onSave={this.onSaveHanche}
                                        />
                                    </span>
                                </span>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={0} style={{width: '100%', height: '160px', background: `url(${require("../../../../Images/Mesurments/cuisse.jpg")}) center / cover`, margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    <h5>Cuisse: </h5>
                                    <br/>
                                    <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                        <EdiText
                                            type='text'
                                            value={this.state.cuisse}
                                            onSave={this.onSaveCuisse}
                                        />
                                    </span>
                                </span>
                            </CardActions>
                        </Card>
                    
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={0} style={{width: '100%', height: '160px', background: `url(${require("../../../../Images/Mesurments/genou.jpg")}) center / cover`, margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    <h5>Genou: </h5>
                                    <br/>
                                    <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                        <EdiText
                                            type='text'
                                            value={this.state.genou}
                                            onSave={this.onSaveGenou}
                                        />
                                    </span>
                                </span>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={0} style={{width: '100%', height: '160px', background: `url(${require("../../../../Images/Mesurments/longueur_jambe.jpg")}) center / cover`, margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    <h5>Lg Jambe: </h5>
                                    <br/>
                                    <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                        <EdiText
                                            type='text'
                                            value={this.state.lgJambe}
                                            onSave={this.onSaveLgJambe}
                                        />
                                    </span>
                                </span>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={3}>
                        <Card shadow={0} style={{width: '100%', height: '160px', background: `url(${require("../../../../Images/Mesurments/entrejambe.jpg")}) center / cover`, margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    <h5>Entrejambe: </h5>
                                    <br/>
                                    <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                        <EdiText
                                            type='text'
                                            value={this.state.entrejambe}
                                            onSave={this.onSaveEntrejambe}
                                        />
                                    </span>
                                </span>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={0} style={{width: '100%', height: '160px', background: `url(${require("../../../../Images/Mesurments/mollet.jpg")}) center / cover`, margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    <h5>Mollet: </h5>
                                    <br/>
                                    <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                        <EdiText
                                            type='text'
                                            value={this.state.mollet}
                                            onSave={this.onSaveMollet}
                                        />
                                    </span>
                                </span>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={3}>
                        <Card shadow={0} style={{width: '100%', height: '160px', background: `url(${require("../../../../Images/Mesurments/cheville.jpg")}) center / cover`, margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '100px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    <h5>Chevilles: </h5>
                                    <br/>
                                    <span style={{float:"right", position:"relative", bottom:"35px"}}>
                                        <EdiText
                                            type='text'
                                            value={this.state.chevilles}
                                            onSave={this.onSaveChevilles}
                                        />
                                    </span>
                                </span>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
            )
        }
    }
  
  render () {
    return (
        <div>
            <hr/>
            <br/>
            <br/>
            <Grid className="demo-grid-3">
                <Cell col={3}>
                    <strong style={{textAlign:"center"}}>
                        <h3>PANNIER</h3>
                    </strong>
                    <br/>
                    <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://image.made-in-china.com/43f34j00jpFYQcVfaTbS/Textile-Factory-OEM-Good-Quality-Tr-Suit-Fabric-Polyester-Viscose-Poly-Rayon-Chemical-Fabric.jpg) center / cover'}}>
                            <div style={{background: "#fff", color:"#000", padding:"5px"}}>
                                <strong>{this.state.nomDeTissu ? this.state.nomDeTissu : "Pas de tissu choisie"}</strong>
                            </div>
                        </CardTitle>
                            <CardActions border>
                                <Button colored onClick={this.commande}>Commander</Button>
                            </CardActions>
                            <CardText>
                                <strong> Model: <span>Croisee 1 Fante</span></strong>
                                <br/>
                                <strong> Coulear: <span> Bleu Marine</span></strong> 
                                <br/>
                                <strong>Description: <span>{this.state.details}</span></strong>
                                <br/>
                                <strong> Decris Model: </strong>
                                <br/>
                                <EdiText
                                    type='text'
                                    name= "epaules"
                                    value={this.state.consignes}
                                    onSave={this.onSaveConsignes}
                                />
                        </CardText>
                        <CardMenu style={{color: '#fff'}}>
                            <div style={{background: "#fff", color:"#000", padding:"5px"}}>
                                <strong>{this.state.prixDeTissu ? this.state.prixDeTissu + this.state.mainDeuvre : 0} FCFA</strong>
                            </div>
                        </CardMenu>
                    </Card>
                </Cell>
          
                <Cell col={9}>
                    <div className="category-tabs" id="mesures">
                        <Tabs activeTab = {this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                            <Tab style={{color:"#000" }}>Mesure Top</Tab>
                            <Tab style={{color:"#000" }}>Mesure Bottom</Tab>                                                  
                        </Tabs>
                        <section>
                            <Grid className="project-grid">
                                <Cell col={12}>
                                    <div className="content">{this.toggleCategories()}</div>
                                </Cell>
                            </Grid>
                        </section>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
  }
}


export default Commande;

