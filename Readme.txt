
Ohjelma aloitetaan start- nappulasta ja keskeytetään stop-nappulasta. Ohjelmalle täytyy ensin asettaa eliöiden määrät.

Pelialueella vihreät ympyrät ovat kasveja, siniset kasvinsyöjiä ja punaiset petoja.

Ohjelma suorittaa aika-askeleen sekunnin välein.
Aika-askelen aikana: 
 - eliöiden ikä lisääntyy yhdellä
 - jos maksimi-ikä ylittyy eliö kuolee
 - eliöt lisääntyvät lähialueelleen 10% todennäköisyydellä
 - pedot ja kasvinsyöjät liikkuvat satunnaiseen suuntaan max. 20 pikselin verran
 - kasvinsyöjä syö kasvin ja peto kasvinsyöjän jos pääsee näitä lähelle -> syöty olento kuolee
 - eläimillä on maksimi elinaika ilman ravintoa. Jos eläin ei syö, tämä arvo vähenee yhdellä, jos syö arvo resetoidaan maksimiin
 - jos eläimen elinaika ilman ravintoa pääsee nollaan, se kuolee
 - pelimaailmasta poistetaan kuolleet eliöt
 