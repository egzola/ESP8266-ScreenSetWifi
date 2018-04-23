# ESP8266-Screen-Set-Wifi

Esp8266 Screen Set Wifi

This library can transfer data (WiFi credentials) from your smartphone to an ESP8266 by Pulsing your Mobile Screen.

To setup your WiFi Credentials put your ESP12F over a Smartphone screen, and let the Black and White Oscillation transmit the information. Note: You need to cover the LDR, in a way no light can enter. The LDR should not touch the screen, it needs stay some millimeters far from the screen.

Items required:

- ESP-12F (and all the basic componentes to make it work)
- Resistor 300k
- LDR 50K-50M Omhs (GL5539)
- Unzip the library ESP8266-screenSetWifi-master.zip into your Arduino Library Folder

PS: You can try other variations of resistor values and LDR types. Just make sure the max resistive value of LDR is greater than the pull-down resistor.

You can try a demo at:  

http://www.zolalab.com.br/esp8266/screenSetWifi/html/screenSetWifi.html


As you can see I did a case to my circuit, and left the LDR on the bottom to communicate with a smartphone.



You can see a video at:



Circuit:

![Picture 1](https://github.com/egzola/ESP8266-Light-Pulse-Input-Credentials/blob/master/circuit.png?raw=true)
