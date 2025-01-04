import * as THREE from "three";

export default class xd {
    constructor(options) {
        this.time = 0;
        this.container = options.dom;
        this.scene = new THREE.Scene();

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.camera = new THREE.PerspectiveCamera(
            70,
            this.width / this.height,
            100,
            2000
        );
        this.camera.position.z = 600;

        this.camera.fov =
            2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.container.appendChild(this.renderer.domElement);

        this.mouse = new THREE.Vector2();

        this.mouseMovement();
        this.resize();
        this.setupResize();
        this.addObjects();
        this.composerPass();
        this.render();
    }

    mouseMovement() {
        window.addEventListener(
            "mousemove",
            (event) => {
                this.mouse.x = (event.clientX / this.width) * 2 - 1;
                this.mouse.y = -(event.clientY / this.height) * 2 + 1;

                // // update the picking ray with the camera and mouse position
                // this.raycaster.setFromCamera(this.mouse, this.camera);

                // // calculate objects intersecting the picking ray
                // const intersects = this.raycaster.intersectObjects(
                //     this.scene.children
                // );

                // if (intersects.length > 0) {
                //     // console.log(intersects[0]);
                //     let obj = intersects[0].object;
                //     obj.material.uniforms.hover.value = intersects[0].uv;
                // }
            },
            false
        );
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {}

    render() {
        this.time += 0.05;

        this.scroll.render();
        this.previousScroll = this.currentScroll;

        this.currentScroll = this.scroll.scrollToRender;

        // if(Math.round(this.currentScroll)!==Math.round(this.previousScroll)){
        // console.log('should render');
        this.setPosition();
        this.customPass.uniforms.scrollSpeed.value = this.scroll.speedTarget;
        this.customPass.uniforms.time.value = this.time;

        // this.material.uniforms.time.value = this.time;

        this.materials.forEach((m) => {
            m.uniforms.time.value = this.time;
        });

        // this.renderer.render( this.scene, this.camera );
        this.composer.render();
        // }

        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch({
    dom: document.getElementById("container"),
});
