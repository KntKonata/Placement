var CustomRandom = function(nseed) {    
  
  var seed,    
    constant = Math.pow(2, 13)+1,    
    prime = 1987,    
//any prime number, needed for calculations, 1987 is my favorite:)  
    maximum = 1000;    
//maximum number needed for calculation the float precision of the numbers (10^n where n is number of digits after dot)  
    if (nseed) {    
      seed = nseed;    
    }    
    
    if (seed == null) {    
//before you will correct me in this comparison, read Andrea Giammarchi's text about coercion http://goo.gl/N4jCB  
      
      seed = (new Date()).getTime();   
//if there is no seed, use timestamp     
    }     
    
    return {    
      next : function(min, max) {    
        seed *= constant;    
        seed += prime;    
           
      
        return min && max ? min+seed%maximum/maximum*(max-min) : seed%maximum/maximum;  
// if 'min' and 'max' are not provided, return random number between 0 & 1  
      }    
    }    
} 

var etudiants = ['Mathias','Chihab','Grégoire','Grégory','Paul','Manu','Dorra','Stéphanie','Nicolas','Frédéric','Maxime','Samir'];
var test = Math.floor(Date.now()/1000/60/60/24);
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