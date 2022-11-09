export default function validator(input) {
    let errors = {};
    
    if (!input.name) {
        errors.name = 'Name is necessary';
    }


    if (input.life > 255 || !input.life) {
        errors.life = 'Life is necessary and less than 255';
    }

    if (input.attack > 255 || !input.attack ) {
        errors.attack = 'Attack is necessary and less than 255';
    }

    if (input.defense > 255 || !input.defense) {
        errors.defense = 'Defense is necessary and less than 255';
    }

    if (input.speed > 255 || !input.speed) {
        errors.speed = 'Speed is necessary and less than 255';
    }

    if (!input.height) {
        errors.height = 'Height is necessary';
    };

    if (!input.weight) {
        errors.weight = 'Weight is necessary';
    }

    //Select control
    // const t2 = document.getElementById('t2')
    
    // if(!input.type1){
    //     errors.selected = 'it is necessary to select at least one';
    // }else{
    //     t2.disabled=false
    // }


    //button control
    const button = document.getElementById('id-sub')
    if(input.name && input.life &&  input.attack && input.defense && input.speed && input.height && input.weight && input.type1){
        button.disable=false
        button.setAttribute('style', 'opacity: 1;')
    }else{
        button.disable=true
        button.setAttribute('style', 'opacity: 0.5;')
    }
    


    return errors;
};