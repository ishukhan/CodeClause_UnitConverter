

let inputFrom;
let inputTo;
let listQuentities;
let selectQuantity;
let selectFrom;
let selectTo;

let defaultQuantityID = "length";
let quantities = [
    {
        name: 'Angle',
        description: 'Convert angle measurements like degrees, radians, circles, turns.',
        id: 'angle',
        defaultUnitIndex: 3,
        units: [
            ["arcminute", "", 'value/(360*60)', 'value * (360*60)'],
            ["arcsecond", "", 'value/(360*3600)', 'value * (360*3600)'],
            ["circle", "", 1],
            ["degree", "°", 'value/360', 'value*360'],
            ["gon", "", 'value/400', 'value*400'],
            ["grad", "", 'value/400', 'value*400'],
            ["mil (Nato)", "", 'value/6400', 'value*6400'],
            ["mil (Soviet Union)", "", 'value/6000', 'value*6000'],
            ["mil (Sweden)", "", 'value/6300', 'value*6300'],
            ["octant", "", 0.125],
            ["quadrant", "", 0.25],
            ["radian", "", 'value / (2 * Math.PI)', 'value * 2 * Math.PI'],
            ["revolution", "", 1],
            ["sextant", "", 'value/6', 'value * 6'],
            ["sign", "", 'value/12', 'value * 12'],
            ["turn", "", 1]
        ]
    },
    {
        name: 'Area',
        description: 'Convert area measurements like square meters, square feet, acres.',
        id: 'area',
        defaultUnitIndex: 11,
        units: [
            ["acres", "", 4046.8564224],
            ["ares", "", 100],
            ["circular inches", "", 0.000506707479],
            ["hectares", "", 1e4],
            ["hides", "", 485000],
            ["roods", "", 1011.7141056],
            ["square centimeters", "cm²", 1e-4],
            ["square feet (US & UK)", "", 0.09290304],
            ["square feet (US survey)", "", 0.092903411613],
            ["square inches", "", 0.00064516],
            ["square kilometers", "km²", 1e6],
            ["square meters", "m²", 1],
            ["square miles", "", 2589988.110336],
            ["square millimeters", "mm²", 1e-6],
            ["squares (of timber)", "", 9.290304],
            ["square rods (or poles)", "", 25.29285264],
            ["square yards", "", 0.83612736],
            ["townships ishu", "", 93239571.972]
        ]
    },
    {
        name: 'Bits & Bytes',
        description: 'Convert bits, bytes, kilobytes, gigabytes.',
        id: 'bits',
        defaultUnitIndex: 5,
        units: [
            ["bits", "", 0.125],
            ["bytes", "", 1],
            ["kilobits", "Kb", 128],
            ["kilobytes", "KB", 1024],
            ["megabits", "Mb", 131072],
            ["megabytes", "MB", 1048576],
            ["gigabits", "Gb", 134217728],
            ["gigabytes", "GB", 1073741824],
            ["terabits", "Tb", 137438953472],
            ["terabytes", "TB", 1099511627776],
            ["petabits", "Pb", 140737488355328],
            ["petabytes", "PB", 1125899906842624],
            ["exabits", "Eb", 144115188075855872],
            ["exabytes", "EB", 1152921504606846976]
        ]
    },
    {
        name: 'Electric Current',
        description: 'Convert electric current measurements like ampere, watt / volt',
        id: 'electric_current',
        defaultUnitIndex: 1,
        units: [
            ["abampere", "abA", 10],
            ["ampere", "A", 1],
            ["biot", "Bi", 10],
            ["centiampere", "", 0.01],
            ["coulomb/second", "", 1],
            ["EMU of current", "", 10],
            ["ESU of current", "", 3.335641e-10],
            ["franklin/second", "", 3.335641e-10],
            ["gaussian electric current", "", 3.335641e-10],
            ["gigaampere", "", 1e+9],
            ["gilbert", "Gi", 0.79577472],
            ["kiloampere", "kA", 1e3],
            ["megaampere", "", 1e6],
            ["microampere", "", 1e-6],
            ["milliampere", "mA", 1e-3],
            ["milliamp", "", 1e-3],
            ["nanoampere", "", 1e-9],
            ["picoampere", "", 1e-12],
            ["siemens volt", "", 1],
            ["statampere", "stA", 3.335641e-10],
            ["teraampere", "", 1e+12],
            ["volt/ohm", "", 1],
            ["watt/volt", "", 1],
            ["weber/henry", "", 1]
        ]
    },
    {
        name: 'Energy',
        description: 'Convert energy measurements like calories, joules, megajoules, watt hour.',
        id: 'energy',
        defaultUnitIndex: 20,
        units: [
            ["Btu (th)", "", 1054.350],
            ["Btu (mean)", "", 1055.87],
            ["calories (IT)", "", 4.1868],
            ["calories (th)", "", 4.184],
            ["calories (mean)", "", 4.19002],
            ["calories (15C)", "", 4.18580],
            ["calories (20C)", "", 4.18190],
            ["calories (food)", "", 4186],
            ["centigrade heat units", "", 1900.4],
            ["Dutch natural gas (m³, LHV)", "", 31650000],
            ["electron volts", "eV", 1.60219e-19],
            ["ergs", "", 1e-7],
            ["exajoules", "EJ", 1e18],
            ["foot-pound force", "ft lbs", 1.3558179483314004],
            ["foot poundals", "", 0.042140],
            ["gasoline (L)", "", 34200000],
            ["gigajoules", "GJ", 1e9],
            ["gigawatt hours", "GWh", 3.6e12],
            ["horsepower hours", "", 2684520],
            ["inch-pound force", "  in lbf", 0.11298482902761668],
            ["joules", "J", 1],
            ["kilocalories (IT)", "", 4186.8],
            ["kilocalories (th)", "", 4184],
            ["kilogram-force meters", "", 9.80665],
            ["kilojoules", "kJ", 1e3],
            ["kilowatt hours", "kWh", 3.6e6],
            ["megajoules", "MJ", 1e6],
            ["megawatt hours", "MWh", 3.6e9],
            ["newton meters", "Nm", 1],
            ["petajoules", "PJ", 1e15],
            ["terajoules", "TJ", 1e12],
            ["terawatt hours", "TWh", 3.6e15],
            ["therms", "", 105505585.257348],
            ["watt seconds", "Ws", 1],
            ["watt hours", "Wh", 3600]
        ]
    },

    {
        name: 'Force',
        description: 'Convert force measurements like newtons, pound force, tons force.',
        id: 'force',
        defaultUnitIndex: 5,
        units: [
            ["dynes", "dyn", 1e-5],
            ["kilograms force", "kgf", 9.80665],
            ["kilonewtons", "kN", 1000],
            ["kips", "", 4448.222],
            ["meganewtons", "MN", 1e6],
            ["newtons", "N", 1],
            ["pounds force", "lbf", 4.4482216152605],
            ["poundals", "pdl", 0.138255],
            ["sthène", "sn", 1000],
            ["tonnes force", "", 9806.65],
            ["tons force (UK)", "", 9964.01641818352],
            ["tons force (US)", "", 8896.443230521]
        ]
    },
    {
        name: 'Length',
        description: 'Convert length measurements like meter, inches, feet or light years.',
        id: 'length',
        defaultUnitIndex: 18,
        units: [
            ["ångströms", "Å", 1e-10],
            ["astronomical units", "au", 149598550000],
            ["barleycorns", "", 0.008467],
            ["cables", "", 182.88],
            ["centimeters", "cm", 0.01],
            ["chains (surveyors')", "", 20.116840233680467360934721869444],
            ["decimeters", "dm", 0.1],
            ["ells (UK)", "", 0.875],
            ["ems (pica)", "", 0.0042333],
            ["fathoms", "", 1.8288],
            ["feet (UK & US)", "", 0.3048],
            ["feet (US survey)", "", 0.30480060960121920243840487680975],
            ["furlongs", "", 201.168],
            ["hands", "", 0.1016],
            ["hectometers", "hm", 100],
            ["inches", "in", 0.0254],
            ["kilometers", "km", 1000],
            ["light years", "", 9.460528405e15],
            ["meters", "m", 1],
            ["micrometers", "µm", 1e-6],
            ["mil", "", 0.0000254],
            ["miles (UK & US)", "", 1609.344],
            ["miles (nautical, international)", "", 1852],
            ["miles (nautical, UK)", "", 1853.184],
            ["millimeters", "mm", 0.001],
            ["nanometers", "nm", 1e-9],
            ["parsecs", "", 3.0856776e16],
            ["picometers", "pm", 1e-12],
            ["Scandinavian mile", "", 10000],
            ["thou", "", 0.0000254],
            ["yards", "yd", 0.9144]
        ]
    },
    {
        name: 'Speed',
        description: 'Convert speed measurements like kilometers/hour, miles/hour, knots.',
        id: 'speed',
        defaultUnitIndex: 13,
        units: [
            ["centimeters/minute", "", 0.00016666666666666666],
            ["centimeters/second", "", 0.01],
            ["feet/hour", "", 0.00008466683600033866],
            ["feet/minute", "", 0.00508],
            ["feet/second", "ft/s", 0.3048],
            ["inches/minute", "", 0.0004233341800016934],
            ["inches/second", "", 0.0254],
            ["kilometers/hour", "km/h", 0.2777777777777778],
            ["kilometers/second", "", 1000],
            ["knots", "kn", 0.5144444444444444444],
            ["Mach number (ISA/Sea level)", "", 340.2933],
            ["meters/hour", "m/h", 0.0002777777777777778],
            ["meters/minute", "", 0.016666666666666666],
            ["meters/second", "m/s", 1],
            ["miles/hour", "mph", 0.44704],
            ["miles/minute", "", 26.8224],
            ["miles/second", "", 1609.344],
            ["nautical miles/hour", "", 0.5144444444444444444],
            ["Nm/24hr", "", 0.0214351851851851851],
            ["speed of light", "", 2.9979e8],
            ["speed of sound", "", 343],
            ["yards/hour", "", 0.000254000508001016],
            ["yards/minute", "", 0.01524],
            ["yards/second", "", 0.9144]
        ]
    },
    {
        name: 'Temperature',
        description: 'Convert temperature measurements like Celsius, Fahrenheit, Kelvin.',
        id: 'temperature',
        defaultUnitIndex: 0,
        units: [
            ["Celsius", "°C", 'value + 273.15', 'value - 273.15'],
            ["Fahrenheit", "°F", '5/9 * (value + 459.67)', '9/5 * value - 459.67'],
            ["Kelvin", "K", 1],
            ["Rankine", "°R", '5/9 * value', '9/5 * value'],
            ["Réaumure", "°Ré", '5/4 * value + 273.15', '4/5 * (value - 273.15)']
        ]
    },
    {
        name: 'Time',
        description: 'Convert time measurements like seconds, minutes, hours, days, weeks, years.',
        id: 'time',
        defaultUnitIndex: 15,
        units: [
            ["centuries", "", 3153600000],
            ["days", "d", 86400],
            ["decades", "", 315360000],
            ["femtoseconds", "fs", 1e-15],
            ["fortnights", "", 1209600],
            ["hours", "h", 3600],
            ["microseconds", "μs", 1e-6],
            ["millenia", "", 31536000000],
            ["milliseconds", "ms", 1e-3],
            ["minutes", "min", 60],
            ["months (Common)", "", 2628000],
            ["months (Synodic)", "", 2551442.8896],
            ["nanoseconds", "ns", 1e-9],
            ["picoseconds", "ps", 1e-12],
            ["quarters (Common)", "", 7884000],
            ["seconds", "s", 1],
            ["shakes", "", 1e-8],
            ["weeks", "", 604800],
            ["years (Common)", "y", 31536000],
            ["years (Average Gregorian)", "", 31556952],
            ["years (Julian)", "", 31557600],
            ["years (Leap)", "", 31622400],
            ["years (Tropical)", "", 31556925.216]
        ]
    },
    {
        name: 'Volume',
        description: 'Convert volume measurements like cubic meters, liters, gallons, pints.',
        id: 'volume',
        defaultUnitIndex: 27,
        units: [
         
            ["acre foot", "", 1233481.83754752],
            ["barrels (oil)", "bbl", 158.987294928],
            ["bushels (UK)", "", 36.36872],
            ["bushels (US)", "", 35.23907016688],
            ["centiliters", "", 0.01],
            ["cubic centimeters", "cm³", 1e-3],
            ["cubic decimeters", "dm³", 1],
            ["cubic decameters", "", 1e6],
            ["cubic feet", "ft³", 28.316846592],
            ["cubic inches", "", 0.016387064],
            ["cubic kilometers", "", 1e12],
            ["cubic meters", "m³", 1e3],
            ["cubic mile", "", 4.168181825e12],
            ["cubic millimeters", "", 1e-6],
            ["cubic yards", "", 764.554857984],
            ["cups", "", 0.2365882365],
            ["deciliters", "", 0.1],
            ["dram (imperial)", "", 0.0035516328125000],
            ["dram (US)", "", 0.0036966911953125],
            ["fluid ounces (imperial)", "fl oz", 0.0284130625],
            ["fluid ounces (US)", "fl oz", 0.0295735295625],
            ["gallons (imperial)", "gal", 4.54609],
            ["gallons, dry (US)", "", 4.40488377086],
            ["gallons, liquid (US)", "gal", 3.785411784],
            ["gill (imperial)", "gi", 0.1420653125],
            ["gill (US)", "gi", 0.11829411825],
            ["kiloliters", "kl", 1e3],
            ["liters", "l or L", 1],
            ["liters (1901-1964)", "", 1.000028],
            ["milliliters", "ml", 1e-3],
            ["microliters", "µl", 1e-6],
            ["nanoliters", "nl", 1e-9],
            ["picoliters", "pl", 1e-12],
            ["pints (imperial)", "pt", 0.56826125],
            ["pints, dry (US)", "", 0.5506104713575],
            ["pints, liquid (US)", "pt", 0.473176473],
            ["quarts (imperial)", "qt", 1.1365225],
            ["quarts, dry (US)", "", 1.101220942715],
            ["quarts, liquid (US)", "qt", 0.946352946],
            ["table spoons", "", 0.01478676478125],
            ["tea spoons", "", 0.00492892159375]
        ]
    }

]

