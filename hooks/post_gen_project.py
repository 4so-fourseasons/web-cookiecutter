import subprocess
import os


subprocess.call(['git', 'init'])

subprocess.call(['git', 'checkout', '-b', 'dev'])
subprocess.call(['git', 'remote', 'add', 'origin', '{{ cookiecutter.repo_url }}'])
