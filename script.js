//PLAY BOTON    
function corredor() {

    document.getElementById('dance').style.display = 'block'
    document.getElementById('dance').style.visibility = 'visible'

    var H_D = document.getElementById('HD').value * 1000;
    var A_D = document.getElementById('AD').value * 1000;
    var H_I = document.getElementById('HI').value * 1000;
    var A_I = document.getElementById('AI').value * 1000;
    var M_D = document.getElementById('MD').value * 1000;
    var T_D = document.getElementById('TD').value * 1000;
    var M_I = document.getElementById('MI').value * 1000;
    var T_I = document.getElementById('TI').value * 1000;

    var HD = document.getElementById('humero_der')
    var AD = document.getElementById('antebrazo_der')
    var HI = document.getElementById('humero_izq')
    var AI = document.getElementById('antebrazo_izq')
    var MD = document.getElementById('muslo_der')
    var TD = document.getElementById('tibia_der')
    var MI = document.getElementById('muslo_izq')
    var TI = document.getElementById('tibia_izq')

    document.getElementById('Max_Min').value = 1;

    // HUMERO DERECHO 0
    HD.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-60deg)' },
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(50deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: H_D, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });

    // ANTEBRAZO DERECHO 1
    AD.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(70deg)' },
        { transform: 'rotate(90deg)' },
        { transform: 'rotate(40deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: A_D, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });
    //, direction: 'alternate'

    // HUMERO IZQUIERDO 2
    HI.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(60deg)' },
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-50deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: H_I, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });

    // ANTEBRAZO IZQUIERDO 3
    AI.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(70deg)' },
        { transform: 'rotate(90deg)' },
        { transform: 'rotate(40deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: A_I, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });

    // MUSLO DERECHO 4
    MD.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(50deg)' },
        { transform: 'rotate(20deg)' },
        { transform: 'rotate(-40deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: M_D, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });

    // TIBIA DERECHO 5
    TD.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-30deg)' },
        { transform: 'rotate(-60deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: T_D, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });

    // MUSLO IZQUIERDO 6
    MI.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-40deg)' },
        { transform: 'rotate(20deg)' },
        { transform: 'rotate(50deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: M_I, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });

    // TIBIA IZQUIERDO 7
    TI.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-60deg)' },
        { transform: 'rotate(-30deg)' },
        { transform: 'rotate(0deg)' }
    ],
        { duration: T_I, iterations: 'Infinity', easing: 'linear', fill: 'forwards' });
}

//PAUSE BOTON
function pause() {
    var x = document.getAnimations();
    var i;
    for (i = 0; i < x.length; i++) { x[i].pause(); }
}

//VELOCIDAD RANGE
function DisplayChange() {
    var x = document.getAnimations();
    var c = document.getElementById('Max_Min');
    var i;
    for (i = 0; i < x.length; i++) { x[i].playbackRate = c.value; }
}

function reset() {

    document.getElementById('Displaydance').style.display = 'none'
    document.getElementById('Displaydance').style.visibility = 'hidden'

    document.getElementById('reset').style.display = 'none'
    document.getElementById('reset').style.visibility = 'hidden'

    document.getElementById('HD').value = 1;
    document.getElementById('AD').value = 1;
    document.getElementById('HI').value = 1;
    document.getElementById('AI').value = 1;
    document.getElementById('MD').value = 1;
    document.getElementById('TD').value = 1;
    document.getElementById('MI').value = 1;
    document.getElementById('TI').value = 1;

    corredor();
}

function dance() {

    document.getElementById('Displaydance').style.display = 'block'
    document.getElementById('Displaydance').style.visibility = 'visible'

    document.getElementById('dance').style.display = 'none'
    document.getElementById('dance').style.visibility = 'hidden'

    document.getElementById('reset').style.display = 'block'
    document.getElementById('reset').style.visibility = 'visible'
}
