import json
import os
from datetime import datetime
hoje = datetime.now().strftime("%Y-%m-%d")
resposta = input("sim ou não ").strip().lower()

if resposta in ['sim', 'nao']:
    try:
        with open('data.json', 'r') as file:
            dados = json.load(file)
    except FileNotFoundError:
        dados = {}
    dados[hoje] = resposta
    with open('data.json', 'w') as file:
        json.dump(dados, file, indent=4)
        os.system('git add data.json')
    os.system(f'git commit -m "update {hoje}: {resposta}"')
    os.system('git push origin main')