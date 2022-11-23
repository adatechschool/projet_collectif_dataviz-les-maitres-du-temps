const refresh = () => {
	setTimeout('fonctionGlobale()', 10000)
}
//refresh()


// API KEY FOR NINJAS-API
const ninjaKey = {
    method: 'GET',
    headers: { 'x-api-key': 'FFVKtwe/9HYWh/MfaP4JWA==52LJqTQgTjvxt5Wq' }
  }



// TODAY API VARIABLES & LINKS
const apiVenezuelaToday = 'https://api.open-meteo.com/v1/gfs?latitude=8.00&longitude=-66.00&hourly=temperature_2m&forecast_days=1'

const apiPeruToday = 'https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-75.25&hourly=temperature_2m&forecast_days=1'

const apiUruguayToday = 'https://api.open-meteo.com/v1/gfs?latitude=-33.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1'

const apiBrazilToday = 'https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-55.00&hourly=temperature_2m&forecast_days=1'

const apiSurinameToday = 'https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1'

const apiBoliviaToday = 'https://api.open-meteo.com/v1/gfs?latitude=-17.00&longitude=-65.00&hourly=temperature_2m&forecast_days=1'

const apiParaguayToday = 'https://api.open-meteo.com/v1/gfs?latitude=-23.33&longitude=-58.00&hourly=temperature_2m&forecast_days=1'

const apiChileToday = 'https://api.open-meteo.com/v1/gfs?latitude=-30.00&longitude=-71.00&hourly=temperature_2m&forecast_days=1'

const apiArgentinaToday = 'https://api.open-meteo.com/v1/gfs?latitude=-34.00&longitude=-64.00&hourly=temperature_2m&forecast_days=1'

const apiColombiaToday = 'https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-73.25&hourly=temperature_2m&forecast_days=1'

const apiGuyanaToday = 'https://api.open-meteo.com/v1/gfs?latitude=5.00&longitude=-59.00&hourly=temperature_2m&forecast_days=1'

const apiEcuadorToday = 'https://api.open-meteo.com/v1/gfs?latitude=-1.25&longitude=-78.25&hourly=temperature_2m&forecast_days=1'




// 1962 API VARIABLES & LINKS
const apiVenezuela1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=8.00&longitude=-66.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiPeru1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-10.00&longitude=-75.25&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiUruguay1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-33.00&longitude=-56.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiBrazil1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-10.00&longitude=-55.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiSuriname1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=4.00&longitude=-56.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiBolivia1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-17.00&longitude=-65.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiParaguay1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-23.33&longitude=-58.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiChile1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-30.00&longitude=-71.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiArgentina1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-34.00&longitude=-64.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiColombia1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=4.00&longitude=-73.25&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiGuyana1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=5.00&longitude=-59.00&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'

const apiEcuador1962 = 'https://archive-api.open-meteo.com/v1/era5?latitude=-1.25&longitude=-78.25&start_date=1961-12-31&end_date=1962-12-31&hourly=temperature_2m'



// AIR QUALITY API LINKS
const apiCaracasAqi = 'https://api.api-ninjas.com/v1/airquality?city=caracas'

const apiLimaAqi = 'https://api.api-ninjas.com/v1/airquality?city=lima'

const apiMontevideoAqi = 'https://api.api-ninjas.com/v1/airquality?city=montevideo'

const apiBrasiliaAqi = 'https://api.api-ninjas.com/v1/airquality?city=brasilia'

const apiParamariboAqi = 'https://api.api-ninjas.com/v1/airquality?city=paramaribo'

const apiSucreAqi = 'https://api.api-ninjas.com/v1/airquality?city=sucre'

const apiAsuncionAqi = 'https://api.api-ninjas.com/v1/airquality?city=asuncion'

const apiSantiagoAqi = 'https://api.api-ninjas.com/v1/airquality?city=santiago'

const apiBuenosairesAqi = 'https://api.api-ninjas.com/v1/airquality?city=buenosaires'

const apiBogotaAqi = 'https://api.api-ninjas.com/v1/airquality?city=bogota'

const apiGeorgetownAqi = 'https://api.api-ninjas.com/v1/airquality?city=georgetown'

