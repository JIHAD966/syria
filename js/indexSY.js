var markersLayer = L.layerGroup().addTo(map);
var selectedRow = null;

// تعريف الإحداثيات
proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
proj4.defs("EPSG:32637","+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs");

function getMarkerColor(status) {
    switch ((status || "").toLowerCase()) {
        case 'oil': return { color: 'black', fillColor: 'red' };
        case 'gas': return { color: 'black', fillColor: 'green' };
        case 'oil_gas': return { color: 'black', fillColor: 'orange' };
        case 'dry': return { color: 'black', fillColor: 'gray' };
        default: return { color: 'black', fillColor: 'blue' };
    }
}

function importExcel(event) {
	document.getElementById("clearMap").disabled = false;
	document.getElementById("dxfToJson").disabled = false;
	document.getElementById("btJson").disabled = false;
   // document.getElementById("btPrint").disabled = false;
    var file = event.target.files[0];
    var reader = new FileReader();
    var selectedProjection = document.getElementById('projectionSelect').value;

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
        var sheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[sheetName];
        var jsonData = XLSX.utils.sheet_to_json(worksheet);

        if (jsonData.length === 0) return;

        // تجهيز رؤوس الجدول
        var headers = Object.keys(jsonData[0]);
        var tableHead = document.querySelector('thead tr');
        tableHead.innerHTML = "";

        headers.forEach(function(header) {
            var th = document.createElement('th');
            th.textContent = header;
            tableHead.appendChild(th);
        });

        markersLayer.clearLayers();
        document.getElementById('markersTableBody').innerHTML = "";

        jsonData.forEach(function(entry) {
            var x = entry["x"] || entry["X"] || entry["X-Lam"] || entry["E-utm"];
            var y = entry["y"] || entry["Y"] || entry["Y-Lam"] || entry["N-utm"];
            var lat = entry["Lat (DD)"] || entry["lat"] || entry["Lat"] || entry["Latitude"];
            var lon = entry["Lon (DD)"] || entry["lon"] || entry["Lon"] || entry["Longitude"];
            var status = entry["Status"] || entry["status"] ||"Unknown";

            if (x && y && selectedProjection !== "EPSG:4326") {
                var transformed = proj4(selectedProjection, 'EPSG:4326', [x, y]);
                lon = transformed[0];
                lat = transformed[1];
            }

            if (!lat || !lon) return;

            var markerOptions = getMarkerColor(status);

            // تجهيز نص Popup
            var popupContent = "";
            headers.forEach(function(key) {
                popupContent += `<b>${key}:</b> ${entry[key] || "-"}<br>`;
            });

            var marker = L.circleMarker([lat, lon], {
                radius: 6,
				color: 'black',     // لون الحد الخارجي
				weight: 1, 				
                fillColor: markerOptions.fillColor,
                fillOpacity: 1
            }).bindPopup(popupContent);

            marker.addTo(DragDropItem);

            // بناء صف الجدول
            var row = document.createElement('tr');
            headers.forEach(function(key) {
                var td = document.createElement('td');
                td.textContent = entry[key] || "-";
                row.appendChild(td);
            });

            row.addEventListener('click', function() {
                if (selectedRow) selectedRow.classList.remove('selected');
                row.classList.add('selected');
                map.flyTo([lat, lon], 16);
                marker.openPopup();
            });

            document.getElementById('markersTableBody').appendChild(row);
        });
    };

    reader.readAsArrayBuffer(file);
}


//___________________________________________________________save__ZoomLevel _ mousemove
var center = JSON.parse(localStorage.getItem('mapCenter'));
var zoom = localStorage.getItem('mapZoom');

if (center && zoom) {
    map.setView([center.lat, center.lng], zoom);
}else{
map.setView([34.607406, 39.144287], 7);
};

//_________________________________________________________________
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;
//document.getElementById("nameInput")=today ; In HTML: Datum:<input type="Date" id="DatumInput" style="width: 100px ;">

//_______________________________________TEXTBOX==== , & .  ============
document.getElementById("xInput").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.,]/g, ''); 
    this.value = this.value.replace(/,/g, '.'); 
    this.value = this.value.replace(/(,.*?),(.*,)?/g, '$1$2');  
});

document.getElementById("yInput").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.,]/g, ''); 
    this.value = this.value.replace(/,/g, '.'); 
    this.value = this.value.replace(/(,.*?),(.*,)?/g, '$1$2'); 
});
document.getElementById("latInput").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.,]/g, ''); 
    this.value = this.value.replace(/,/g, '.'); 
    this.value = this.value.replace(/(,.*?),(.*,)?/g, '$1$2');  
});

document.getElementById("lonInput").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.,]/g, ''); 
    this.value = this.value.replace(/,/g, '.'); 
    this.value = this.value.replace(/(,.*?),(.*,)?/g, '$1$2'); 
});
document.getElementById("BufInput").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.,]/g, ''); 
    this.value = this.value.replace(/,/g, '.'); 
    this.value = this.value.replace(/(,.*?),(.*,)?/g, '$1$2');  
});

