/*
document.onreadystatechange = function(){
var loadingBar = document.getElementById('loadingBar');
if(document.readyState==='loading'){
loadingBar.style.display='block';
alert("B");
}else if
(document.readyState==='complete'){
loadingBar.style.display='none';
alert("E");
}
};
*/

//___________________________________________________________save__ZoomLevel _ mousemove
var center = JSON.parse(localStorage.getItem('mapCenter'));
var zoom = localStorage.getItem('mapZoom');

if (center && zoom) {
    map.setView([center.lat, center.lng], zoom);
}else{
map.setView([53.460868, 10.188103], 12);
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

    var ind = document.getElementById("ddselect");

    var i = ind.selectedIndex;

    if (i==0){

           // alert("Select Projection!")

    }else if(i == 1) {

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

         proj4.defs("EPSG:25832","+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:25832'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 2){

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

       proj4.defs("EPSG:25833","+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

       // proj4.defs("EPSG:25833","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:25833'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 3){

            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

         proj4.defs("EPSG:5520","+proj=tmerc +lat_0=0 +lon_0=3 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:5520'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 4){

            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

         proj4.defs("EPSG:31466","+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:31466'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 5){

            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

         proj4.defs("EPSG:31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:31467'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon; 

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

        }else if(i == 6){

            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

         proj4.defs("EPSG:31468","+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:31468'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon; 

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

        }else if(i == 7){

            proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

         proj4.defs("EPSG:31469","+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:31469'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 8){

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

        proj4.defs("EPSG:320","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:320'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 9){ //              7s

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

        proj4.defs("EPSG:102328","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=2500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:102328'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon; 

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

        }else if(i == 10){

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

        proj4.defs("EPSG:102359","+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:102359'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 11){

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

        proj4.defs("EPSG:4647","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:4647'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon;

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

        }else if(i == 12){

         proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

        proj4.defs("EPSG:5650","+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=33500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

         var x = xInput.value;

         var y = yInput.value;

         var trans =proj4(proj4('EPSG:5650'),proj4('EPSG:4326'),[x, y]);

         var lon=trans[0].toFixed(7);

         var lat = trans[1].toFixed(7);

         latInput.value=lat;

         lonInput.value=lon; 

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

        }else{

        }

    }

    //Button image__________________________________________________________________ <button id="toggleButton"><img src="js/images/imageOff.png" style='width:50px' alt="button" /></button>
// Get the toggle button element
const toggleButton = document.getElementById("toggleButton");

// Set the initial state of the button
let isButtonOn = false;

// Add a click event listener to the button
toggleButton.addEventListener("click", () => {
  // Toggle the state of the button
  isButtonOn = !isButtonOn;

  // Change the image based on the button state
  if (isButtonOn) {
    toggleButton.innerHTML = '<img src="js/images/imageOn.png" style=width:30px alt="button" />';
    document.getElementById("nameLabel").innerHTML="Pfad: "; 
$('#file-path').show();
$('#pfadInput').show();
$('#nameInput').hide();
  } else {
    toggleButton.innerHTML = '<img src="js/images/imageOff.png" style=width:30px alt="button" />';
    document.getElementById("nameLabel").innerHTML="Name: "; 
    $('#file-path').hide();
  $('#pfadInput').hide();
  $('#nameInput').show();
  }
});
//________________________________________________________________________________________mousemove
map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;
    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25832'),[lon, lat]);
    var x=trans[0].toFixed(2);
    var y = trans[1].toFixed(2);
   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#FF0000"> ETRS89:</u> '+x +','+ y+'</u>' ;

    var str = L.latLng(map.getCenter())+"  Zoom Level: "+map.getZoom()+"  |  "+`&copy;2024 Hamburg <a href="https://www.hamburg.de/bergedorf" target='_blank'>Bergedorf</a>  | <a href="file:///G:/D4/MR-NEU/Allgemein/MR2-Organisation/Organisation.html" target='_blank'>Organisation MR</a>  | Abteilungsleitung Tiefbau-MR 20 &copy;<a href="mailto:mona.ruehle@bergedorf.hamburg.de?subject=Web MAP"> M.Rühle </a>  | Support &copy; <a href="mailto:jihad.alalloush@bergedorf.hamburg.de?subject=Web MAP"> J.Alalloush  |  </a> `+"Heute: "+ today ; 
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

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

        proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
        proj4.defs("EPSG:25832","+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = e.latlng.lat;
    var lon = e.latlng.lng;
    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25832'),[lon, lat]);
    var x=trans[0].toFixed(2);
    var y = trans[1].toFixed(2);
    xInput.value=x;
    yInput.value=y;


//--------------------------------GMS  lat

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

        //--------------------------------"desc":"<a href='img\\Familie.jpg' target='_blank'><img src='img\\Familie.jpg' style='width:300px'</a><br>2012"

}
map.on('click', onMapClick);
//==============================================================================================ADD===MARKER========================================================
var coordinates = [];
var coordinates2 = [];
//var items= [];
var Feature=[];
var Feature2=[];
var markers = [];
function addMarker(){
document.getElementById("btExcel").disabled = false ;
document.getElementById("btJson").disabled = false;
document.getElementById("btPrint").disabled = false;

    var lat = document.getElementById('latInput').value;
    var lon =document.getElementById('lonInput').value;
    var txt =document.getElementById('nameInput').value;
    var pfadtxt =document.getElementById('pfadInput').value;
    var imgtxt =document.getElementById('file-path').value;
   // alert(imgtxt);
    var fintxt=pfadtxt+"/"+imgtxt;

    var erg ="<a href='" + fintxt +"' target='_blank'><img src='" + fintxt + "' style='width:150px '</a><br><b>" +imgtxt+"</b>";


 var century21icon = L.icon({
    iconUrl: 'js/images/mr22.png',
    iconSize: [20, 20]
    }); 
    marker=L.marker([lat,lon],{draggable:true,icon: century21icon}).addTo(drawnItems);//map, drawnItems
   coordinates.push([lon,lat]);
   var coordinate0=`[${lat},${lon}]`
   markers.push(coordinate0);
 //items.push(["["+"lon"+":"+lon,"lan"+":"+lat+"]"]);
 // alert(markers);
  
  map.closePopup(); 
  if (isButtonOn){
    Feature.push(erg);//--------------------------
    marker.bindPopup(erg).openPopup(); 
}else{
  
    marker.bindPopup(txt).openPopup();
    Feature.push(txt);//--------------------------
}
    map.setView([lat , lon]);

   
// Buttons disabeled false
     document.getElementById("nameInput").focus();
  

let element = document.getElementById("tab");
element.removeAttribute("hidden");


     // _____________________________________________________LIST 
/*
marker.on('dragend', function (e) {
   // latInput.value  = marker.getLatLng().lat;
   // lonInput.value = marker.getLatLng().lng;
   // cell1.innerHTML = nameInput.value;
  //cell2.innerHTML = latInput.value;
 //cell3.innerHTML = lonInput.value;
marker.bindPopup(nameInput.value).openPopup();
});

//___________________________________

   

     var headerRow = table.rows[0];

  var nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  headerRow.appendChild(nameHeader);

  var latHeader = document.createElement("th");
  latHeader.textContent = "Lat";
  headerRow.appendChild(latHeader);

  var lonHeader = document.createElement("th");
  lonHeader.textContent = "Lon";
  headerRow.appendChild(lonHeader);

  var xHeader = document.createElement("th");
  xHeader.textContent = "X";
  headerRow.appendChild(xHeader);
  var yHeader = document.createElement("th");
 yHeader.textContent = "Y";
  headerRow.appendChild(yHeader);
  var BemHeader = document.createElement("th");
  BemHeader.textContent = "Bemerkungen";
  headerRow.appendChild(BemHeader);

  var datHeader = document.createElement("th");
  datHeader.textContent = "Datum";
  headerRow.appendChild(datHeader);

*/

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

   //  var cell9 = row.insertCell(8);

    // var cell10 = row.insertCell(9);


 if (isButtonOn){
        cell1.innerHTML =erg;	
       // alert("on");
    }else{  	
        cell1.innerHTML =txt;
        //alert("off");
};
    

     //cell1.innerHTML =nameInput.value// `<input type="text" name="name" id="nameInput5" value=${nameInput.value}> `;

     cell2.innerHTML = lat;

     cell3.innerHTML = lon;

    // cell4.innerHTML = glatInput.value +'°' +mlatInput.value +"'"+slatInput.value +'"';

     //cell5.innerHTML = glonInput.value +'°' +mlonInput.value +"'"+slonInput.value +'"';

     cell4.innerHTML =xInput.value;

     cell5.innerHTML =yInput.value;

     cell6.innerHTML =BemInput.value;//`<input type="text" name="bem" id="BemInput5" value=${BemInput.value}> `;

     cell7.innerHTML =today;

     cell8.innerHTML =`<select name="prio" id="prio">
  <option value="normal">Normal</option>
  <option value="niedrig">Niedrig</option>
  <option value="mittel">Mittel</option>
  <option value="hoch">Hoch</option>
</select><button onClick="onEdit(this)"><img src="js/images/editIcon.png" style='width:20px'></button></button><button onClick="onDelete(this)"><img src="js/images/deleteIcon.png" style='width:20px'></button>`;
nameInput.value="";
BemInput.value="";
//====================================================================


  // Add click event listener to fly to the feature on row click
 row.addEventListener('click', (event) => {
    //var rowIndex = event.target.parentElement.rowIndex;
  //alert(row.cells[0].innerHTML);

// flyToFeature(feature);
//selectedRow = td.parentElement.parentElement;
map.flyTo([row.cells[1].innerHTML, row.cells[2].innerHTML],18,{
animate: true,
duration: 1});
nameInput.value=row.cells[0].innerHTML;
latInput.value=row.cells[1].innerHTML;
lonInput.value=row.cells[2].innerHTML;
xInput.value=row.cells[3].innerHTML;
yInput.value=row.cells[4].innerHTML;
BemInput.value=row.cells[5].innerHTML;

// Remove background color from all rows
var rows = table.getElementsByTagName("tr");
// var rowIndex = row.rowIndex;
for (var i = 1; i < rows.length; i++) {
rows[i].style.backgroundColor = "";
}

// Set background color of selected row
row.style.backgroundColor ="#94d1fa" ;
const textBox = document.getElementById("nameInput");
textBox.focus();
textBox.select();
  });
};


//=====================================================================


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

function JihadStyle(feature) {
    return {
      fillColor: 'blue',
      weight: 1.5,
      opacity: 1,
      color: 'black',
      fillOpacity: 0.1
    };
  }


  
//SAVE TABLE================================================================

 function btnJson(){
            var featureCollection = {
"type": "FeatureCollection",
"features": []
};

// Gehe durch alle Zeilen der Tabelle und erstelle ein GeoJSON-Objekt für jede Zeile
var table = document.getElementById("myTable");

for (var i = 1; i < table.rows.length; i++) {
// Extrahiere die Namen der Orte
var desc= table.rows[i].cells[0].innerHTML;
var X = table.rows[i].cells[3].innerHTML;
var Y = table.rows[i].cells[4].innerHTML;
var Bem = table.rows[i].cells[5].innerHTML;
var Datum = table.rows[i].cells[6].innerHTML;
// Extrahiere die Koordinaten aus den Spalten "lat" und "lon"
var lat = parseFloat(table.rows[i].cells[1].innerHTML);
var lon = parseFloat(table.rows[i].cells[2].innerHTML);

// Erstelle ein GeoJSON-Feature-Objekt für den aktuellen Ort
var feature = {
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [lon, lat]
},
"properties": {
"desc": desc,
"X":X,
"Y":Y,
"Bem": Bem,
"Datum":Datum
}
};

// Füge das GeoJSON-Feature-Objekt zur Feature Collection hinzu
featureCollection.features.push(feature);
}

          // Convert the feature collection object to a GeoJSON string
          var geojsonString = JSON.stringify(featureCollection);
          
          // Log the GeoJSON string to the console
         // console.log(geojsonString);
          var blob = new Blob([geojsonString],

            { type: "text/plain;charset=utf-8" }); 
  
         saveAs(blob, "DataTable.geojson");  
        }


    


//=========================================================


//=================================================================DRAG DROP====================================================================

var listP=[];
var listL=[];
var listG=[];	
//==============================================================================================================================================

    FileReader= new FileReader();

let element = document.getElementById("tab");

element.removeAttribute("hidden");
var fileName;
//===============================================

		var map2= document.getElementById("map");
		map2.addEventListener("drop", function(event) {

			event.preventDefault();
			const file = event.dataTransfer.files[0];
			const name = file.name;
			fileName=name;
		});
		
		map2.addEventListener("dragover", function(event) {
			event.preventDefault();
		});
//================================================ DragDrop
        FileReader.onload=function(){
       
        var fileContent = FileReader.result;
	
        var geojson = JSON.parse(fileContent);

        var layer = L.geoJSON(geojson,{style:JihadStyle,

          onEachFeature: function(feature, layer){

           //layer.bindPopup(feature.properties.desc);
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
//======================================================================================================
//document.getElementById("mySpan").innerHTML= geojson.features.length +" Zeilen"//+geojson.features[0].geometry.type);
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
//====================================================if(geojson.features[i].geometry.type=="Point")=============================================
const thead = myTable.createTHead();
const headerRow = thead.insertRow();

// Add the coordinate columns to the header

const properties = geojson.features[0].properties;
Object.keys(properties).forEach(propertyName => {
  const headerCell = document.createElement('th');
  headerCell.textContent = propertyName;
  headerRow.appendChild(headerCell);
});
// Create table body
const tbody = myTable.createTBody();
geojson.features.forEach((feature) => {
const row = tbody.insertRow();

const properties = feature.properties;
Object.keys(properties).forEach((key) => {
const value = properties[key];
const cell = row.insertCell();

cell.innerHTML = ` ${value}`;
});

  // Add coordinates cell--<td>${name[i]}</td>
  //const coordsCell = row.insertCell();
 // coordsCell.innerText = JSON.stringify(feature.geometry.type);

  // Add click event listener to fly to the feature on row click
 row.addEventListener('click', () => {
    flyToFeature(feature);

  });
});
// Fly to a feature on the map
function flyToFeature(feature) {
  const typeP = feature.geometry.type;
  const bounds = L.geoJSON(feature).getBounds();
//=========================================================================================

const obj =feature.properties;
const arr = Object.keys(obj);
console.log(arr[0]);
//============================================================================================
var sw = bounds.getSouthWest();
//var ne = bounds.getNorthEast();

if(typeP=="Point"){
map.flyTo([sw.lat, sw.lng],22,{
animate: true,
duration: 0.5});
}else{
map.flyToBounds(bounds,{
zoom: 22,
animate: true,
duration: 0.5});
//L.geoJSON(feature.bindPopup('Hello world!'))
}

  

//alert("Klicked");
}
};

 

//=======================================================================================================
     //  map.flyTo([sw.lat, row.cells[2].innerHTML],18,{
//animate: true,
//duration: 1});
        
//============FILTER DATA====================================FILTER DATA

//__________________________________________________________________________________________________________________

        function onGetsuccses(){

          alert("Succses");

        }; 
        function onFiledragOver(e){

          e.stopPropagation();

          e.preventDefault();

          e.dataTransfer.dropEffect ='copy';
          //alert ("DragOver");

        }

        function onFileDrop(e){

          e.stopPropagation();

          e.preventDefault();

          var files = e.dataTransfer.files; 

        var uploadeFile = files[0];

        FileReader.readAsText(uploadeFile);
        //alert ("DragDrop");
        }

        var droDiv = document.getElementById('map');

        droDiv.addEventListener('dragover',onFiledragOver, false);

        droDiv.addEventListener('drop', onFileDrop, false);

   
//=======================================================================================================================================================
 





//=================================================================DRAG=DROP=============================================================================
       
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

            var ind = document.getElementById("ddselect");

	    var i = ind.selectedIndex;

        if (i==0){

        }else if(i == 1) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:25832","+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25832'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

        }else if(i == 2) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:25833","+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25833'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

        }else if(i == 3) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:5520","+proj=tmerc +lat_0=0 +lon_0=3 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:5520'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

        }else if(i == 4) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:31466","+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31466'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

        }else if(i == 5) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31467'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

        }else if(i == 6) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:31468","+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31468'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

        }else if(i == 7) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:31469","+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31469'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}else if(i == 8) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:320","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:320'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}else if(i == 9) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:102328","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=2500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:102328'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}else if(i == 10) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:102359","+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:102359'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}else if(i == 11) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:4647","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:4647'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}else if(i == 12) { proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

    proj4.defs("EPSG:5650","+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=33500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    var lat = latInput.value;

    var lon = lonInput.value;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:5650'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

        }else{}

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

    

   function projektion(){

if (xInput.value==0){

    alert("Geben Sie X Coordinate ein!");

}else if (xInput.value< -139635 ){  

    alert("das ist local Projektion oder außer Deutschland!");

}else if (xInput.value> -139635 && xInput.value<280376){

    document.getElementById("ddselect").value="ETRS89 / UTM zone 33N (EPSG:25833)";

}else if (xInput.value> 280376 && xInput.value<502918){

    alert(" oder ETRS_1989_UTM_Zone_332N_7stellen");

    document.getElementById("ddselect").value="ETRS89 / UTM zone 32N (EPSG:25832)";

}else if (xInput.value>= 502918 && xInput.value<921294){

    document.getElementById("ddselect").value="ETRS89 / UTM zone 32N (EPSG:25832)";

}else if (xInput.value> 921294 && xInput.value<1700983){//

    alert("das ist local Projektion oder außer Deutschland!");

}else if (xInput.value> 1700983 && xInput.value<2280376){

    document.getElementById("ddselect").value="DHDN / 3-deg. Gauss-Kruger z-1 (EPSG:5520)";

}else if (xInput.value> 2280376 && xInput.value<2339186){

    document.getElementById("ddselect").value="ETRS_1989_UTM_Zone_32N_7st.(EPSG:102328)";

    alert(" oder DHDN_3_Degree_Gauss_Zone_1");

}else if (xInput.value> 2339186 && xInput.value<2490670){

    document.getElementById("ddselect").value="ETRS_1989_UTM_Zone_32N_7st.(EPSG:102328)";

}else if (xInput.value> 2490670 && xInput.value<2860365){

    document.getElementById("ddselect").value="DHDN / 3-deg. Gauss-Kruger z-2 (EPSG:31466)";

    alert("oder ETRS_1989_UTM_Zone_32N_7stellen");

}else if (xInput.value> 5503056 && xInput.value<2921294){//

    document.getElementById("ddselect").value="DHDN / 3-deg. Gauss-Kruger z-2 (EPSG:31466)";

    alert("oder ETRS_1989_UTM_Zone_32N_7stellen oder ETRS_1989_UTM_Zone_33N_7stellen");

}else if (xInput.value> 2921294 && xInput.value<3130532){

    document.getElementById("ddselect").value="DHDN / 3-deg. Gauss-Kruger z-2 (EPSG:31466)";

    alert("oder ETRS_1989_UTM_Zone_33N_7stellen");

}else if (xInput.value> 3130532 && xInput.value<3280363){//

    document.getElementById("ddselect").value="ETRS_1989_UTM_Zone_33N_7st.(EPSG:102359)";

}else if (xInput.value> 3280363 && xInput.value<3502918){

    document.getElementById("ddselect").value="ETRS_1989_UTM_Zone_33N_7st.(EPSG:102359)";

    alert(" oder DHDN_3_Degree_Gauss_Zone_3");

}else if (xInput.value> 3502918 && xInput.value<3921537){

    document.getElementById("ddselect").value="DHDN / 3-deg. Gauss-Kruger z-3 (EPSG:31467)";

}else if (xInput.value> 3921537 && xInput.value<4070183){//

    alert("das ist local Projektion oder außer Deutschland!");

}else if (xInput.value> 4070183 && xInput.value<4712360){

    document.getElementById("ddselect").value="DHDN / 3-deg. Gauss-Kruger -4 (EPSG:31468)";

}else if (xInput.value> 4712360 && xInput.value<4860247){//

    alert("das ist local Projektion oder außer Deutschland!");

}else if (xInput.value> 4860247 && xInput.value<5503056){

    document.getElementById("ddselect").value="DHDN / 3-deg. Gauss-Kruger z-5 (EPSG:31469)";

}else if (xInput.value> 5503056 && xInput.value<32280376){//

    alert("das ist local Projektion oder außer Deutschland!");    

}else if (xInput.value> 32280376 && xInput.value<32860366){

    document.getElementById("ddselect").value="ETRS_1989_UTM_Zone_32N_8st.(EPSG:102329)";

}else if (xInput.value> 32860366 && xInput.value<32921294){

    document.getElementById("ddselect").value="ETRS_1989_UTM_Zone_33N_8st.(EPSG:102360)";

    alert(" oder ETRS_1989_UTM_Zone_32N_8stellen");

}else if (xInput.value> 32921294 && xInput.value<33502919){

    document.getElementById("ddselect").value="ETRS_1989_UTM_Zone_33N_8st.(EPSG:102360)";

}else if (xInput.value> 33502919 ){  

    alert("das ist local Projektion oder außer Deutschland!");

}else{" "}

   };
//==========================================================================Test=FEATURE=============================================================

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
	
    tab_text += "Straßenname: ..." + tableSelect.outerHTML;
	let totalText = document.getElementById('searchBox-3');
    tab_text += totalText.value +'</body></html>';

    var blob = new Blob([tab_text], { type: 'application/vnd.ms-excel' });

    //  FileSaver 
    saveAs(blob, filename);
}
    /* function exportTableToExcel(tableID, filename = ''){

        var downloadLink;

        var dataType = 'application/vnd.ms-excel';

        var tableSelect = document.getElementById(tableID);

        var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

        

        // Specify file name

        filename = filename?filename+'.xls':'excel_data.xls';

        

        // Create download link element

        downloadLink = document.createElement("a");

        

        document.body.appendChild(downloadLink);

        

        if(navigator.msSaveOrOpenBlob){

            var blob = new Blob(['\ufeff', tableHTML], {

                type: dataType

            });

            navigator.msSaveOrOpenBlob( blob, filename);

        }else{

            // Create a link to the file

            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        

            // Setting the file name

            downloadLink.download = filename;

            

            //triggering the function

            downloadLink.click();

        }

    }

  */

       //---------------------------ADD MARKER==============================================================


    

     //Leaflet.draw

    

     

     map.on('draw:created', function (event) {

        var layer = event.layer,

            feature = layer.feature = layer.feature || {};

        

        feature.type = feature.type || "Feature";

        var props = feature.properties = feature.properties || {};

       //layer.feature = {properties: {}}; // No need to convert to GeoJSON.

        //var props = layer.feature.properties;

        props.desc = null;

        props.image = null;

        DragDropItem.addLayer(layer);

        addPopup(layer);

    });

    function addPopup(layer) {

        var content = document.createElement("textarea");

        content.addEventListener("keyup", function () {

            layer.feature.properties.desc = content.value;

        });

        layer.on("popupopen", function () {

            content.value = layer.feature.properties.desc;

          content.focus();

        });

        layer.bindPopup(content).openPopup();

    }

    

   

     function saveIdIW() {

       var sName = $('#shapeName').val();

       var sDesc = $('#shapeDesc').val();

       var drawings = drawnItems.getLayers(); //drawnItems is a container for the drawn objects

       drawings[drawings.length - 1].title = sName;

       drawings[drawings.length - 1].content = sDesc;

       map.closePopup();

     };

     



     //Export

   

     function myFunction() {

	    var x = document.getElementById("ddselect");

	    var i = x.selectedIndex;

	    if (i == 0) {

           // alert("Select Projection!"); csvHtml5        id="btPrint" onclick="createPDF()" />tableToJson      <button onclick="tableToJson()">Json</button>

	    } else if (i==1) {

            xInput.value="";

            yInput.value="";

  var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:25832","+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25832'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:#FF0000"> ETRS32:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25832'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;



    

}

map.on('click', onMapClick);

	    } else if (i==2) {	

            xInput.value="";

            yInput.value="";  

            var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

 proj4.defs("EPSG:25833","+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  //proj4.defs("EPSG:25833","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25833'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#800080"> ETRS33:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:25833'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

	    } else if (i==3) {	 

            xInput.value="";

            yInput.value="";  

  var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:5520","+proj=tmerc +lat_0=0 +lon_0=3 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:5520'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#FF6600"> G.Kruger z-1:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:5520'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

	    } else if (i==4) {	

            xInput.value="";

            yInput.value="";   

            var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:31466","+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31466'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#33CCCC"> G.Kruger z-2:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31466'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

 	    } else if (i==5) {	

            xInput.value="";

            yInput.value="";   

            var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:31467","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31467'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:#993366"> G.Kruger z-3:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31467'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

	    } else if (i==6) {	

            xInput.value="";

            yInput.value="";   

            var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:31468","+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31468'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#993300"> G.Kruger z-4:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31468'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

} else if (i==7) {	 

    xInput.value="";

            yInput.value="";  

  var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:31469","+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31469'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#FF00FF"> G.Kruger z-5:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:31469'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

} else if (i==8) {	

            xInput.value="";

            yInput.value="";  

            var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:320","+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:320'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#800080"> LS320:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:320'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

} else if (i==9) {	  //                 7s32

            xInput.value="";

            yInput.value="";  

  var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:102328","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=2500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:102328'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#FF6600"> ETRS-7St.32:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:102328'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

} else if (i==10) {	  //                 7s33

            xInput.value="";

            yInput.value="";  

  var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:102359","+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=3500000 +y_0=0 +ellps=GRS80 +lowgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:102359'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#FF6900"> ETRS-7St.33:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:102359'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

} else if (i==11) {	  //                 8s32

            xInput.value="";

            yInput.value="";  

  var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:4647","+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:4647'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#FFC600"> ETRS-8St.32:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:4647'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

} else if (i==12) {	  //                 8s33

            xInput.value="";

            yInput.value="";  

  var div = document.createElement('div');

  div.id = 'coordsDiv';

  div.style.position='absolute';

  div.style.bottom='0';

  div.style.right='0';

  div.style.zIndex='999';

  div.style.backgroundColor='#FEFFF4';

  document.getElementById('map').appendChild(div);

  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

  proj4.defs("EPSG:5650","+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=33500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  map.on('mousemove', function(e){

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:5650'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

   document.getElementById('coordsDiv').innerHTML ='<u style="font-size:13px"><u style="color:blue">WGS 84: </u> ' + lat.toFixed(6) + ',' + lon.toFixed(6) +' :<u style="color:	#FF8600"> ETRS-8St.33:</u> '+x +','+ y+'</u>' ;

 });

 var popup = L.popup();

        function onMapClick(e) {

    popup

        .setLatLng(e.latlng)

        .setContent(e.latlng.toString())

        latInput.value=(e.latlng.lat.toFixed(6));

        lonInput.value=(e.latlng.lng.toFixed(6));

    var lat = e.latlng.lat;

    var lon = e.latlng.lng;

    var trans =proj4(proj4('EPSG:4326'),proj4('EPSG:5650'),[lon, lat]);

    var x=trans[0].toFixed(2);

    var y = trans[1].toFixed(2);

    xInput.value=x;

    yInput.value=y;

}

map.on('click', onMapClick);

	    } else {

alert("Select Projection!");

	    }

	    }
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
            const name = file.name;
			// Set the value of the file path text box to the path and name of the dropped file
			filePathTextBox.value = `${name}`;
           // alert(name);
		});
		
		// Prevent the default behavior of the "dragover" event on the document
		document.addEventListener("dragover", function(event) {
			event.preventDefault();
		});

rowI=[];
//======================selected rows in Table_Change Background=======FLY to======EDIT========================
/*
var table = document.getElementById("myTable");
// Add event listener for table rows
table.addEventListener("click", function(event) {

var row = event.target.parentNode; 
  var rowIndex = row.rowIndex;
	rowI=rowIndex;
   // if(){jjjihad

   // }
 var name = document.getElementById("myTable").rows[rowI].cells[2].innerHTML;
 var lat = document.getElementById("myTable").rows[rowI].cells[1].innerHTML;
 var lon = document.getElementById("myTable").rows[rowI].cells[0].innerHTML;
 //var lat2 = document.getElementById("myTable").rows[rowI].cells[3].innerHTML;
 //var lon2 = document.getElementById("myTable").rows[rowI].cells[4].innerHTML;
 //var typet = document.getElementById("myTable").rows[rowI].cells[5].innerHTML;

//alert("Punkt");
map.flyTo([lat,lon],22,{
    animate: true,
    duration: 0.5});

nameInput.value=name;
latInput.value=lat;
lonInput.value=lon;
});


alert("K");
var table = document.getElementById("myTable"),rIndex;
for(var i=1; i<table.rows.lenght;i++){
table.rows[i].onclick=function(){
rIndex =this.rowIndex;
console.log(rIndex);
alert("K2")
};
}
*/					

//===============Aktualiezren===========================================================================

/*
function onEdit (td){
selectedRow = td.parentElement.parentElement;
document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
row.addEventListener('click', () => {
   // flyToFeature(feature);
//selectedRow = td.parentElement.parentElement;

nameInput.value=row.cells[0].innerHTML;
latInput.value=row.cells[1].innerHTML;
lonInput.value=row.cells[2].innerHTML;

selectedRow = td.parentElement.parentElement;
if(confirm('Möchten Sie ( '+selectedRow.cells[0].innerHTML+' ) wirklich löschen?')){
row = td.parentElement.parentElement;
document.getElementById("myTable").deleteRow(row.rowIndex);

  });
*/



function aktualiz(){
    
}

//============================SEARCHE FUNCTION=======================

var searchBox_3 = document.getElementById("searchBox-3");
searchBox_3.addEventListener("keyup",function() {
var input, filter, table, tr, td, i, count;
input = document.getElementById("searchBox-3");
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
document.getElementById("mySpan3").innerHTML ="("+ count + " Erg.)";
})

//=============TOM TOM=========================================================================

$("#btOrs").on('click',function(){
//var zoomS = map.getZoom(); 
var link ="https://maps.openrouteservice.org/#/place/@"+lonInput.value+","+latInput.value+","+map.getZoom()+",0,-0+ver=3";
    window.open(link, '_blank');
});
$("#btTom").on('click',function(){
var link ="https://mydrive.tomtom.com/de_de/#mode=viewport+viewport="+latInput.value+","+lonInput.value+",18,0,-0+ver=3";
    window.open(link, '_blank');
});

//________________________________________________________________________________________________
function checkL(){
(l_alkis.checked)?map.addLayer(layer_alkis_1) :map.removeLayer(layer_alkis_1);
(l_alFl.checked)?map.addLayer(layer_alkis_2) :map.removeLayer(layer_alkis_2);
(l_flBe.checked)?map.addLayer(layer_TN_Gewaesser_11) :map.removeLayer(layer_TN_Gewaesser_11);//flache des Bezirk
(l_flGr.checked)?map.addLayer(layer_UntergeordnetesGewaesser_Flaeche_10) :map.removeLayer(layer_UntergeordnetesGewaesser_Flaeche_10);
(l_flGe.checked)?map.addLayer(layer_TN_Gewaesser_21) :map.removeLayer(layer_TN_Gewaesser_21);
(l_flSp.checked)?map.addLayer(layer_TN_Vegetation_9) :map.removeLayer(layer_TN_Vegetation_9);
(l_flur.checked)?map.addLayer(layer_Flurstuecksumringe_12) :map.removeLayer(layer_Flurstuecksumringe_12);
(l_flNr.checked)?map.addLayer(layer_Flurstuecksnummer_15) :map.removeLayer(layer_Flurstuecksnummer_15);
(l_geb.checked)?map.addLayer(layer_Gebaeude_13) :map.removeLayer(layer_Gebaeude_13);
(l_beBa.checked)?map.addLayer(layer_Bebauungsplaene_1) :map.removeLayer(layer_Bebauungsplaene_1);
(l_beBa2.checked)?map.addLayer(layer_Bebauungsplaene_2) :map.removeLayer(layer_Bebauungsplaene_2);
(l_agv.checked)?map.addLayer(layer_agv_1) :map.removeLayer(layer_agv_1);
(l_agv2.checked)?map.addLayer(layer_agv_2) :map.removeLayer(layer_agv_2);
(l_agv3.checked)?map.addLayer(layer_agv_3) :map.removeLayer(layer_agv_3);
(l_agv4.checked)?map.addLayer(layer_agv_4) :map.removeLayer(layer_agv_4);
(l_agv5.checked)?map.addLayer(layer_agv_5) :map.removeLayer(layer_agv_5);
(l_agv6.checked)?map.addLayer(layer_agv_6) :map.removeLayer(layer_agv_6);
(l_agv7.checked)?map.addLayer(layer_agv_7) :map.removeLayer(layer_agv_7);
(l_agv8.checked)?map.addLayer(layer_agv_8) :map.removeLayer(layer_agv_8);

(l_flWe.checked)?map.addLayer(layer_fliesswege_1) :map.removeLayer(layer_fliesswege_1);
(l_baWe.checked)?map.addLayer(layer_Brueckenbauwerke_1) :map.removeLayer(layer_Brueckenbauwerke_1);
(l_baFh.checked)?map.addLayer(layer_Brueckenbauwerke_2) :map.removeLayer(layer_Brueckenbauwerke_2);
(l_baSt.checked)?map.addLayer(layer_Brueckenbauwerke_3) :map.removeLayer(layer_Brueckenbauwerke_3);
(l_baFu.checked)?map.addLayer(layer_Brueckenbauwerke_4) :map.removeLayer(layer_Brueckenbauwerke_4);
(l_oePa.checked)?map.addLayer(layer_parkraum_1) :map.removeLayer(layer_parkraum_1);
(l_paAu.checked)?map.addLayer(layer_parkschein_1) :map.removeLayer(layer_parkschein_1);
(l_stBa.checked)?map.addLayer(layer_strassenbaum_1) :map.removeLayer(layer_strassenbaum_1);
(l_grPl.checked)?map.addLayer(layer_Gruenplan_1) :map.removeLayer(layer_Gruenplan_1);
(l_grPl2.checked)?map.addLayer(layer_Gruenplan_2) :map.removeLayer(layer_Gruenplan_2);
(l_kaOb.checked)?map.addLayer(layer_KatasterNutzungBergedorf_16) :map.removeLayer(layer_KatasterNutzungBergedorf_16);
(l_kaNu.checked)?map.addLayer(layer_KatasterNutzungBergedorf_17) :map.removeLayer(layer_KatasterNutzungBergedorf_17);
(l_dgm.checked)?map.addLayer(layer_KatasterNutzungBergedorf_18) :map.removeLayer(layer_KatasterNutzungBergedorf_18);
(deichkm.checked)?map.addLayer(layer_deichkm) :map.removeLayer(layer_deichkm);
//(GW_All.checked)?map.addLayer(layer_GW_All) :map.removeLayer(layer_GW_All);

(l_nsg.checked)?map.addLayer(layer_naturschutzgebiet_1) :map.removeLayer(layer_naturschutzgebiet_1);
(l_bha.checked)?map.addLayer(layer_hvv_ha) :map.removeLayer(layer_hvv_ha);
(l_bst.checked)?map.addLayer(layer_hvv_st) :map.removeLayer(layer_hvv_st);

(zeb2021_gw.checked)?map.addLayer(layer_zeb2021_gw) :map.removeLayer(layer_zeb2021_gw);
(zeb2021_geb.checked)?map.addLayer(layer_zeb2021_geb) :map.removeLayer(layer_zeb2021_geb);
(zeb2021_sub.checked)?map.addLayer(layer_zeb2021_sub) :map.removeLayer(layer_zeb2021_sub);
(zeb2020_gw.checked)?map.addLayer(layer_zeb2020_gw) :map.removeLayer(layer_zeb2020_gw);
(zeb2020_geb.checked)?map.addLayer(layer_zeb2020_geb) :map.removeLayer(layer_zeb2020_geb);
(zeb2020_sub.checked)?map.addLayer(layer_zeb2020_sub) :map.removeLayer(layer_zeb2020_sub);
(zeb2018_gw.checked)?map.addLayer(layer_zeb2018_gw) :map.removeLayer(layer_zeb2018_gw);
(zeb2018_geb.checked)?map.addLayer(layer_zeb2018_geb) :map.removeLayer(layer_zeb2018_geb);
(zeb2018_sub.checked)?map.addLayer(layer_zeb2018_sub) :map.removeLayer(layer_zeb2018_sub);
(zeb2016_gw.checked)?map.addLayer(layer_zeb2016_gw) :map.removeLayer(layer_zeb2016_gw);
(zeb2016_geb.checked)?map.addLayer(layer_zeb2016_geb) :map.removeLayer(layer_zeb2016_geb);
(zeb2016_sub.checked)?map.addLayer(layer_zeb2016_sub) :map.removeLayer(layer_zeb2016_sub);
/*
if(checkAll.checked){
map.addLayer(layer_GW_6828);
map.addLayer(layer_GW_7032);
map.addLayer(layer_GW_7230);
map.addLayer(layer_GW_7232);
map.addLayer(layer_GW_7432);
map.addLayer(layer_GW_7630);
map.addLayer(layer_GW_7632);
map.addLayer(layer_GW_7826);
map.addLayer(layer_GW_7828);
map.addLayer(layer_GW_7830);
map.addLayer(layer_GW_7832);
map.addLayer(layer_GW_8024);
map.addLayer(layer_GW_8026);
map.addLayer(layer_GW_8028);
map.addLayer(layer_GW_8030);
map.addLayer(layer_GW_8032);
map.addLayer(layer_GW_8224);
map.addLayer(layer_GW_8226);
map.addLayer(layer_GW_8228);
map.addLayer(layer_GW_8426);
}else{
map.removeLayer(layer_GW_6828);
map.removeLayer(layer_GW_7032);
map.removeLayer(layer_GW_7230);
map.removeLayer(layer_GW_7232);
map.removeLayer(layer_GW_7432);
map.removeLayer(layer_GW_7630);
map.removeLayer(layer_GW_7632);
map.removeLayer(layer_GW_7826);
map.removeLayer(layer_GW_7828);
map.removeLayer(layer_GW_7830);
map.removeLayer(layer_GW_7832);
map.removeLayer(layer_GW_8024);
map.removeLayer(layer_GW_8026);
map.removeLayer(layer_GW_8028);
map.removeLayer(layer_GW_8030);
map.removeLayer(layer_GW_8032);
map.removeLayer(layer_GW_8224);
map.removeLayer(layer_GW_8226);
map.removeLayer(layer_GW_8228);
map.removeLayer(layer_GW_8426);
}*/
if(l_waHa.checked){
map.addLayer(layer_Teilnetz_hal);
map.addLayer(layer_Teilnetz_hal2);
map.addLayer(layer_Teilnetz_hal3);
map.addLayer(layer_Teilnetz_abw);
map.addLayer(layer_Teilnetz_dek);
map.addLayer(layer_Teilnetz_dim);
map.addLayer(layer_Teilnetz_sohl);
map.addLayer(layer_Teilnetz_kno);
}else{
map.removeLayer(layer_Teilnetz_hal);
map.removeLayer(layer_Teilnetz_hal2);
map.removeLayer(layer_Teilnetz_hal3);
map.removeLayer(layer_Teilnetz_abw);
map.removeLayer(layer_Teilnetz_dek);
map.removeLayer(layer_Teilnetz_dim);
map.removeLayer(layer_Teilnetz_sohl);
map.removeLayer(layer_Teilnetz_kno);
}
/*
//(gmn.checked)?map.addLayer(layer_gemarkungen2copy_2) :map.removeLayer(layer_gemarkungen2copy_2);
//(ein_1.checked)?map.addLayer(layer_einb_B_1) :map.removeLayer(layer_einb_B_1);
//(stNe.checked)?map.addLayer(layer_strNetz_1) :map.removeLayer(layer_strNetz_1);
//(BSGB.checked)?map.addLayer(layer_BSGB_1) :map.removeLayer(layer_BSGB_1);
//(hvs_1.checked)?map.addLayer(layer_hvs_1) :map.removeLayer(layer_hvs_1);
//(bs_0.checked)?map.addLayer(layer_bs_0) :map.removeLayer(layer_bs_0);
//(klStr_1.checked)?map.addLayer(layer_kl_str_1) :map.removeLayer(layer_kl_str_1);
//(revWas_1.checked)?map.addLayer(layer_revWas_1) :map.removeLayer(layer_revWas_1);
//(Ent_5.checked)?map.addLayer(layer_EntwPl_5) :map.removeLayer(layer_EntwPl_5);
//(mangel_1.checked)?map.addLayer(layer_mangel_1) :map.removeLayer(layer_mangel_1);
//(jdd_1.checked)?map.addLayer(layer_JPG_DWG_DGM_1) :map.removeLayer(layer_JPG_DWG_DGM_1);
//(Revier_2.checked)?map.addLayer(layer_Revier_2) :map.removeLayer(layer_Revier_2);
//(plne_1.checked)?map.addLayer(layer_plne_1) :map.removeLayer(layer_plne_1);
//(entLeit.checked)?map.addLayer(layer_17Entwsserungsleitung_2) :map.removeLayer(layer_17Entwsserungsleitung_2);
//(strGrab.checked)?map.addLayer(layer_29Strassengrben_1) :map.removeLayer(layer_29Strassengrben_1);
//(road.checked)?map.addLayer(layer_r_sven_1) :map.removeLayer(layer_r_sven_1);
//(absch_1.checked)?map.addLayer(layer_AbschnStr_1) :map.removeLayer(layer_AbschnStr_1);
//(dop_1.checked)?map.addLayer(layer_DOP_1) :map.removeLayer(layer_DOP_1);
//(gruen_1.checked)?map.addLayer(layer_gruen_1) :map.removeLayer(layer_gruen_1);

if(ScAlSp.checked){
map.addLayer(layer_sporthalle_1);
map.addLayer(layer_Altenheim_2);
map.addLayer(layer_staatliche_schulen_3);
map.addLayer(layer_kitas_4);
}else{
map.removeLayer(layer_sporthalle_1);
map.removeLayer(layer_Altenheim_2);
map.removeLayer(layer_staatliche_schulen_3);
map.removeLayer(layer_kitas_4);
}*/
}

//_____________________________________________SELECKT ALL_________________________________________________________
var checkboxes = document.getElementsByClassName('checkBox');
var checkAll = document.getElementById('checkAll');


for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', updateCheckAll);
}

/*
checkAll.addEventListener('change', function () {
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkAll.checked;
  }
  checkL();
});
*/

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
//______________________________________________________________________________________________________





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
//map.fitBounds(circle.getBounds());
}else{
alert("Klicken Sie of die Karte und geben Sie den Radius ein..!");
}	
}
document.addEventListener("keydown", function(event){
if (event.key ==="Escape" || event.keyCode=== 27){

location.reload();
}
});