import Title from "components/shared/Title";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return <><Title>Erreur 404 : Page introuvable</Title>
    <p className="text-center">La ressource demandée n'existe pas.<br />
      <Link to="/">Retour à l'accueil</Link></p>
  </>;
};

export default NotFound;
