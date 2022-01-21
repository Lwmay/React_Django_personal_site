from collections import Counter
from django.test import TestCase
from core.importData.uploader import Uploader


colnames = [
    ' Code service CH',
    'Reference document',
    '1 Articles CGI',
    '2 Articles CGI',
    '3 Articles CGI',
    '4 Articles CGI',
    '5 Articles CGI',
    'No disposition',
    'Date mutation',
    'Nature mutation',
    'Valeur fonciere',
    'No voie',
    'B/T/Q',
    'Type de voie',
    'Code voie',
    'Voie',
    'Code postal',
    'Commune',
    'Code departement',
    'Code commune',
    'Prefixe de section',
    'Section',
    'No plan',
    'No Volume',
    '1er lot',
    'Surface Carrez du 1er lot',
    '2eme lot',
    'Surface Carrez du 2eme lot',
    '3eme lot',
    'Surface Carrez du 3eme lot',
    '4eme lot',
    'Surface Carrez du 4eme lot',
    '5eme lot',
    'Surface Carrez du 5eme lot',
    'Nombre de lots',
    'Code type local',
    'Type local',
    'Identifiant local',
    'Surface reelle bati',
    'Nombre pieces principales',
    'Nature culture',
    'Nature culture speciale',
    'Surface terrain'
]

colnames_not_use = [
    ' Code service CH',
    'Reference document',
    '1 Articles CGI',
    '2 Articles CGI',
    '3 Articles CGI',
    '4 Articles CGI',
    '5 Articles CGI'
]

class UploadDataCase(TestCase):

    NB_TEST_FILE_ROW = 10
    
    def setUp(self):
        try:
            upload = Uploader("core/testFiles/test_valeursfoncieres-2021-s1.txt")
            self.data = upload.proceed()
        except IOError as e:
            print(e)
    
    def test_colnames(self):
        self.assertListEqual(list(self.data.columns), colnames)
    
    def test_nb_rows(self):
        self.assertTrue(self.data.shape[0] == self.NB_TEST_FILE_ROW)

class UploadDataFilteredCase(TestCase):

    def setUp(self):
        try:
            upload_filtered = Uploader(
                "core/testFiles/test_valeursfoncieres-2021-s1.txt",
                colnames_not_use)
            self.data = upload_filtered.proceed()
        except IOError as e:
            print(e)
    
    def test_cols_filter(self):
        colres = list((Counter(colnames)-Counter(colnames_not_use)).elements())
        self.assertListEqual(list(self.data.columns), colres)
