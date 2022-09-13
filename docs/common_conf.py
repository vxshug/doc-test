import os
import sys
sys.path.insert(0, os.path.abspath('../../_ext'))

idf_targets = ['esp32', 'esp32s2', 'esp32s3', 'esp32c3', 'esp32c2']

import ht_translation

extensions = [
    'recommonmark',
    'ht_translation',
]
