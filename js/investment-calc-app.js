let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
//Each of these three functions declairs and stores a value after its been validated
//by the conditons of the while loop. this way we can control the paramaters the user
//is able to input and help keep nonsense out of the outputs

//technically these three functions could probably be consolidated, but I
//am hungry and tired. oh well!

function validInvestment() {
    let investment
    let validInput = false
    while (!validInput) {
        investment = parseInt(prompt('Please enter an investment ammount'))
        if (investment !== null  && !isNaN(investment) && investment > 0) {
            validInput = true
        } else {
            alert('Invalid input. Please enter a valid investment amount.')
        }
    } 
    return investment
}

function validRate() {
    let rate
    let validInput = false
    while (!validInput) {
        rate = parseInt(prompt('Please enter desired interest rate'))
        if (rate !== null  && !isNaN(rate) && rate > 0 && rate <= 8) {
            validInput = true
        } else {
            alert('Invalid input. Please enter a valid interest rate.')
        }
    } 
    return rate
}

function validYears() {
    let years
    let validInput = false
    while (!validInput) {
        years = parseInt(prompt('Please enter years invested'))
        if (years !== null  && !isNaN(years) && years > 0 && years <= 30) {
            validInput = true
        } else {
            alert('Invalid input. Please enter years invested between 1 and 30.')
        }
    } 
    return years
}

//Store function returned values for calculations
investment = validInvestment()
rate = validRate()
years = validYears()

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);