function getQuantityByID(id) {
    for (let i = 0; i < quantities.length; i++) {
        if (id === quantities[i].id) return quantities[i];
    }
}
//   console.log(getQuantityByID);

function getQuantityFromURL() {
    let pathParts = window.location.pathname.substr(1).split("/");
    let lastURLPart = pathParts[1];
    if (!lastURLPart) return null;

    for (let i = 0; i < quantities.length; i++) {
        let quantity = quantities[i];
        // .htm is for backward compatibility
        if ((lastURLPart === quantity.id) || (lastURLPart === quantity.id + '.htm')) return quantity;
    }
    return null;
}

function onInitPage() {
    inputFrom = document.getElementById('inputFrom');
    inputTo = document.getElementById('inputTo');
    selectQuantity = document.getElementById('selectQuantity');
    listQuentities = document.getElementById('listQuentities');
    selectFrom = document.getElementById('selectFrom');
    selectTo = document.getElementById('selectTo');
    precision = localStorageGetDefault('precision', 6);
    metaTagDescription = document.getElementsByName('description');

    let listItems = '';
    for (let i = 0; i < quantities.length; i++) {
        selectQuantity.innerHTML += '<option value="' + quantities[i].id + '">' + quantities[i].name + '</option>';
        listItems += '<li id="list-item' + i + '"><a class="list-a" href="' + quantities[i].id + '" onclick="loadQuantity(\'' + quantities[i].id + '\'); return false;">' + quantities[i].name + '</a></li>';
        // listItems += '<li id="list-item' + i + '"><a class="list-a" href="' + quantities[i].id + '">' + quantities[i].name + '</a></li>';
    }
    // listQuentities.innerHTML = listItems;
    

    // Check if url contains a quantity
    let startQuantity = getQuantityFromURL();
    if (!startQuantity) {
        let id = localStorageGetDefault('lastQuantityID', defaultQuantityID);
        startQuantity = getQuantityByID(id);
    }
    if (!startQuantity) startQuantity = getQuantityByID(defaultQuantityID);
    loadQuantity(startQuantity.id);
}