const apiQuitoAqi = 'https://api.api-ninjas.com/v1/airquality?city=quito'





// FONCTION PRINCIPALE
const fonctionGlobale = () => {

	//VARIABLES FOR TODAY
	let date = new Date()
	let hour = date.getHours()
	let month = date.getMonth() + 1
	let day = date.getDate()
	
	//VARIABLE FOR 1962 DATE
	let pastDate = '1962-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate = '1962-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	console.log(month)
	console.log(day)
	console.log(hour)
	console.log(pastDate)

	//COUNTRY : Venezuela
  
	fetch(apiVenezuelaToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiCaracasAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiVenezuela1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
							
								document.getElementById('venezuela').innerHTML = "Venezuela's temperature : " + actualTemp + "    and Caracas's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('venezuela').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('venezuela').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('venezuela').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('venezuela').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('venezuela').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('venezuela').style.color='rgb(146, 3, 3)';
								 }
							}

						}
					})
				}
			)
			}
		}
		})
    

	//COUNTRY : Peru
	
	fetch(apiPeruToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiLimaAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiPeru1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('peru').innerHTML = "Peru's temperature : " + actualTemp + "    and Lima's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('peru').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('peru').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('peru').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('peru').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('peru').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('peru').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})

    
	//COUNTRY : Uruguay
  
	fetch(apiUruguayToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiMontevideoAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiUruguay1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('uruguay').innerHTML = "Uruguay's temperature : " + actualTemp + "    and Montevideo's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('uruguay').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('uruguay').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('uruguay').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('uruguay').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('uruguay').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('uruguay').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})
    
	//Nom du Pays : Brazil
  
	fetch(apiBrazilToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiBrasiliaAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiBrazil1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('brazil').innerHTML = "Brazil's temperature : " + actualTemp + "    and Brasilia's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('brazil').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('brazil').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('brazil').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('brazil').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('brazil').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('brazil').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})

    
	//Nom du Pays : Suriname
  
	fetch(apiSurinameToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiParamariboAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiSuriname1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('suriname').innerHTML = "Suriname's temperature : " + actualTemp + "    and Paramaribo's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('suriname').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('suriname').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('suriname').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('suriname').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('suriname').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('suriname').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})
    

	//Nom du Pays : Bolivia
  
	fetch(apiBoliviaToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiSucreAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiBolivia1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('bolivia').innerHTML = "Bolivia's temperature : " + actualTemp + "    and Sucre's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('bolivia').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('bolivia').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('bolivia').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('bolivia').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('bolivia').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('bolivia').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})
    
	//Nom du Pays : Paraguay
  
	fetch(apiParaguayToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiAsuncionAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiParaguay1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('paraguay').innerHTML = "Paraguay's temperature : " + actualTemp + "    and Asuncion's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('paraguay').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('paraguay').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('paraguay').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('paraguay').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('paraguay').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('paraguay').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})
    
	//Nom du Pays : Chile
  
	fetch(apiChileToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiSantiagoAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiChile1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('chile').innerHTML = "Chile's temperature : " + actualTemp + "    and Sanitago's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('chile').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('chile').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('chile').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('chile').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('chile').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('chile').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})
    
	//Nom du Pays : Argentina
  
	fetch(apiArgentinaToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiBuenosairesAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiArgentina1962)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate) {
								console.log(past.hourly.temperature_2m[i])
								document.getElementById('argentina').innerHTML = "Argentina's temperature : " + actualTemp + "    and Buenos Aires's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('argentina').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('argentina').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('argentina').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('argentina').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('argentina').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('argentina').style.color='rgb(146, 3, 3)';
								 }
							}
						}
					})
				}
			)
			}
		}
		})

		//Nom du Pays : Colombia
       
		fetch(apiColombiaToday)
		.then(response => response.json())
	  .then(temp => {
		  let tempa = temp.hourly.temperature_2m
		  for (let i = 0 ; i < tempa.length; i++){
			  if (i === hour){
				  let actualTemp = tempa[i]
				  fetch(apiBogotaAqi, ninjaKey)
				  .then(res => res.json())
					 .then(data => {	
					  fetch(apiColombia1962)
					  .then(res => res.json())
					  .then(past => {
						  let compare = past.hourly.time
						  for (let i = 0 ; i < compare.length; i++){
							  if (compare[i] === pastDate) {
								  console.log(past.hourly.temperature_2m[i])
								  document.getElementById('colombia').innerHTML = "Colombia's temperature : " + actualTemp + "    and Bogota's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								  if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('colombia').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('colombia').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('colombia').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('colombia').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('colombia').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('colombia').style.color='rgb(146, 3, 3)';
								 }
								}
						  }
					  })
				  }
			  )
			  }
		  }
		  })
		
		///Nom du Pays : Guyana

		fetch(apiGuyanaToday)
		.then(response => response.json())
	  .then(temp => {
		  let tempa = temp.hourly.temperature_2m
		  for (let i = 0 ; i < tempa.length; i++){
			  if (i === hour){
				  let actualTemp = tempa[i]
				  fetch(apiGeorgetownAqi, ninjaKey)
				  .then(res => res.json())
					 .then(data => {	
					  fetch(apiGuyana1962)
					  .then(res => res.json())
					  .then(past => {
						  let compare = past.hourly.time
						  for (let i = 0 ; i < compare.length; i++){
							  if (compare[i] === pastDate) {
								  console.log(past.hourly.temperature_2m[i])
								  document.getElementById('guyana').innerHTML = "Guyana's temperature : " + actualTemp + "    and Georgetown's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
								  if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
									document.getElementById('guyana').style.color='rgb(33, 15, 148)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
									document.getElementById('guyana').style.color='rgb(132, 213, 253)';
								 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
									document.getElementById('guyana').style.color='rgb(237, 253, 132)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
									document.getElementById('guyana').style.color='rgb(247, 156, 65)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
									document.getElementById('guyana').style.color='rgb(233, 30, 23)';
								 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
									document.getElementById('guyana').style.color='rgb(146, 3, 3)';
								 }
								}
						  }
					  })
				  }
			  )
			  }
		  }
		  })
		
    //Nom du Pays : Ecuador
    
	fetch(apiEcuadorToday)
	.then(response => response.json())
  .then(temp => {
	  let tempa = temp.hourly.temperature_2m
	  for (let i = 0 ; i < tempa.length; i++){
		  if (i === hour){
			  let actualTemp = tempa[i]
			  fetch(apiQuitoAqi, ninjaKey)
			  .then(res => res.json())
				 .then(data => {	
				  fetch(apiEcuador1962)
				  .then(res => res.json())
				  .then(past => {
					  let compare = past.hourly.time
					  for (let i = 0 ; i < compare.length; i++){
						  if (compare[i] === pastDate) {
							  console.log(past.hourly.temperature_2m[i])
							  document.getElementById('ecuador').innerHTML = "Ecuador's temperature : " + actualTemp + "    and Quito's AQI : " + data.overall_aqi + '    and Temperature in 1962 at the same time : ' + past.hourly.temperature_2m[i]
							  if ((actualTemp - past.hourly.temperature_2m[i]) < 0){
								document.getElementById('ecuador').style.color='rgb(33, 15, 148)';
							 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 2) {
								document.getElementById('ecuador').style.color='rgb(132, 213, 253)';
							 } else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 4) {
								document.getElementById('ecuador').style.color='rgb(237, 253, 132)';
							 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 7) {
								document.getElementById('ecuador').style.color='rgb(247, 156, 65)';
							 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 0 && (actualTemp - past.hourly.temperature_2m[i]) < 10) {
								document.getElementById('ecuador').style.color='rgb(233, 30, 23)';
							 }else if ((actualTemp - past.hourly.temperature_2m[i]) > 10) {
								document.getElementById('ecuador').style.color='rgb(146, 3, 3)';
							 }
							}
					  }
				  })
			  }
		  )
		  }
	  }
	  })
	}
  fonctionGlobale()

  fetch('https://archive-api.open-meteo.com/v1/era5?latitude=-10.00&longitude=-75.25&start_date=1960-12-31&end_date=1961-12-31&hourly=temperature_2m')
         .then(res => res.json())
         .then(past => console.log(past))
       