//___________________________________________
 function xyToLatng(){
             proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
             proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
             proj4.defs("EPSG:32637","+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs");
    var x = xInput.value;
    var y = yInput.value;
    var trans =proj4(proj4('EPSG:42'),proj4('EPSG:4326'),[x, y]);
    var lon=trans[0].toFixed(7);
    var lat = trans[1].toFixed(7);
    latInput.value=lat;
    lonInput.value=lon;
    var transUtm =proj4(proj4('EPSG:4326'),proj4('EPSG:32637'),[lon, lat]);    
    var eu=transUtm[0].toFixed(2);
    var nu = transUtm[1].toFixed(2);
    EInput.value=eu;
    NInput.value=nu;
      //------------------------------------------------GMS lat
    var z =latInput.value;
    var g =parseInt(latInput.value);
    var m =parseInt((latInput.value -parseInt(latInput.value))*60);
    var s =((z-g-(m/60))*3600).toFixed(3);
    glatInput.value =g;
    mlatInput.value=m;
    slatInput.value=s;
    //------------------------------------------------GMS lon
    var zn =lonInput.value;
    var gn =parseInt(lonInput.value);
    var mn =parseInt((lonInput.value -parseInt(lonInput.value))*60);
    var sn =((zn-gn-(mn/60))*3600).toFixed(3);
    glonInput.value =gn;
    mlonInput.value=mn;
    slonInput.value=sn;
        }
        function LatngToXy(){
        var z =latInput.value;
        var g =parseInt(latInput.value);
        var m =parseInt((latInput.value -parseInt(latInput.value))*60);
        var s =((z-g-(m/60))*3600).toFixed(3);
        glatInput.value =g;
        mlatInput.value=m;
        slatInput.value=s;
//----------------------------------------------lon
var zn =lonInput.value;
        var gn =parseInt(lonInput.value);
        var mn =parseInt((lonInput.value -parseInt(lonInput.value))*60);
        var sn =((zn-gn-(mn/60))*3600).toFixed(3);
        glonInput.value =gn;
        mlonInput.value=mn;
        slonInput.value=sn;
            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
            proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
            proj4.defs("EPSG:32637","+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs");
    var lat = latInput.value;
    var lon = lonInput.value;
    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:42'),[lon, lat]);
    var x=trans[0].toFixed(2);
    var y = trans[1].toFixed(2);
    xInput.value=x;
    yInput.value=y;
    var transUtm =proj4(proj4('EPSG:4326'),proj4('EPSG:32637'),[lon, lat]);//__________________________________________________
    var eu=transUtm[0].toFixed(2);
    var nu = transUtm[1].toFixed(2);
    latInput.value=lat;
    lonInput.value=lon;
    EInput.value=eu;
    NInput.value=nu;
        };
        function glat(){
        var g =glatInput.value;
        var m = (mlatInput.value/60);
        var s = (slatInput.value/3600);
        var gms = Number(g)+ Number(m)+ Number(s);
    latInput.value=gms.toFixed(7);
    };
    function mlat(){
        var g =glatInput.value;
        var m = (mlatInput.value/60);
        var s = (slatInput.value/3600);
        var gms = Number(g)+ Number(m)+ Number(s);
    latInput.value=gms.toFixed(7);
    };
    function slat(){
        var g =glatInput.value;
        var m = (mlatInput.value/60);
        var s = (slatInput.value/3600);
        var gms = Number(g)+ Number(m)+ Number(s);
    latInput.value=gms.toFixed(7);        
    };
    function glon(){
        var g =glonInput.value;
        var m = (mlonInput.value/60);
        var s = (slonInput.value/3600);
        var gms = Number(g)+ Number(m)+ Number(s);
    lonInput.value=gms.toFixed(7);  
    };
    function mlon(){
        var g =glonInput.value;
        var m = (mlonInput.value/60);
        var s = (slonInput.value/3600);
        var gms = Number(g)+ Number(m)+ Number(s);
    lonInput.value=gms.toFixed(7);  
    };
    function slon(){
        var g =glonInput.value;
        var m = (mlonInput.value/60);
        var s = (slonInput.value/3600);
        var gms = Number(g)+ Number(m)+ Number(s);
    lonInput.value=gms.toFixed(7);    
    };
	//LatngToE
 function LatngToE(){
            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
            proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
            proj4.defs("EPSG:32637","+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs");
    var eu = EInput.value;
    var nu = NInput.value;
    var transUtm =proj4(proj4('EPSG:32637'),proj4('EPSG:4326'),[eu, nu]);
    var lon=transUtm[0].toFixed(7);
    var lat = transUtm[1].toFixed(7);
    latInput.value=lat;
    lonInput.value=lon;
	}
           function LatngToN(){
            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
            proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
            proj4.defs("EPSG:32637","+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs");
    var eu = EInput.value;
    var nu = NInput.value;
    var transUtm =proj4(proj4('EPSG:32637'),proj4('EPSG:4326'),[eu, nu]);
    var lon=transUtm[0].toFixed(7);
    var lat = transUtm[1].toFixed(7);
    latInput.value=lat;
    lonInput.value=lon;
}
//________________________________________________________________________________________mousemove
map.on('mousemove', function(e){

    var lat = e.latlng.lat;
    var lon = e.latlng.lng;
    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:42'),[lon, lat]);
    var x=trans[0].toFixed(2);
    var y = trans[1].toFixed(2);
    document.getElementById('coordsDiv').innerHTML ='<u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:blue">Lambert:</u> '+x +','+ y+'' ;
 
    var str = L.latLng(map.getCenter())+"  Zoom Level: "+map.getZoom()+"  |  "+`&copy;2025 Syria <a href="https://spc.sy/" target='_blank'>Syrian Petroleum Company</a>  | Support &copy; <a href="mailto:j.alloush966@gmail.com"> Jihad Alalloush  |  </a> `+"Today: "+ today ; 
                $("#map_coords").html(str); 
                var latS = map.getCenter().lat;
                var lngS = map.getCenter().lng;
                var zoomS = map.getZoom();                
                localStorage.setItem('mapCenter', JSON.stringify({lat: latS, lng: lngS}));
                localStorage.setItem('mapZoom', zoomS);   

  });
   //____________________________________________________________________________
	//var textName =document.getElementById("file-path");
	//var checkbox =document.getElementById("photo");


    //__________________________________________________________________________________XYtoLatLong

var popup = L.popup();

