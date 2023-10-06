'use client'

import * as THREE from 'three';

import { useEffect, useRef } from "react";

function MyThree() {
    const refContainer = useRef(null);
    useEffect(() => {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        // var geometry = new THREE.TorusGeometry(2,10,5, 6);
        var geometry = new THREE.TorusGeometry();
        var material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
        var cube = new THREE.Mesh(geometry, material);
        renderer.setClearColor(0xffffff)


        scene.add(cube);
        camera.position.z = 2;
        var animate = function () {
            requestAnimationFrame(animate);
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            cube.rotation.z += 0.01;
            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return (
        <div ref={refContainer}></div>
    );
}

export default MyThree;