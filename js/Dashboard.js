var gesMangel = 0 ;
var gesStatus = {};
var gesMnType = {} ;
var monthlyCounts = {};
var monthlyCountsStatus = {};
var monthlyCountsMangeltyp = {};
var quarterlyCounts = {};
var yearlyCounts = {};
var combinedCounts = {} ;
var combinedCounts2 = {} ;
var combinedCounts3 = {} ;
var combinedCounts4 = {} ;
var combinedCounts5 = {} ;
var combinedCounts6 = {} ;
var combinedCounts7 = {} ;
var jahrErledigt = {} ;
var jahrinBearbeitung = {} ;
var jahrErhoben = {} ;
var jahrTechnischFertig = {} ;
var erlMnType = {} ;
var erhMnType = {} ;
var inBMnType = {} ;
var tecMnType = {} ;
const streetSummary = {};
var fahMnType = {} ;
var datumList = [];
var allErledigt =[];
var allErhoben =[];
var allinBearbeitung =[];
var allTechnischFertig =[];
var dateStatus =[];
var erlFah={};
var erhFah={};
var inBeaFah={};
var erlGeh={};
var erhGeh={};
var inBeaGeh={};
var erlVer={};
var erhVer={};
var inBeaVer={};
var erlEnt={};
var erhEnt={};
var inBeaEnt={};
var erlGraben={};
var erhGraben={};
var inBeaGraben={};
var erlMobiliar={};
var erhMobiliar={};
var inBeaMobiliar={};
var erlUeberfahrten={};
var erhUeberfahrten={};
var inBeaUeberfahrten={};
var erlSchieber={};
var erhSchieber={};
var inBeaSchieber={};
var erlSonstiges={};
var erhSonstiges={};
var inBeaSonstiges={};
var erlMauer={};
var erhMauer={};
var inBeaMauer={};
var erlParkstreifen={};
var erhParkstreifen={};
var inBeaParkstreifen={};
var erlSondernutzung={};
var erhSondernutzung={};
var inBeaSondernutzung={};
let minDate = null;
let maxDate = null;
Chart.register(ChartDataLabels);
function getQuarter(month) {
    if (month >= 1 && month <= 3) return "Q1";
    if (month >= 4 && month <= 6) return "Q2";
    if (month >= 7 && month <= 9) return "Q3";
    if (month >= 10 && month <= 12) return "Q4";
    return null;
}
json_mangel_all.features.forEach(function (feature) {
  gesMangel++;
  const Datum = feature.properties.Festgestellt_am;
  datumList.push(Datum);  
  const Status = feature.properties.Status;
  gesStatus[Status] = (gesStatus[Status] || 0) + 1;
  const Mangeltyp__I_ = feature.properties.Mangeltyp__I_;
  gesMnType[Mangeltyp__I_] = (gesMnType[Mangeltyp__I_] || 0) + 1;
  const key = `${Status}-${Mangeltyp__I_}`;
  combinedCounts[key] = (combinedCounts[key] || 0) + 1;
  const key4 = `${Status}-${Mangeltyp__I_}-${Datum}`;
  combinedCounts4[key4] = (combinedCounts4[key4] || 0) + 1;
  const Mangelart__II_ = feature.properties.Mangelart__II_;
  const key5 = `${Mangeltyp__I_}-${Mangelart__II_}`;
  combinedCounts5[key5] = (combinedCounts5[key5] || 0) + 1;  
  const key6 = `${Status}-${Mangeltyp__I_}-${Mangelart__II_}`;
  combinedCounts6[key6] = (combinedCounts6[key6] || 0) + 1;
  const key7 = `${Mangeltyp__I_}-${Mangelart__II_}`;
  combinedCounts7[key7] = (combinedCounts7[key7] || 0) + 1;
  const dateStr = feature.properties.Festgestellt_am;
  const [day, month, year] = dateStr.split('.').map(Number); 
  const currentDate = new Date(year, month - 1, day); 
  dateStatus[day, month, year]= currentDate;
  //  "Month-Year"
  const monthKey = `${month}-${year}`;
  monthlyCounts[monthKey] = (monthlyCounts[monthKey] || 0) + 1;
//  "Month-Year-Status"
  const monthKeyStatus = `${month}-${year}-${Status}`;
  monthlyCountsStatus[monthKeyStatus] = (monthlyCountsStatus[monthKeyStatus] || 0) + 1;
  //  "Month-Year-Mangeltyp__I_"
  const monthKeyMangeltyp = `${month}-${year}-${Mangeltyp__I_}`;
  monthlyCountsMangeltyp[monthKeyMangeltyp] = (monthlyCountsMangeltyp[monthKeyMangeltyp] || 0) + 1;
  //  "Quarter-Year"
  const quarterKey = `${getQuarter(month)}-${year}`;
  quarterlyCounts[quarterKey] = (quarterlyCounts[quarterKey] || 0) + 1; 
  //  "Year"
  const key2 = `${year}-${Status}`;
  const keyErl = `${year}-${Status}`;
  yearlyCounts[year] = (yearlyCounts[year] || 0) + 1;
  combinedCounts2[key2]=(combinedCounts2[key2] || 0) + 1;
  combinedCounts3[keyErl] = (combinedCounts3[keyErl] || 0) + 1; 
  for (const key in combinedCounts3){
	 if (key.includes("Erledigt")){
		 jahrErledigt[key]=combinedCounts3[key];
	 }
  };
  for (const key in combinedCounts3){
	 if (key.includes("in Bearbeitung")){
		 jahrinBearbeitung[key]=combinedCounts3[key];
	 }
  };
  for (const key in combinedCounts3){
	 if (key.includes("Erhoben")){
		 jahrErhoben[key]=combinedCounts3[key];
	 }
  };
  for (const key in combinedCounts5){
	 if (key.includes("Fahrbahn")){
		 fahMnType[key]=combinedCounts5[key];
	 }
  };
  for (const key in combinedCounts3){
	 if (key.includes("Technisch Fertig")){
		 jahrTechnischFertig[key]=combinedCounts3[key];
	 }
  };
//________Fahrbahn  
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Fahrbahn")){
		 erlFah[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Fahrbahn")){
		 inBeaFah[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Fahrbahn")){
		 erhFah[key]=combinedCounts6[key];
	 }
  };
  //________Geh Weg
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Geh - Radweg")){
		 erlGeh[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Geh - Radweg")){
		 inBeaGeh[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Geh - Radweg")){
		 erhGeh[key]=combinedCounts6[key];
	 }
  };
  //________Verkehrsregelung
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Verkehrsregelung")){
		 erlVer[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Verkehrsregelung")){
		 inBeaVer[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Verkehrsregelung")){
		 erhVer[key]=combinedCounts6[key];
	 }
  };
  //________Entwässerung
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Entwässerung")){
		 erlEnt[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Entwässerung")){
		 inBeaEnt[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Entwässerung")){
		 erhEnt[key]=combinedCounts6[key];
	 }
  };
  //________Gräben
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Gräben")){
		 erlGraben[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Gräben")){
		 inBeaGraben[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Gräben")){
		 erhGraben[key]=combinedCounts6[key];
	 }
  }; 
  //________Mobiliar
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Mobiliar")){
		 erlMobiliar[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Mobiliar")){
		 inBeaMobiliar[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Mobiliar")){
		 erhMobiliar[key]=combinedCounts6[key];
	 }
  }; 
 //________Überfahrten
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Überfahrten")){
		 erlUeberfahrten[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Überfahrten")){
		 inBeaUeberfahrten[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Überfahrten")){
		 erhUeberfahrten[key]=combinedCounts6[key];
	 }
  }; 
//________Schieber
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Schieber AZK (Abzweigkasten)")){
		 erlSchieber[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Schieber AZK (Abzweigkasten)")){
		 inBeaSchieber[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Schieber AZK (Abzweigkasten)")){
		 erhSchieber[key]=combinedCounts6[key];
	 }
  }; 
//________Sonstiges
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Sonstiges")){
		 erlSonstiges[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Sonstiges")){
		 inBeaSonstiges[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Sonstiges")){
		 erhSonstiges[key]=combinedCounts6[key];
	 }
  }; 
//________Mauer
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Mauer")){
		 erlMauer[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Mauer")){
		 inBeaMauer[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Mauer")){
		 erhMauer[key]=combinedCounts6[key];
	 }
  };  
//________Parkstreifen
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Parkstreifen")){
		 erlParkstreifen[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Parkstreifen")){
		 inBeaParkstreifen[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Parkstreifen")){
		 erhParkstreifen[key]=combinedCounts6[key];
	 }
  };  
//________Sondernutzung
  for (const key in combinedCounts6){
	 if (key.includes("Erledigt-Sondernutzung")){
		 erlSondernutzung[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("in Bearbeitung-Sondernutzung")){
		 inBeaSondernutzung[key]=combinedCounts6[key];
	 }
  };
  for (const key in combinedCounts6){
	 if (key.includes("Erhoben-Sondernutzung")){
		 erhSondernutzung[key]=combinedCounts6[key];
	 }
  };    
  //======================================================== 
    allErledigt = Object.values(jahrErledigt);
    allinBearbeitung = Object.values(jahrinBearbeitung);
	allErhoben = Object.values(jahrErhoben);
	allTechnischFertig = Object.values(jahrTechnischFertig); 
//:::::::::::::::::::::: Table Straßenabschnitt
  const street = feature.properties.Straßenabschnitt || "Unknown";
  const mangelType1 = feature.properties.Mangeltyp__I_ || "Unknown";
  const status1 = feature.properties.Status || "Unknown";
  const date = feature.properties.Festgestellt_am; 
  if (!minDate || currentDate < minDate) minDate = currentDate;
  if (!maxDate || currentDate > maxDate) maxDate = currentDate;
  // street
  if (!streetSummary[street]) {
    streetSummary[street] =  { total: 0, details: {}, dates: []  };
  }
  // mangelType
  if (!streetSummary[street].details[mangelType1]) {
    streetSummary[street].details[mangelType1] = {};
  }
  // status
  if (!streetSummary[street].details[mangelType1][status1]) {
    streetSummary[street].details[mangelType1][status1] = { count: 0, dates: [] };
  }
  // count++ 
      streetSummary[street].details[mangelType1][status1].count++;
      streetSummary[street].details[mangelType1][status1].dates.push(date);
      streetSummary[street].dates.push(date);
      streetSummary[street].total++;
});
// processData
function processData(combinedCounts4) {
  const result = {}; 
  for (const key in combinedCounts4) {
    const value = combinedCounts4[key]; // value
    const [typeWithDate, points] = key.split("-"); // date , status
    const date = key.substring(key.lastIndexOf("-") + 1); // date
    const type = key.replace(`-${date}`, ""); // Z.B. "Erhoben-Entwässerung")
    // result
    if (!result[type]) {
      result[type] = { total: 0, dates: [] };
    }
    // result[type]
    result[type].total += value;
    result[type].dates.push(date);
  }
  // dates sort
  for (const type in result) {
    result[type].dates.sort((a, b) => {
      const dateA = new Date(a.split(".").reverse().join("-"));
      const dateB = new Date(b.split(".").reverse().join("-"));
      return dateA - dateB;
    });
    result[type].startDate = result[type].dates[0];
    result[type].endDate = result[type].dates[result[type].dates.length - 1];
  }
  return result;
}
  const output = processData(combinedCounts4);
  const staEnd = Object.values(output).map(entry => [entry.startDate, entry.endDate]);
//_________________TABEL_____________________Erste
	let Mangel_=gesMangel;
	let Erhoben=gesStatus["Erhoben"];
	let Erledigt=gesStatus["Erledigt"];
	let inBearbeitung=gesStatus["in Bearbeitung"];
	let TechnischFertig=gesStatus["Technisch Fertig"];
	//______________________________________combinedCounts
    const obj2 = combinedCounts;
	const headerRow = document.getElementById('header-row-ST');
	const dataRow = document.getElementById('data-row');
// Add th
for (const key in obj2) {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
}
// Add td and color
for (const key in obj2) {
    const td = document.createElement('td');
    td.textContent = obj2[key];
    // color with Status
    let text = obj2[key].toString().trim(); // to Text , remove space
    if (text.startsWith("Erledigt")) {
        td.classList.add("green");
    } else if (text.startsWith("Erhoben")) {
        td.classList.add("red");
    } else if (text.startsWith("in Bearbeitung")) {
        td.classList.add("blue");
    } else if (text.startsWith("Technisch Fertig")) {
        td.classList.add("yellow");
    }
    dataRow.appendChild(td);
}
//______________________________________monthlyCounts
        const obj3 = monthlyCounts;
        const headerRow3 = document.getElementById('header-row3');
        const dataRow3 = document.getElementById('data-row3');
        // Add headers
        for (const key in obj3) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow3.appendChild(th);
        }
        // Add data
        for (const key in obj3) {
            const td = document.createElement('td');
            td.textContent = obj3[key];
            dataRow3.appendChild(td);
        }
