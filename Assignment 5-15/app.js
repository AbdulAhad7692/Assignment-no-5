//___QUESTION NO 1___//

// var student = []

//___QUESTION NO 2__//

// var object = []

//__QUESTION NO 3__//

// var array = ["Hello"]
// var array = ["1234"]
// var array = [true]
// var array = ["hello" , 1234 ,true,]

//__QUESTION NO 7__//

// var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "Ms", "M. Phil.", "PhD"]

// document.write("<h3>Qualifications : </h3>")
// document.write(Qualification[0])
// document.write("<br>")
// document.write(Qualification[1])
// document.write("<br>")
// document.write(Qualification[2])
// document.write("<br>")
// document.write(Qualification[3])
// document.write("<br>")
// document.write(Qualification[4])
// document.write("<br>")
// document.write(Qualification[5])
// document.write("<br>")
// document.write(Qualification[6])
// document.write("<br>")
// document.write(Qualification[7])
// document.write("<br>")

//__QUESTION NO 8__//

// var students = ["Ahad", "Faiq", "Shahzaib"]
// var marks = [480, 470, 465]

// document.write(
//     "score  of  " + students[0] + " is " + marks[0] + " whose percentage is " + marks[0] * 100 / 500
// )
// document.write("<br>")
// document.write(
//     "score  of  " + students[1] + " is " + marks[1] + " whose percentage is " + marks[1] * 100 / 500
// )
// document.write("<br>")
// document.write(
//     "score  of  " + students[2] + " is " + marks[2] + " whose percentage is " + marks[2] * 100 / 500
// )
// document.write("<br>")

//__QUESTION NO 9__//

// var colors = ["red ", "yellow ", "green "]
// document.write(colors)
// colors.unshift("<br>" + prompt("Enter color", "pink "))
// document.write(colors)
// colors.push(prompt("Enter color", "Purple "))
// document.write(colors + "<br />")
// colors.unshift(prompt("Enter color", "Sky "))
// colors.unshift(prompt("Enter color", "Blue "))
// document.write(colors)
// colors.shift()
// document.write("<br>" + colors)
// colors.pop()
// document.write("<br>" + colors)
// var color1 = prompt("Enter color", "Black");
// var index = prompt("Enter Index", "2")
// colors.splice(index, 0, color1)
// document.write("<br>" + colors)
// var RemoveIndex = prompt("Enter Number", "1")
// var RemoveIndex2 = prompt("Enter Number", "2")
// colors.splice(RemoveIndex + RemoveIndex2)
// document.write("<br>" + colors)

//__QUESTION NO 10__//

// var score = [320, 230, 480, 120]
// document.write("Score of Student : " + score + "<br>")
// score.sort()
// document.write( "Oredered Score of Students : " + score)

//__QUESTION NO 11__//

// var city = ["karachi ", "Lahore ", "Islamabad", "Quetta", "Peshawar "]
// document.write("<h4>Cities List : </h4>")
// document.write(city)
// var selectedcities;
// document.write("<h4>Selected Cites : </h4>")
// document.write(city[2] + "," + city[3] )

//__QUESTION NO 12__//

// var cat = ["this", "is", "my", "cat"]
// document.write(cat + "<br>")
// document.write(cat.join(" "))

//__QUESTION NO 13__//

// var order = ["Keyboard","Mouse","Printer","Monitor"]

// document.write("Devices: <br>" + order + "<br>")

// document.write("Out: <br> " + order[0] + "<br>")
// document.write("Out: <br> " + order[1] + "<br>")
// document.write("Out: <br> " + order[2] + "<br>")
// document.write("Out: <br> " + order[3] + "<br>")

//__QUESTION NO 14__//

// var order1 = ["Keyboard","Mouse","Printer","Monitor"]

// document.write("Devices: <br>" + order1+ "<br>")

// document.write("Out: <br> " + order1[3] + "<br>")
// document.write("Out: <br> " + order1[2] + "<br>")
// document.write("Out: <br> " + order1[1] + "<br>")
// document.write("Out: <br> " + order1[0] + "<br>")

//__QUESTION NO 15__//

// var mobile = ["Apple", "Samsung", "Motorola", "Huawei", "Nokia", "Sony", "Haier"]
// document.write(
// "<select class=mobile>" +
//     " <option>apple<option>" +
//     " <option>Samsung<option>" +
//     " <option>Motorola<option>" +
//     " <option>Huawei<option>" +
//     " <option>Nokia<option>" +
//     " <option>Sony<option>" +
//     " <option>Haier<option>" +
// "</select>"    
// )

//___CHAPTER 17--20___//


//___QUESTION NO 1___//

// var mutlidimensional = [[1, 2], [3, 4], [5, 6]]

//__QUESTION NO 2__//

// var multi= [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write("<h1>" + multi[0] + "</h1>")
// document.write("<h1>" + multi[1] + "</h1>")
// document.write("<h1>" + multi[2] + "</h1>")

//__QUESTION NO 3__//

// for (var i = 1; i <= 10; i++) {
//     document.write(i);
// }

//__QUESTION NO 4__//

// var number = prompt("Enter a Number : ")
// var length = prompt("Enter length of multiplication table : ")
// var result;
// document.write("Multiplication table of " + number + " length " + length + "</br>")
// for (i = 1; i <= length; i++) {
//     result = number * i
//     document.write(number + " x " + i + " = " + result + "</br>")
// }

//__QUESTION NO 5__//

// var fruits = ["apple", "mango", "banana", "strawberry", "orange"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "</br>")
// }
// for (var j = 0; j < 1; j++) {
//     for (var k = 0; k < fruits.length; k++){
//         document.write("Element at index " + k + " is " + fruits[k] + "</br>")
//     }

// }

//__QUESTION NO 6__//

// var lastvalue = +prompt("Type Last Number");
// var firstvalue = +prompt("Type First NUmber")
// document.write("Counting : ")

// for (var i = firstvalue; i <= lastvalue; i++) {
//     document.write(i + ",")
// }
// document.write("</br>" + "Reverse Counting : ")
// for (var j = LengthOfCounting; j >= StartOfCounting; j--) {
//     document.write(j + ",");
// }
// document.write("</br>" + "Even Counting : ")
// var End = prompt("Enter Ending Even Number")
// for (var k = 0; k <= End; k += 2) {
//     document.write(k + ",")
// }
// document.write("</br>" + "Odd Counting : ")
// var End = prompt("Enter Ending Odd Number")
// for (var l = 1; l <= End; l += 2) {
//     document.write(l + ",")
// }
// document.write("</br>" + "Series Counting : ")
// End=20;
// for (var m = 0; m <= End; m += 2) {
//     document.write(m + "k ,")
// }

//__QUESTION NO 7__//

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var need = prompt("Welcome to ABC backery What do you want to order Sir/MAm")
// for (var i = 0 ;i <= A.length;i++){
//     if (A[i] === need) {
//         document.write(need + ' is found at index ' + i);
//         break;
//       }
// }

//__PRACTICE__//

// var capital = prompt("Enter word You want to capitalize")
// var word = prompt("Enter Word", "ahad ahmed bolte mujhe");
// var result = word.split(" ")
// var arr = []
// for (var i = 0; i < result.length; i++) {
//     // console.log(result[i])
//     var final = result[i][0].toUpperCase() + result[i].slice(1)
//     // console.log(final)
//     arr.push(final)
// }

// console.log(arr.join(" "))



// for (var i = capital; i > capital.length ;i++){
// console.log(capital.toUpperCase)
// }

var replace = prompt("")