"""
FOR - FASE 1: Usar o loop for para coletar moedasde ouro 5 vezes.
"""

import random

import time

def fase1_farm():
    print("FASE 1: FARM")
    moedas = 0

    for volta in range(1,6):
        moedas_coletadas = random.randint(5,20)
        moedas += moedas_coletadas
        print(f"\nTotal coletado: {moedas} moedas de ouro")
        time.sleep(0.3)

    print(f"Total final de moedas {moedas} de ouro")
    return moedas