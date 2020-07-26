# temp-humd-server

This is IOT and Server Entegration Study.

IOT:
Arduino Uno
ESP8266
Temperature and Humidity Sensor

-IOT simulation is client_code.py works as IOT machine (ardunio). I have a flash programming error while uploading firmware to ESP8266. That's why, I wrote client_code.py to generate values (humidity and temperature values randomly) as IOT machine. Then, these values posted via restful. 

-Client side: work on Node.JS
It listens port:xxxx and captures these values to store in .csv file. 

-Frontend Side:
Create some template in hmtl but it is not focused on to complete. 
