import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three-stdlib'; // Ensure you have three-stdlib installed

const AnimatedCube = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();

        // Get parent div dimensions
        const parentDiv = mountRef.current?.parentElement;
        const width = parentDiv ? parentDiv.clientWidth : window.innerWidth;
        const height = parentDiv ? parentDiv.clientHeight : window.innerHeight;

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Create a larger rounded box geometry
        const geometry = new RoundedBoxGeometry(5, 5, 5, 5, 0.3); // Cube size remains constant

        // Create a gradient material with specified colors
        const material = new THREE.MeshStandardMaterial({
            transparent: false, // No transparency
            opacity: 1, // Fully opaque
            roughness: 0.5, // Set roughness to a valid value
            metalness: 0.6,
            side: THREE.DoubleSide,
            vertexColors: true, // Use vertex colors for the gradient
        });

        // Create the cube mesh with rounded geometry and gradient material
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Gradient color calculation
        const colors = [];
        const color1 = new THREE.Color(0x050deb); // Starting color #050deb
        const color2 = new THREE.Color(0xff00e2); // Ending color #ff00e2

        // Assign gradient colors to vertices
        for (let i = 0; i < geometry.attributes.position.count; i++) {
            const ratio = i / geometry.attributes.position.count; // Create gradient ratio
            const color = color1.clone().lerp(color2, ratio); // Interpolate between colors
            colors.push(color.r, color.g, color.b); // Push the interpolated color
        }

        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Camera position
        camera.position.z = 5;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 5.8); // Increased intensity
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1.5); // Increased intensity
        // pointLight.position.set(10, 10, 10); // Position the light to illuminate the cube
        scene.add(pointLight);

        // Set initial camera position based on viewport size
        const adjustCamera = (width: any) => {
            if (width < 768) {
                camera.position.set(0, 0, 12); // Move the camera back for mobile devices
                camera.fov = 50; // Optional: Adjust FOV for a better perspective
            } else {
                camera.position.set(0, 0, 8); // Normal position for larger screens
                camera.fov = 75; // Reset FOV for larger screens
            }
            camera.updateProjectionMatrix(); // Update the projection matrix after changing the camera properties
        };

        adjustCamera(width); // Initial adjustment

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const newWidth = parentDiv ? parentDiv.clientWidth : window.innerWidth;
            const newHeight = parentDiv ? parentDiv.clientHeight : window.innerHeight;

            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            adjustCamera(newWidth); // Adjust camera when resizing
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
};

export default AnimatedCube;
