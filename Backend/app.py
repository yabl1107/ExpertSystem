from flask import Flask
from services.prolog import prolog
from dotenv import load_dotenv
from pyswip import Prolog
from flask_cors import CORS
# Cargar variables de entorno desde el archivo .env
load_dotenv()
app=Flask(__name__)
CORS(app)

app.register_blueprint(prolog)

if __name__=='__main__':
    app.run(host='0.0.0.0',debug=True,port=5000)
