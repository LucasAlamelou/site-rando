import React from 'react';
import Tabs from './Tabs';

const ParentComponent = () => {
  const tabs = [
    {
      id: 1,
      label: 'Le cormet de Roseland (Savoie, FR)',
    },
    {
      id: 2,
      label: 'Cascade Grand-Galet (Ile de la Réunion, FR)',
    },
    {
      id: 3,
      label: 'Piton des neiges (Ile de la Réunion, FR)',
    },
  ];
  return (
    <Tabs tabs={tabs}>
      <div id="1">
        <p>
          Le barrage de Roselend, situé à 1 557 mètres d’altitude par exemple, est connu pour être
          le plus esthétique des barrages de Savoie. Son lac bleu turquoise évoque les eaux du
          Pacifique, les troupeaux de tarines impassibles paissent aux alentours et de nombreux
          sommets s’y contemplent : Roc du Vent, Aiguille du Grand Fond, La Pierra Menta…
        </p>
        <p>
          Les abords du lac offrent de très beaux départs de randonnées à pied ou à vélo. Le « Tour
          de Roselend » par exemple permet de découvrir la faune et la flore locales pour une balade
          de 4h environ et 900 m de dénivelé.
        </p>
        <img src={require('../Img/lake-roseland.jpg')} alt="roseland" />
      </div>
      <div id="2">
        <p>
          La cascade de Grand Galet, ou cascade Langevin, est une chute d'eau de l'île de La
          Réunion, un département d'outre-mer français dans le sud-ouest de l'océan Indien. Elle
          relève du territoire de la commune de Saint-Joseph, une commune de La Réunion située dans
          le sud de l'île.
        </p>
        <img src={require('../Img/cascade-grand-galet.jpeg')} alt="cascade-grand-galet" />
      </div>
      <div id="3">
        <p>
          Le piton des Neiges est le point culminant de l'île de La Réunion, à 3 070 mètres
          d'altitude. Il est parfois considéré comme le point culminant de l'océan Indien, bien que
          cette affirmation soit discutable puisque des volcans de Sumatra, Java, Bali et Lombok
          sont plus élevés.
        </p>
        <p>
          Il est possible de se lancer à l’assaut de ses flancs mythiques depuis la
          Plaine-des-Cafres ou le cirque de Salazie. Mais en général, les valeureux marcheurs
          partent du cirque de Cilaos, également au centre de l’île ! Ils font ensuite halte au seul
          gîte du piton des Neiges, l’incontournable refuge de la Caverne Dufour. Après une bonne
          nuit de repos dans un des quatre dortoirs (48 places au total) et un repas roboratif, ils
          se lèvent très tôt, avant l’aube, pour parcourir les derniers kilomètres avant le sommet.
          Au bout d’un peu plus d’une heure, leurs efforts sont récompensés. Ils assistent au lever
          du soleil sur presque toute l’île, avec à l’horizon l’océan Indien, dont les eaux
          turquoises fusionnent avec le ciel.
        </p>
        <img src={require('../Img/piton-des-nieges.jpeg')} alt="piton-des-neiges" />
      </div>
    </Tabs>
  );
};

export default ParentComponent;
