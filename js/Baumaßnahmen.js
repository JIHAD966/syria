//Baumaßnahmen MR projectsData
const ctx = document.getElementById('projectsChart').getContext('2d');            
const today = luxon.DateTime.now().toISODate();
const projectsData = [
{ name: "RS Brookdeich, An der Pollhofsbrücke - Curslacker Heerweg", start: "2024-09-23", end: "2025-04-25", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Schmeck-Junker / Redemann, Birgitt", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-00050.29 Teil 1" },
{ name: "Chrysanderstraße, Bergedorfer Schloßstraße u. Reeperstieg", start: "2025-02-01", end: "2025-03-31", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Cohrs, Ralf", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Erneuerung Nebenflächen", PSP:"2-22803010-13030.09" },
{ name: "Justus-Brinkmann-Str., Holtenklinker Str. - Gojenbergsweg", start: "2025-02-24", end: "2025-09-05", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Kollmann, Katharina", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Sanierung Verkehrsfläche", PSP:"2-22803010-13030.17 / 3-22803010-000013.19" },
{ name: "Bleichertwiete, Holtenklinker Str. - Soltaustraße", start: "2025-04-01", end: "2025-09-26", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Kunecki, Margarete", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-10003.80" },
{ name: "Marschbahndamm 2025 - Reststrecken", start: "2025-05-01", end: "2025-06-30", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "Ils, Ehsani", Bearbeiter_Bauausführung: "Cohrs / Ehsani", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", PSP:"3-22803010-000050.26 " },
{ name: "Dünnenweg, Ladenbeker Furtweg - Ladenbeker Furtweg", start: "2025-05-01", end: "2025-06-30", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "Ing.-Büro IDS", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"3-22803010-000050.40" },
{ name: "Nettelnburger Landweg, A25 - Allermöher Deich", start: "2025-05-01", end: "2025-06-30", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "Ing.-Büro IDS", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"3-22803010-00050.46" },
{ name: "Curslacker Neuer Deich, A25 - Kurfürstendeich", start: "2025-05-01", end: "2025-06-30", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "Ing.-Büro IDS", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"3-22803010-000050.47 " },
{ name: "Achterschlag, Ecke Vierländer Marschbahndamm", start: "2025-05-01", end: "2025-06-30", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "Ils / Ehsani", Bearbeiter_Bauausführung: "Cohrs / Ehsani", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", PSP:"3-22803010-000050.48 " },
{ name: "Horster Damm Zuwegung zum Sommerbad Altengamme", start: "2025-05-01", end: "2025-06-30", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "Ils / Ehsani", Bearbeiter_Bauausführung: "Cohrs / Ehsani", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", PSP:"3-22803010-000050.49 " },
{ name: "Am Heidhorst, Boberger Höhe - Heidhorststieg", start: "2025-05-01", end: "2025-06-30", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "Kalir /Ehsani", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"2-22803010-00050.50 / 3-22803010-000050.50" },
{ name: "Röpraredder, Binnenfeldredder - Reinbeker Redder", start: "2025-07-01", end: "2025-10-31", Abschnitt: "B/MR 21/23", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"2-22803010-00050.41 / 3-22803010-000050.41  " },
{ name: "RS Karl-Heinz-Rissmann Weg, Oberer Landweg - OBW", start: "2025-07-07", end: "2025-10-31", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Ing.-Büro IDS / Bielig, Sven", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-00050.09 / 3-22803010-000050.09" },
{ name: "Dietrich-Schreyge-Straße, Vierlandenstr. - Wachsbleiche", start: "2025-08-18", end: "2025-11-14", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Ing.-Büro Argus / Redemann, Birgitt", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umbau zur Einbahnstraße", PSP:"" },
{ name: "Elversweg 46 - 48", start: "2025-10-01", end: "2025-12-31", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Kollmann, Katharina", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Grundinstandsetzung", PSP:"2-22803010-13030.20 / 3-22803010-000013.25" },
{ name: "Friedrich-Frank-Bogen, Ladenbeker Furtweg - Nr. 124", start: "2025-10-01", end: "2026-12-31", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro SBI / Kunecki, Margarete", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umgestaltung", PSP:"2-22803010-13030.16 / 3-22803010-000013.14" },
{ name: "KP Neuengammer Hausdeich / Heinrich-Stubbe-Weg", start: "2025-10-06", end: "2026-03-27", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Kollmann, Katharina", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umbau Knoten", PSP:"2-22803010-13030.18" },
{ name: "Nettelnburger Straße, Randersweide - Oberer Landweg", start: "2025-10-06", end: "2026-10-05", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Kunecki, Margarete", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Erneuerung Fahrbahn + Nebenflächen, Herstellung Buskaps", PSP:"2-22803010-13030.19   " },
{ name: "Reetwerder, Alte Holstenstraße - Ernst-Mantius-Str.", start: "2025-10-06", end: "2026-03-27", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro SBI / Kollmann, Katharina", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung", PSP:"2-22803010-13030.12" },
{ name: "RS Brookdeich, Curslacker Heerweg - Brookdeich Kehre", start: "2025-11-18", end: "2026-03-27", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Schmeck-Junker / Kollmann, Katharina", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"" },
{ name: "GI Billwerder Billdeich, Bezirksgrenze - A1", start: "2025-12-01", end: "2027-04-30", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro Münster / Kunecki, Margarete", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Grundinstandsetzung", PSP:"2-22803010-13030.10 / 3-22803010-000013.10" },
{ name: "KP Billwerder Billdeich / Ladenbeker Furtweg", start: "2025-12-01", end: "2027-04-30", Abschnitt: "B/MR 21", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"" },
{ name: "Dweerlandweg, Erschließung JAHH", start: "2026-03-01", end: "2026-09-30", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Ing.-Büro SBI / Eulenstein, Diana", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Erschließung", PSP:"" },
{ name: "Brookdeich, Neuer Weg - Bleichertwiete", start: "2026-03-01", end: "2026-12-31", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro Argus / Kunecki, Margarete", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-10003.03" },
{ name: "Margit-Zinke-Str. / Felix-Jud-Ring", start: "2026-04-01", end: "2026-12-31", Abschnitt: "B/MR 21", Bearbeiter_Planung: "M+O / Michael, Lars", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"" },
{ name: "Alte Holstenstraße, Weidenbaumsweg - Sachsentor", start: "2026-09-01", end: "2027-07-30", Abschnitt: "SL/MR 21", Bearbeiter_Planung: "Leufker, Tim  / Eulenstein, Diana", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Fußgängerzone", PSP:"" },
{ name: "KP Planstraße Nordost OBW / Billwerder Billdeich + Ausbau bis Ladenbecker Furtweg", start: "2026-09-25", end: "2027-03-16", Abschnitt: "B/MR 21", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"" },
{ name: "Vinhagenweg/B. Schloßstr./Chrysanderstr.", start: "2027-03-01", end: "2028-06-30", Abschnitt: "SL/MR 23", Bearbeiter_Planung: "Ing.-Büro SBI Leufker/Kunecki", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsflächen", PSP:"" },
{ name: "Sander Damm, KAK-Ch - Bergedorfer Str.", start: "2027-07-01", end: "2027-12-31", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro Argus / Bielig, Sven", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Herstellung Sedimentationsanlage", PSP:"2-22803010-00050.33" },
{ name: "Ausbau Mittlerer Landweg bis Rungedamm", start: "2028-06-01", end: "2029-02-28", Abschnitt: "B/MR 21", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"" },
{ name: "Planstraße West OBW + KP Mittlerer Landweg", start: "2029-03-01", end: "2030-07-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"" }
  ];
        projectsData.forEach(p => {
            const startDate = luxon.DateTime.fromISO(p.start);
            const endDate = luxon.DateTime.fromISO(p.end);
            const todayDate = luxon.DateTime.fromISO(today);

            if (endDate < todayDate) {
                p.color = "#4caf50"; 
            } else if (startDate > todayDate) {
                p.color = "#f44336"; 
            } else {
                p.color = "#2196f3"; 
            }
            p.durationDays = endDate.diff(startDate, 'days').toObject().days;
        });

        new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: "",
					font:{weight:'bold'},
					borderRadius:30,					
                    data: projectsData.map(p => ({
                        x: [p.start, p.end],
                        y: p.name						
                    })),
                    backgroundColor:
						projectsData.map(p => p.color),					
					borderColor: 
						projectsData.map(p => {						
	if (p.Organisation === "B.Bergedorf") { 
        return "black"; 
    } else if (p.Organisation === "LSBG") { 
        return "orange"; 
    } else { 
        return "gray"; 
    } 
}),
					borderWidth:1.5,
					borderAlign:'inner',
					borderColor:"black",
					hoverBorderColor:'cyan',
					borderSkipped: false,
					maxBarThickness:20					
                }]
            },
            options: {
			 onClick: (event, elements) => {/*
                    if (elements.length > 0) {
                        const index = elements[0].index; // 
                        const links = [                           'https://www.google.com/maps/place/K%C3%B6rberHaus/@53.4871425,10.2097416,653m/data=!3m2!1e3!5s0x47b1f28f3b8885cb:0xb2b30049bce61dec!4m6!3m5!1s0x47b1f26259a4996d:0x99fe22114e73b010!8m2!3d53.4871298!4d10.2087975!16s%2Fg%2F11h64_x7jw?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D',                            'https://www.google.com/maps/search/bergedorfer+tor/@53.4878408,10.2057031,462m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D',                          'https://www.google.com/maps/search/Neubau+H%C3%A4user+Chrysanderstr.++46/@53.4923099,10.2165401,326m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D',
						'',//Bergedorfer Straße
						'https://www.google.com/maps/place/hvv+switch+Punkt+Adolf-K%C3%B6ster-Damm/@53.4849555,10.1479781,388m/data=!3m1!1e3!4m6!3m5!1s0x47b18d514b996c5b:0xa56c4e064a9f4991!8m2!3d53.4852985!4d10.1475452!16s%2Fg%2F11w8sf99qf?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D'
                        ];
                        window.open(links[index], '_blank'); 
                    }*/
                },
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            parser: 'yyyy-MM-dd',
                            unit: 'month', // 
                            displayFormats: { month: 'MMM.yy' } // ✅ Feb.2025
                        },
						ticks:{
						//maxRotation:0,
						//minRotation:0,
						color: 'black',						
						},
                        min: '2024-09-01',
                        max: '2030-12-31',
                        title: {
                            display: false
                        },
						grid:{
							display: false,
						drawTicks: false
						},
                    },
                    y: {
					font:{
				weight:'bold',
				size:16,
				},
                        title: {
                            display: false
                        },
						grid:{
							display: true,
						drawTicks: false
						},
                        ticks: {
							display: false,
						autoSkip: false,
                            color: 'black', // 
                            font: {
							size:13,
                               // weight: 'bold' // 
                            }
                        }
                    }
                },
                plugins: {
				legend:{
				display:false,
				labels:{
				font:{
				weight:'bold',
				size:15,
				},
				color:'black',
				}},
				annotation: {
                        annotations: {
                            todayLine: {
                                type: 'line',
                                mode: 'vertical',
                                scaleID: 'x',
                                value: today,
                                borderColor: 'red',
                                borderWidth: 2,
                                borderDash: [6, 6],
                                label: {
                                    content: `Tag (${luxon.DateTime.now().toFormat('MM.yyyy')})`,
                                    enabled: true,
                                    position: 'top'
                                }
                            }
                        }
                    },

				tooltip:{
backgroundColor: "rgba(0, 0, 0,0.9)",	
				//bodyColor:"orange",
				bodyFont:{
				size:15},
				titleFont:{
				size:15},
    callbacks: {
        title: function (context) {
            return context[0].label; // 
        },
        label: function (context) {
            const project = projectsData[context.dataIndex];
            const startDate = luxon.DateTime.fromISO(project.start);
            const endDate = luxon.DateTime.fromISO(project.end);
            const todayDate = luxon.DateTime.now();

            let statusText;
            if (endDate < todayDate) {
                statusText = "✅ Abgeschlossen";
            } else if (startDate > todayDate) {
                statusText = "🔴 ausstehend";
            } else {
                statusText = "🔵 in Bearbeitung";
            }
            return [
				` ${statusText}`,  
                `📅 vom: ${startDate.toFormat('dd.MM.yyyy')}`,
                `📅 bis: ${endDate.toFormat('dd.MM.yyyy')}`,
                `⏳ Dauer: ${project.durationDays} Tag`,
                `📂 Abschnitt: ${project.Abschnitt}`,
                `🏢 Bearbeiter Planung: ${project.Bearbeiter_Planung}`,
				`👤 Bearbeiter Bauausführung: ${project.Bearbeiter_Bauausführung}`,
                ` 📂Art der Maßnahme / Bemerkungen: ${project.Art_der_Maßnahme_Bemerkungen}`,
				` 📂PSP: ${project.PSP} `
            ];
        }
    }
},
                    zoom: { 
                        pan: {
                            enabled: true,
                            mode: 'x',
                        },
                        zoom: {
                            wheel: {
                                enabled: true
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'x',
                        }
                    }
                }
            },
			plugins: [{
    afterDraw: function(chart) {
        const ctx = chart.ctx;
        ctx.font = " 13px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
                const project = projectsData[index];
                const color = "#2a2929"; // تحديد اللون حسب Code                
                ctx.fillStyle = color;
                ctx.fillText(project.name+" / "+ project.Art_der_Maßnahme_Bemerkungen+" ( " +project.Bearbeiter_Bauausführung+" ) ", bar.x+5  , bar.y  );
            });
        });
    }
}]
        });
