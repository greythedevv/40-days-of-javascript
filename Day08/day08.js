const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);


  // =======================
// GLOBAL EXECUTION CONTEXT (GEC)
// =======================


// -------- CREATION PHASE (CP) --------

// message variable is created and assigned undefined
// sum function is created and stored in memory
// mul function is created and stored in memory
// calc function is created and stored in memory
// getResult function is created and stored in memory



// -------- EXECUTION PHASE (EP) --------

// message is assigned value "I can do it"

// getResult(8,5) is invoked → creates new FEC


// =======================
// FUNCTION EXECUTION CONTEXT (getResult)
// =======================


// -------- CREATION PHASE (CP) --------

// parameter a is created and assigned 8
// parameter b is created and assigned 5



// -------- EXECUTION PHASE (EP) --------

// calc(8,5) is invoked → creates new FEC

// =======================
// FUNCTION EXECUTION CONTEXT (calc)
// =======================


// -------- CREATION PHASE (CP) --------

// parameter a is created and assigned 8
// parameter b is created and assigned 5



// -------- EXECUTION PHASE (EP) --------

// sum(8,5) is invoked → creates new FEC

// =======================
// FUNCTION EXECUTION CONTEXT (sum)
// =======================


// -------- CREATION PHASE (CP) --------

// parameter a is created and assigned 8
// parameter b is created and assigned 5
// result variable is created and assigned undefined



// -------- EXECUTION PHASE (EP) --------

// result is assigned value 13
// function returns 13
// sum FEC is removed from call stack

// =======================
// FUNCTION EXECUTION CONTEXT (mul)
// =======================


// -------- CREATION PHASE (CP) --------

// parameter a is created and assigned 8
// parameter b is created and assigned 5
// result variable is created and assigned undefined



// -------- EXECUTION PHASE (EP) --------

// result is assigned value 40
// function returns 40
// mul FEC is removed from call stack

// =======================
// BACK TO calc EXECUTION PHASE
// =======================

// (13 + 40) / 2 is evaluated
// result = 26.5
// calc returns 26.5
// calc FEC is removed from call stack

// =======================
// BACK TO getResult EXECUTION PHASE
// =======================

// function returns 26.5
// getResult FEC is removed from call stack

// =======================
// FINAL RESULT
// =======================

// 26.5



// GEC
//  ↓
// getResult
//  ↓
// calc
//  ↓
// sum
//  ↑ removed
// mul
//  ↑ removed
// calc
//  ↑ removed
// getResult
//  ↑ removed
// GEC
