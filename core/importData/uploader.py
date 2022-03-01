import os
from sys import path
from io import BytesIO
import zipfile
from urllib.request import urlopen
import csv
import pandas as pd
from shared.shared_settings import IMPORT_FILE_TYPE

class Uploader:
    """
    Import data from url, path to dataframe.
    Supported file : csv, 'xls', 'xlsx', 'xlsm', 'xlsb', 'odf', 'ods' and 'odt'.

    Attributes:
        path (str): link to data file
        not_use_cols (list): optional list of columns names that will be ignored.
        extension (str): extension of input file.
    
    Methods:
        process()
            Convert data to panda dataframe
    """
    # TODO: Add Pandas JSON reader

    _params = {}

    def __init__(self, path, not_use_cols=[]):
        self._params['extension'] = None
        self._params['not_use_cols'] = not_use_cols
        self.file = None
        
        self._check_file_compressed(path)
    
    def _get_extension(self, path):
        """
        Check file type in settings available type
        """
        name, extension = os.path.splitext(path)

        if extension in IMPORT_FILE_TYPE:
            return extension
        else:
            raise Exception("Le type du fichier n'est pas valide.")
    
    def _check_file_compressed(self, path):
        """
        Load file in variable.
        """
        extension = self._get_extension(path)

        if extension == '.zip':
            resp = urlopen(path)
            zf = zipfile.ZipFile(BytesIO(resp.read()))
            list_files = zf.namelist()

            if len(list_files) == 1:
                path = list_files[0]
                extension = self._get_extension(path)
                print("lllllllllllll")
                print(path)
                print(extension)
                print("llllllllll")
            else:
                raise Exception("Le dossier contient plusieurs fichiers.")
        else :
            self.file = open(path)
        
        self._params['extension'] = extension
        self._params['path'] = path
        
    def _get_csv_delimiter(self):
        """
        Auto detection csv delimiter.
        5000 bytes to determine the separator. 
        """
        sniffer = csv.Sniffer()
        delimiter = sniffer.sniff(self.file.read(5000)).delimiter
        
        return delimiter
    
    def _data_from_csv(self):

        separator = self._get_csv_delimiter()

        print("mmmmmmmmmmmmmmm")
        print(self.file)
        print(separator)

        return pd.read_csv(
            self.file,
            sep=separator
            #,
            #usecols=lambda col: col not in self._params['not_use_cols']
        )

    def _data_from_xlsx(self):

        return pd.read_excel(
            self._params['path'],
            usecols=lambda col: col not in self._params['not_use_cols']
        )
    
    def proceed(self):
        """
        Method to start import data to dataframe.
        :param not_use_cols: list
        :return: Pandas dataframe
        """
        print(self._params['extension'])
        if self._params['extension'] in['.csv', '.txt']:
            dataframe = self._data_from_csv()
        
        if self._params['extension'] in ['.xls', '.xlsx', '.xlsm', '.xlsb', '.odf', '.ods', '.odt']:
            dataframe = self._data_from_xlsx()

        return dataframe
    