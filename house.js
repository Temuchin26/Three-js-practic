function createFigure(cord, color, figure, groupToAdd){
    const {x, y, z, ...rest} = cord.init
    var geometry = new THREE[figure + 'Geometry'](x, y ,z , rest.r);
    var material = new THREE.MeshStandardMaterial({color: color});
    geometry.computeVertexNormals()

    var body = new THREE.Mesh(geometry, material);
    body.castShadow = true;
    body.position.x= cord.pos.x;
    body.position.y= cord.pos.y;
    body.position.z= cord.pos.z;
    
    if(cord.rotate){
        body.rotation.x = cord.rotate.x;
        body.rotation.y = cord.rotate.y;
        body.rotation.z	 = cord.rotate.z;
    }

    groupToAdd.add(body);
}

let house = new THREE.Group()

// house foundament
createFigure({
    "init": {
        "x": 30,
        "y": 2,
        "z": 20,
        // "r": 1
    },
    "pos": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "#3E3838", "Cube", house)	

//house body
createFigure({
    "init": {
        "x": 28,
        "y": 20,
        "z": 18,
        // "r": 1
    },
    "pos": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "rotate":{
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "orange", "Cube", house)	

//roof part 1
createFigure({
    "init": {
        "x": 30,
        "y": 1,
        "z": 18,
        // "r": 1
    },
    "pos": {
        "x": 0,
        "y": 12,
        "z": -7
    },
    "rotate":{
        "x": 5.6,
        "y": 0,
        "z": 0
    }
}, "#AE7C7C", "Cube", house)	


// roof part 2
createFigure({
    "init": {
        "x": 30,
        "y": 1,
        "z": 18,
        // "r": 1
    },
    "pos": {
        "x": 0,
        "y": 12,
        "z": 6.5
    },
    "rotate":{
        "x": -5.6,
        "y": 0,
        "z": 0
    }
}, "#AE7C7C", "Cube", house)

//door	 
createFigure({
    "init": {
        "x": 1,
        "y": 15,
        "z": 4,
        // "r": 1
    },
    "pos": {
        "x": -14,
        "y": 0,
        "z": 0
    },
    "rotate":{
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "#6CBBB3", "Cube", house)	

//window 1	 
createFigure({
    "init": {
        "x": 1,
        "y": 4,
        "z": 4,
        // "r": 1
    },
    "pos": {
        "x": 0,
        "y": 5,
        "z": 9
    },
    "rotate":{
        "x": 0,
        "y": -1.5,
        "z": 0
    }
}, "#6CBBB3", "Cube", house)	


//WINDOW 2
createFigure({
    "init": {
        "x": 1,
        "y": 4,
        "z": 4,
        // "r": 1
    },
    "pos": {
        "x": 7,
        "y": 5,
        "z": -9
    },
    "rotate":{
        "x": 0,
        "y": -1.5,
        "z": 0
    }
}, "#6CBBB3", "Cube", house)	

//window 3

createFigure({
    "init": {
        "x": 1,
        "y": 4,
        "z": 4,
        // "r": 1
    },
    "pos": {
        "x": -4,
        "y": 5,
        "z": -9
    },
    "rotate":{
        "x": 0,
        "y": -1.5,
        "z": 0
    }
}, "#6CBBB3", "Cube", house)	


//pipe
createFigure({
    "init": {
        "x": 2,
        "y": 6,
        "z": 2,
        // "r": 1
    },
    "pos": {
        "x": -8,
        "y": 17,
        "z": 0
    },
    "rotate":{
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "#3E3838", "Cube", house)	

var width = 3;
var height = 3;
var intensity = 2;
var rectLight = new THREE.RectAreaLight( 'orange', intensity,  width, height );
rectLight.position.set( 0, 5, 9.7 );
// rectLight.rotate.z = 20;
rectLight.lookAt( 0, 5, 20 );
house.add( rectLight )

var rectLightMesh = new THREE.Mesh( new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({color: "#E6AD45"}) );
rectLightMesh.scale.x = rectLight.width;
rectLightMesh.scale.y = rectLight.height;
rectLightMesh.rotation.y = 0.1;
rectLight.add( rectLightMesh );
// rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
// house.add( rectLightHelper );
// house.add(rectLight)
// house.position.y = -100

// 2

var rectLight = new THREE.RectAreaLight( 'orange', intensity,  width, height );
rectLight.position.set( 7, 4.7, -9.7 );
// rectLight.rotate.z = 20;
rectLight.lookAt( 0, 5, -20 );
house.add( rectLight )

var rectLightMesh = new THREE.Mesh( new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({color: "#E6AD45"}) );
rectLightMesh.scale.x = rectLight.width;
rectLightMesh.scale.y = rectLight.height;
rectLightMesh.rotation.y = -0.5;
rectLight.add( rectLightMesh );



//3 

var rectLight = new THREE.RectAreaLight( 'orange', intensity,  width, height );
rectLight.position.set( -4, 4.7, -9.6 );
// rectLight.rotate.z = 20;
rectLight.lookAt( 0, 5, -20 );
house.add( rectLight )

var rectLightMesh = new THREE.Mesh( new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({color: "#E6AD45"}) );
rectLightMesh.scale.x = rectLight.width;
rectLightMesh.scale.y = rectLight.height;
rectLightMesh.rotation.y = 0.4;
rectLight.add( rectLightMesh );

//4

widht = 3;
height = 2

var rectLight = new THREE.RectAreaLight( '#DAA520', 1,  width, height );
rectLight.position.set( -14.6, 6, 0 );
// rectLight.rotate.z = 20;
rectLight.lookAt( -20, 6, 0 );
house.add( rectLight )

var rectLightMesh = new THREE.Mesh( new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({color: "#E6AD45"}) );
rectLightMesh.scale.x = rectLight.width;
rectLightMesh.scale.y = rectLight.height;
// rectLightMesh.rotation.y = 2.3
rectLight.add( rectLightMesh );


var geom = new THREE.Geometry();
		var v1 = new THREE.Vector3(0,0,0);
		var v2 = new THREE.Vector3(8,8,0);
		var v3 = new THREE.Vector3(18,0,0);

		geom.vertices.push(v1);
		geom.vertices.push(v2);
		geom.vertices.push(v3);

		geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geom.computeFaceNormals();

		var mesh= new THREE.Mesh( geom, new THREE.MeshStandardMaterial({color: 'orange', side: THREE.DoubleSide}) );
		mesh.position.y = 10
		mesh.position.x = 13.7
		mesh.position.z = 8
		

		mesh.rotation.y = 1.6

		house.add(mesh)

		var geom = new THREE.Geometry();
		var v1 = new THREE.Vector3(0,0,0);
		var v2 = new THREE.Vector3(8,8,0);
		var v3 = new THREE.Vector3(18,0,0);

		geom.vertices.push(v1);
		geom.vertices.push(v2);
		geom.vertices.push(v3);

		geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geom.computeFaceNormals();

		var mesh= new THREE.Mesh( geom, new THREE.MeshStandardMaterial({color: 'orange', side: THREE.DoubleSide}) );
		mesh.position.y = 10
		mesh.position.x = -14
		mesh.position.z = 8
		

		mesh.rotation.y = 1.6

		house.add(mesh)