function onMapClick(e) {

    popup.setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");

  proj4.defs("EPSG:32637","+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs");

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:42'),[lon, lat]);

    var transUtm =proj4(proj4('EPSG:4326'),proj4('EPSG:32637'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    var eu=transUtm[0].toFixed(2);

    var nu = transUtm[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

    EInput.value=eu;

    NInput.value=nu;

}
map.on('click', onMapClick); 


//==============================================================================================ADD===MARKER========================================================
var coordinates = [];
var coordinates2 = [];
//var items= [];
var Feature=[];
var Feature2=[];
var markers = [];

var selectedRow = null; // لتتبع الصف المحدد
var markersList = [];   // قائمة لحفظ الماركرات المرتبطة بالصفوف

function addMarker() {    
    document.getElementById("btExcel").disabled = false;
    document.getElementById("btJson").disabled = false;
    document.getElementById("btPrint").disabled = false;

	document.getElementById("dxfToJson").disabled = false;
	
    var lat = document.getElementById('latInput').value;
    var lon = document.getElementById('lonInput').value;
    var txt = document.getElementById('nameInput').value;
    var eu = document.getElementById('EInput').value;
    var nu = document.getElementById('NInput').value;
    var status = document.getElementById('statusInput').value; 
    var century21icon = L.icon({
        iconUrl: 'js/images/mr22.png',
        iconSize: [20, 20]
    }); 

    var marker = L.marker([lat, lon], { draggable: true, icon: century21icon }).addTo(drawnItems);

    coordinates.push([lon, lat]);
    markers.push(marker);

    map.closePopup(); 
    map.setView([lat, lon]);
    marker.bindPopup(txt).openPopup(); 
    document.getElementById("nameInput").focus();

    // _____________________________________________________ TABLE

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10); // عمود جديد لـ Status

    cell1.innerHTML = txt;
    cell2.innerHTML = lat;
    cell3.innerHTML = lon;
    cell4.innerHTML = glatInput.value + '°' + mlatInput.value + "'" + slatInput.value + '"';
    cell5.innerHTML = glonInput.value + '°' + mlonInput.value + "'" + slonInput.value + '"';
    cell6.innerHTML = xInput.value;
    cell7.innerHTML = yInput.value;
    cell8.innerHTML = eu;
    cell9.innerHTML = nu;
    cell10.innerHTML = status; // إضافة قيمة الحالة هنا
    cell11.innerHTML = "<button class='deleteBtn'>🗑️ </button>";

    // _____________________________________________________ CLICK EVENT FOR FLYING AND SELECTION

    row.addEventListener('click', function(e) {
        if (e.target.classList.contains('deleteBtn')) {
            return;
        }

        map.flyTo([lat, lon], 18);

        if (selectedRow) {
            selectedRow.style.backgroundColor = "";
        }
        row.style.backgroundColor = "lightblue";
        selectedRow = row;
    });

    // _____________________________________________________ DELETE BUTTON FUNCTION

    var deleteBtn = cell11.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        map.removeLayer(marker);
        row.remove();
    });
}


//====================================================================


function onDelete(td){
selectedRow = td.parentElement.parentElement;

var lat= selectedRow.cells[1].innerHTML;
var lon= selectedRow.cells[2].innerHTML;
if(confirm('Möchten Sie ( '+selectedRow.cells[0].innerHTML+' ) wirklich löschen?')){
row = td.parentElement.parentElement;
document.getElementById("myTable").deleteRow(row.rowIndex);
//alert([`${lat},${lon}`]);
//removeMarker(lat, lon);
}
}
function removeMarker(){
    for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];
       // var markerCoords = marker.getLatLng();
    
        if (markerCoords.lat === 51 && markerCoords.lng === 10) {
          marker.removeFrom(drawnItems);
          markers.splice(i, 1);
          break;
        }
}
}

function onEdit(td) {
const selectedRow = td.parentElement.parentElement;
//alert(td.parentElement.rowIndex);
const textBox = document.getElementById("nameInput");
textBox.focus();
textBox.select();
//alert(rowIndex);
selectedRow.cells[0].innerHTML=nameInput.value;
selectedRow.cells[5].innerHTML=BemInput.value;

}
	//__JihadStyle		
		function JihadStyle(feature){
			return{
				fillColor: feature.properties.fillColor || "blue",
				color: feature.properties.color || "#000000",
				weight: 1,
				//opacity: 1,
				fillOpacity: parseFloat(document.getElementById('valBox').value)
			};
		}


  
//SAVE TABLE================================================================

function exportTableToGeoJSON() {
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");
    const features = [];

    if (rows.length < 2) {
        alert("الجدول فارغ أو لا يحتوي بيانات كافية.");
        return;
    }

    const headers = Array.from(rows[0].cells).map(cell => cell.textContent.trim());

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].cells;
        const properties = {};
        let lat = null, lon = null;

        for (let j = 0; j < cells.length && j < headers.length; j++) {
            const header = headers[j];
            const value = cells[j].textContent.trim();

            if (header && typeof header === "string") {
                if (header.toLowerCase().includes("lat")) lat = parseFloat(value);
                else if (header.toLowerCase().includes("lon")) lon = parseFloat(value);
                properties[header] = value;
            }
        }

        if (!isNaN(lat) && !isNaN(lon)) {
            features.push({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [lon, lat]
                },
                properties: properties
            });
        }
    }

    const geojson = {
        type: "FeatureCollection",
        features: features
    };

    const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "exported_data.geojson";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


//=================DRAG DROP======================
var listP=[];
var listL=[];
var listG=[];
FileReaderDrag= new FileReader();
let element = document.getElementById("tab");
element.removeAttribute("hidden");
var fileName;

	function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// rundom color Polygon
