'use strict'


class Organism{
    constructor(loc_x, loc_y){       
       this.age = 0;
       this.isAlive = true;       
       this.max_x = 400;
       this.max_y = 400;
       this.loc_x = loc_x;
       this.loc_y = loc_y;
       
    }
    getAge(){return this.age;}    
    increaseAge(){
        this.age += 1;        
    }
    getMaxAge(){
        return this.max_age;
    }   
    // asettaa eliön kuolleeksi
    setDead(){
        this.isAlive=false;
    }
    // asettaa eliön kuolleeksi, jos eliön ikä on suurempi kuin max-ikä
    checkAge(){
        if(this.age>this.max_age){
            this.setDead();
        }
    }
    // asettaa x- ja y- koordinaatit vastakkaiselle puolelle koordinaatistoa, jos ne menevät koordinaatiston rajojen yli
    rotateLocation(){
        if(this.loc_x < 0){
            this.loc_x = this.max_x;
        }
        if(this.loc_x > this.max_x){
            this.loc_x = 0;
        }
        if(this.loc_y < 0){
            this.loc_y = this.max_y;
        }
        if(this.loc_y > this.max_y){
            this.loc_y = 0;
        }
    }
    randomDirection(){
        let min = -20;
        let max = 20;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    decreaseFoodCounter(){
        this.foodCounter -= 1;        
    }
    // asettaa foodCounterin argumenttina saatavaan maksimiarvoon
    resetFoodCounter(m){
        this.foodCounter = m;        
    }
   
}

class Plant extends Organism{
    constructor(loc_x, loc_y){
        super(loc_x, loc_y);
        this.max_age = 30;        
    }
    // aika-askel kasvattaa kasvin ikää, ja asettaa kasvin kuolleeksi jos maksimi-ikä ylittyy
    performTimeStep(a){
        this.increaseAge(); 
        this.checkAge();       
    }
}

class Herbivore extends Organism{
    constructor(loc_x, loc_y){
        super(loc_x, loc_y);
        this.max_age = 20;
        this.maxFoodCounter = 7; // maksimi aika-askelten määrä ennen kuin olento kuolee syömättä
        this.foodCounter = this.maxFoodCounter;
        this.hasEaten = false;
    }
   // 
    performTimeStep(a){
        this.hasEaten = a.herbivoreLoc(this.loc_x, this.loc_y); // jos olento syö, sen hasEaten-arvo -> true
        this.increaseAge();
        this.checkAge();        
        this.move();
        this.rotateLocation();
        this.decreaseFoodCounter();  
        
        if(this.foodCounter===0){
            this.setDead();
        }
       // jos hasEaten == true, foodCounter asetetaan maksimiin
        if(this.hasEaten){
            this.resetFoodCounter(this.maxFoodCounter);
        }      
        
    }
    // muuttaa olion koordinaatteja satunnaiseen suuntaan
    move(){
        this.loc_x += this.randomDirection();
        this.loc_y += this.randomDirection();
    }
}

class Carnivore extends Organism{
    constructor(loc_x, loc_y){
        super(loc_x, loc_y);
        this.max_age = 10;
        this.maxFoodCounter = 7;
        this.foodCounter = this.maxFoodCounter;
        this.hasEaten = false;
    }
    
    performTimeStep(a){
        this.hasEaten = a.carnivoreLoc(this.loc_x, this.loc_y);
        this.increaseAge();
        this.checkAge();        
        this.move();
        this.rotateLocation();
        this.decreaseFoodCounter();
        if(this.foodCounter===0){
            this.setDead();
        }
        if(this.hasEaten){
            this.resetFoodCounter(this.maxFoodCounter);
        }      
        
    }
    move(){
        this.loc_x += this.randomDirection();
        this.loc_y += this.randomDirection();
    }
    
}