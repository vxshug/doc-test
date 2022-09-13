import os
import sys
sys.path.insert(0, os.path.abspath('../_ext'))


import ht_translation

extensions = [
    'sphinx_rtd_theme',
    'recommonmark',
    'ht_translation',
]
