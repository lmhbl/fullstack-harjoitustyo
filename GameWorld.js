'use strict'
class GameWorld extends Array{
     
    constructor(){
        super();
        
        
    }
    // lisää olento pelimaailmaan
    addOrganism(o){
        this.push(o);
    }
    getOrganismArray(){
        return this;
    }
    herbivoreLoc(locX, locY){
        for(let o of this){
            if(o instanceof Plant && o.loc_x==locX && o.loc_y==locY){
                o.setDead();
            }            
        }
    }
    
    // käy läpi pelimaailaman olennot ja vertaa niiden sijaintia argumenttina saatuun sijaintiin
    // jos sijainti sama -> olento kuolee
    carnivoreLoc(locX, locY){
        for(let o of this){
            if(o instanceof Herbivore && o.loc_x==locX && o.loc_y==locY){
                o.setDead();
            }            
        }
    }
    

    
}