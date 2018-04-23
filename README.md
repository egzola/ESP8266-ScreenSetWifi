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

![Picture 1](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/case1.jpg?raw=true)

Let the LDR at the bottom of the case
![Picture 2](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/case2.jpg?raw=true)

Put your case over the smartphone screen, and set brightness to 80%
![Picture 3](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/case3.jpg?raw=true)


You can see a video:

[![Watch the video](https://github.com/egzola/esp12-solderless-flasher-adapter/blob/master/esp12adapter.png?raw=true)](https://youtu.be/ZZHWxdNXwwc)



Circuit:

![Picture 4](https://github.com/egzola/ESP8266-Light-Pulse-Input-Credentials/blob/master/circuit.png?raw=true)


Tests:

![Picture 5](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/test1.jpg?raw=true)
![Picture 6](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/test2.jpg?raw=true)
![Picture 7](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/test3.jpg?raw=true)
![Picture 8](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/test4.jpg?raw=true)
![Picture 9](https://github.com/egzola/ESP8266-ScreenSetWifi/blob/master/test5.jpg?raw=true)

