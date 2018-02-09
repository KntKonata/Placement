var CustomRandom = function(nseed) {
    return {    
        next : function(min, max) {
            return min && max ? min+nseed%1000/1000*(max-min) : nseed%1000/1000;
        }
    }
}

var etudiants = ['Mathias','Chihab','Grégoire','Grégory','Paul','Manu','Dorra','Stéphanie','Nicolas','Frédéric','Maxime','Samir'];
var test = Math.floor(Date.now()/1000/60);
var rng = CustomRandom(test);

function getGroups(etudiants, nbGroups)
{
    // creation de divs selon le nombre de groupes
    for (var i = 1; i <= nbGroups; i++)
    {
        var groupElt = document.createElement('div');
        groupElt.classList.add('group');
        document.getElementById('container').appendChild(groupElt)
    }

    // selection de l'ensemble des groupes
    var groupsElts = document.getElementsByClassName('group');
    var numGroup = (groupsElts.length - 1);

    while (etudiants.length !== 0)
    {
        // tirage d'un étudiant au hasard
        randIndex = Math.floor(rng.next(1,etudiants.length - 1));
        currentStudent = etudiants[randIndex];
        etudiants.splice(randIndex, 1);

        // ajout de l'étudiant à son groupe
        var etudiantElt = document.createElement('p');
        etudiantElt.classList.add('student');
        etudiantElt.textContent = currentStudent;
        if (currentStudent == 'Dorra' || currentStudent == 'Stéphanie') {
          etudiantElt.classList.add('girl');
        } else if (currentStudent == 'Paul') {
          etudiantElt.classList.add('deleg');
        } else {
          etudiantElt.classList.add('guy');
        }
        groupsElts[numGroup].appendChild(etudiantElt);
        numGroup--;

        if (numGroup < 0)
        {
            numGroup = (groupsElts.length-1);
        }
    }
}


// ... 