window.addEventListener('keydown', function (event) {
    if (event.code === 'Escape')
        closeSettings();
});

window.onpopstate = function () {
    let urlQuantity = getQuantityFromURL();
    selectQuantity.value = urlQuantity ? urlQuantity.id : localStorageGetDefault('lastQuantityID', defaultQuantityID);
    loadQuantity(selectQuantity.value, false);
};

function getURL() {
    return quantity.id + '.htm';
}

function loadQuantity(quantityID, pushState = true) {
    quantity = getQuantityByID(quantityID);
    localStorage.setItem('lastQuantityID', quantityID);

    document.title = "Convert " + quantity.name + ' - Unit Converter';

    // Save in history if quantity is different from one in url
    let urlQuantity = getQuantityFromURL();
    if (pushState && ((!urlQuantity) || (quantity.id !== urlQuantity.id))) {
        let url = getURL();
        history.pushState(null, document.title, url);
    }

    selectFrom.innerHTML = '';
    selectTo.innerHTML = '';
    let htmlOptions = '';
    for (let i = 0; i < quantity.units.length; i++) {
        let symbol = quantity.units[i][1];
        symbol = (symbol.length > 0) ? ' [' + symbol + ']' : '';
        let title = quantity.units[i][0] + symbol;
        htmlOptions += '<option>' + title + '</option>';
    }
    selectTo.innerHTML = htmlOptions;
    selectFrom.innerHTML = htmlOptions;

    document.getElementById('quantity_title').innerHTML = 'Convert ' + quantity.name;
    metaTagDescription.content = quantity.description;
    inputFrom.value = localStorageGetDefault('input' + quantity.name, 1);
    loadUnits();
    selectQuantity.value = quantityID;
    let itemID = '';
    for (let i = 0; i < quantities.length; i++) {
        itemID = 'list_item' + i;
    }

    convert();
}

