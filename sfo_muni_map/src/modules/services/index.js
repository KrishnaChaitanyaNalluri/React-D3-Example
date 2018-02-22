
export const routesURL = `http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni`;
export const routeConfigFunc = (route) => (`http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni&r=${route}`);
export const vehicleLocFunc = (route, time) => (`http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=${route}&t=${time}`);