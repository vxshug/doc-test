import recommonmark
from recommonmark.transform import AutoStructify

source_suffix = ['.rst', '.md']
# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'recommonmark',
    'ht_translation'
]

templates_path = ['../../../_ext/_templates']
exclude_patterns = []

locale_dirs = ['locale/']   # path is example but recommended.
gettext_compact = False     # optional.

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['../../../_ext/_static']

html_js_files = [
    'js/custom.js',
]
html_css_files = [
    'css/custom.css',
]

html_context = {
  'display_github': True,
  'github_user': 'vxshug',
  'github_repo': 'doc-test',
  'github_version': 'main',
  'conf_py_path': conf_py_path,
}

def setup(app):
    app.add_config_value('recommonmark_config', {
        'enable_math': True,
        'enable_inline_math': True,
        'enable_eval_rst': True,
        'enable_auto_doc_ref': False,
    }, True)
    app.add_transform(AutoStructify)
