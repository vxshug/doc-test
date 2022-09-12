import os
import sys
sys.path.insert(0, os.path.abspath('../../_ext'))

print(sys.path)
import ht_translation

extensions = [
    'recommonmark',
    'ht_translation',
]
