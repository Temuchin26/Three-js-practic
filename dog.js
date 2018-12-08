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

let dog = new THREE.Group()

// house foundament
createFigure({
    "init": {
        "x": 1,
        "y": 6,
        "z": 1.5,
        // "r": 1
    },
    "pos": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "rotate": {
        "x": 0.5,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)	

createFigure({
    "init": {
        "x": 0.3,
        "y": 0.5,
        "z": 2.3,
        // "r": 1
    },
    "pos": {
        "x": 0,
        "y": 0,
        "z": -1
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 1,
        "y": 1,
        "z": 1,
    },
    "pos": {
        "x": 0,
        "y": 2.5,
        "z": 1.5
    },
    "rotate": {
        "x": -0.5,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 1,
        "y": 1,
        "z": 1,
    },
    "pos": {
        "x": 0,
        "y": 2.5,
        "z": 2
    },
    "rotate": {
        "x": -0.2,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 0.7,
        "z": 1,
    },
    "pos": {
        "x": 0,
        "y": 2.5,
        "z": 2.7
    },
    "rotate": {
        "x": -0.2,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 5,
        "z": 0.5,
    },
    "pos": {
        "x": 0.5,
        "y": 0,
        "z": 1.8
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 5,
        "z": 0.5,
    },
    "pos": {
        "x": -0.5,
        "y": 0,
        "z": 1.8
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 0.5,
        "z": 0.5,
    },
    "pos": {
        "x": -0.5,
        "y": 0,
        "z": 1
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 0.5,
        "z": 0.5,
    },
    "pos": {
        "x": 0.5,
        "y": 0,
        "z": 1
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 0.5,
        "z": 0.5,
    },
    "pos": {
        "x": 0.5,
        "y": 0,
        "z": 2
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 0.5,
        "z": 0.5,
    },
    "pos": {
        "x": -0.5,
        "y": 0,
        "z": 2
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)

createFigure({
    "init": {
        "x": 0.5,
        "y": 0.7,
        "z": 0.5,
    },
    "pos": {
        "x": 0.4,
        "y": 3,
        "z": 2
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)
createFigure({
    "init": {
        "x": 0.5,
        "y": 0.7,
        "z": 0.5,
    },
    "pos": {
        "x": -0.4,
        "y": 3,
        "z": 2
    },
    "rotate": {
        "x": 0,
        "y": 0,
        "z": 0
    }
}, "black", "Cube", dog)


dog.position.x = 7
dog.position.z = -18

dog.scale.set(1.5, 1.5, 1.5)

