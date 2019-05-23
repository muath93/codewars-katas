// 0% --> 85%  (fast charge)
// (battery capacity(mAh) * 85%) / power of the charger(mA)

// 85% --> 95% (decreasing charge)
// (battery capacity(mAh) * 10%) / (power of the charger(mA) * 50%)

// 95% --> 100% (trickle charge)
// (battery capacity(mAh) * 5%) / (power of the charger(mA) * 20%)


// function calculateTime(battery, charger) {
//     const total = [85, 95, 100];

//     let hours;

//     for (let i = 0; i < total.length; i++) {

//         if (total[i] === 85) {

//              fastCharge = ((battery * 0.85) / charger);

//         } else if (total[i] === 95) {
//              decreasingCharge = ((battery * 0.10) / (charger * 0.50));

//         } else {
//              trickleCharge = ((battery * 0.05) / (charger * 0.20));

//         }
//     }
//     return hours = fastCharge + decreasingCharge + trickleCharge;
// }
function calculateTime(battery, charger) {
    const charging = [85, 95, 100];
    let hours;

    charging.forEach(number => {
        if (number === 85) {
            fastCharge = ((battery * 0.85) / charger);
        } else if (number === 95) {
            decreasingCharge = ((battery * 0.10) / (charger * 0.50));
        } else {
            trickleCharge = ((battery * 0.05) / (charger * 0.20));
        }
    })
    // return Math.round(num * 100) / 100;

    return Math.round(hours = (fastCharge + decreasingCharge + trickleCharge) * 100) / 100;
}


console.log((calculateTime(1000, 500), 2.6));
console.log((calculateTime(1000, 500)));
console.log((calculateTime(1500, 500)));
console.log((calculateTime(2000, 1000), 2.6));
console.log((calculateTime(3303, 928)));