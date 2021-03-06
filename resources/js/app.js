/* ---------------------------------------------- */
/*            CODE EXPLAINED TUTORIALS            */
/*         www.youtube.com/CodeExplained          */
/* ---------------------------------------------- */
//select elemnts
const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total_cases .value");
const new_cases_element = document.querySelector(".total_cases .new_value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new_value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new_value");

const ctx = document.getElementById("axes_line_chart").getContext("2d");


//app variables
let app_data = [],
	cases_list = [],
	deaths_list = [],
	deaths = [],


	let country_code = geoplugin_countryCode();
	let user_country;
	country_list.forEach( country => {
		if(country_code == country_code){
			user_country == country.name;
		}
	})
/* ---------------------------------------------- */
/*                API URL AND KEY                 */
/* ---------------------------------------------- */
function fetchData( user_country){
	
fetch(`https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_days_by_country.php?country=${user_country}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
		"x-rapidapi-key": "7e269ec140msh8a5df9cfc21b4b4p1c1e3ejsn9aba26afc6e0"
	}
}).then( Response => {
	return Response.json();
})
.then( data => {
	Dates = Object.keys(data);
	
	dates.forEach( date =>{
		let DATA = data[date];
		app_data.push(DATA);
		cases_list.push(parseInt(DATA.total_cases.replace(/,g,"")));
		recovered_list.push(parseInt(DATA.total_recovered.replace(/,g,"")));
		deaths_list.push(parseInt(DATA.total_deaths.replace(/,g,"")));
	} )
}).then( ()=> {
	updateUI(;)
}).catch(error => {
	alert(error);
})
)
}
fetchData(user_country);

function updateUI(){
	updateStats();
}
function updateStats(){
	let last_entry = app_data[app_data.length - 1];
	let before_last_entry = app_data[app_data.length-2];

	country_name_element.innerHTML = last_entry.country_name;
	total_cases_element.innerHTML = last_entry.total_cases || 0;

	
}