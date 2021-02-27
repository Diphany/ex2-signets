import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier" style={{backgroundColor:couleur}}>
      <div className="couverture">
      <div className="tri">
        <SortIcon className="iconeTri"/>
      </div>
        {/* <span className="deplacer">Déplacer</span> */}
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p className="date">{dateModif}</p>
      </div>
      <button className="btnModifier">Modifié :</button>
      <button className="btnPlusActions"><MoreVertIcon /></button>
    </article>
  );
}