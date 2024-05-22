
:- dynamic yes/1,no/1. 


/* Base de hechos cargada desde el programa Python
  yes(headache)
  yes(runny_nose)
  yes(sneezing)
  yes(sore_throat)
*/

/* undo all yes-no assertions*/
undo :- retract(yes(_)),fail.
undo :- retract(no(_)),fail.
undo.

tiene(Disease):-
  diagnostico(Disease),
  undo.

/*How to verify something */
verificar(S) :-
 (yes(S)->true ;(no(S)->false)).