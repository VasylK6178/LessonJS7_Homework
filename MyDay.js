
function mymorning (day = '') {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (day === 'Saturday' || day === 'Sunday' || !day) {
                console.log('Wake up in the morning at 9:00');
                console.log('Have a breakfast');
                resolve('lern the lesson JS')
            } else {
                console.log('Wake up in the morning at 7:00');
                console.log('Have a breakfast');
                reject('I Go to the Work');
            }
        }, 1000)
    });

}


function mynoon (day = '') {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (day === 'Saturday' || day === 'Sunday' || !day) {
                console.log('I have a lunch at 13:00');
                console.log('To watch series on TV');
                resolve('continue lern the lesson JS')
            } else {
                console.log('I have a lunch');
                console.log('work up to 15 hours');
                reject('And Go to the Home');
            }
        }, 2000)
    });

}


function myevning (day = '') {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
        if (day === 'Saturday' || day === 'Sunday' || !day) {
            console.log('Have a dinner');
            resolve('Go to the gym at 18:00')
        } else {
            console.log('Wake up in the morning at 7:00');
            console.log('Have a breakfast');
            reject('I Go to the Work');
        }
        }, 1500)
    });

}



async function dayplan() {
    const plan = await mymorning ( 'Saturday');
    console.log(plan);

    const plan2 = await mynoon ('Saturday');
    console.log(plan2);

    const plan3 = await myevning('Saturday');
    console.log(plan3);
}


dayplan()