document.addEventListener("DOMContentLoaded", onInitPage, false);

let lTempDiv = document.createElement("div");
lTempDiv.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
let isIE9AndLower = (lTempDiv.getElementsByTagName("i").length === 1);

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function callServer(url, callback) {
    let lXMLHttp = new XMLHttpRequest();
    lXMLHttp.onreadystatechange = function () {
        if (lXMLHttp.readyState === 4 && lXMLHttp.status === 200)
            callback(lXMLHttp.responseText);
    };

    // Note: Use POST to prevent IE from caching the AJAX request
    lXMLHttp.open("GET", url);
    lXMLHttp.send();
}




function findUnitIndexByName(name) {
    for (let i = 0; i < quantity.units.length; i++) {
        if (quantity.units[i][0] === name) return i;
    }
    return -1;
}



function loadUnits() {
    selectFrom.selectedIndex = findUnitIndexByName(localStorageGetDefault('from' + quantity.name, ''));
    if (selectFrom.selectedIndex === -1) selectFrom.selectedIndex = quantity.defaultUnitIndex;
    selectTo.selectedIndex = findUnitIndexByName(localStorageGetDefault('to' + quantity.name, ''));
    if (selectTo.selectedIndex === -1) selectTo.selectedIndex = quantity.defaultUnitIndex;
}