function JihadStyle(feature) {
    var color = feature.properties && feature.properties.fillColor ?
	feature.properties.fillColor: getRandomColor(); 
    return {
		color: "#000",
        fillColor: color,
         weight: 1.2,
        opacity: 1,
        fillOpacity: 0.8
    };
}
// rundom color Point
function stylePoint(feature, latlng) {
    var color = getRandomColor(); 
    return L.circleMarker(latlng, {
        radius: 5,
        fillColor: color,
        color: "#000",
        weight:1,
        opacity: 1,
        fillOpacity: 0.7
    });
}
//================================================DragDrop
        FileReaderDrag.onload=function(){  			
        var fileContent = FileReaderDrag.result;	
        var geojson = JSON.parse(fileContent);
		//var simplifield = turf.simplify(geojson, {tolerance:0.01, highQuality: false});
		    var layer = L.geoJSON(geojson, {
        style: function (feature) {
            if (feature.geometry.type === "Polygon" || feature.geometry.type === "MultiPolygon" ) {
                return JihadStyle(feature);
            }
            if ( feature.geometry.type === "MultiLineString" || feature.geometry.type === "LineString") {
                return {
                    color: 'black',    
                    weight: 2,        
                    fillOpacity: 0    
                };
            }
        },
        pointToLayer: function (feature, latlng) {
            if (feature.geometry.type === "Point" || feature.geometry.type === "MultiPoint") {
                return stylePoint(feature, latlng);
            }
        },
          onEachFeature: function(feature, layer){
		  var properties = layer.feature.properties;
  // Add HTML TABLE
  var tableHTML = '<table><tr><th>Property</th><th>Value</th></tr>';
  for (var key in properties) {
    tableHTML += '<tr><td>' + key + '</td><td>' + properties[key] + '</td></tr>';
  }
  tableHTML += '</table>';
  //  Popup 
  layer.bindPopup(tableHTML , {maxHeight: 400}).openPopup(); 	
          }
        });
		
        layer.addTo(DragDropItem);//ADD 2      
        var bounds = layer.getBounds();
		map.fitBounds(bounds); 
      document.getElementById("btExcel").disabled = false ;  
      document.getElementById("btPrint").disabled = false ;              
var list =geojson.features.map(feature =>{return feature.geometry.coordinates[0]});
//================================================================================
for (var i = 0; i < geojson.features.length; i++){
if(geojson.features[i].geometry.type=="Point" || geojson.features[i].geometry.type=="MultiPoint"){
    listP.push(list[i]);
}else if(geojson.features[i].geometry.type=="LineString" || geojson.features[i].geometry.type=="MultiLineString"){
    listL.push(list[i]);		
}else if(geojson.features[i].geometry.type=="Polygon" || geojson.features[i].geometry.type== "MultiPolygon"){
    listG.push(list[i]);
}else{
    alert('Error');
}
}       
document.getElementById('btnInfo').innerHTML = "Name: "+fileName +" - "+'<b><u>'+geojson.features.length+'</u></b>' +" :Zeilen ("+listP.length+" :Punkte , "+listL.length+" :Linien , "+listG.length+" :Polygone ) "
//if(geojson.features[i].geometry.type=="Point")
const thead = myTable.createTHead();
const headerRow = thead.insertRow();
// Add the coordinate columns to the header
const properties = geojson.features[0].properties;
Object.keys(properties).forEach(propertyName => {
  const headerCell = document.createElement('th');
  headerCell.textContent = propertyName;
  headerRow.appendChild(headerCell);
});//08082024
// Create table body
const tbody = myTable.createTBody();
let selectedLayer; // save selected 
let selectedRow;   // save Row in Table

geojson.features.forEach((feature) => {
    const row = tbody.insertRow();

    const properties = feature.properties;
    Object.keys(properties).forEach((key) => {
        const value = properties[key];
        const cell = row.insertCell();
        cell.innerHTML = ` ${value}`;
    });

    // Adding click event listener to the row
    row.addEventListener('click', () => {
        // Change the background color of the selected row
        if (selectedRow) {
            selectedRow.style.backgroundColor = ''; // Reset previous row's background color
        }
        row.style.backgroundColor = 'lightblue'; // Set new row's background color
        selectedRow = row; // Update the selectedRow reference
    
        // Fly to the feature on the map
        if (feature.geometry.type == "Point") {
            // النقطة تحتوي على إحداثيين فقط (خط طول، دائرة عرض)
            var latlng = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
            map.setView(latlng, 19); // تقريب على النقطة
        } else {
            // خطوط أو مضلعات
            var bounds = L.geoJSON(feature).getBounds();
            map.fitBounds(bounds);
        }
    });
    
});

// Fly to a feature on the map and change its style
function flyToFeature(feature) {
    // Get the feature's geometry type and bounds
    const bounds = L.geoJSON(feature).getBounds();

    // Check if a layer is selected and remove it if it exists on the map
    if (selectedLayer && map.hasLayer(selectedLayer)) {
        map.removeLayer(selectedLayer);
    }

    // Add the feature to the map to highlight it
    selectedLayer = L.geoJSON(feature, {
        style: {
            color: 'cyan',
            weight: 3
        }
    }).addTo(map);

    // Zoom to the selected feature dynamically based on its bounds
    map.fitBounds(bounds, {
        animate: true,
        duration: 0.5
    });
}

//08082024
}; 
// استماع للضغط على زر Esc

    
//============FILTER DATA====================================FILTER DATA
        function onGetsuccses(){
          alert("Succses");
        }; 
        function onFiledragOver(e){
          e.stopPropagation();
          e.preventDefault();
          e.dataTransfer.dropEffect ='copy';
        }
        function onFileDrop(e){
          e.stopPropagation();
          e.preventDefault();
          var files = e.dataTransfer.files; 
        var uploadeFile = files[0];
        FileReaderDrag.readAsText(uploadeFile);
        }
        var droDiv = document.getElementById('map');
        droDiv.addEventListener('dragover',onFiledragOver, false);
        droDiv.addEventListener('drop', onFileDrop, false);
//=========================DRAG=DROP=      
      

  

    
    //=================================================================EXPORT=TABLE=EXCEL=====================================================
