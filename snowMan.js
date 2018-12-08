function createSnowMan(cord, color, figure, test){
    const {x, y, z, ...rest} = cord.init
    var geometry = new THREE[figure + 'Geometry'](x, y ,z , rest.r);
    var material = new THREE.MeshLambertMaterial({color: color});
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

    snowManGroup.add(body);
}

let snowManGroup = new THREE.Group()

// snowMan bottom 
createSnowMan({
    "init": {
        "x": 4,
        "y": 20,
        "z": 20
    },
    "pos": {
        "x": 5,
        "y": 4,
        "z": 2
    },
}, "#ffffff", "Sphere")

// snowMan right eye
createSnowMan({
    "init": {
        "x": 0.5,
        "y": 30,
        "z": 20
    },
    "pos": {
        "x": 3.6,
        "y": 14.5,
        "z": 1
    },
}, "rgb(38, 38, 38)", "Sphere")

// snowMan left eye
createSnowMan({
    "init": {
        "x": 0.5,
        "y": 20,
        "z": 20
    },
    "pos": {
        "x": 3.6,
        "y": 14.5,
        "z": 3
    },
}, "rgb(38, 38, 38)", "Sphere")

// snowMan nose
createSnowMan({
    "init": {
        "x": 1,
        "y": 4,
        "z": 6
    },
    "pos": {
        "x": 3.5,
        "y": 14,
        "z": 2
    },
    "rotate":{
        "x": 0,
        "y": 0,
        "z": -4.9
    }
}, "orange", "Cone")	

// snowMan left hand
createSnowMan({
    "init": {
        "x": 0.5,
        "y": 1,
        "z": 5,
        "r": 10
    },
    "pos": {
        "x": 5,
        "y": 11,
        "z": 6
    },
    "rotate":{
        "x":20,
        "y": 9,
        "z": 0
    }
}, "white", "Cylinder")	

// snowMan right hand
createSnowMan({
    "init": {
        "x": 0.5,
        "y": 1,
        "z": 5,
        "r": 10
    },
    "pos": {
        "x": 5,
        "y": 11,
        "z": -2
    },
    "rotate":{
        "x": 5,
        "y": 10,
        "z": 0
    }
}, "white", "Cylinder")	

// snowMan body
createSnowMan({
    "init": {
        "x": 3,
        "y": 10,
        "z": 20,
    },
    "pos": {
        "x": 5,
        "y": 10,
        "z": 2
    },
}, "white", "Sphere")	

// snowMan head
createSnowMan({
    "init": {
        "x": 2,
        "y": 20,
        "z": 20,
    },
    "pos": {
        "x": 5,
        "y": 14,
        "z": 2
    },
}, "white", "Sphere")	


createSnowMan({
    "init": {
        "x": 2,
        "y": 2,
        "z": 5,
        "r": 50
    },
    "pos": {
        "x": 5,
        "y": 18,
        "z": 2
    },
}, "blue", "Cylinder")	


createSnowMan({
    "init": {
        "x": 5,
        "y": 0.5,
        "z": 4,
        "r": 1
    },
    "pos": {
        "x": 5,
        "y": 15.5,
        "z": 2
    },
    "rotate":{
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "blue", "Cube")	
// Geometry


snowManGroup.position.x = 10
snowManGroup.position.y = -0.5
snowManGroup.position.z = 30 
snowManGroup.rotation.y = 6 
snowManGroup.scale.set(0.5, 0.5, 0.5) 