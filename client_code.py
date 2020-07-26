#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jun 27 17:43:33 2020

@author: CagriCivici
"""


import requests
import json
import time 
import random

# r =requests.get('https://xkcd.com/1906/')
# print(r.status_code)
# print(r.headers)
# print(r.headers['Content-Type'])
# print(r.text)


while True:
    temp1 = random.randint(-40, +60)
    temp2= random.randint(0,100)

    sensor = {
    
        "temp" : temp1,
        "humd" : temp2
        }
    
    
    
    url = "http://localhost:3000"
    data = {'temp': temp1, 'humd': temp2 , 'message': 'We did it!'}
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(url, data=json.dumps(data), headers=headers)
    
    print(r.status_code)
    
    time.sleep(3)
    


    r