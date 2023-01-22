import React, { Component } from 'react';
import axios from 'axios';
export default class SignUp extends Component {
constructor(props) {
super(props);
this.state = {
Nom: '',
Prenom: '',
Cin: '',
Tel: '',
Mail: '',
Pass: '',
registerStatus: ''
};
}
handleChange = (event) => {
this.setState({ [event.target.name]: event.target.value });
}

handleSubmit = (e) => {
  e.preventDefault();
  console.log("dfghjkklkjhgfdsdfgghhjj");
  axios.post("http://localhost:3000/register", {
    nom: this.state.Nom,
    prenom: this.state.Prenom,
    cin: this.state.Cin,
    tel: this.state.Tel,
    email: this.state.Mail,
    adresse: this.state.Pass
  }).then((response) => {
    if (response.data.message) {
      this.setState({registerStatus: response.data.message});
    } else {
      this.setState({registerStatus: "compte créé avec succès"})
    }
  }).catch((error) => {
    console.log(error);
  });
}


render() {
  return (
  <form onSubmit={this.handleSubmit}>
  <h3>Sign Up</h3>
  <div className="mb-3">
  <label>Nom</label>
  <input
           type="text"
           className="form-control"
           placeholder="Nom"
           value={this.state.Nom}
           onChange={this.handleChange}
           name="Nom"
           pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
           required
         />
  <div className="invalid-feedback">
  Veuillez entrer un nom
  </div>
  </div>
  <div className="mb-3">
  <label>Prenom</label>
  <input
           type="text"
           className="form-control"
           placeholder="Prenom"
           value={this.state.Prenom}
           onChange={this.handleChange}
           name="Prenom"
           pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
           required
         />
  </div>
  <div className="mb-3">
  <label>CIN</label>
  <input
           type="text"
           className="form-control "
           maxLength="8"
           placeholder="CIN"
           id="cin"
           value={this.state.Cin}
           onChange={this.handleChange}
           name="Cin"
           pattern="[0-9]{8}"
           required
         />
  </div>
  <div className="mb-3">
  <label>Telephone</label>
  <input
           type="tel"
           className="form-control"
           maxLength="8"
           placeholder="Telephone"
           id="telephone"
           value={this.state.Tel}
           onChange={this.handleChange}
           name="Tel"
           pattern="[0-9]{8}"
           required
         />
  </div>
  <div className="mb-3">
  <label>Adresse amil</label>
  <input
           type="email"
           className="form-control "
           placeholder="Entrez email"
           id="email"
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
           name="Mail"
           value={this.state.Mail}
           onChange={this.handleChange}
           required
         />
        </div>
  <div className="mb-3">
  <label>Mot de passe</label>
  <input type="password"
    className="form-control"
    placeholder="Mot de passe"
    value={this.state.Pass}
    onChange={this.handleChange}
    name="Pass"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Doit contenir au moins un chiffre, une minuscule, une majuscule et 8 caractères au total"
    required
    />
  </div>
  <button type="submit" className="btn btn-primary">S'inscrire</button>
  <div>{this.state.registerStatus}</div>
  </form>
);
}
}