//_______________________________________quarterlyCounts
    const obj5 = quarterlyCounts;
        const headerRow5 = document.getElementById('header-row5');
        const dataRow5 = document.getElementById('data-row5');
        // Add headers
        for (const key in obj5) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow5.appendChild(th);
        }
        // Add data
        for (const key in obj5) {
            const td = document.createElement('td');
            td.textContent = obj5[key];
            dataRow5.appendChild(td);
        };
//_______________________________________yearlyCounts
    const obj4 = yearlyCounts;
        const headerRow4 = document.getElementById('header-row4');
        const dataRow4 = document.getElementById('data-row4');
        // Add headers
        for (const key in obj4) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow4.appendChild(th);
        }
        // Add data
        for (const key in obj4) {
            const td = document.createElement('td');
            td.textContent = obj4[key];
            dataRow4.appendChild(td);
        };	
//________________________
$(document).ready(function(){
	$('#data-table').DataTable({
        "pageLength": 10, // 
        "lengthMenu": [ [10,20, 50, 100,120, -1], [10, 20, 50, 100, 120, "Alle"] ],
        "language": {
            "paginate": {
                "next": " > ",
                "previous": " < "
            },
            "lengthMenu": " _MENU_ "
        },
		"order":[[1,"asc"]]
    });
});
    let mangel = gesMangel;
