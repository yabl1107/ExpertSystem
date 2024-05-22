
from flask import Blueprint, request, jsonify, make_response
from resources.swipl_connection import *
from resources.get_functions import *
import sys
from io import StringIO

prolog = Blueprint('prolog',__name__)

@prolog.route('/prolog',methods=['POST'])
def diagnostic():
    result = {}
    msg = ''
    body = request.get_json()
    if body:
        keys_list = list(body.keys())

        result = queryProlog(keys_list)
        if(result[0]["Enfermedad"]=='desconocido'):
            msg="No se encontraron coincidencias para los sintomas indicados."
        else:
            msg = "Se encontraron resultados de diagnóstico para los síntomas indicados."
        print(result)
        data = {
            'message': msg,
            'status_code': 200,
            'data': result
        }
        return make_response(jsonify(data), 200)
    else:
        return jsonify({"error": "No se encontraron datos JSON en la solicitud"}), 400


@prolog.route('/prolog/getDiseases',methods=['GET'])
def getEnfermedades():
    result = {}
    enfermedades = get_diseases_from_file()
    result["data"] = enfermedades
    result["status_code"] = 200
    result["message"] = "Se recupero las enfermedades de la base de hechos."
    return jsonify(result), 200

@prolog.route('/prolog/getSymptoms',methods=['GET'])
def getSymptoms():
    result = {}
    sintomas = get_symptoms_from_file()
    result["data"] = sintomas
    result["status_code"] = 200
    result["message"] = "Se recupero los sintomas de la base de hechos."
    return jsonify(result), 200


