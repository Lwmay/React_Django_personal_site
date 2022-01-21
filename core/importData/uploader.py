import os
from distutils import extension
import csv
import pandas as pd
from shared.shared_settings import IMPORT_FILE_TYPE

class Uploader():
    """
    Import data from url, path to dataframe.
    Supported file : csv, 'xls', 'xlsx', 'xlsm', 'xlsb', 'odf', 'ods' and 'odt'.

    :param path: link to data file
    :param optional not_use_cols: list
    """
    # TODO: Add Pandas JSON reader

    _params = {}

    def __init__(self, path, not_use_cols=[]):
        self._params['path'] = None
        self._params['extension'] = None
        self._params['not_use_cols'] = not_use_cols

        self._get_extension(path)

    def _get_extension(self, path):
        """
        Check file type in settings available type
        """
        name, extension = os.path.splitext(path)

        if extension not in IMPORT_FILE_TYPE:
            raise Exception("Le type du fichier n'est pas valide.")
        else:
            self._params['extension'] = extension
            self._params['path'] = path
    
    def _get_csv_delimiter(self, path):
        """
        Auto detection csv delimiter.
        5000 bytes to determine the separator. 
        """
        sniffer = csv.Sniffer()

        with open(path) as fp:
            delimiter = sniffer.sniff(fp.read(5000)).delimiter
        
        return delimiter
    
    def _data_from_csv(self):

        separator = self._get_csv_delimiter(self._params['path'])

        return pd.read_csv(
            self._params['path'],
            sep=separator,
            usecols=lambda col: col not in self._params['not_use_cols']
        )

    def _data_from_xlsx(self) -> pd.DataFrame:

        return pd.read_excel(
            self._params['path'],
            usecols=lambda col: col not in self._params['not_use_cols']
        )
    
    def proceed(self) -> pd.DataFrame:
        """
        Method to start import data to dataframe.
        :param not_use_cols: list
        :return: Pandas dataframe
        """
        extension = '.txt'
        if extension in['.csv', '.txt']:
            dataframe = self._data_from_csv()
        
        if extension in ['.xls', '.xlsx', '.xlsm', '.xlsb', '.odf', '.ods', '.odt']:
            dataframe = self._data_from_xlsx()

        return dataframe