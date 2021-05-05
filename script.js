var submit = document.getElementById("submit");
var calculate = document.getElementById("calculate");
var tableSize = 0;
submit.onclick = function() {
  var semester = document.getElementById("sem").value;
  var department = document.getElementById("dept").value;
  var data = department + semester;
  console.log(data);
  //CSE
  if(data == "cse1"){
    var url = "http://localhost:3004/cse1";
  }if(data == "cse2"){
    var url = "http://localhost:3004/cse2";
  }if(data == "cse3"){
    var url = "http://localhost:3004/cse3";
  }if(data == "cse4"){
    var url = "http://localhost:3004/cse4";
  }if(data == "cse5"){
    var url = "http://localhost:3004/cse5";
  }if(data == "cse6"){
    var url = "http://localhost:3004/cse6";
  }if(data == "cse7"){
    var url = "http://localhost:3004/cse7";
  }if(data == "cse8"){
    var url = "http://localhost:3004/cse8";
  }
  //ECE
  if(data == "ece1"){
    var url = "http://localhost:3004/ece1";
  }if(data == "ece2"){
    var url = "http://localhost:3004/ece2";
  }if(data == "ece3"){
    var url = "http://localhost:3004/ece3";
  }if(data == "ece4"){
    var url = "http://localhost:3004/ece4";
  }if(data == "ece5"){
    var url = "http://localhost:3004/ece5";
  }if(data == "ece6"){
    var url = "http://localhost:3004/ece6";
  }if(data == "ece7"){
    var url = "http://localhost:3004/ece7";
  }if(data == "ece8"){
    var url = "http://localhost:3004/ece8";
  }
  //CIVIL
  if(data == "civil1"){
    var url = "http://localhost:3004/civil1";
  }if(data == "civil2"){
    var url = "http://localhost:3004/civil2";
  }if(data == "civil3"){
    var url = "http://localhost:3004/civil3";
  }if(data == "civil4"){
    var url = "http://localhost:3004/civil4";
  }if(data == "civil5"){
    var url = "http://localhost:3004/civil5";
  }if(data == "civil6"){
    var url = "http://localhost:3004/civil6";
  }if(data == "civil7"){
    var url = "http://localhost:3004/civil7";
  }if(data == "civil8"){
    var url = "http://localhost:3004/civil8";
  }
  //EEE 
  if(data == "eee1"){
    var url = "http://localhost:3004/eee1";
  }if(data == "eee2"){
    var url = "http://localhost:3004/eee2";
  }if(data == "eee3"){
    var url = "http://localhost:3004/eee3";
  }if(data == "eee4"){
    var url = "http://localhost:3004/eee4";
  }if(data == "eee5"){
    var url = "http://localhost:3004/eee5";
  }if(data == "eee6"){
    var url = "http://localhost:3004/eee6";
  }if(data == "eee7"){
    var url = "http://localhost:3004/eee7";
  }if(data == "eee8"){
    var url = "http://localhost:3004/eee8";
  }
  //IT
  if(data == "it1"){
    var url = "http://localhost:3004/it1";
  }if(data == "it2"){
    var url = "http://localhost:3004/it2";
  }if(data == "it3"){
    var url = "http://localhost:3004/it3";
  }if(data == "it4"){
    var url = "http://localhost:3004/it4";
  }if(data == "it5"){
    var url = "http://localhost:3004/it5";
  }if(data == "it6"){
    var url = "http://localhost:3004/it6";
  }if(data == "it7"){
    var url = "http://localhost:3004/it7";
  }if(data == "it8"){
    var url = "http://localhost:3004/it8";
  }
  //MECH
  if(data == "mech1"){
    var url = "http://localhost:3004/mech1";
  }if(data == "mech2"){
    var url = "http://localhost:3004/mech2";
  }if(data == "mech3"){
    var url = "http://localhost:3004/mech3";
  }if(data == "mech4"){
    var url = "http://localhost:3004/mech4";
  }if(data == "mech5"){
    var url = "http://localhost:3004/mech5";
  }if(data == "mech6"){
    var url = "http://localhost:3004/mech6";
  }if(data == "mech7"){
    var url = "http://localhost:3004/mech7";
  }if(data == "mech8"){
    var url = "http://localhost:3004/mech8";
  }
  //AERO
  if(data == "aero1"){
    var url = "http://localhost:3004/aero1";
  }if(data == "aero2"){
    var url = "http://localhost:3004/aero2";
  }if(data == "aero3"){
    var url = "http://localhost:3004/aero3";
  }if(data == "aero4"){
    var url = "http://localhost:3004/aero4";
  }if(data == "aero5"){
    var url = "http://localhost:3004/aero5";
  }if(data == "aero6"){
    var url = "http://localhost:3004/aero6";
  }if(data == "aero7"){
    var url = "http://localhost:3004/aero7";
  }if(data == "aero8"){
    var url = "http://localhost:3004/aero8";
  }
  //BME
  if(data == "bme1"){
    var url = "http://localhost:3004/bme1";
  }if(data == "bme2"){
    var url = "http://localhost:3004/bme2";
  }if(data == "bme3"){
    var url = "http://localhost:3004/bme3";
  }if(data == "bme4"){
    var url = "http://localhost:3004/bme4";
  }if(data == "bme5"){
    var url = "http://localhost:3004/bme5";
  }if(data == "bme6"){
    var url = "http://localhost:3004/bme6";
  }if(data == "bme7"){
    var url = "http://localhost:3004/bme7";
  }if(data == "bme8"){
    var url = "http://localhost:3004/bme8";
  }
  //AUTO
  if(data == "auto1"){
    var url = "http://localhost:3004/auto1";
  }if(data == "auto2"){
    var url = "http://localhost:3004/auto2";
  }if(data == "auto3"){
    var url = "http://localhost:3004/auto3";
  }if(data == "auto4"){
    var url = "http://localhost:3004/auto4";
  }if(data == "auto5"){
    var url = "http://localhost:3004/auto5";
  }if(data == "auto6"){
    var url = "http://localhost:3004/auto6";
  }if(data == "auto7"){
    var url = "http://localhost:3004/auto7";
  }if(data == "auto8"){
    var url = "http://localhost:3004/auto8";
  }

  const doGet = () => { 
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        insert(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  };
  doGet(() => {
    console.log("Data Successfully Readed");
  });
  const insert = (data) => {
    var cgpaDetails = document.getElementById("grid-value");
    cgpaDetails.innerHTML = "";
    tableSize = 0;
    data.forEach((data) => {      
      let subject = document.createElement("div");
      let credit = document.createElement("div");
      var sem = ["O","A+","A","B+","B","F"];
      //Create and append select list
      var selectList = document.createElement("select");
      selectList.setAttribute("id", "mySelect");
      cgpaDetails.appendChild(selectList);
      
      //Create and append the options
      for (var i = 0; i < sem.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", sem[i]);
        option.text = sem[i];
        selectList.appendChild(option);
      }
      credit.classList.add("creditCalc");
      selectList.classList.add("grade");
      subject.innerHTML = data.subject;
      credit.innerHTML = data.credit;
      cgpaDetails.appendChild(subject);
      cgpaDetails.appendChild(credit);
      cgpaDetails.appendChild(selectList);
      tableSize++;
    });
  };
  document.getElementById("gridvalue").style.visibility = "visible";
  document.getElementsByClassName("footer")[0].style.visibility = "visible";
  document.getElementById("calculate").style.visibility = "visible";
}
calculate.onclick = function() {
  var sum = 0;
  var cred = 0;
  for (var i = 0; i < tableSize; i++) {
    var grade = document.getElementsByClassName("grade")[i].value;
    var credit1 = document.getElementsByClassName("creditCalc")[i].textContent;
    cred += parseInt(credit1);
    if(grade == "O") {
      var O = 10 * credit1;
      sum += O;
    }if(grade == "A+") {
      var Aplus = 9 * credit1;
      sum += Aplus;
    }if(grade == "A") {
      var A = 8 * credit1;
      sum += A;
    }if(grade == "B+") {
      var Bplus = 7 * credit1;
      sum += Bplus;
    }if(grade == "B") {
      var B = 6 * credit1;
      sum += B;
    }if(grade == "F") {
      var F = 0 * credit1;
      sum += F;
    }
  }
  document.getElementById("gpaValue").innerHTML = sum / cred;
  console.log(sum / cred);
}