//Baumaßnahmen MR - abgelaufen 		projectsData2
const ctx2 = document.getElementById('projectsChart2').getContext('2d');
const projectsData2 = [
{ name: "Kirchenheerweg 1. und 2. BA, Umbau für STS Kirchwerder", start: "2022-04-25", end: "2023-07-31", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro Argus", Bearbeiter_Bauausführung: "Kollmann,Katharina Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umbau für STS Kirchwerder", Steckbrief: "x", Roads: "x",PSP: "2-22803010-13010.04",Eingabedatum: "2021-05-10" },
{ name: "Bergedorfer Tor", start: "2023-01-08", end: "2024-05-10", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro SBI / Kollmann Katharina", Bearbeiter_Bauausführung: "Kollmann, Katharina / Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Erschließung Nebenflächen", Steckbrief: "x", Roads: "x",PSP: "2-22803010-13010-10",Eingabedatum: "2022-10-14" },
{ name: "Umbau Knotenpunkt Randersweide/Nettelnburger Straße", start: "2023-05-09", end: "2023-08-31", Abschnitt: "B/MR 23", Bearbeiter_Planung:"Ing.-Büro Argus / Kunecki, Margarete", Bearbeiter_Bauausführung: "Ils, Johannes(Cohrs, Ralf)", Art_der_Maßnahme_Bemerkungen: "Umbau /Grundinstandsetzung", Steckbrief: "x", Roads: "x",PSP: "2-22803010-13030.11 3-22803010-000013.17",Eingabedatum: "2020-02-11" },
{ name: "Binnenfeldredder, Habermannstraße - Leuschnerstraße", start: "2023-07-17", end: "2023-12-01", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Bielig, Sven", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Umgestaltung", Steckbrief: "x", Roads: "x",PSP: "2-22803010-13030.15 3-22803010-000013.16",Eingabedatum: "2022-09-23" },
{ name: "Chrysanderstraße, Sachsentor - Bergedorfer Schlossstraße", start: "2023-07-17", end: "2024-05-17", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro Münster / Kunecki, Margarete", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", Steckbrief: "x", Roads: "x",PSP: "2-22803010-13030.09 3-22803010-000013.18",Eingabedatum: "2020-12-03" },
{ name: "VR9 Oberer Landweg, Kurt-A.-Körber-Ch. - Wehrdeich", start: "2023-08-07", end: "2024-07-19", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Schmeck-Junker / Kunecki, Margarete", Bearbeiter_Bauausführung: "Schmeck-Junker / Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", Steckbrief: "x", Roads: "x",PSP: "2-22803010-00050.063-22803010-000050.06",Eingabedatum: "2020-11-25" },
{ name: "Marschbahndamm/Vierländerbahndamm Teilstrecken 2023", start: "2023-09-01", end: "2023-12-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Ing.-Büro IDS / Redemann, Birgitt", Bearbeiter_Bauausführung: "Ing.-Büro IDS / Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Deckensanierung (partiell eventuell GI)", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "2023-02-16" },
{ name: "Weidenbaumsweg/ Am Güterbahnhof", start: "2023-11-01", end: "2023-12-22", Abschnitt: "B/MR 2", Bearbeiter_Planung: "Ing.-Büro IDS / Kunecki, Margarete", Bearbeiter_Bauausführung: "Kollmann, Katharina", Art_der_Maßnahme_Bemerkungen: "Herstellung Bushaltestelle + Nebenflächen", Steckbrief: "", Roads: "",PSP: "2-22803010-13010.12",Eingabedatum: "2022-10-14" },
{ name: "VR8 Ludwig-Rosenberg-Ring, Wilhelm-Bergner-Str. - Lohbrügger Markt", start: "2024-02-19", end: "2024-07-05", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Schmeck-Junker / Kunecki, Margarete", Bearbeiter_Bauausführung: "Kollmann, Katharina / Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Radverkehrsanlagen", Steckbrief: "x", Roads: "x",PSP: "2-22803010-00050.20 3-22803010-000050.20",Eingabedatum: "2020-11-20" },
{ name: "BR - Brookdeich (Brookdamm - An der Pollhofsbrücke)", start: "2024-06-17", end: "2024-06-28", Abschnitt: "B/MR 21", Bearbeiter_Planung: " Redemann, Birgitt", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Deckensanierung", Steckbrief: "x", Roads: "x",PSP: "3-22803010-000050.35",Eingabedatum: "2023-02-16" },
{ name: "Umbau Buskehre Elversweg", start: "2024-07-18", end: "2024-09-20", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Schmeck-Junker",Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Grundinstandsetzung", Steckbrief:"", Roads: "x",PSP: "2-22803010-20004.06  ",Eingabedatum: "2020-08-15" },
{ name: "Curslacker Neuer Deich, Lehfeld - Am Schleusengraben", start: "2024-08-13", end: "2024-12-20", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Ing.-Büro M+O / Althoff, Anke", Bearbeiter_Bauausführung: "Ing-Büro M+O", Art_der_Maßnahme_Bemerkungen: "Prov. Anbindung Innovationspark", Steckbrief: "", Roads: "x",PSP: "",Eingabedatum: "2023-10-09" },
{ name: "Bike Port Altengammer Marschbahndamm", start: "2024-09-16", end: "2024-11-29", Abschnitt: "B/MR 21", Bearbeiter_Planung: " Redemann, Birgitt", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Neubau", Steckbrief:"", Roads: ",PSP: ",Eingabedatum: "2023-02-16" },
{ name: "Tatenberger Deich, Tatenberger Weg - Eichholzfelder Deich", start: "2024-09-30", end: "2024-11-29", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ils, Johannes", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Deckensanierung", Steckbrief: "", Roads: "x",PSP: "",Eingabedatum: "2024-04-30" },
{ name: "Ochsenwerder Norderdeich, Eichholzfelder Deich - Wullfsbrücke", start: "2024-09-30", end: "2024-11-29", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ils, Johannes", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Deckensanierung", Steckbrief: "", Roads: "x",PSP: "",Eingabedatum: "2024-04-30" },
{ name: "Riehlstraße, Lohbrügger Landstr. - Höperfeld", start: "2024-10-14", end: "2024-10-29", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Cohrs, Ralf", Bearbeiter_Bauausführung: "Ing.-Büro IDS / Yakup, Kalir", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", Steckbrief: "", Roads: "x",PSP: "3-22803010-200008.30",Eingabedatum: "2024-06-26" },
{ name: "Katendeich, Fiddingshagen - Nettelnburger Str.", start: "2024-10-21", end: "2024-11-01", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Cohrs, Ralf", Bearbeiter_Bauausführung: "Ing.-Büro IDS / Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", Steckbrief: "", Roads: "x",PSP: "3-22803010-200008.34  ",Eingabedatum: "2024-06-26" },
{ name: "Oortkatenweg, Ochsenwerder Norderdeich - Ochsenwerder Elbdeich", start: "2024-10-21", end: "2024-11-01", Abschnitt: "B/MR22", Bearbeiter_Planung: "Grunau, Robert", Bearbeiter_Bauausführung: "Grunau, Robert", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", Steckbrief: "", Roads: "x",PSP: "3-22803010-200008.31  ",Eingabedatum: "2024-09-05" },
{ name: "Fersenweg, Kirchenheerweg - Kirchwerder Landweg", start: "2024-10-28", end: "2024-12-13", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Kollmann, Katharina", Bearbeiter_Bauausführung: "Kollmann, Katharina", Art_der_Maßnahme_Bemerkungen: "Deckensanierung", Steckbrief: "", Roads: "x",PSP: "3-22803010-000050.27  ",Eingabedatum: "2024-06-18" },
{ name: "Warwischer Hinterdeich, Durchdeich - Warwischer Hauptdeich", start: "2024-11-04", end: "2024-11-29", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Cohrs, Ralf", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", Steckbrief: "", Roads: "x",PSP: "3-22803010-200008.32",Eingabedatum: "2024-06-26" },
{ name: "Wilhelm-Iwan-Ring, Rungedamm - Hans-Duncker-Str.", start: "2024-11-06", end: "2024-11-22", Abschnitt: "B/MR 23", Bearbeiter_Planung: "Ing.-Büro IDS / Cohrs, Ralf", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", Steckbrief: "", Roads: "x",PSP: "3-22803010-200008.29",Eingabedatum: "2024-06-26" },
  ];
        projectsData2.forEach(p => {
            const startDate = luxon.DateTime.fromISO(p.start);
            const endDate = luxon.DateTime.fromISO(p.end);
            const todayDate = luxon.DateTime.fromISO(today);
            if (endDate < todayDate) {
                p.color = "#4caf50"; 
            } else if (startDate > todayDate) {
                p.color = "#f44336"; 
            } else {
                p.color = "#2196f3"; 
            }
            p.durationDays = endDate.diff(startDate, 'days').toObject().days;
        });
        new Chart(ctx2, {
            type: 'bar',
            data: {
                datasets: [{
                    label: "Baumaßnahmen MR  - abgelaufen"  ,
					font:{weight:'bold'},
					borderRadius:30,					
                    data: projectsData2.map(p => ({
                        x: [p.start, p.end],
                        y: p.name						
                    })),
                    backgroundColor:
						projectsData2.map(p => p.color),					
					borderColor: 
						projectsData2.map(p => {						
	if (p.Organisation === "B.Bergedorf") { 
        return "black"; 
    } else if (p.Organisation === "LSBG") { 
        return "orange"; 
    } else { 
        return "gray"; 
    } 
}),
					borderWidth:1.5,
					borderAlign:'inner',
					borderColor:"black",
					hoverBorderColor:'cyan',
					borderSkipped: false,
					maxBarThickness:20					
                }]
            },
            options: {
			 onClick: (event, elements) => {
                },
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            parser: 'yyyy-MM-dd',
                            unit: 'month', // 
                            displayFormats: { month: 'MMM.yy' } 
                        },
						ticks:{
						color: 'black',						
						},
                        min: '2022-04-01',
                        max: '2025-12-31',
                        title: {
                            display: false
                        },
						grid:{
							display: false,
						drawTicks: false
						},
                    },
                    y: {
					font:{
				weight:'bold',
				size:16,
				},
                        title: {
                            display: false,
                            text: "",
                        },
						grid:{
						drawTicks: true
						},
							 ticks: {
							display: false,
						autoSkip: false,
                            color: 'black',
                            font: {
							size:13,
                            }
                        }
                    }
                },
                plugins: {
				legend:{
				display:false},
				annotation: {
                        annotations: {
                            todayLine: {
                                type: 'line',
                                mode: 'vertical',
                                scaleID: 'x',
                                value: today,
                                borderColor: 'red',
                                borderWidth: 2,
                                borderDash: [6, 6],
                                label: {
                                    content: `Tag (${luxon.DateTime.now().toFormat('MM.yyyy')})`,
                                    enabled: true,
                                    position: 'top'
                                }
                            }
                        }
                    },
				tooltip:{				
				bodyFont:{
				size:15},
				titleFont:{
				size:15},
    callbacks: {
        title: function (context) {
            return context[0].label; // 
        },
        label: function (context) {
            const project = projectsData2[context.dataIndex];
            const startDate = luxon.DateTime.fromISO(project.start);
            const endDate = luxon.DateTime.fromISO(project.end);
            const todayDate = luxon.DateTime.now();

            let statusText;
            if (endDate < todayDate) {
                statusText = "✅ Abgeschlossen";
            } else if (startDate > todayDate) {
                statusText = "🔴 ausstehend";
            } else {
                statusText = "🔵 in Bearbeitung";
            }
            return [
				` ${statusText}`,  
                `📅 vom: ${startDate.toFormat('dd.MM.yyyy')}`,
                `📅 bis: ${endDate.toFormat('dd.MM.yyyy')}`,
                `⏳ Dauer: ${project.durationDays} Tag`,
                `📂 Abschnitt: ${project.Abschnitt}`,
                `🏢 Bearbeiter Planung: ${project.Bearbeiter_Planung}`,
				`👤 Bearbeiter Bauausführung: ${project.Bearbeiter_Bauausführung}`,
                ` 📂Art der Maßnahme / Bemerkungen: ${project.Art_der_Maßnahme_Bemerkungen}`,
				` 📂PSP: ${project.PSP} `
            ];
        }
    }
},
                                       zoom: { 
                        pan: {
                            enabled: true,
                            mode: 'x',
                        },
                        zoom: {
                            wheel: {
                                enabled: true
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'x',
                        }
                    }
                }
            },
			plugins: [{
    afterDraw: function(chart) {
        const ctx = chart.ctx;
        ctx.font = " 14px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
                const project = projectsData2[index];
                const color = "#2a2929"; //Color Text             
                ctx.fillStyle = color;
                ctx.fillText(project.name , bar.x+5  , bar.y  );
            });
        });
    }
}]
        });
//Erschließungen ( Entwurf ) projectsData3
const ctx3 = document.getElementById('projectsChart3').getContext('2d');
const projectsData3 = [
{ name: "Glasbläserhöfe", start: "2017-01-01", end: "2018-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "2968" },

{ name: "Abelke-Bleken-Ring", start: "2018-01-01", end: "2019-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "4459" },
{ name: "Am Hirtenland", start: "2019-01-01", end: "2020-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "2930" },
{ name: "Am Schilfpark", start: "2019-01-01", end: "2020-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "11103" },
{ name: "Fritz-Bringmann-Ring", start: "2019-01-01", end: "2020-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "4980" },
{ name: "Anne-Becker-Ring", start: "2020-01-01", end: "2021-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "5623" },
{ name: "Behnsrade", start: "2021-01-01", end: "2022-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "5520" },
{ name: "Bahndammweg - Mittlerer Landweg", start: "2021-01-01", end: "2022-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "2336" },
{ name: "Am Weidensteg", start: "2025-01-01", end: "2026-01-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "" },
{ name: "Von-Haeften-Straße", start: "2025-07-01", end: "2026-07-01", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "" },
{ name: "Brookdeichhöfe", start: "", end: "", Abschnitt: "B/MR 21", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Eulenstein, Diana", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "",PSP: "",Eingabedatum: "", Fläche_m2: "" },
{ name: "Dweerlandweg, Erschließung JAHH", start: "2026-03-01", end: "2026-09-30", Abschnitt: "B/MR 21", Bearbeiter_Planung: "Ing.-Büro SBI / Eulenstein, Diana", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Erschließung", Steckbrief: "", Roads: "x",PSP: "",Eingabedatum: "2022-09-23",Fläche_m2: "" },
        ];
        projectsData3.forEach(p => {
            const startDate = luxon.DateTime.fromISO(p.start);
            const endDate = luxon.DateTime.fromISO(p.end);
            const todayDate = luxon.DateTime.fromISO(today);

            if (endDate < todayDate) {
                p.color = "#4caf50"; 
            } else if (startDate > todayDate) {
                p.color = "#f44336"; 
            } else {
                p.color = "#2196f3"; 
            }
            p.durationDays = endDate.diff(startDate, 'days').toObject().days;
        });

        new Chart(ctx3, {
            type: 'bar',
            data: {
                datasets: [{
                    label: "",
					borderRadius:30,					
                    data: projectsData3.map(p => ({
                        x: [p.start, p.end],
                        y: p.name						
                    })),
                    backgroundColor:
						projectsData3.map(p => p.color),					
					borderColor: 
						projectsData3.map(p => {						
	if (p.Organisation === "B.Bergedorf") { 
        return "black"; 
    } else if (p.Organisation === "LSBG") { 
        return "orange"; 
    } else { 
        return "gray"; 
    } 
}),
					borderWidth:1.5,
					borderAlign:'inner',
					borderColor:"black",
					hoverBorderColor:'cyan',
					borderSkipped: false,
					maxBarThickness:20					
                }]
            },
            options: {
			responsive: true,
			maitainAspectRatio: false,
			 onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index; // 
                        const links = [
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//Glasbl%C3%A4serh%C3%B6fe%20Lageplan-Stand%202014-10-14%20(3).pdf',//glasbläserhöfe -1
	'',//Abelke-Bleken-Ring-2
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img/Am%20Hirtenland%202019-7343%20Fl%C3%A4chenplan.pdf',//am Hirtenland -3
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//Anlage%207.1_B-Plan%20Bergedorf%20104_Curslack%2019_1.pdf',//am Schilfpark -4
	'',//Friz-Bringmann-Ring-5
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//Revisionsplan-BRing_Index-a.pdf',//Anne-Becker-Ring -6
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//Revisionsplan-CRing_Index-a.pdf',//Bensrade -7 
	'',//Bahndammweg-8
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//MO17266_230925_SV_VA_LP-01.pdf',//Am Weidensteg-9
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//Von_Haeften-Straße_Lageplan.pdf',//Von-Haeften-Straße-10	
	'',//-11
	'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//7973-S3-LP__02 500_SR_240426.pdf'//Dweerlandweg-12
                        ];
	//'file:///G:/D4/MR-NEU/Allgemein/99-Plan_GIS/01_Bergedorf_WebMap/img//MOA22041_240710_SV_VA_LP-01.pdf',//Brookdeichhöfe-11
                        window.open(links[index], '_blank'); 
                    }
                },
                indexAxis: 'y',
			responsive: true,
			maitainAspectRatio: false,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            parser: 'yyyy-MM-dd',
                            unit: 'month', // 
                            displayFormats: { month: 'MMM.yy' } 
                        },
						ticks:{
						//maxRotation:0,
						//minRotation:0,
						color: 'black',					
						},
                        min: '2017-01-01',
                        max: '2026-12-31',
                         title: {
                            display: false
                        },
						grid:{
							display: false,
						drawTicks: false
						},
                    },
                    y: {
                        title: {
                            display: true,
                            text: "",
                        },
                        ticks: {
							display: false,
                            autoSkip: false,
                            color: 'black', // color Y -Name
                            font: {
							size:13,// size Y -Name
                            }
                        },
						grid:{drawTicks: false},
						categoryPercentage: 0.8,
						barPerecentage: 0.9
                    }
                },
                plugins: {
				legend:{
				display:false,
				labels:{
				font:{
				weight:'bold',
				size:15, // size Text Heade
				},
				color:'black',// color Text Heade
				}},
				annotation: {
                        annotations: {
                            todayLine: {
                                type: 'line',
                                mode: 'vertical',
                                scaleID: 'x',
                                value: today,
                                borderColor: 'red',
                                borderWidth: 2,
                                borderDash: [6, 6],
                                label: {
                                    content: `Tag (${luxon.DateTime.now().toFormat('MM.yyyy')})`,
                                    enabled: true,
                                    position: 'top'
                                }
                            }
                        }
                    },

				tooltip:{				
				bodyFont:{
				size:15},
				titleFont:{
				size:15},
    callbacks: {
        title: function (context) {
            return context[0].label; // 
        },
        label: function (context) {
            const project = projectsData3[context.dataIndex];
            const startDate = luxon.DateTime.fromISO(project.start);
            const endDate = luxon.DateTime.fromISO(project.end);
            const todayDate = luxon.DateTime.now();

            let statusText;
            if (endDate < todayDate) {
                statusText = "✅ Abgeschlossen";
            } else if (startDate > todayDate) {
                statusText = "🔴 ausstehend";
            } else {
                statusText = "🔵 in Bearbeitung";
            }
            return [
				` ${statusText}`,  
                `📅 vom: ${startDate.toFormat('dd.MM.yyyy')}`,
                `📅 bis: ${endDate.toFormat('dd.MM.yyyy')}`,
                `⏳ Dauer: ${project.durationDays} Tag`,
                `📂 Abschnitt: ${project.Abschnitt}`,
                `🏢 Bearbeiter Planung: ${project.Bearbeiter_Planung}`,
				`👤 Bearbeiter Bauausführung: ${project.Bearbeiter_Bauausführung}`,
                ` 📂Art der Maßnahme / Bemerkungen: ${project.Art_der_Maßnahme_Bemerkungen}`,
				` 📂PSP: ${project.PSP} `,
                ` Fläche: ${project.Fläche_m2} qm`
            ];
        }
    }
},
                                        zoom: { 
                        pan: {
                            enabled: true,
                            mode: 'x',
                        },
                        zoom: {
                            wheel: {
                                enabled: true
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'x',
                        }
                    }
                }
            },
			plugins: [{
    afterDraw: function(chart) {
        const ctx = chart.ctx;
        ctx.font = " 14px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
                const project = projectsData3[index];
                const color = "#2a2929"; //Color Text                
                ctx.fillStyle = color;
                ctx.fillText(project.name , bar.x+5  , bar.y  );
            });
        });
    }
}]
});
//Baumaßnahmen MR - ( nach Bauausfürung sortiert ) projectsData4
const ctx4 = document.getElementById('projectsChart4').getContext('2d');            
//const today = luxon.DateTime.now().toISODate();
const projectsData4 = [
{ name: "RS Brookdeich, An der Pollhofsbrücke - Curslacker Heerweg", start: "2024-09-23", end: "2025-04-25", Abschnitt: "MR232", Bearbeiter_Planung: "Schmeck-Junker / Redemann, Birgitt", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-00050.29 Teil 1", Code: "1",namen: "Kalir, Yakup" },
{ name: "Dünnenweg, Ladenbeker Furtweg - Ladenbeker Furtweg", start: "2025-05-01", end: "2025-06-30", Abschnitt: "MR232", Bearbeiter_Planung: "Ing.-Büro IDS", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"3-22803010-000050.40", Code: "1",namen: "Kalir, Yakup" },
{ name: "Nettelnburger Landweg, A25 - Allermöher Deich", start: "2025-05-01", end: "2025-06-30", Abschnitt: "MR232", Bearbeiter_Planung: "Ing.-Büro IDS", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"3-22803010-00050.46", Code: "1",namen: "Kalir, Yakup" },
{ name: "Curslacker Neuer Deich, A25 - Kurfürstendeich", start: "2025-05-01", end: "2025-06-30", Abschnitt: "MR232", Bearbeiter_Planung: "Ing.-Büro IDS", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"3-22803010-000050.47 ", Code: "1",namen: "Kalir, Yakup" },
{ name: "Am Heidhorst, Boberger Höhe - Heidhorststieg", start: "2025-05-01", end: "2025-06-30", Abschnitt: "MR232", Bearbeiter_Planung: "Kalir /Ehsani", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"2-22803010-00050.50 / 3-22803010-000050.50", Code: "1",namen: "Kalir, Yakup" },
{ name: "Röpraredder, Binnenfeldredder - Reinbeker Redder", start: "2025-07-01", end: "2025-10-31", Abschnitt: "MR232", Bearbeiter_Planung: "", Bearbeiter_Bauausführung: "Kalir /Ehsani", Art_der_Maßnahme_Bemerkungen: "Gehwegsanierung", PSP:"2-22803010-00050.41 / 3-22803010-000050.41  ", Code: "1",namen: "Kalir, Yakup" },
{ name: "RS Karl-Heinz-Rissmann Weg, Oberer Landweg - OBW", start: "2025-07-07", end: "2025-10-31", Abschnitt: "MR232", Bearbeiter_Planung: "Ing.-Büro IDS / Bielig, Sven", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-00050.09 / 3-22803010-000050.09", Code: "1",namen: "Kalir, Yakup" },
{ name: "Elversweg 46 - 48", start: "2025-10-01", end: "2025-12-31", Abschnitt: "MR232", Bearbeiter_Planung: "Kollmann, Katharina", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Grundinstandsetzung", PSP:"2-22803010-13030.20 / 3-22803010-000013.25", Code: "1",namen: "Kalir, Yakup" },
{ name: "RS Brookdeich, Curslacker Heerweg - Brookdeich Kehre", start: "2025-11-18", end: "2026-03-27", Abschnitt: "MR232", Bearbeiter_Planung: "Schmeck-Junker / Kollmann, Katharina", Bearbeiter_Bauausführung: "Kalir, Yakup", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"", Code: "1",namen: "Kalir, Yakup" },
{ name: "Chrysanderstraße, Bergedorfer Schloßstraße u. Reeperstieg", start: "2025-02-01", end: "2025-03-31", Abschnitt: "MR231", Bearbeiter_Planung: "Cohrs, Ralf", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Erneuerung Nebenflächen", PSP:"2-22803010-13030.09", Code: "2",namen: "Cohrs, Ralf" },
{ name: "Marschbahndamm 2025 - Reststrecken", start: "2025-05-01", end: "2025-06-30", Abschnitt: "MR231", Bearbeiter_Planung: "Ils, Ehsani", Bearbeiter_Bauausführung: "Cohrs / Ehsani", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", PSP:"3-22803010-000050.26 ", Code: "2",namen: "Cohrs, Ralf" },
{ name: "Achterschlag, Ecke Vierländer Marschbahndamm", start: "2025-05-01", end: "2025-06-30", Abschnitt: "MR231", Bearbeiter_Planung: "Ils / Ehsani", Bearbeiter_Bauausführung: "Cohrs / Ehsani", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", PSP:"3-22803010-000050.48 ", Code: "2",namen: "Cohrs, Ralf" },
{ name: "Horster Damm Zuwegung zum Sommerbad Altengamme", start: "2025-05-01", end: "2025-06-30", Abschnitt: "MR231", Bearbeiter_Planung: "Ils / Ehsani", Bearbeiter_Bauausführung: "Cohrs / Ehsani", Art_der_Maßnahme_Bemerkungen: "Deckschichtsanierung", PSP:"3-22803010-000050.49 ", Code: "2",namen: "Cohrs, Ralf" },
{ name: "Dietrich-Schreyge-Straße, Vierlandenstr. - Wachsbleiche", start: "2025-08-18", end: "2025-11-14", Abschnitt: "MR231", Bearbeiter_Planung: "Ing.-Büro Argus / Redemann, Birgitt", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umbau zur Einbahnstraße", PSP:"", Code: "2",namen: "Cohrs, Ralf" },
{ name: "Friedrich-Frank-Bogen, Ladenbeker Furtweg - Nr. 124", start: "2025-10-01", end: "2026-12-31", Abschnitt: "MR231", Bearbeiter_Planung: "Ing.-Büro SBI / Kunecki, Margarete", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umgestaltung", PSP:"2-22803010-13030.16 / 3-22803010-000013.14", Code: "2",namen: "Cohrs, Ralf" },
{ name: "KP Neuengammer Hausdeich / Heinrich-Stubbe-Weg", start: "2025-10-06", end: "2026-03-27", Abschnitt: "MR231", Bearbeiter_Planung: "Ing.-Büro IDS / Kollmann, Katharina", Bearbeiter_Bauausführung: "Cohrs, Ralf", Art_der_Maßnahme_Bemerkungen: "Umbau Knoten", PSP:"2-22803010-13030.18", Code: "2",namen: "Cohrs, Ralf" },
{ name: "Justus-Brinkmann-Str., Holtenklinker Str. - Gojenbergsweg", start: "2025-02-24", end: "2025-09-05", Abschnitt: "MR234", Bearbeiter_Planung: "Ing.-Büro IDS / Kollmann, Katharina", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Sanierung Verkehrsfläche", PSP:"2-22803010-13030.17 / 3-22803010-000013.19", Code: "3",namen: "Ils, Johannes" },
{ name: "Bleichertwiete, Holtenklinker Str. - Soltaustraße", start: "2025-04-01", end: "2025-09-26", Abschnitt: "MR234", Bearbeiter_Planung: "Ing.-Büro IDS / Kunecki, Margarete", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-10003.80", Code: "3",namen: "Ils, Johannes" },
{ name: "Nettelnburger Straße, Randersweide - Oberer Landweg", start: "2025-10-06", end: "2026-10-05", Abschnitt: "MR234", Bearbeiter_Planung: "Ing.-Büro IDS / Kunecki, Margarete", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Erneuerung Fahrbahn + Nebenflächen, Herstellung Buskaps", PSP:"2-22803010-13030.19   ", Code: "3",namen: "Ils, Johannes" },
{ name: "GI Billwerder Billdeich, Bezirksgrenze - A1", start: "2025-12-01", end: "2027-04-30", Abschnitt: "MR234", Bearbeiter_Planung: "Ing.-Büro Münster / Kunecki, Margarete", Bearbeiter_Bauausführung: "Ils, Johannes", Art_der_Maßnahme_Bemerkungen: "Grundinstandsetzung", PSP:"2-22803010-13030.10 / 3-22803010-000013.10", Code: "3",namen: "Ils, Johannes" },
{ name: "KP Billwerder Billdeich / Ladenbeker Furtweg", start: "2025-12-01", end: "2027-04-30", Abschnitt: "MR213", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"", Code: "4",namen: "Michael, Lars" },
{ name: "KP Planstraße Nordost OBW / Billwerder Billdeich + Ausbau bis Ladenbecker Furtweg", start: "2026-09-25", end: "2027-03-16", Abschnitt: "MR213", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"", Code: "4",namen: "Michael, Lars" },
{ name: "Ausbau Mittlerer Landweg bis Rungedamm", start: "2028-06-01", end: "2029-02-28", Abschnitt: "MR213", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"", Code: "4",namen: "Michael, Lars" },
{ name: "Planstraße West OBW + KP Mittlerer Landweg", start: "2029-03-01", end: "2030-07-01", Abschnitt: "MR213", Bearbeiter_Planung: "ReGe / Michael, Lars", Bearbeiter_Bauausführung: "ReGe / Michael, Lars", Art_der_Maßnahme_Bemerkungen: "Erschließung OBW", PSP:"", Code: "4",namen: "Michael, Lars" },
{ name: "Reetwerder, Alte Holstenstraße - Ernst-Mantius-Str.", start: "2025-10-06", end: "2026-03-27", Abschnitt: "MR233", Bearbeiter_Planung: "Ing.-Büro SBI / Kollmann, Katharina", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung", PSP:"2-22803010-13030.12", Code: "5",namen: "" },
{ name: "Dweerlandweg, Erschließung JAHH", start: "2026-03-01", end: "2026-09-30", Abschnitt: "MR211", Bearbeiter_Planung: "Ing.-Büro SBI / Eulenstein, Diana", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Erschließung", PSP:"", Code: "5",namen: "" },

{ name: "Brookdeich, Neuer Weg - Bleichertwiete", start: "2026-03-01", end: "2026-12-31", Abschnitt: "MR235", Bearbeiter_Planung: "Ing.-Büro Argus / Kunecki, Margarete", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"2-22803010-10003.03", Code: "5",namen: "" },
{ name: "Margit-Zinke-Str. / Felix-Jud-Ring", start: "2026-04-01", end: "2026-12-31", Abschnitt: "MR213", Bearbeiter_Planung: "M+O / Michael, Lars", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsfläche", PSP:"", Code: "5",namen: "" },
{ name: "Alte Holstenstraße, Weidenbaumsweg - Sachsentor", start: "2026-09-01", end: "2027-07-30", Abschnitt: "MR211", Bearbeiter_Planung: "Leufker, Tim  / Eulenstein, Diana", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Fußgängerzone", PSP:"", Code: "5",namen: "" },
{ name: "Vinhagenweg/B. Schloßstr./Chrysanderstr.", start: "2027-03-01", end: "2028-06-30", Abschnitt: "MR235", Bearbeiter_Planung: "Ing.-Büro SBI Leufker/Kunecki", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Umgestaltung Verkehrsflächen", PSP:"", Code: "5",namen: "" },
{ name: "Sander Damm, KAK-Ch - Bergedorfer Str.", start: "2027-07-01", end: "2027-12-31", Abschnitt: "MR230", Bearbeiter_Planung: "Ing.-Büro Argus / Bielig, Sven", Bearbeiter_Bauausführung: "", Art_der_Maßnahme_Bemerkungen: "Herstellung Sedimentationsanlage", PSP:"2-22803010-00050.33", Code: "5",namen: "" }
  ];
        const colorMap ={
			"1":"orange",
			"2":"red",
			"3":"blue",
			"4":"pink",
			"5":"green"			
		}
    const backgroundColors = projectsData4.map(item => colorMap[item.Code]);
    const borderColors = backgroundColors.map(color => color.replace(")", ", 0.8)").replace("rgb", "rgba")); 
projectsData4.forEach(p => {
            const startDate = luxon.DateTime.fromISO(p.start);
            const endDate = luxon.DateTime.fromISO(p.end);
            const todayDate = luxon.DateTime.fromISO(today);
			            if (endDate < todayDate) {
                p.Color = "red"; 
            } else if (startDate > todayDate) {
                p.borderColor = "blue"; 
            } else {
                p.borderColor = "black"; 
            }
            p.durationDays = endDate.diff(startDate, 'days').toObject().days;
        });
        new Chart(ctx4, {
            type: 'bar',
            data: {
                datasets: [{
                    label: "",
					font:{weight:'bold'},
					borderRadius:30,					
                    data: projectsData4.map(p => ({
                        x: [p.start, p.end],
                        y: p.name						
                    })),
                   backgroundColor: backgroundColors,		
					borderWidth:1.5,
					borderAlign:'inner',
					borderColor:"black",
					hoverBorderColor:'cyan',
					borderSkipped: false,
					maxBarThickness:20					
                }]
            },
            options: {
			 onClick: (event, elements) => {
                },
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            parser: 'yyyy-MM-dd',
                            unit: 'month', // 
                            displayFormats: { month: 'MMM.yy' } // ✅ Feb.2025
                        },
						ticks:{
						color: 'black',						
						},
                        min: '2024-09-01',
                        max: '2030-12-31',
                        title: {
                            display: false
                        },
						grid:{
							display: false,
						drawTicks: false
						},
                    },
                    y: {
					font:{
				weight:'bold',
				size:16,
				},
                        title: {
                            display: false
                        },
						grid:{
							display: true,
						drawTicks: false
						},
                        ticks: {
							display: false,
						autoSkip: false,
                            color: 'black', // 
                            font: {
							size:13, 
                            }
                        }
                    }
                },
                plugins: {
				legend:{
				display:false,
				labels:{
				font:{
				weight:'bold',
				size:15,
				},
				color:'black',
				}},
				annotation: {
                        annotations: {
                            todayLine: {
                                type: 'line',
                                mode: 'vertical',
                                scaleID: 'x',
                                value: today,
                                borderColor: 'red',
                                borderWidth: 2,
                                borderDash: [6, 6],
                                label: {
                                    content: `Tag (${luxon.DateTime.now().toFormat('MM.yyyy')})`,
                                    enabled: true,
                                    position: 'top'
                                }
                            }
                        }
                    },

				tooltip:{				
				bodyFont:{
				size:15},
				titleFont:{
				size:15},
    callbacks: {
        title: function (context) {
            return context[0].label; // 
        },
        label: function (context) {
            const project = projectsData4[context.dataIndex];
            const startDate = luxon.DateTime.fromISO(project.start);
            const endDate = luxon.DateTime.fromISO(project.end);
            const todayDate = luxon.DateTime.now();

            let statusText;
            if (endDate < todayDate) {
                statusText = "✅ Abgeschlossen";
            } else if (startDate > todayDate) {
                statusText = "🔴 ausstehend";
            } else {
                statusText = "🔵 in Bearbeitung";
            }
            return [
				` ${statusText}`,  
                `📅 vom: ${startDate.toFormat('dd.MM.yyyy')}`,
                `📅 bis: ${endDate.toFormat('dd.MM.yyyy')}`,
                `⏳ Dauer: ${project.durationDays} Tag`,
                `📂 Abschnitt: ${project.Abschnitt}`,
                `🏢 Bearbeiter Planung: ${project.Bearbeiter_Planung}`,
				`👤 Bearbeiter Bauausführung: ${project.Bearbeiter_Bauausführung}`,
                ` 📂Art der Maßnahme / Bemerkungen: ${project.Art_der_Maßnahme_Bemerkungen}`,
				` 📂PSP: ${project.PSP} `
            ];
        }
    }
},
                    zoom: { 
                        pan: {
                            enabled: true,
                            mode: 'x',
                        },
                        zoom: {
                            wheel: {
                                enabled: true
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'x',
                        }
                    }
                }
            },
			plugins: [{
    afterDraw: function(chart) {
        const ctx = chart.ctx;
        ctx.font = " 13px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
                const project = projectsData4[index];
                const color = "#2a2929"; // Coloor Text                
                ctx.fillStyle = color;
                ctx.fillText(project.name +" ( "+project.Bearbeiter_Bauausführung+" ) ", bar.x+5  , bar.y  );
            });
        });
    }
}]
});
	document.getElementById("Baumaßnahmen").innerHTML="Baumaßnahmen MR -  Heute ist: "+today+" "; 
		let text =document.getElementById("text");
		//text.style.fontSize="18px";
		text.style.color="#F7EEA3";