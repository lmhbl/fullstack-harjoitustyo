'use strict'


class Organism{
    constructor(loc_x, loc_y){
       this.max_age = 1;
       this.age = 0;
       this.isAlive = true;
       
       this.setLocation_x(loc_x);
       this.setLocation_y(loc_y);
       

    }
    getAge(){return this.age;}  
    getAlive(){return this.isAlive;}  
    getXLocation(){return this.loc_x;}
    getYLocation(){return this.loc_y;}

    increaseAge(){
        this.age += 1;
        
    }
    //tee paikasta ehkä random
    setLocation_x(loc_x){
        this.loc_x=loc_x;
    }  
    setLocation_y(loc_y){
        this.loc_y=loc_y;
    }
    setDead(){
        this.isAlive=false;
    }
    compareAge(){
        if(this.age>this.max_age){
            this.setDead();
        }
    }
    
     
}
class Plant extends Organism{
    performTimeStep(a){
        this.increaseAge(); 
        this.compareAge();
    }
}

class Herbivore extends Organism{
   // liikkuu yhden pykälän oikealle
    performTimeStep(a){
        a.herbivoreLoc(this.loc_x, this.loc_y);
        this.increaseAge();
        this.compareAge();
        this.move();
        
    }
   move(){
        this.loc_x += 1;
        this.loc_y += 1;
    }    
   
}

class Carnivore extends Organism{
    // liikkuu yhden pykälän oikealle
    performTimeStep(a){
        
        a.carnivoreLoc(this.loc_x, this.loc_y);        
        this.increaseAge();
        this.compareAge();
        this.move();
    }
    move(){
        this.loc_x += 1;
        this.loc_y += 1;
    }
    
}