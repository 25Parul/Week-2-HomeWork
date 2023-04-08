// 1.  Write a function called greetCustomer that will log "Welcome to the store" + the name parameter

const greetCustomer = (name) => {
    console.log(`Welcome to the store ${name}`)
}


greetCustomer("Parul")

// 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0

const logPositiveOrNegative = (num) => {
    if (num>0) {
        console.log(`${num} is an even number.`)
    } else if (num<0) {
        console.log(`${num} is an odd number.`)
    } else {
        console.log("The Number is 0.")
    }   
}

logPositiveOrNegative(0)
logPositiveOrNegative(-98)
logPositiveOrNegative(76543)

// 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"

const returnIsPositive =(num) => {
    if (num>0) {
        return true
    } else {
        return false
    }
}

console.log(returnIsPositive(5))
console.log(returnIsPositive(-5))

// 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters

const returnIsTooShort = (password) => {
    if (password.length <8 ) {
        return true
    }
}

console.log(returnIsTooShort("dot"))

// 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"

const returnIsBreakingLaw =(age, drink) => {
    if (age<21 && drink == "alcohol") {
        return true
    }
}

console.log(returnIsBreakingLaw(18, "alcohol"))


//6. Make a variable called count. Write a function called addToCount that will add the number parameter to the count variable. Call addToCount 4 times with different numbers


let count=0;
const addToCount =(number) => {
    count += number;
    
}

addToCount(8)
addToCount(245)
addToCount(100)
addToCount(2)


console.log(count)

// 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true

const returnIsChase =(name) => {
    if (name.toLowerCase() === "chase") {
        return true
    } else if (name.toUpperCase() === "CHASE") {
        return true
    } else if (name === "Chase") {
        return true
    } else {
        return false
    }
}

console.log(returnIsChase("Chase"))
console.log(returnIsChase("chase"))
console.log(returnIsChase("CHASE"))
console.log(returnIsChase("john"))

// Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
//Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students

const class1 =["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]

const returnClassIsTooSmall =(NoOfStudents) => {
    if (NoOfStudents.length < 10) {
        return true
    } else {
        return false
    }
}

console.log(returnClassIsTooSmall(class1))

// 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined
// call this function 3 times with 6 strings.

let combineStrings= ""

const combineStringsFunc = (stringOne, stringTwo) => {
    combineStrings= stringOne + stringTwo;
    
}

combineStringsFunc("I love", " Travelling")

console.log(combineStrings)

// 10. Write a function called returnDataType that will return the datatype of the data parameter

const returnDataType = (data) => {
    return typeof(data)
}

console.log(returnDataType("Hello"))
console.log(returnDataType(5))
console.log(returnDataType(true))
console.log(returnDataType(""))
console.log(returnDataType(["Hi"]))
console.log(returnDataType())


// 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8
// Call this function 2 times

const addStudentToClass = (students) => {
    class1.push(students)

}

addStudentToClass("Sandy")
addStudentToClass("Alex")

console.log(class1)


// 12. VERY OPTIONAL - Make a variable called extraStudents. This should be an array with about 10 string names. 

//Write a function called fillClass that will loop until the class array has >= 15 students. Every loop one student should be put into the class array and taken out of the extraStudents array


const extraStudents = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Evelyn", "Harper"];

const fillClass = () => {
    while(class1.length < 15) {
        var student = extraStudents.shift()
        class1.push(student)
        console.log(class1)
        console.log(extraStudents)
        console.log(class1.length)
        console.log(extraStudents.length)
    }
}

fillClass()