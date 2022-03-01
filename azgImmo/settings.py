"""
AZG Immo app configuration.
"""


# Link to data
DATA_COMMUNE = 'https://www.insee.fr/fr/statistiques/fichier/4316069/communes2020-csv.zip'
DATA_DEPARTEMENT = 'https://www.insee.fr/fr/statistiques/fichier/4316069/departement2020-csv.zip'

# List of columns names not imported
NOT_USE_COLS = [
    ' Code service CH'
    'Reference document',
    '1 Articles CGI',
    '2 Articles CGI',
    '3 Articles CGI',
    '4 Articles CGI',
    '5 Articles CGI'
]

# List of application available for batch reporting
COLS_DICT = {
    'No disposition':               'no_dispo',
    'Date mutation':                'date_mutation',
    'Nature mutation':              'nature_mutation',
    'Valeur fonciere':              'valeur_fonciere',
    'No voie':                      'no_voie',
    'B/T/Q':                        'B/T/Q',
    'Type de voie':                 'type_voie',
    'Code voie':                    'code_voie',
    'Voie':                         'voie',
    'Code postal':                  'code_postal',
    'Commune':                      'commune',
    'Code departement':             'code_dep',
    'Code commune':                 'code_commune',
    'Prefixe de section':           'prefixe_section',
    'Section':                      'section',
    'No plan':                      'no_plan',
    'No Volume':                    'no_volume',
    '1er lot':                      '1er_lot',
    'Surface Carrez du 1er lot':    'surface_carrez_1er_lot',
    '2eme lot':                     '2eme_lot',
    'Surface Carrez du 2eme lot':   'surface_carrez_2eme_lot',
    '3eme lot':                     '3eme_lot',
    'Surface Carrez du 3eme lot':   'surface_carrez_3eme_lot',
    '4eme lot':                     '4eme_lot',
    'Surface Carrez du 4eme lot':   'surface_carrez_4eme_lot',
    '5eme lot':                     '5eme_lot',
    'Surface Carrez du 5eme lot':   'surface_carrez_5eme_lot',
    'Nombre de lots':               'nbr_lots',
    'Code type local':              'code_type_local',
    'Type local':                   'type_local',
    'Identifiant local':            'ident_local',
    'Surface reelle bati':          'surface_bati',
    'Nombre pieces principales':    'nbr_pieces',
    'Nature culture':               'nature_culture',
    'Nature culture speciale':      'nature_culture_spe',
    'Surface terrain':              'surface_terrain'
}