function onChangeUnit() {
    saveUnits();
    convert();
}

function saveUnits() {
    localStorage.setItem('from' + quantity.name, quantity.units[selectFrom.selectedIndex][0]);
    localStorage.setItem('to' + quantity.name, quantity.units[selectTo.selectedIndex][0]);
}

function setConversionInfo(text) {
    let div = document.getElementById('conversionInfo');
    let divText = document.getElementById('conversionInfoText');
    if (text === '') {
        divText.innerHTML = '';
        div.style.display = 'none';
    } else {
        divText.innerHTML = text;
        div.style.display = 'flex';
    }
}

function convertInternal(fromUnitIndex, value, toUnitIndex, inputResult, forceReload = false) {
    setConversionInfo('');
    let quantity = getQuantityByID(selectQuantity.value);
    let unitFromFactor = quantity.units[fromUnitIndex][2];
    let unitToFactor = quantity.units[toUnitIndex][2];

    if (quantity.name === 'Currency') {
        getCurrencyRates(
            function (currencies) {
                let fromRate = (unitFromFactor === 'EUR') ? 1 : currencies.rates[unitFromFactor];
                let toRate = (unitToFactor === 'EUR') ? 1 : currencies.rates[unitToFactor];
                let rate = toRate / fromRate;

                value = value * rate;
                let date = new Date(currencies.utctime);
                setConversionInfo(
                    '<div style="font-size: 8px;">' + unitFromFactor + '/' + unitToFactor + ' exchange rate: ' + rate.toFixed(4) + ' at ' + date.toLocaleDateString() + ' 16:00 CET' +
                    '<br>The <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" target="bank">ECB</a>' + ' exchange rates are updated on work days around 16:00 CET</div>');
                setTimeout(stopCurrencyRefreshAnimation, 1000);
                inputResult.value = value.toFixed(precision);
            }, forceReload);
    }
    else {
        if (isNumber(unitFromFactor)) {
            value = value * unitFromFactor;
        }
        else {
            value = eval(unitFromFactor);
        }

        if (isNumber(unitToFactor)) {
            value = value / unitToFactor;
        }
        else {
            value = eval(quantity.units[toUnitIndex][3]);
        }
    }
    inputResult.value = value.toFixed(precision);
}


function convert(forceReload = false) {
    let fromValue = parseFloat(inputFrom.value);
    if (isNaN(fromValue)) {
        inputTo.value = '';
    } else {
        convertInternal(selectFrom.selectedIndex, fromValue, selectTo.selectedIndex, inputTo, forceReload);
        localStorage.setItem('input' + quantity.name, fromValue.toString());
    }
}

function localStorageGetDefault(name, defaultValue) {
    let value = localStorage.getItem(name);
    return (value !== null) ? value : defaultValue;
}

function swapUnits() {
    let tempUnitIndex        = selectFrom.selectedIndex;
    selectFrom.selectedIndex = selectTo.selectedIndex;
    selectTo.selectedIndex   = tempUnitIndex;
    saveUnits();
    convert();
  }




let icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark_mode")
    if(document.body.classList.contains("dark_mode")){
        icon.src ="image/sun.png"
    }else{
        icon.src ="image/moon.png"
    }
}
