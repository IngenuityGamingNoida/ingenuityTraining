
import {APIService} from './ts/APIService';

const api = new APIService();

const table = document.getElementById('table');

const btn = document.querySelector('#btn');
const selected = document.querySelector('#optionsSelect');
const main = document.querySelector('#main');
let selectedValue: string;
const x:string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/";
var y:string;
var res:string;
btn.addEventListener('click',(event) => {
    event.preventDefault();
    selectedValue = (<HTMLInputElement>document.getElementById('optionsSelect')).value;
    // alert(selectedValue);
    if(selectedValue == 'All'){
        covidData.textContent = null;
        y = "npm-covid-data/";
        res = x + y;
        api.INFO_DATA = res;
        dispalycovidData();
            }
    if(selectedValue == 'Asia'){
        covidData.textContent = null;
        y = "npm-covid-data/asia";
        res = x + y;
        api.INFO_DATA = res;
        dispalycovidData()
            }
    if(selectedValue == 'Africa'){
        covidData.textContent = null;
        y = "npm-covid-data/africa";
        res = x + y;
        api.INFO_DATA = res;
        dispalycovidData()
            }
    if(selectedValue == 'Europe'){
        covidData.textContent = null;
        y = "npm-covid-data/europe";
        res = x + y;
        api.INFO_DATA = res;
        dispalycovidData()
                    }
    if(selectedValue == 'North America'){
        covidData.textContent = null;
        y = "npm-covid-data/northamerica";
        res = x + y;
        api.INFO_DATA = res;
        dispalycovidData()
                        }
    if(selectedValue == 'South America'){
        covidData.textContent = null;
        y = "npm-covid-data/southamerica";
        res = x + y;
        api.INFO_DATA = res;
        dispalycovidData()
            }
});

const covidData = document.querySelector('#covidData');
function dispalycovidData(){
    api.getCovidData().then(data => {
        const table = document.createElement('table');
        covidData.appendChild(table);
        const keys = Object.keys(data[0]);
        const topRow = document.createElement('tr');
        table.appendChild(topRow);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            topRow.appendChild(th);
        })
        data.forEach(element =>{
            const keys = Object.keys(element);
            const row = document.createElement('tr');
            keys.forEach(key =>{
                const td = document.createElement('td');
                td.textContent = (<any>element)[key];
                row.appendChild(td);
            });
            table.appendChild(row);
            })
            
        });
}