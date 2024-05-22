

# Nombre del archivo
nombre_archivo = "./baseConocimiento/hechos.pl"

def get_diseases_from_file():
    enfermedades = []
    # Abrir el archivo en modo lectura
    with open(nombre_archivo, "r") as archivo:
        # Iterar sobre cada línea del archivo
        for linea in archivo:
            # Buscar la cadena "enfermedad("
            if "enfermedad(" in linea:
                # Obtener la palabra dentro de los paréntesis
                enfermedad = linea.split("(")[1].split(")")[0]
                # Añadir la enfermedad a la lista
                enfermedades.append(enfermedad)
    return enfermedades

def get_symptoms_from_file():
    sintomas = []
    # Abrir el archivo en modo lectura
    with open(nombre_archivo, "r") as archivo:
        # Iterar sobre cada línea del archivo
        for linea in archivo:
            # Buscar la cadena "enfermedad("
            if "sintoma(" in linea:
                # Obtener la palabra dentro de los paréntesis
                enfermedad = linea.split("(")[1].split(")")[0]
                # Añadir la enfermedad a la lista
                sintomas.append(enfermedad)
    return sintomas