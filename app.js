const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// console.log(argv.direccion);

// lugar.getLugarLatLng( argv.direccion )
	// .then( console.log );

// clima.getClima(40.750000,-74.000000)
// 	.then(console.log)
// 	.catch( err => console.log(err));

const getInfo = async (direccion) => {
	
	try{
		const coord = await lugar.getLugarLatLng( direccion );
		const temp = await clima.getClima(coord.lat,coord.lng);
		return `El Clima de ${direccion} es de ${temp}`;
	}catch (e){
		return `No se puedo determinar el clima de ${direccion}`;
	}

}

getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log);