//==============================================================================================================================================

     function exportTableToExcel(tableID, filename = '') {
    var tableSelect = document.getElementById(tableID);

    // Name File
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text += '<head><meta charset="UTF-8"><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

    tab_text += '<x:Name>Sheet1</x:Name>';
    tab_text += '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

    tab_text += tableSelect.outerHTML;
    tab_text += '</body></html>';

    var blob = new Blob([tab_text], { type: 'application/vnd.ms-excel' });

    //  FileSaver 
    saveAs(blob, filename);
}



       //---------------------------ADD MARKER==============================================================


    

     //Leaflet.draw__________________


     function calculateLengthAndArea(layer) {
      var geometry = layer.toGeoJSON().geometry;
      var length = turf.length(geometry, { units: 'meters' });
      var area = turf.area(geometry);
      return { length: length, area: area };
    }
    
    function addPopup(layer) {
      var content = document.createElement("textarea");
  
      content.addEventListener("keyup", function () {
          layer.feature.properties.desc = content.value;
      });
  
      layer.on("popupopen", function () {
          content.style.height = "150px";
          content.style.width = "150px";
          content.value = layer.feature.properties.desc;
  
          // berchnen Länge und Fläche 
          var lengthAndArea = calculateLengthAndArea(layer);
  
          if (lengthAndArea.length == 0) {// ______________________________Point
            content.style.height = "150px";
              var latLng = layer.getLatLng();
            //  content.value += "Name: ";
         //Tras
         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
         proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
         var lat = latLng.lat;
         var lon = latLng.lng; 
         var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25832'),[lon, lat]);
         var x=trans[0].toFixed(2);
         var y = trans[1].toFixed(2);    
    
        // content.value += "\n1-ETRS89 z.32N:\n_point\n" + x + "," + y +"\n" ;
         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
         proj4.defs("EPSG:31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");
         var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31467'),[lon, lat]);
         var xKG=trans[0].toFixed(2);
         var yKG = trans[1].toFixed(2); 
        // content.value += "\n2-Gauss-Kruger z.3:\n_point\n" + xKG + "," + yKG +"\n" ;

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
         proj4.defs("EPSG:320","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");
         var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:320'),[lon, lat]);
         var xLS=trans[0].toFixed(2);
         var yLS = trans[1].toFixed(2); 
        // content.value += "\n3-LS320:\n_point\n" + xLS + "," + yLS +"\n" ;
            } else if (lengthAndArea.area == 0) {// ________________________________________Line
            content.value += "Name: " + (layer.feature.properties.name || ''); 
            content.value += "\nLength: " + lengthAndArea.length.toFixed(2) + " m"; 
            var coordinates = "";
            var latLngs = layer.getLatLngs();
           // content.value += "\nETRS89 z.32N:\npl";
            //Tras Line
            proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
            proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
                      
            var trans = proj4(proj4('EPSG:4326'), proj4('EPSG:25832'), [lon, lat]);
            var x = trans[0].toFixed(2);
            var y = trans[1].toFixed(2);            
            var coordinates = "";
            latLngs.forEach(function (latLng, index) {
                var transPoint = proj4(proj4('EPSG:4326'), proj4('EPSG:25832'), [latLng.lng, latLng.lat]);
                var transX = transPoint[0].toFixed(2);
                var transY = transPoint[1].toFixed(2);            
                coordinates += "\n" + transX + "," + transY;            
                if (index < latLngs.length - 1) {
                    coordinates += "";                 
                }               
            });          
           // content.value += coordinates + "\n ";
           // content.value +="\n2-Gauss-Kruger z.3\npl"
           // GK
           proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
           proj4.defs("EPSG:31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");
        
           var trans = proj4(proj4('EPSG:4326'), proj4('EPSG:31467'), [lon, lat]);           
           var coordinates = "";
           latLngs.forEach(function (latLng, index) {
               var transPoint = proj4(proj4('EPSG:4326'), proj4('EPSG:31467'), [latLng.lng, latLng.lat]);
               var transXGK = transPoint[0].toFixed(2);
               var transYGK = transPoint[1].toFixed(2);            
               coordinates += "\n" + transXGK + "," + transYGK;            
               if (index < latLngs.length - 1) {
                   coordinates += "";                 
               }               
           });          
          // content.value += coordinates + "\n ";
          // content.value +="\n3-LS320\npl"
           //LS320
           proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
           proj4.defs("EPSG:320","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");
           var trans = proj4(proj4('EPSG:4326'), proj4('EPSG:320'), [lon, lat]);
           var xLS = trans[0].toFixed(2);
           var yLS = trans[1].toFixed(2);            
           var coordinates = "";
           latLngs.forEach(function (latLng, index) {
               var transPoint = proj4(proj4('EPSG:4326'), proj4('EPSG:320'), [latLng.lng, latLng.lat]);
               var transXLS = transPoint[0].toFixed(2);
               var transYLS = transPoint[1].toFixed(2);            
               coordinates += "\n" + transXLS + "," + transYLS;            
               if (index < latLngs.length - 1) {
                   coordinates += "";                 
               }               
           });          
          // content.value += coordinates + "\n ";
          } else if (lengthAndArea.area > 0) {// _________________________________Polygon
              content.value += "Name: " + (layer.feature.properties.name || '');  
              content.value += "\nLength: " + lengthAndArea.length.toFixed(2) + " m"; 
              content.value += "\nArea: " + lengthAndArea.area.toFixed(2) + " m²"; 
              var coordinates = "";
              var latLngs = layer.toGeoJSON().geometry.coordinates[0];
            //  content.value += "\n1-ETRS89 z.32N:\npl";
              proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
             proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");          
              var coordinates = "";
              latLngs.forEach(function (latLng, index) {
                  if (isNaN(latLng[0]) || isNaN(latLng[1])) {
                      console.error("Invalid coordinates at index " + index, latLng);
                      return;
                  }             
                  var transPoint = proj4(proj4('EPSG:4326'), proj4('EPSG:25832'), [latLng[0], latLng[1]]);              
                  if (isNaN(transPoint[0]) || isNaN(transPoint[1])) {
                      console.error("Error converting coordinates at index " + index, latLng, transPoint);
                      return;
                  }              
                  var x = transPoint[0].toFixed(2);
                  var y = transPoint[1].toFixed(2);              
                  coordinates += "\n" + x + "," + y;              
                  if (index < latLngs.length - 1) {
                      coordinates += "";
                  }
              });
              
             // content.value += coordinates + "\n ";
			 // content.value +="\n2-Gauss-Kruger z.3:\npl"
             // GK
               proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
              proj4.defs("EPSG:31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");             
              var coordinates = "";
              latLngs.forEach(function (latLng, index) {
                  if (isNaN(latLng[0]) || isNaN(latLng[1])) {
                      console.error("Invalid coordinates at index " + index, latLng);
                      return;
                  }             
                  var transPoint = proj4(proj4('EPSG:4326'), proj4('EPSG:31467'), [latLng[0], latLng[1]]);              
                  if (isNaN(transPoint[0]) || isNaN(transPoint[1])) {
                      console.error("Error converting coordinates at index " + index, latLng, transPoint);
                      return;
                  }              
                  var xGK = transPoint[0].toFixed(2);
                  var yGK = transPoint[1].toFixed(2);              
                  coordinates += "\n" + xGK + "," + yGK;              
                  if (index < latLngs.length - 1) {
                      coordinates += "";
                  }
              });
              
             // content.value += coordinates + "\n ";
			 // content.value +="\n3-LS320:\npl"
			  //LS320
			  proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
              proj4.defs("EPSG:320","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");
              var coordinates = "";
              latLngs.forEach(function (latLng, index) {
                  if (isNaN(latLng[0]) || isNaN(latLng[1])) {
                      console.error("Invalid coordinates at index " + index, latLng);
                      return;
                  }             
                  var transPoint = proj4(proj4('EPSG:4326'), proj4('EPSG:320'), [latLng[0], latLng[1]]);              
                  if (isNaN(transPoint[0]) || isNaN(transPoint[1])) {
                      console.error("Error converting coordinates at index " + index, latLng, transPoint);
                      return;
                  }              
                  var xLS = transPoint[0].toFixed(2);
                  var yLS = transPoint[1].toFixed(2);              
                  coordinates += "\n" + xLS + "," + yLS;              
                  if (index < latLngs.length - 1) {
                      coordinates += "";
                  }
              });
              
             // content.value += coordinates + "\n ";
          }
  
          content.focus();
      });
  
      layer.bindPopup(content).openPopup();
  }
  
  document.getElementById("convert").addEventListener("click", function () {
      var blob = new Blob([JSON.stringify(drawnItems.toGeoJSON())], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "drawlayer.geojson");
  });
  






   //____________________________________________________

     function saveIdIW() {

       var sName = $('#shapeName').val();

       var sDesc = $('#shapeDesc').val();

       var drawings = drawnItems.getLayers(); //drawnItems is a container for the drawn objects

       drawings[drawings.length - 1].title = sName;

       drawings[drawings.length - 1].content = sDesc;

       map.closePopup();

     };

     



     //Export

   

 
        //__________________________________Save Table_______________________________________________________________
       
        //_____________http://localhost:8080/geoserver/leaflet_coobook/wms___________________