//____________________________MANGEL Table id=data-table	
    const sortedStreets = Object.keys(streetSummary).sort();
    const tableBody = document.querySelector("#data-table tbody");
    let streetIndex = 0;
    sortedStreets.forEach(street => {
    streetIndex++;
    const totalPoints = streetSummary[street].total;
  // Date Sort street
    const streetDates = streetSummary[street].dates
    .map(date => date.split(".").reverse().join("-")) // to YYYY-MM-DD
    .sort((a, b) => new Date(a) - new Date(b))        // Date Sort
    .map(date => date.split("-").reverse().join(".")); // to DD.MM.YYYY
    const oldestDate = streetDates[0];
    const newestDate = streetDates[streetDates.length - 1];
    let isFirstRowForStreet = true;
    for (const mangelType in streetSummary[street].details) {
    let isFirstRowForType = true;
    for (const status in streetSummary[street].details[mangelType]) {
    const count = streetSummary[street].details[mangelType][status].count;
      // Date Sort
      const statusDates = streetSummary[street].details[mangelType][status].dates
        .map(date => date.split(".").reverse().join("-")) // to YYYY-MM-DD
        .sort((a, b) => new Date(a) - new Date(b))        // Date Sort
        .map(date => date.split("-").reverse().join(".")); // to DD.MM.YYYY
        const row = document.createElement("tr");
      //  index street 
      const indexCell = document.createElement("td");
      indexCell.textContent = isFirstRowForStreet ? streetIndex : "";
      indexCell.style.textAlign = "center";
      row.appendChild(indexCell);
      // street
      const streetCell = document.createElement("td");
      streetCell.textContent = isFirstRowForStreet ? street : street;
      streetCell.style.fontWeight = isFirstRowForStreet ? "bold" : "normal";
      streetCell.style.color = isFirstRowForStreet ? "black" : "rgb(116,124,118)";
      row.appendChild(streetCell);
      // type
      const typeCell = document.createElement("td");
      typeCell.textContent = isFirstRowForType ? mangelType : mangelType;
      row.appendChild(typeCell);
      //  status
      const statusCell = document.createElement("td");
      statusCell.textContent = status;
      statusCell.className = `status-${status.toLowerCase().replace(/ /g, "-")}`;
      row.appendChild(statusCell);
      // Number
      const countCell = document.createElement("td");
      countCell.textContent = count;
      countCell.style.textAlign = "center";
      row.appendChild(countCell);
      // oldestDate
      const oldestDateCell = document.createElement("td");
      oldestDateCell.textContent = statusDates[0];
      row.appendChild(oldestDateCell);
      // newestDate
      const newestDateCell = document.createElement("td");
      newestDateCell.textContent = statusDates[statusDates.length - 1];
      row.appendChild(newestDateCell);
      // total points
      const totalCell = document.createElement("td");
      totalCell.textContent = isFirstRowForStreet ? totalPoints : "";
      totalCell.style.fontWeight = "bold";
      totalCell.style.textAlign = "center";
      row.appendChild(totalCell);
      tableBody.appendChild(row);
      isFirstRowForStreet = false;
      isFirstRowForType = false;
    }
  }
}); 
	 // table default
    const tableData = [
      { Mangel:gesMangel, Erledigt: Erledigt,inBearbeitung: inBearbeitung, Erhoben: Erhoben, TechnischFertig:TechnischFertig, Vom: datumList[0], Bis: datumList[datumList.length - 1]}
    ];
	    // slider
    const slider = document.getElementById("dateSlider");
    const selectedDateElement = document.getElementById("selectedDate");	
    // table
    const tableBody1 = document.getElementById("table-body");
    // slider max
    slider.max = datumList.length - 1; // slider max
    slider.value = 0; // default value
    //  Date to Object
    const dates2 = json_mangel_all.features.map(item => {
    const dateParts = item.properties.Festgestellt_am.split('.');
    return new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
});
// (Max) Date (Min)
const minDate2 = new Date(Math.min(...dates2));
const maxDate2 = new Date(Math.max(...dates2));
// Setting Slider
dateSlider.min = minDate2.getTime();
dateSlider.max = maxDate2.getTime();
dateSlider.value = minDate2.getTime();
// Datum Style 13.02.2025
selectedDate.textContent = minDate2.toLocaleDateString("de-DE"); // deutsch Style
// Filter with Date
function filterDataByDate(selectedDate) {
	tableBody1.innerHTML = ""; // table löschen
      tableData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${browserData[0].marketshare+browserData[1].marketshare+browserData[2].marketshare+browserData[3].marketshare}</td>
          <td>${browserData[0].marketshare}</td>
          <td>${browserData[1].marketshare}</td>
          <td>${browserData[2].marketshare}</td>
          <td>${browserData[3].marketshare}</td>		  
          <td>${selectedDate.toLocaleDateString("de-DE")}</td>
		  <td>${item.Bis}</td>
        `;
        tableBody1.appendChild(row);
      });
    return json_mangel_all.features.filter(item => {
        const dateParts = item.properties.Festgestellt_am.split('.');
        const itemDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
        return itemDate >= selectedDate && itemDate <= maxDate2;
    });
}
	// slider change
    slider.addEventListener("input", () => {
      const selectedIndex = slider.value; 
      const selectedDate = datumList[selectedIndex]; 
      selectedDateElement.textContent = selectedDate; // date update
      updateTable(selectedDate); // table update
    });
    updateTable(datumList[0]);
//___________________________	
    function updateTable(selectedDate) {
      tableBody1.innerHTML = ""; // table löschen
      tableData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.Mangel}</td>
          <td>${item.Erledigt}</td>
          <td>${item.inBearbeitung}</td>
          <td>${item.Erhoben}</td>
          <td>${item.TechnischFertig}</td>		  
          <td>${selectedDate}</td>
		  <td>${item.Bis}</td>
        `;
        tableBody1.appendChild(row);
      });
    }
	//---------- Arrow
	const values = Object.values(quarterlyCounts);
    const Arrow = values.slice(0,-1).map((value, index) =>
	[value,values[index+1]]);	
    //______CHART 1_____Mangel Status_______   	
    const formatData = (status) => 
    Object.entries(combinedCounts)
    .filter(([key]) => key.startsWith(`${status}-`))
    .map(([key, value]) => ({
      version: key.replace(`${status}-`, ""),
      users: value
    }));
    const erlMnArray = formatData("Erledigt");
    const erhMnArray = formatData("Erhoben");
    const inBMnArray = formatData("in Bearbeitung");
    const tecMnArray = formatData("Technisch Fertig");
    const coordinates = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }               
    const browserData = [
      { 
        browser: 'Erledigt', 
        color:  '#4caf50',
        users: 30,
        marketshare: Object.values(gesStatus)[0],
        versionData: erlMnArray,
      },
      { 
        browser: 'in Bearbeitung',
        color: '#2196f3',
        users: 30,
        marketshare: Object.values(gesStatus)[1],
        versionData: inBMnArray,
      },    
      { 
        browser: 'Erhoben', 
        color: '#f44336',
        users: 30,
        marketshare: Object.values(gesStatus)[2],
        versionData: erhMnArray,
      },    
      { 
        browser: 'Technisch Fertig', 
        color: '#fcfa03',
        users: 30,
        marketshare: Object.values(gesStatus)[3],
        versionData: tecMnArray,
      }  	  
    ];
    // data block
    const data1 = {
      datasets: [{
        label: ' Status',
        data: browserData.map(entry => entry.marketshare),
        backgroundColor: browserData.map(entry => entry.color),
        borderColor: browserData.map(entry => entry.color),
        borderWidth: 1,
		borderRadius:20
      }]
    };
    // resetButton block
    const resetButton = {
      id: 'resetButton',
      beforeDraw(chart, args, options){
        if(chart.data.datasets[0].label !== ' Status'){
          const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
          ctx.save();
          const text = 'zurück';
          const thickBorder = 1;
          const textWidth = ctx.measureText(text).width
          const padding = 10;
          const paddingright = padding / 2;
          // background 
          ctx.fillStyle = 'rgba(175, 192, 192, 0.2)';
          ctx.fillRect(right - (textWidth + 2 + padding), 5, textWidth + padding, 20)
          // text 
          ctx.fillStyle = 'black';
          ctx.font = '12px Arial';
          ctx.fillText(text, right - (textWidth + 2 + paddingright), 15);
          // border button
          ctx.lineWidth = thickBorder;
          ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
          ctx.strokeRect(right - (textWidth + 2 + padding), 5, textWidth + padding, 20);
          coordinates.top = 5 - thickBorder;
          coordinates.bottom = 5 + 20 + thickBorder;
          coordinates.left = right - (textWidth + 2 + padding);
          coordinates.right = right;
          ctx.restore();
        };
      }
    };
    // config block
    const config1 = {
      type: 'bar',
      data: data1,
      options: {
		  plugins:{
		  datalabels: {
			 anchor: 'end',
                        align: 'top',
                        formatter: (value) => value,
                        font: {
                            weight: 'bold'
                        } 
		  }},
        onHover: (event, chartElement) => {
          if(myChart.config.data.datasets[0].label === ' Status'){
            event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
          } else {
            event.native.target.style.cursor = 'default';
          }
        },
        parsing: {
          xAxisKey: 'browser',
          yAxisKey: 'marketshare',
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [resetButton, ChartDataLabels]
    };
    // init render block
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(
      ctx,
      config1
    );
    function changeChart(browser){
      myChart.config.options.parsing.xAxisKey = 'versionData.version';
      myChart.config.options.parsing.yAxisKey = 'versionData.users';
      const vColor = [];
      const vUsers = [];
      const vLabel = browserData[browser].versionData.map(labels => {
        vUsers.push(labels.users);
        vColor.push(browserData[browser].color);
        return labels.version;
      });
      myChart.config.data.labels = vLabel;
      myChart.config.data.datasets[0].label = browserData[browser].browser;
      myChart.config.data.datasets[0].data = vUsers;
      myChart.config.data.datasets[0].backgroundColor = vColor;
      myChart.config.data.datasets[0].borderColor = vColor;
      myChart.update();
    };
    function clickHandler(click){
      if(myChart.config.data.datasets[0].label === ' Status'){
        const bar = myChart.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
        if(bar[0]){
          changeChart(bar[0].index);
        }
      }
    };
    ctx.onclick = clickHandler;
    function resetChart(){
      myChart.config.options.parsing.xAxisKey = 'browser';
      myChart.config.options.parsing.yAxisKey = 'marketshare';
      const bColor = [];
      const bMarketshare = [];
      const bLabel = browserData.map(browser => {
        bMarketshare.push(browser.marketshare);
        bColor.push(browser.color);
        return browser.browser;
      });
      myChart.config.data.labels = bLabel;
      myChart.config.data.datasets[0].label = ' Status';
      myChart.config.data.datasets[0].data = bMarketshare;
      myChart.config.data.datasets[0].backgroundColor = bColor;
      myChart.config.data.datasets[0].borderColor = bColor;
      myChart.update();
    };
    function mousemoveHandler(canvas, mousemove){
      const x = mousemove.offsetX;
      const y = mousemove.offsetY;
      if(myChart.config.data.datasets[0].label !== ' Status'){
        if(x > coordinates.left && x < coordinates.right && y > coordinates.top && y < coordinates.bottom) {
          canvas.style.cursor = 'pointer';
        } else {
          canvas.style.cursor = 'default';
        }
      }
    };
    function clickButtonHandler(canvas, click){
      const x = click.offsetX;
      const y = click.offsetY;
      if(myChart.config.data.datasets[0].label !== ' Status'){
        if(x > coordinates.left && x < coordinates.right && y > coordinates.top && y < coordinates.bottom) {
          resetChart();
        }
      }
    };
    ctx.addEventListener('mousemove', (e) => {
      myChart.resize();
      mousemoveHandler(ctx, e);
    });
    ctx.addEventListener('click', (e) => {
      myChart.resize();
      clickButtonHandler(ctx, e);
    });
 //=========================================================12.02.2025  
function updateCharts() {
    const selectedTimestamp = parseInt(dateSlider.value, 10);
    if (!isNaN(selectedTimestamp)) {
        const selectedDate = new Date(selectedTimestamp);
        // filteredData
        const filteredData = filterDataByDate(selectedDate);
        // value für (Erledigt, in Bearbeitung, ... etc)
        const updatedCounts = {
            Erledigt: 0,
            "in Bearbeitung": 0,
            Erhoben: 0,
            "Technisch Fertig": 0
        };
        filteredData.forEach(item => {
            const status = item.properties.Status; // Status name
            if (updatedCounts.hasOwnProperty(status)) {
                updatedCounts[status]++;
            }
        });
        // update value in  1 Chart
        browserData.forEach((entry, index) => {
            entry.marketshare = updatedCounts[entry.browser] || 0;
        });
        // myChart update
        myChart.config.data.labels = browserData.map(entry => entry.browser);
        myChart.config.data.datasets[0].data = browserData.map(entry => entry.marketshare);
        myChart.config.data.datasets[0].backgroundColor = browserData.map(entry => entry.color);
        myChart.config.data.datasets[0].borderColor = browserData.map(entry => entry.color);
        // myChart update
        myChart.update();
		selectedDate.textContent = selectedDate.toLocaleDateString("de-DE");
		document.getElementById("selectedDate").innerHTML=selectedDate.toLocaleDateString("de-DE");
    }		
}
// update Slider
dateSlider.addEventListener("input", updateCharts);
// update-upload
updateCharts();

//______CHART 2-1-1_____________________________
const erlFahSum = Object.values(erlFah).reduce((accumulator, currentValue) => accumulator + currentValue, 0);	
const erlFahLab = {};
for (const key in erlFah) {
    const newKey = key.replace("Erledigt-Fahrbahn-", ""); 
    erlFahLab[newKey] = erlFah[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlFahChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label: "Gesamt: ("+ erlFahSum+")",
                data: erlFahLab,
                borderColor: "#3AB309",
				backgroundColor:"rgba(250,245,103,0.5)",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-1-2_____________________________
const inBeaFahSum = Object.values(inBeaFah).reduce((accumulator, currentValue) => accumulator + currentValue, 0);	
const inBeaFahLab = {};
for (const key in inBeaFah) {
    const newKey2 = key.replace("in Bearbeitung-Fahrbahn-", ""); 
    inBeaFahLab[newKey2] = inBeaFah[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaFahChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label: "Gesamt: ("+ inBeaFahSum+")",
                data: inBeaFahLab,
                borderColor: "#058EF0",
				backgroundColor:"rgba(250,245,103,0.5)",
                fill: true,
				tension: 0.3
				//pointRadius:4
            }]
        }
    });
});
//______CHART 2-1-3_____________________________
const erhFahSum = Object.values(erhFah).reduce((accumulator, currentValue) => accumulator + currentValue, 0);	
const erhFahLab = {};
for (const key in erhFah) {
    const newKey3 = key.replace("Erhoben-Fahrbahn-", ""); 
    erhFahLab[newKey3] = erhFah[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhFahChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label: "Gesamt: ("+ erhFahSum+")",
                data: erhFahLab,
				backgroundColor:"rgba(250,245,103,0.5)",
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-2-1_____________________________
const erlGehSum = Object.values(erlGeh).reduce((accumulator, currentValue) => accumulator + currentValue, 0);	
const erlGehLab = {};
for (const key in erlGeh) {
    const newKey = key.replace("Erledigt-Geh - Radweg-", ""); 
    erlGehLab[newKey] = erlGeh[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlGehChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ erlGehSum+")",
                data: erlGehLab,
				backgroundColor:"rgba(252,205,175,0.5)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-2-2_____________________________
const inBeaGehSum = Object.values(inBeaGeh).reduce((accumulator, currentValue) => accumulator + currentValue, 0);	
const inBeaGehLab = {};
for (const key in inBeaGeh) {
    const newKey2 = key.replace("in Bearbeitung-Geh - Radweg-", ""); 
    inBeaGehLab[newKey2] = inBeaGeh[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaGehChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ inBeaGehSum+")",
                data: inBeaGehLab,
				backgroundColor:"rgba(252,205,175,0.5)",
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-2-3_____________________________
const erhGehSum = Object.values(erhGeh).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhGehLab = {};
for (const key in erhGeh) {
    const newKey3 = key.replace("Erhoben-Geh - Radweg-", ""); 
    erhGehLab[newKey3] = erhGeh[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhGehChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ erhGehSum+")",
                data: erhGehLab,
				backgroundColor:"rgba(252,205,175,0.5)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-3-1_____________________________
const erlVerSum = Object.values(erlVer).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlVerLab = {};
for (const key in erlVer) {
    const newKey = key.replace("Erledigt-Verkehrsregelung-", ""); 
    erlVerLab[newKey] = erlVer[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlVerChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ erlVerSum+")",
                data: erlVerLab,
				backgroundColor:"rgba(253,133,171,0.3)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-3-2_____________________________
const inBeaVerSum = Object.values(inBeaVer).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaVerLab = {};
for (const key in inBeaVer) {
    const newKey2 = key.replace("in Bearbeitung-Verkehrsregelung-", ""); 
    inBeaVerLab[newKey2] = inBeaVer[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaVerChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ inBeaVerSum+")",
                data: inBeaVerLab,
				backgroundColor:"rgba(253,133,171,0.3)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-3-3_____________________________
const erhVerSum = Object.values(erhVer).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhVerLab = {};
for (const key in erhVer) {
    const newKey3 = key.replace("Erhoben-Verkehrsregelung-", ""); 
    erhVerLab[newKey3] = erhVer[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhVerChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ erhVerSum+")",
                data: erhVerLab,
				backgroundColor:"rgba(253,133,171,0.3)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-4-1_____________________________
const erlEntSum = Object.values(erlEnt).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlEntLab = {};
for (const key in erlEnt) {
    const newKey = key.replace("Erledigt-Entwässerung-", ""); 
    erlEntLab[newKey] = erlEnt[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlEntChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ erlEntSum+")",
                data: erlEntLab,
				backgroundColor:"rgba(197,243,243,0.5)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-4-2_____________________________
const inBeaEntSum = Object.values(inBeaEnt).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaEntLab = {};
for (const key in inBeaEnt) {
    const newKey2 = key.replace("in Bearbeitung-Entwässerung-", ""); 
    inBeaEntLab[newKey2] = inBeaEnt[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaEntChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                label:  "Gesamt: ("+ inBeaEntSum+")",
                data: inBeaEntLab,
				backgroundColor:"rgba(197,243,243,0.5)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-4-3_____________________________
const erhEntSum = Object.values(erhEnt).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhEntLab = {};
for (const key in erhEnt) {
    const newKey3 = key.replace("Erhoben-Entwässerung-", ""); 
    erhEntLab[newKey3] = erhEnt[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhEntChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhEntSum+")",
				data: erhEntLab,
				backgroundColor:"rgba(197,243,243,0.5)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-5-1_____________________________
const erlGrabenSum = Object.values(erlGraben).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlGrabenLab = {};
for (const key in erlGraben) {
    const newKey4 = key.replace("Erledigt-Gräben-", ""); 
    erlGrabenLab[newKey4] = erlGraben[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlGrabenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlGrabenSum+")",
                data: erlGrabenLab,
				backgroundColor:"rgba(180,247,162,0.5)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-5-2_____________________________
const inBeaGrabenSum = Object.values(inBeaGraben).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaGrabenLab = {};
for (const key in inBeaGraben) {
    const newKey2 = key.replace("in Bearbeitung-Gräben-", ""); 
    inBeaGrabenLab[newKey2] = inBeaGraben[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaGrabenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaGrabenSum+")",
                data: inBeaGrabenLab,
				backgroundColor:"rgba(180,247,162,0.5)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-5-3_____________________________
const erhGrabenSum = Object.values(erhGraben).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhGrabenLab = {};
for (const key in erhGraben) {
    const newKey3 = key.replace("Erhoben-Gräben-", ""); 
    erhGrabenLab[newKey3] = erhGraben[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhGrabenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhGrabenSum+")",
				data: erhGrabenLab,
				backgroundColor:"rgba(180,247,162,0.5)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-6-1_____________________________
const erlMobiliarSum = Object.values(erlMobiliar).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlMobiliarLab = {};
for (const key in erlMobiliar) {
    const newKey = key.replace("Erledigt-Mobiliar-", ""); 
    erlMobiliarLab[newKey] = erlMobiliar[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlMobiliarChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlMobiliarSum+")",
                data: erlMobiliarLab,
				backgroundColor:"rgba(210, 146, 68,0.4)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-6-2_____________________________
const inBeaMobiliarSum = Object.values(inBeaMobiliar).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaMobiliarLab = {};
for (const key in inBeaMobiliar) {
    const newKey2 = key.replace("in Bearbeitung-Mobiliar-", ""); 
    inBeaMobiliarLab[newKey2] = inBeaMobiliar[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaMobiliarChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaMobiliarSum+")",
                data: inBeaMobiliarLab,
				backgroundColor:"rgba(210, 146, 68,0.4)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-6-3_____________________________
const erhMobiliarSum = Object.values(erhMobiliar).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhMobiliarLab = {};
for (const key in erhMobiliar) {
    const newKey3 = key.replace("Erhoben-Mobiliar-", ""); 
    erhMobiliarLab[newKey3] = erhMobiliar[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhMobiliarChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhMobiliarSum+")",
				data: erhMobiliarLab,
				backgroundColor:"rgba(210, 146, 68,0.4)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-7-1_____________________________
const erlUeberfahrtenSum = Object.values(erlUeberfahrten).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlUeberfahrtenLab = {};
for (const key in erlUeberfahrten) {
    const newKey = key.replace("Erledigt-Überfahrten-", ""); 
    erlUeberfahrtenLab[newKey] = erlUeberfahrten[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlUeberfahrtenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlUeberfahrtenSum+")",
                data: erlUeberfahrtenLab,
				backgroundColor:"rgba(222, 191, 252,0.5)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-7-2_____________________________
const inBeaUeberfahrtenSum = Object.values(inBeaUeberfahrten).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaUeberfahrtenLab = {};
for (const key in inBeaUeberfahrten) {
    const newKey2 = key.replace("in Bearbeitung-Überfahrten-", ""); 
    inBeaUeberfahrtenLab[newKey2] = inBeaUeberfahrten[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaUeberfahrtenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaUeberfahrtenSum+")",
                data: inBeaUeberfahrtenLab,
				backgroundColor:"rgba(222, 191, 252,0.5)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-7-3_____________________________
const erhUeberfahrtenSum = Object.values(erhUeberfahrten).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhUeberfahrtenLab = {};
for (const key in erhUeberfahrten) {
    const newKey3 = key.replace("Erhoben-Überfahrten-", ""); 
    erhUeberfahrtenLab[newKey3] = erhUeberfahrten[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhUeberfahrtenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhUeberfahrtenSum+")",
				data: erhUeberfahrtenLab,
				backgroundColor:"rgba(222, 191, 252,0.5)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-8-1_____________________________
const erlSchieberSum = Object.values(erlSchieber).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlSchieberLab = {};
for (const key in erlSchieber) {
    const newKey = key.replace("Erledigt-Schieber AZK (Abzweigkasten)-", ""); 
    erlSchieberLab[newKey] = erlSchieber[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlSchieberChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlSchieberSum+")",
                data: erlSchieberLab,
				backgroundColor:"rgba(191, 189, 186,0.4)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-8-2_____________________________
const inBeaSchieberSum = Object.values(inBeaSchieber).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaSchieberLab = {};
for (const key in inBeaSchieber) {
    const newKey2 = key.replace("in Bearbeitung-Schieber AZK (Abzweigkasten)-", ""); 
    inBeaSchieberLab[newKey2] = inBeaSchieber[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaSchieberChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaSchieberSum+")",
                data: inBeaSchieberLab,
				backgroundColor:"rgba(191, 189, 186,0.4)",			
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-8-3_____________________________
const erhSchieberSum = Object.values(erhSchieber).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhSchieberLab = {};
for (const key in erhSchieber) {
    const newKey3 = key.replace("Erhoben-Schieber AZK (Abzweigkasten)-", ""); 
    erhSchieberLab[newKey3] = erhSchieber[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhSchieberChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhSchieberSum+")",
				data: erhSchieberLab,
				backgroundColor:"rgba(191, 189, 186,0.4)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-9-1_____________________________
const erlSonstigesSum = Object.values(erlSonstiges).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlSonstigesLab = {};
for (const key in erlSonstiges) {
    const newKey = key.replace("Erledigt-Sonstiges-", ""); 
    erlSonstigesLab[newKey] = erlSonstiges[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlSonstigesChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlSonstigesSum+")",
                data: erlSonstigesLab,
				backgroundColor:"rgba(200, 211, 142,0.4)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-9-2_____________________________
const inBeaSonstigesSum = Object.values(inBeaSonstiges).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaSonstigesLab = {};
for (const key in inBeaSonstiges) {
    const newKey2 = key.replace("in Bearbeitung-Sonstiges-", ""); 
    inBeaSonstigesLab[newKey2] = inBeaSonstiges[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaSonstigesChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaSonstigesSum+")",
                data: inBeaSonstigesLab,
				backgroundColor:"rgba(200, 211, 142,0.4)",			
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-9-3_____________________________
const erhSonstigesSum = Object.values(erhSonstiges).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhSonstigesLab = {};
for (const key in erhSonstiges) {
    const newKey3 = key.replace("Erhoben-Sonstiges-", ""); 
    erhSonstigesLab[newKey3] = erhSonstiges[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhSonstigesChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhSonstigesSum+")",
				data: erhSonstigesLab,
				backgroundColor:"rgba(200, 211, 142,0.4)",			
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-10-1_____________________________
const erlMauerSum = Object.values(erlMauer).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlMauerLab = {};
for (const key in erlMauer) {
    const newKey = key.replace("Erledigt-Mauer-", ""); 
    erlMauerLab[newKey] = erlMauer[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlMauerChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlMauerSum+")",
                data: erlMauerLab,
				backgroundColor:"rgba(211, 153, 142,0.4)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-10-2_____________________________
const inBeaMauerSum = Object.values(inBeaMauer).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaMauerLab = {};
for (const key in inBeaMauer) {
    const newKey2 = key.replace("in Bearbeitung-Mauer-", ""); 
    inBeaMauerLab[newKey2] = inBeaMauer[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaMauerChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaMauerSum+")",
                data: inBeaMauerLab,
				backgroundColor:"rgba(211, 153, 142,0.4)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-10-3_____________________________
const erhMauerSum = Object.values(erhMauer).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhMauerLab = {};
for (const key in erhMauer) {
    const newKey3 = key.replace("Erhoben-Mauer-", ""); 
    erhMauerLab[newKey3] = erhMauer[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhMauerChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhMauerSum+")",
				data: erhMauerLab,
				backgroundColor:"rgba(211, 153, 142,0.4)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-11-1_____________________________
const erlParkstreifenSum = Object.values(erlParkstreifen).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlParkstreifenLab = {};
for (const key in erlParkstreifen) {
    const newKey = key.replace("Erledigt-Parkstreifen-", ""); 
    erlParkstreifenLab[newKey] = erlParkstreifen[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlParkstreifenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlParkstreifenSum+")",
                data: erlParkstreifenLab,
				backgroundColor:"rgba(252, 205, 102,0.5)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-11-2_____________________________
const inBeaParkstreifenSum = Object.values(inBeaParkstreifen).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaParkstreifenLab = {};
for (const key in inBeaParkstreifen) {
    const newKey2 = key.replace("in Bearbeitung-Parkstreifen-", ""); 
    inBeaParkstreifenLab[newKey2] = inBeaParkstreifen[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaParkstreifenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaParkstreifenSum+")",
                data: inBeaParkstreifenLab,
				backgroundColor:"rgba(252, 205, 102,0.5)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-11-3_____________________________
const erhParkstreifenSum = Object.values(erhParkstreifen).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhParkstreifenLab = {};
for (const key in erhParkstreifen) {
    const newKey3 = key.replace("Erhoben-Parkstreifen-", ""); 
    erhParkstreifenLab[newKey3] = erhParkstreifen[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhParkstreifenChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhParkstreifenSum+")",
				data: erhParkstreifenLab,
				backgroundColor:"rgba(252, 205, 102,0.5)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-12-1_____________________________
const erlSondernutzungSum = Object.values(erlSondernutzung).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erlSondernutzungLab = {};
for (const key in erlSondernutzung) {
    const newKey = key.replace("Erledigt-Sondernutzung-", ""); 
    erlSondernutzungLab[newKey] = erlSondernutzung[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erlSondernutzungChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erlSondernutzungSum+")",
                data: erlSondernutzungLab,
				backgroundColor:"rgba(180,247,162,0.5)",
                borderColor: "#05bb27",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-12-2_____________________________
const inBeaSondernutzungSum = Object.values(inBeaSondernutzung).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const inBeaSondernutzungLab = {};
for (const key in inBeaSondernutzung) {
    const newKey2 = key.replace("in Bearbeitung-Sondernutzung-", ""); 
    inBeaSondernutzungLab[newKey2] = inBeaSondernutzung[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("inBeaSondernutzungChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ inBeaSondernutzungSum+")",
                data: inBeaSondernutzungLab,
				backgroundColor:"rgba(180,247,162,0.5)",				
                borderColor: "#0381cf",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______CHART 2-12-3_____________________________
const erhSondernutzungSum = Object.values(erhSondernutzung).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const erhSondernutzungLab = {};
for (const key in erhSondernutzung) {
    const newKey3 = key.replace("Erhoben-Sondernutzung-", ""); 
    erhSondernutzungLab[newKey3] = erhSondernutzung[key]; 
}
document.addEventListener("DOMContentLoaded", function () {
    //Draw Chart
    new Chart(document.getElementById("erhSondernutzungChart"), {
        type: "line",
        data: {
            labels: [""],
            datasets: [{
                 label: "Gesamt: ("+ erhSondernutzungSum+")",
				data: erhSondernutzungLab,
				backgroundColor:"rgba(180,247,162,0.5)",				
                borderColor: "red",
                fill: true,
				tension: 0.3
            }]
        }
    });
});
//______________Stacked Monatliche Mangel 
  const statusOrder = ["Erhoben","in Bearbeitung","Technisch Fertig","Erledigt"];
  // monthYearSet
  const monthYearSet = new Set();
  Object.keys(monthlyCountsStatus).forEach(key => {
    const parts = key.split("-");
    // parts[0] = monthYear، parts[1] = status
    const monthYear = parts[0] + "-" + parts[1];
    monthYearSet.add(monthYear);
  });
  
  // monthYears Array
  const monthYears = Array.from(monthYearSet);
  monthYears.sort((a, b) => {
    const [monthA, yearA] = a.split("-").map(Number);
    const [monthB, yearB] = b.split("-").map(Number);
    return (yearA - yearB) || (monthA - monthB);
  });
  // Array to status
  const datasetMap = {};
  statusOrder.forEach(status => {
    datasetMap[status] = new Array(monthYears.length).fill(0);
  });
  // monthlyCountsStatus
  Object.entries(monthlyCountsStatus).forEach(([key, value]) => {
    const parts = key.split("-");
    const month = parts[0];
    const year = parts[1];
    // if (-)
    const status = parts.slice(2).join("-");
    const monthYear = month + "-" + year;
    const index = monthYears.indexOf(monthYear);
    if (index !== -1 && datasetMap[status] !== undefined) {
      datasetMap[status][index] += value;
    }
  });

  // data for Chart
  const datasets6 = statusOrder.map(status => ({
    label: status === "in Bearbeitung" ? "In Bearbeitung" : status, // 
    data: datasetMap[status],
    backgroundColor: getColor(status),
	borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
	borderWidth:1,
	borderRadius:0,
  }));
  // color
  function getColor(status) {
    const colors = {
      "Erhoben": "rgba(228, 8, 10, 0.9)",           // red
      "in Bearbeitung": "rgba(8, 119, 230, 0.9)",      // blau
      "Technisch Fertig": "rgba(255, 255, 91, 0.9)",    // yellow
      "Erledigt": "rgba(58, 179, 9, 0.9)"             // green
    };
    return colors[status] || "rgba(0, 0, 0, 0.7)";
  }
    //_____________18.02.2025
    // Mangeltyp__I_
    const typesSet = new Set();
    Object.keys(monthlyCountsMangeltyp).forEach(key => {
      const parts = key.split("-");
      const type = parts.slice(2).join("-").trim();
      typesSet.add(type);
    });
    const types = Array.from(typesSet);

    // Mangeltyp__I_ & monthYears
    const datasetMapType = {};
    types.forEach(type => {
      datasetMapType[type] = new Array(monthYears.length).fill(0);
    });

    // monthlyCountsMangeltyp
    Object.entries(monthlyCountsMangeltyp).forEach(([key, value]) => {
      const parts = key.split("-");
      const month = parts[0];
      const year = parts[1];
      const type = parts.slice(2).join("-").trim();
      const monthYear = `${month}-${year}`;
      const index = monthYears.indexOf(monthYear);
      if (index > -1) {
        datasetMapType[type][index] += value;
      }
    });
    // color
    const fixedColors = [
      "rgba(255, 99, 132, 1)",     
      "rgba(175, 25, 25, 1)",    
      "rgba(255, 206, 86, 1)",   
      "rgba(222, 90, 23, 1)",   
      "rgba(54, 162, 235, 1)",    
	  "rgba(3, 191, 70, 1)",    
	  "rgba(153, 102, 255, 1)",   
	  "rgba(44, 148, 145, 1)",
	  "rgba(234, 167, 248, 1)",
	  "rgba(53, 102, 255, 1)",
	  "rgba(113, 2, 25, 1)",
	  "rgba(133, 230, 221, 1)"
    ];
      const datasets = types.map((type, index) => ({
      label: type,
      data: datasetMapType[type],
      borderColor: fixedColors[index % fixedColors.length],
      backgroundColor: 'transparent',
      borderWidth: 3,
      pointRadius: 4,
      pointHoverRadius: 6,
      tension: 0.3  
    }));
	//label
	const lineLabelPlugin = {
    id: 'lineLabelPlugin',
    afterDatasetDraw(chart, args, options) {
        const { ctx, data } = chart;
        data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                const lastPoint = meta.data[meta.data.length - 13]; //lastPoint
                ctx.fillStyle = dataset.borderColor;
                ctx.font = '14px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(dataset.label, lastPoint.x+8, lastPoint.y-8);
            }
        });
    }
};
    // lineChart
    const ctx7 = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx7, {
      type: 'line',
      data: {
        labels: monthYears,  // 
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          datalabels: { display: false } //
        },
        scales: {
          x: {
            title: {
              display: true
            }
          },
          y: {
            title: {
              display: true
            }
          }
        }
      },
	   plugins: [lineLabelPlugin]
    });
  //  Monatliche Mangel stacked
  const ctx6 = document.getElementById('myChart6').getContext('2d');
  new Chart(ctx6, {
    type: 'bar',
    data: {
      // X
      labels: monthYears, 
      datasets: datasets6
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
          title: {
            display: false,
            text: ''
          }
        },
        y: {
          stacked: true,
          title: {
            display: false,
            text: ''
          }
        }
      },
      plugins: {
		  	datalabels:{
			  display:false
		  },
        legend: { position: 'top' },
	
      }
    }
  });
 //______CHART 3_____Qurtal Mangel chart_______quarterlyCounts
    const labels4=Object.keys(quarterlyCounts);
 const dataValues4=Object.values(quarterlyCounts);
    const data5 = {
      labels: labels4,
      datasets: [{
        label: 'Quartal',
        data:dataValues4,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.5)'
        ],
         borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1,
		borderRadius:10
      },{
        label: 'Pfeil',
        //data: [12, 19, 3, 5, 2, 3],
        data: Arrow,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        barPercentage: 0.03
      }]
    };
    // barGrowthIndicator plugin
    const barGrowthIndicator = {
      id: 'barGrowthIndicator',
      afterDatasetsDraw(chart, scales, options) {
        const { ctx, scales: {x, y} } = chart;
        const deltaPercentage = [];
        for(let i = 0; i < chart._metasets[0]._parsed.length -1; i++){
          let z = 1 + i;
          const basis = chart._metasets[0]._parsed[i].y;
          const delta = chart._metasets[0]._parsed[z].y;
          let percentage = delta / basis * 100;
          percentage = percentage - 100;
          deltaPercentage.push(percentage.toFixed(1))
        }
        if(chart._metasets[1].hidden !== true){
          for(let a = 0; a < deltaPercentage.length; a++){
            const start = chart._metasets[1]._parsed[a]._custom.start;
            const end = chart._metasets[1]._parsed[a]._custom.end;
            if(end >= start) {
              // triangle
              ctx.beginPath();
              ctx.moveTo(chart.getDatasetMeta(1).data[a].x, chart.getDatasetMeta(1).data[a].y - 2)
              ctx.lineTo(chart.getDatasetMeta(1).data[a].x - 5, chart.getDatasetMeta(1).data[a].y + 5);
              ctx.lineTo(chart.getDatasetMeta(1).data[a].x + 5, chart.getDatasetMeta(1).data[a].y + 5);
              ctx.fillStyle = 'black';
              ctx.fill();
              ctx.restore();
              ctx.font = '12px Arial';
              ctx.fillStyle = 'green';
              ctx.textAlign = 'center';
              ctx.fillText(deltaPercentage[a]+'%', chart.getDatasetMeta(1).data[a].x + 2.5, chart.getDatasetMeta(1).data[a].y - 10)
              ctx.restore();
            }
            if(end < start) {
              let yStart = a + 1;
              ctx.beginPath();
              ctx.moveTo(chart.getDatasetMeta(1).data[a].x, chart.getDatasetMeta(0).data[yStart].y + 3);
              ctx.lineTo(chart.getDatasetMeta(1).data[a].x - 5, chart.getDatasetMeta(0).data[yStart].y - 5);
              ctx.lineTo(chart.getDatasetMeta(1).data[a].x + 5, chart.getDatasetMeta(0).data[yStart].y - 5);
              ctx.fillStyle = 'black';
              ctx.fill();
              ctx.restore();
              ctx.font = '12px Arial';
              ctx.fillStyle = 'red';
              ctx.textAlign = 'center';
              ctx.fillText(deltaPercentage[a]+'%', chart.getDatasetMeta(1).data[a].x + 2.5, chart.getDatasetMeta(0).data[yStart].y + 12)
              ctx.restore();
            }
          } 
        } 
      }
    };
    // config block
    const config5 = {
      type: 'bar',
      data: data5,
      options: {
        plugins: {
          tooltip: {
            filter: (tooltipItem) => {
              //console.log(tooltipItem);
              return tooltipItem.datasetIndex === 0;
            }
        },
		datalabels: {
                display: (context) => {
                    return context.datasetIndex === 0; // إظهار التسميات فقط على الأعمدة العادية
                },
                anchor: 'end',
                align: 'top',
                formatter: (value) => value ,
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
          y: {
            grace: '5%',
            beginAtZero: true
          }
        }
      },
      plugins: [barGrowthIndicator]
    };
    // init render block
     myChart5 = new Chart(
      document.getElementById('myChart5'),
      config5
    );
	//Chart.register(ChartDataLabels);
	display: (context) => context.datasetIndex === 0
//______CHART 4_____Jahrliche & Mangel Type______yearlyCounts
    const data3 = {
      labels:  Object.keys(yearlyCounts),
      datasets: [{
        label: 'Erledigt',//[Erledigt
        data: allErledigt,//[1110,2008,34]
        backgroundColor: [
          '#4caf50'
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1,
		borderRadius:15
      },{
        label: 'in Bearbeitung',
        data: allinBearbeitung,//[99,300,117],
        backgroundColor: [
          '#2196f3'
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1,
		borderRadius:15
      },{
        label: 'Erhoben',
        data: allErhoben,//[57,403,78],
        backgroundColor: [
          '#f44336'
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1,
		borderRadius:15
      },{
        label: 'Technisch Fertig',
        data: allTechnischFertig,//[1,0,0],
        backgroundColor: [
          '#fcfa03'
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };
    // config block
    const config3 = {
      type: 'bar', //doughnut
      data: data3,
     options: {
    responsive: true,
    plugins: {
               datalabels: {
                 anchor: 'end',
                   align: 'top',
                   formatter: (value) => value,
                    font: {
                         weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            plugins: [ChartDataLabels]
};
    // init render block
    const ctx3 = document.getElementById('myChart3').getContext('2d');
	  new Chart(ctx3, config3);	  
//______CHART 5_____Status & Mangel Type_______combinedCounts	  
   const labels5=Object.keys(combinedCounts);
 const dataValues5=Object.values(combinedCounts);
 const backgroundColors = labels5.map(label => {
      let firstWord = "";
      // split("-")
      if(label.includes("-")) {
        firstWord = label.split("-")[0];
      } else {
        firstWord = label.split(" ")[0];
      }
      firstWord = firstWord.trim();     
      // color firstWord
      if(firstWord === "Erledigt") {
        return "rgba(58, 179, 9, 0.9)"; //   Erledigt
      } else if(firstWord === "Erhoben") {
        return "rgba(228, 8, 10, 0.9)"; //  Erhoben
      } else if(firstWord === "in Bearbeitung") {
        return "rgba(8, 119, 230, 0.9)"; //  In Bearbeitung
      } else if(firstWord === "Technisch Fertig") {
        return "rgba(255, 255, 91, 0.9)"; //  Technisch fertig
      }
      return "gray"; // 
    });
   const data4 = {
      labels: labels5,
      datasets: [{
        label: '',
        data: dataValues5,
        backgroundColor: backgroundColors,
        borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1,
		borderRadius:10
      }]
    };
    // config block
    const config4 = {
      type: 'bar', 
      data: data4,
    options: {
    responsive: true,
    plugins: {
			legend: {
				display: false
					},
               datalabels: {
                 anchor: 'end',
                   align: 'top',
                   formatter: (value) => value,
                    font: {
                         weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            plugins: [ChartDataLabels]
};
    // init render block
    const ctx4 = document.getElementById('myChart4').getContext('2d');
	  new Chart(ctx4, config4);
	  //_______________________________________quarterlyCounts
	  const formatData5 = (status) => 
  Object.entries(combinedCounts6)
    .filter(([key]) => key.startsWith(`${status}-`))
    .map(([key, value]) => ({
      version: key.replace(`${status}-`, ""),
      users: value
    }));
const erlMnArray5 = formatData5("Erledigt");
const erhMnArray5 = formatData5("Erhoben");
const inBMnArray5 = formatData5("in Bearbeitung");
const tecMnArray5 = formatData5("Technisch Fertig");
const formatData6 = (Mangeltyp__I_) => 
  Object.entries(combinedCounts5)
    .filter(([key]) => key.startsWith(`${Mangeltyp__I_}-`))
    .map(([key, value]) => ({
      version: key.replace(`${Mangeltyp__I_}-`, ""),
      users: value
    }));
const Fahrbahn6 = formatData6("Fahrbahn");	 
//-------------------EXPORT To EXCEL 
 const imageBasePath = "G:\\D4\\MR-NEU\\MR2\\MR23\\GIS\\StraKo\\Mangel\\img\\";
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Fahrbahn
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Fahrbahn"
		);
    document.getElementById("ErledigtFahrbahn").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Fahrbahn.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Fahrbahn
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Fahrbahn"
		);
    document.getElementById("ErhobenFahrbahn").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Fahrbahn.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Fahrbahn
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Fahrbahn"
		);
    document.getElementById("inBearbeitungFahrbahn").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Fahrbahn.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});	
// Geh Radweg
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Geh - Radweg
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Geh - Radweg"
		);
    document.getElementById("ErledigtGehRadweg").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Geh - Radweg.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Geh - Radweg
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Geh - Radweg"
		);
    document.getElementById("ErhobenGehRadweg").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Geh - Radweg.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Geh - Radweg
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Geh - Radweg"
		);
    document.getElementById("inBearbeitungGehRadweg").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Geh - Radweg.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});	
//Verkehrsregelung
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Verkehrsregelung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Verkehrsregelung"
		);
    document.getElementById("ErledigtVerkehrsregelung").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Verkehrsregelung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Verkehrsregelung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Verkehrsregelung"
		);
    document.getElementById("ErhobenVerkehrsregelung").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Verkehrsregelung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Verkehrsregelung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Verkehrsregelung"
		);
    document.getElementById("inBearbeitungVerkehrsregelung").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Verkehrsregelung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
//Entwässerung
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Entwässerung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Entwässerung"
		);
    document.getElementById("ErledigtEnt").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Entwässerung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Entwässerung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Entwässerung"
		);
    document.getElementById("ErhobenEnt").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Entwässerung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Entwässerung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Entwässerung"
		);
    document.getElementById("inBearbeitungEnt").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Entwässerung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});	
//Gräben
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Gräben
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Gräben"
		);
    document.getElementById("ErledigtGraben").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Gräben.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Gräben
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Gräben"
		);
    document.getElementById("ErhobenGraben").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Gräben.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Gräben
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Gräben"
		);
    document.getElementById("inBearbeitungGraben").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Gräben.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});	
//Mobiliar
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Mobiliar
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Mobiliar"
		);
    document.getElementById("ErledigtMobiliar").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Mobiliar.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Mobiliar
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Mobiliar"
		);
    document.getElementById("ErhobenMobiliar").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Mobiliar.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Mobiliar
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Mobiliar"
		);
    document.getElementById("inBearbeitungMobiliar").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Mobiliar.xlsx");
		
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
//Überfahrten
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Überfahrten
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Überfahrten"
		);
    document.getElementById("ErledigtUeberfahrten").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Ueberfahrten.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Überfahrten
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Überfahrten"
		);
    document.getElementById("ErhobenUeberfahrten").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Ueberfahrten.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Überfahrten
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Überfahrten"
		);
    document.getElementById("inBearbeitungUeberfahrten").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Ueberfahrten.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});		
//Schieber AZK (Abzweigkasten)
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Schieber AZK (Abzweigkasten)
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Schieber AZK (Abzweigkasten)"
		);
    document.getElementById("ErledigtSchieber").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Schieber.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Schieber AZK (Abzweigkasten)
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Schieber AZK (Abzweigkasten)"
		);
    document.getElementById("ErhobenSchieber").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Schieber.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Schieber AZK (Abzweigkasten)
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Schieber AZK (Abzweigkasten)"
		);
    document.getElementById("inBearbeitungSchieber").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Schieber.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});	
//Sonstiges
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Sonstiges
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Sonstiges"
		);
    document.getElementById("ErledigtSonstiges").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Sonstiges.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Sonstiges
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Sonstiges"
		);
    document.getElementById("ErhobenSonstiges").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Sonstiges.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Sonstiges
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Sonstiges"
		);
    document.getElementById("inBearbeitungSonstiges").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Sonstiges.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});	
  //Mauer
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Mauer
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Mauer"
		);
    document.getElementById("ErledigtMauer").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Mauer.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Mauer
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Mauer"
		);
    document.getElementById("ErhobenMauer").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Mauer.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Mauer
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Mauer"
		);
    document.getElementById("inBearbeitungMauer").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Mauer.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
 //Parkstreifen
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Parkstreifen
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Parkstreifen"
		);
    document.getElementById("ErledigtParkstreifen").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Parkstreifen.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Parkstreifen
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Parkstreifen"
		);
    document.getElementById("ErhobenParkstreifen").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Parkstreifen.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Parkstreifen
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Parkstreifen"
		);
    document.getElementById("inBearbeitungParkstreifen").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Parkstreifen.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
//Sondernutzung
document.addEventListener("DOMContentLoaded", function () {//   Erledigt  Sondernutzung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erledigt" &&
        item.properties.Mangeltyp__I_ === "Sondernutzung"
		);
    document.getElementById("ErledigtSondernutzung").addEventListener("click", function () {
        exportToExcel(data, "erledigt_Sondernutzung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);        
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  Erhoben  Sondernutzung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "Erhoben" &&
        item.properties.Mangeltyp__I_ === "Sondernutzung"
		);
    document.getElementById("ErhobenSondernutzung").addEventListener("click", function () {
        exportToExcel(data, "Erhoben_Sondernutzung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; // 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; // 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});
document.addEventListener("DOMContentLoaded", function () {//  in Bearbeitung  Sondernutzung
    const data = json_mangel_all.features.filter(item =>
        item.properties.Status === "in Bearbeitung" &&
        item.properties.Mangeltyp__I_ === "Sondernutzung"
		);
    document.getElementById("inBearbeitungSondernutzung").addEventListener("click", function () {
        exportToExcel(data, "in Bearbeitung_Sondernutzung.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});

document.addEventListener("DOMContentLoaded", function () {//  ALL
    const data = json_mangel_all.features;
    document.getElementById("ALL").addEventListener("click", function () {
        exportToExcel(data, "ALL.xlsx");
    });
    function exportToExcel(data, fileName) {
        const formattedData = data.map(item => {
            let newItem = { ...item.properties }; // 
            if (newItem.Mangelnummer) {
                let localPath = `${imageBasePath}${newItem.Mangelnummer}.jpg`; 
                newItem.desc = localPath; 
            }
            return newItem;
        });
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        // 
        Object.keys(worksheet).forEach(cell => {
            let cellValue = worksheet[cell].v; 
            if (typeof cellValue === "string" && cellValue.indexOf("G:\\") === 0) {
                worksheet[cell].l = { Target: cellValue }; 
            }
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Mangel Data");
        XLSX.writeFile(workbook, fileName);
    }
});