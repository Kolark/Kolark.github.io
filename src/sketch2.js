import * as THREE from "three";

import fragment from "./shaders/fragment.glsl";
import vertex from "./shaders/vertex.glsl";

export default class Sketch {
    constructor(options) {
        this.time = 0;
        this.container = options.dom;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        // Create a ShaderMaterial
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertex,
            fragmentShader: fragment,
            uniforms: {
                iTime: { value: 0 },
                uResolution: {
                    value: new THREE.Vector2(this.width, this.height),
                },
            },
            wireframe: false,
        });

        // Create a square geometry (plane)
        this.geometry = new THREE.PlaneGeometry(2, 2, 2, 2); // Size 2x2 to cover normalized device coordinates

        // Create a mesh with the geometry and material
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);

        // Position the camera
        this.camera.position.z = 1;

        this.setupResize();
        this.render();
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
    }

    render() {
        this.time += 0.001;
        this.material.uniforms.iTime.value = this.time;
        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}
