
export const measurementUnits = [
  {value: "metric", text: "Metric"},
  {value: "imperial", text: "Imperial"},
  {value: "standard", text: "Standard"},
];

export const testData = 
{
	"coord": {
		"lon": 26.9458,
		"lat": 60.4664
	},
	"weather": [{
		"id": 804,
		"main": "Clouds",
		"description": "overcast clouds",
		"icon": "04d"
	}],
	"base": "stations",
	"main": {
		"temp": -13.41,
		"feels_like": -20.41,
		"temp_min": -13.41,
		"temp_max": -11.68,
		"pressure": 1023,
		"humidity": 81,
		"sea_level": 1023,
		"grnd_level": 1021
	},
	"visibility": 6118,
	"wind": {
		"speed": 6.93,
		"deg": 77,
		"gust": 7.97
	},
	"clouds": {
		"all": 100
	},
	"dt": 1638779946,
	"sys": {
		"type": 1,
		"id": 1366,
		"country": "FI",
		"sunrise": 1638774058,
		"sunset": 1638795954
	},
	"timezone": 7200,
	"id": 650946,
	"name": "Kotka",
	"cod": 200
}

export const testForecast =
{
	"lat": 60.4664,
	"lon": 26.9458,
	"timezone": "Europe/Helsinki",
	"timezone_offset": 7200,
	"daily": [{
		"dt": 1638784800,
		"sunrise": 1638774058,
		"sunset": 1638795954,
		"moonrise": 1638785880,
		"moonset": 1638800580,
		"moon_phase": 0.08,
		"temp": {
			"day": -14.91,
			"min": -16.41,
			"max": -8.43,
			"night": -9.48,
			"eve": -10.34,
			"morn": -9.04
		},
		"feels_like": {
			"day": -21.91,
			"night": -16.48,
			"eve": -17.34,
			"morn": -16.04
		},
		"pressure": 1022,
		"humidity": 81,
		"dew_point": -17.17,
		"wind_speed": 7.75,
		"wind_deg": 76,
		"wind_gust": 9.3,
		"weather": [{
			"id": 600,
			"main": "Snow",
			"description": "light snow",
			"icon": "13d"
		}],
		"clouds": 100,
		"pop": 0.38,
		"snow": 0.36,
		"uvi": 0.13
	}, {
		"dt": 1638871200,
		"sunrise": 1638860563,
		"sunset": 1638882299,
		"moonrise": 1638874500,
		"moonset": 1638892740,
		"moon_phase": 0.12,
		"temp": {
			"day": -8.55,
			"min": -9.88,
			"max": -8.42,
			"night": -9.88,
			"eve": -8.68,
			"morn": -9.41
		},
		"feels_like": {
			"day": -14.6,
			"night": -16.88,
			"eve": -15.68,
			"morn": -15.64
		},
		"pressure": 1015,
		"humidity": 88,
		"dew_point": -10.68,
		"wind_speed": 5.68,
		"wind_deg": 342,
		"wind_gust": 7.27,
		"weather": [{
			"id": 804,
			"main": "Clouds",
			"description": "overcast clouds",
			"icon": "04d"
		}],
		"clouds": 100,
		"pop": 0.41,
		"uvi": 0.15
	}, {
		"dt": 1638957600,
		"sunrise": 1638947064,
		"sunset": 1638968649,
		"moonrise": 1638961920,
		"moonset": 1638985440,
		"moon_phase": 0.16,
		"temp": {
			"day": -9.77,
			"min": -10.62,
			"max": -9.38,
			"night": -9.92,
			"eve": -9.73,
			"morn": -10.54
		},
		"feels_like": {
			"day": -16.42,
			"night": -15.53,
			"eve": -16.19,
			"morn": -17.54
		},
		"pressure": 1021,
		"humidity": 90,
		"dew_point": -11.67,
		"wind_speed": 5.5,
		"wind_deg": 318,
		"wind_gust": 7.76,
		"weather": [{
			"id": 804,
			"main": "Clouds",
			"description": "overcast clouds",
			"icon": "04d"
		}],
		"clouds": 95,
		"pop": 0,
		"uvi": 0.14
	}, {
		"dt": 1639044000,
		"sunrise": 1639033561,
		"sunset": 1639055005,
		"moonrise": 1639048800,
		"moonset": 1639077900,
		"moon_phase": 0.19,
		"temp": {
			"day": -8.75,
			"min": -9.95,
			"max": -3.89,
			"night": -3.89,
			"eve": -7.01,
			"morn": -9.9
		},
		"feels_like": {
			"day": -12.43,
			"night": -10.32,
			"eve": -12.25,
			"morn": -14.64
		},
		"pressure": 1026,
		"humidity": 86,
		"dew_point": -11.1,
		"wind_speed": 5.88,
		"wind_deg": 106,
		"wind_gust": 7.83,
		"weather": [{
			"id": 802,
			"main": "Clouds",
			"description": "scattered clouds",
			"icon": "03d"
		}],
		"clouds": 46,
		"pop": 0,
		"uvi": 0.14
	}, {
		"dt": 1639130400,
		"sunrise": 1639120053,
		"sunset": 1639141365,
		"moonrise": 1639135440,
		"moonset": 1639169940,
		"moon_phase": 0.23,
		"temp": {
			"day": -3.47,
			"min": -3.98,
			"max": -2.95,
			"night": -3.09,
			"eve": -3.78,
			"morn": -2.95
		},
		"feels_like": {
			"day": -10.47,
			"night": -10.09,
			"eve": -10.78,
			"morn": -9.95
		},
		"pressure": 1023,
		"humidity": 77,
		"dew_point": -6.91,
		"wind_speed": 10.86,
		"wind_deg": 78,
		"wind_gust": 15.46,
		"weather": [{
			"id": 802,
			"main": "Clouds",
			"description": "scattered clouds",
			"icon": "03d"
		}],
		"clouds": 34,
		"pop": 0.01,
		"uvi": 0.12
	}, {
		"dt": 1639216800,
		"sunrise": 1639206541,
		"sunset": 1639227731,
		"moonrise": 1639222020,
		"moonset": 0,
		"moon_phase": 0.25,
		"temp": {
			"day": -2.14,
			"min": -3.14,
			"max": -1.06,
			"night": -1.06,
			"eve": -1.74,
			"morn": -2.87
		},
		"feels_like": {
			"day": -9.14,
			"night": -7.89,
			"eve": -8.74,
			"morn": -9.87
		},
		"pressure": 1020,
		"humidity": 87,
		"dew_point": -3.97,
		"wind_speed": 11.88,
		"wind_deg": 72,
		"wind_gust": 17.99,
		"weather": [{
			"id": 600,
			"main": "Snow",
			"description": "light snow",
			"icon": "13d"
		}],
		"clouds": 100,
		"pop": 1,
		"snow": 3.42,
		"uvi": 1
	}, {
		"dt": 1639303200,
		"sunrise": 1639293024,
		"sunset": 1639314103,
		"moonrise": 1639308540,
		"moonset": 1639261620,
		"moon_phase": 0.29,
		"temp": {
			"day": 1.32,
			"min": -0.48,
			"max": 1.67,
			"night": 1.2,
			"eve": 1.37,
			"morn": -0.01
		},
		"feels_like": {
			"day": -1.53,
			"night": -4.06,
			"eve": -1.96,
			"morn": -5.24
		},
		"pressure": 1030,
		"humidity": 87,
		"dew_point": -0.56,
		"wind_speed": 7.39,
		"wind_deg": 107,
		"wind_gust": 8.66,
		"weather": [{
			"id": 600,
			"main": "Snow",
			"description": "light snow",
			"icon": "13d"
		}],
		"clouds": 99,
		"pop": 0.96,
		"snow": 0.72,
		"uvi": 1
	}, {
		"dt": 1639389600,
		"sunrise": 1639379502,
		"sunset": 1639400479,
		"moonrise": 1639395060,
		"moonset": 1639353120,
		"moon_phase": 0.32,
		"temp": {
			"day": 1.45,
			"min": 0.67,
			"max": 2.21,
			"night": 2.21,
			"eve": 1.8,
			"morn": 0.82
		},
		"feels_like": {
			"day": -5.17,
			"night": -4.05,
			"eve": -4.74,
			"morn": -6.18
		},
		"pressure": 1024,
		"humidity": 81,
		"dew_point": -1.38,
		"wind_speed": 11.08,
		"wind_deg": 110,
		"wind_gust": 15.35,
		"weather": [{
			"id": 616,
			"main": "Snow",
			"description": "rain and snow",
			"icon": "13d"
		}],
		"clouds": 100,
		"pop": 0.58,
		"rain": 1.12,
		"snow": 0.34,
		"uvi": 1
	}]
}