var item2=[];
 //__________________________________Save Table2____________________get Bounds from Polygon___________________________________________


        //____________________________________________________________________________________________





        var filePathTextBox = document.getElementById("file-path");
		
		// Listen for the "drop" event on the document
		document.addEventListener("drop", function(event) {
			// Prevent the default behavior of the browser
			event.preventDefault();
			
			// Get the dropped file
			const file = event.dataTransfer.files[0];
			//const path = file.path;
           // const name = file.name;
			// Set the value of the file path text box to the path and name of the dropped file
			filePathTextBox.value = `${name}`;
           // alert(name);
		});
		
		// Prevent the default behavior of the "dragover" event on the document
		document.addEventListener("dragover", function(event) {
			event.preventDefault();
		});

rowI=[];

//============================SEARCHE FUNCTION=======================

var searchBox_3 = document.getElementById("searchBox_3");
searchBox_3.addEventListener("keyup",function() {
var input, filter, table, tr, td, i, count;
input = document.getElementById("searchBox_3");
filter = input.value.toUpperCase();
table = document.getElementById("myTable");
tr = table.getElementsByTagName("tr");
count = 0;
for (i = 0; i < tr.length; i++) {
td = tr[i].getElementsByTagName("td");
for (var j = 0; j < td.length; j++) {
if (td[j]) {
if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
tr[i].style.display = "";
count++;
break;
} else {
tr[i].style.display = "none";
}
}
}
}
//document.getElementById("mySpan3").innerHTML ="("+ count + " Erg.)";
document.getElementById("btnInfo").innerHTML =" Table Result: " + count  ;
})


//____SELECKT ALL
var checkboxes = document.getElementsByClassName('checkBox');
var checkAll = document.getElementById('checkAll');
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', updateCheckAll);
}

function updateCheckAll() {
  var allChecked = true;
  for (var i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      allChecked = false;
      break;
    }
  }
  checkAll.checked = allChecked;
}
//_____________________________________________MANGEL PUNKTE Zeigen_________________________________________________________

