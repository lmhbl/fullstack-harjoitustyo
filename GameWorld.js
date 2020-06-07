'use strict'

// kuvaa pelimaailma-taulukkoa, joka sisältää kaikki pelimaailman oliot
class GameWorld extends Array{     
    constructor(){
        super();        
    }

    // lisää olento taulukkoon
    addOrganism(o){        
        this.push(o);
    }
    // käy läpi kaikki pelimaailma-taulukon oliot, ja vertaa niiden koordinaatteja argumenttina saataviin koordinaatteihin
    // jos koordinaatit ovat 30 yksikön säteellä, olio asetetaan kuolleeksi
    herbivoreLoc(locX, locY){
        for(let o of this){
            if(o instanceof Plant && (o.loc_x>=locX-30 && o.loc_x<=locX+30)&& (o.loc_y>=locY-30 && o.loc_y<=locY+30)){                
                o.setDead();
                return true;
            }            
        }
    }
    
    carnivoreLoc(locX, locY){
        for(let o of this){
            if(o instanceof Herbivore && (o.loc_x>=locX-30 && o.loc_x<=locX+30)&& (o.loc_y>=locY-30 && o.loc_y<=locY+30)){
                o.setDead();
                return true;
            }            
        }
    }
   
}