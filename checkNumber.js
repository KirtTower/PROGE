let ComputerNumber = Math.floor(Math.random() * 10) + 1
for (x = 0; x < 3; x++) {
guess = prompt("Sisesta üks number 1-10-ni")
if (guess == ComputerNumber) {
    console.log("Yay! Arvasid õige numbri ära!")
    break
}
else if (guess == (ComputerNumber + 1) || guess == (ComputerNumber - 1))
    console.log("Ai, sa pakkusid väga lähedale." + "\n" +
               "Õige number on " + ComputerNumber + ".")
else
    console.log("Sorry, " + guess + " ei ole õige number." + "\n" +
                    "Õige number on " + ComputerNumber + ".")
}
