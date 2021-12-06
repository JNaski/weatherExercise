

export const calculateDate = (timestamp) => {
  const date = new Date(timestamp*1000);
  const day = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
  return day;
};

export const calculateTime = (timestamp) => {
  const date = new Date(timestamp*1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return formattedTime;
};

export const degToCompass = (num) => {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
};