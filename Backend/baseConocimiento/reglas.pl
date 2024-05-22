

/*
    Reglas
*/

diagnostico(gripe) :-
    verificar(fiebre),
    verificar(dolor_de_cabeza),
    verificar(escalofrios),
    verificar(dolor_de_cuerpo), !.

diagnostico(resfriado) :-
    verificar(dolor_de_cabeza),
    verificar(secrecion_nasal),
    verificar(estornudos),
    verificar(dolor_de_garganta), !.

diagnostico(tifoidea) :-
    verificar(dolor_de_cabeza),
    verificar(dolor_abdominal),
    verificar(falta_de_apetito),
    verificar(fiebre), !.

diagnostico(sarampion) :-
    verificar(fiebre),
    verificar(secrecion_nasal),
    verificar(sarpullido),
    verificar(conjuntivitis), !.

diagnostico(malaria) :-
    verificar(fiebre),
    verificar(sudoracion),
    verificar(dolor_de_cabeza),
    verificar(nauseas),
    (verificar(vomitos);verificar(diarrea)), !.




diagnostico(desconocido).