//_______________________________________________________________________________________________________
function btnBuffer(){
if(BufInput.value!==""){
var umf = BufInput.value*2 * Math.PI;
var fla= BufInput.value*BufInput.value*Math.PI;
var flk= (BufInput.value*BufInput.value*Math.PI)/1000000;
var circle =L.circle([latInput.value, lonInput.value], {
radius: BufInput.value,
color: 'red',
dashArray: '10,5', 
filllColor:'#f03',
fillOpacity:0.1
}).addTo(DragDropItem);	
 circle.bindPopup( 'Durchmesser: '+BufInput.value*2 +' m'+'<br>'+'Radius: '+BufInput.value+' m'+'<br>'+'Umfang: '+umf.toFixed(2)+' m'+'<br>'+'Fläche: '+fla.toFixed(2)+' m2'+'<br>'+'Fläche:'+flk.toFixed(2)+' km2').openPopup();
var circle =L.circle([latInput.value, lonInput.value], {
radius: 0.1,
color: 'red'
}).addTo(DragDropItem);
}else{
alert("Klicken Sie of die Karte und geben Sie den Radius ein..!");
}	
}

//________________________________
var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");
 
  for (var i = 0; i < rows.length; i++) {
    var statusCell = rows[i].getElementsByTagName("td")[12]; 
    var typeCell = rows[i].getElementsByTagName("td")[6]; 
    var datumCell = rows[i].getElementsByTagName("td")[2]; 
    if (statusCell && typeCell && datumCell) {
      var statusText = statusCell.textContent || statusCell.innerText;
      var typeText = typeCell.textContent || typeCell.innerText;
      //var datumText = datumCell.textContent || datumCell.innerText;
      if ((statusText.toUpperCase() === selectedStatus.toUpperCase() || selectedStatus === "all") &&
	(typeText.toUpperCase() === selectedType.toUpperCase() || selectedType === "all")) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }

/*
//____________________________________________flyToFeature on Table
function flyToFeatureMap(feature) {
  const typeP = feature.geometry.type;
  const bounds = L.geoJSON(feature).getBounds();

var table = document.getElementById("myTable");
var rows = table.getElementsByTagName("tr");

for (var i = 1; i < rows.length; i++) { 
  rows[i].onclick = function() {
    var cells = this.getElementsByTagName("td");
    var rowIndex = this.rowIndex - 1; 
    //console.log(rowIndex);
    
      var feature = json_mangel_1.features[rowIndex];
var coordinates =feature.geometry.coordinates;
var lat = coordinates[1];
var lon = coordinates[0];
map.flyTo([lat, lon],21,{
animate: true,
duration: 0.5});    
  };
}
}
*/

function addTableHeaders(table, feature) {
    var header = table.createTHead();
    var row = header.insertRow(0);

    // key
    for (var key in feature.properties) {
        if (feature.properties.hasOwnProperty(key)) {
            var cell = row.insertCell(-1);
            cell.innerHTML = `<b>${key}</b>`; // Add to table
        }
    }
}
/* flyToFeatureMap
function flyToFeatureMap1(feature) {
    // fitBounds 
    var coordinates = feature.geometry.coordinates;
	if(feature.geometry.type=="LineString" ){
		var latLngs = coordinates.map(coord => [coord[1], coord[0]]);
	map.fitBounds(latLngs); 
	}else{
var latLngs = coordinates.map(line => line.map(coord => [coord[1], coord[0]]));
		const bounds = L.geoJSON(feature).getBounds();
		 map.fitBounds(latLngs);
         alert("N");
				 
	}
}*/
// color change
function highlightFeatureOnMap(feature) {
    var coordinates = feature.geometry.coordinates;
    var latLngs;
    var popupContent = `<div style="color: blue;
	font-size: 16px;
	font-weight: bold;"><b>Name: </b><u>${feature.properties.Strassenname}</u><br><b> Reviere: </b>${feature.properties.Reviere}<br><b> Alte Baukl.: </b>${feature.properties.Alte_BauKl}<br><b> Belastungsklassen: </b>${feature.properties.Belastungsklassen}<br> <b>Sonstiege:</b> ${feature.properties.Sonstiege}`;; // يمكنك تخصيص المحتوى بناءً على بيانات الـ feature

    if (feature.geometry.type == "LineString") {
        latLngs = coordinates.map(coord => [coord[1], coord[0]]); // تحويل [Lon, Lat] إلى [Lat, Lon]
    } else {
        latLngs = coordinates.map(line => line.map(coord => [coord[1], coord[0]])); // تحويل [Lon, Lat] إلى [Lat, Lon]
    }
    // clearLine Highlighting
    clearLineHighlighting();
    // Highlight the selected line
    var highlightedLine = L.polyline(latLngs, { color: 'cyan', weight: 6 }).addTo(map);
    // Bind and open the popup
    highlightedLine.bindPopup(popupContent).openPopup();
    // Store the highlighted layer in the feature
    feature.highlightedLayer = highlightedLine;
}
// clearLine Highlighting
function clearLineHighlighting() {
    // removeLayer
    json_bauKlassen_1.features.forEach(function (feature) {
        if (feature.highlightedLayer) {
            map.removeLayer(feature.highlightedLayer);
            delete feature.highlightedLayer;
        }
    });
}
// Row color
function clearRowHighlighting() {
    var rows = document.getElementById("myTable").getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = ''; 
        rows[i].style.color = ''; 
    }
}
var dxfLayer = L.geoJSON(null, {
    style: function(feature) {
        return {
            color: getColorByLayer(feature.properties.layer),
            weight: feature.properties.type === "Circle" ? 1 : 2,
            fillColor: feature.properties.type === "Circle" ? getColorByLayer(feature.properties.layer) : undefined,
            fillOpacity: feature.properties.type === "Circle" ? 0.5 : 0
        };
    },
    onEachFeature: function(feature, layer) {
        let props = feature.properties;
        let popupContent = `<b>Layer:</b> ${props.layer}<br><b>Type:</b> ${props.type}`;
        if (props.radius) popupContent += `<br><b> Raduis:</b> ${props.radius} Meter`;
        layer.bindPopup(popupContent);
    }
}).addTo(map);

// تعريف أنظمة الإحداثيات
proj4.defs("EPSG:42","+proj=laea +lat_0=34.65 +lon_0=37.35 +x_0=300000 +y_0=300000 +ellps=clrk80 +units=m +no_defs");
//proj4.defs("EPSG:32637","+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs");

var sourceCRS = "EPSG:42"; // اختياري: تغيير حسب ملفك

function convertCoords(x, y) {
    var latlon = proj4(sourceCRS, "EPSG:4326", [x, y]);
    return latlon;
}

function getColorByLayer(layer) {
    const colors = {
        "Oil": "green",
        "Gas": "gray",
        "Dry": "red",
        "Default": "blue"
    };
    return colors[layer] || colors["Default"];
}

// تحميل GeoJSON
function downloadGeoJSON() {
	
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dxfLayer.toGeoJSON()));
    var dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "dxf_data.geojson");
    dlAnchorElem.click();
}

// مسح الخريطة
function clearMap() {
    // 1. مسح طبقة DXF (إن وُجدت)
    if (typeof dxfLayer !== 'undefined' && dxfLayer) {
        dxfLayer.clearLayers();
    }

    // 2. مسح النقاط المضافة إلى خريطة (مثلاً من ملف إكسل)
    if (typeof drawnItems !== 'undefined' && drawnItems) {
        drawnItems.clearLayers();
    }
	if (typeof DragDropItem !== 'undefined' && DragDropItem) {
        DragDropItem.clearLayers();
    }
    // 3. مسح محتوى جدول #myTable مع الإبقاء على الرؤوس فقط
    const table = document.getElementById("myTable");
    const rowCount = table.rows.length;

    // إذا كان فيه أكثر من صف (صف العناوين)، احذف الباقي
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Lat (DD)</th>
            <th>Lon (DD)</th>
            <th>Lat (DMS)</th>
            <th>Lon (DMS)</th>
            <th>X-Lam</th> 
            <th>Y-Lam</th>
            <th>E-utm</th> 
            <th>N-utm</th>
            <th>Status</th>
        </tr>
    `;
	   // 4. إعادة تهيئة input file للسماح بتحميل نفس الملف مجددًا
    const oldInput = document.getElementById("excelInput");
if (oldInput) {
    const newInput = oldInput.cloneNode(true);
    newInput.value = "";
    oldInput.parentNode.replaceChild(newInput, oldInput);

    // إعادة ربط حدث onchange بعد الاستبدال
    newInput.addEventListener("change", importExcel);
}

    // 5. إعادة تعيين المصفوفات إن وُجدت
    if (typeof coordinates !== 'undefined') coordinates = [];
    if (typeof markers !== 'undefined') markers = [];

    // 6. مسح الطبقة المحددة إن وُجدت
    if (typeof selectedLayer !== 'undefined' && map.hasLayer(selectedLayer)) {
        map.removeLayer(selectedLayer);
        selectedLayer = null;
    }
	// 🔁 إعادة بناء عنصر input بالكامل لتجنب مشاكل التحميل المكرر
const wrapper = document.getElementById("excelInputWrapper");
if (wrapper) {
    wrapper.innerHTML = `
        <input type="file" id="excelInput" accept=".xls,.xlsx" style="display: none;">
        <label for="excelInput" style="cursor:pointer; background:#4CAF50; color:#fff; padding:6px 12px; border-radius:6px;">
          📥 Import Excel
        </label>
    `;

    // 🧠 ربط الحدث من جديد
    document.getElementById("excelInput").addEventListener("change", importExcel);
}

}


// التعامل مع السحب والإفلات
var dropzone = document.getElementById('dropzone');

dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', function(e) {
    e.preventDefault();
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    dropzone.classList.remove('dragover');

    var file = e.dataTransfer.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(event) {
        parseDXF(event.target.result);
    };
    reader.readAsText(file);
});

// التعامل مع اختيار ملف بالضغط
dropzone.addEventListener('click', function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.dxf';
    input.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(event) {
            parseDXF(event.target.result);
        };
        reader.readAsText(file);
    };
    input.click();
});

// تحليل DXF
function parseDXF(content) {
	document.getElementById("dxfToJson").disabled = false;
    var parser = new DxfParser();
    try {
        var dxf = parser.parseSync(content);
        var features = [];

        dxf.entities.forEach(function(entity) {
            if (entity.type === "LINE") {
                var coords = [
                    convertCoords(entity.vertices[0].x, entity.vertices[0].y),
                    convertCoords(entity.vertices[1].x, entity.vertices[1].y)
                ];
                features.push({
                    type: "Feature",
                    geometry: { type: "LineString", coordinates: coords },
                    properties: { layer: entity.layer, type: "Line" }
                });
            } else if (entity.type === "CIRCLE" ) {
                var center = convertCoords(entity.center.x, entity.center.y);
                features.push({
                    type: "Feature",
                    geometry: { type: "Point", coordinates: center },
                    properties: { layer: entity.layer, type: "Circle", radius: entity.radius }
                });
            } else if (entity.type === "LWPOLYLINE") {
                var coords = entity.vertices.map(function(v) {
                    return convertCoords(v.x, v.y);
                });
                features.push({
                    type: "Feature",
                    geometry: { type: entity.shape ? "Polygon" : "LineString", coordinates: entity.shape ? [coords] : coords },
                    properties: { layer: entity.layer, type: entity.shape ? "Polygon" : "Polyline" }
                });
            }
        });

        var geojson = { type: "FeatureCollection", features: features };
        dxfLayer.addData(geojson);
        map.fitBounds(dxfLayer.getBounds());

    } catch (err) {
        console.error(err.message);
        alert('خطأ في قراءة ملف DXF');
    }
}