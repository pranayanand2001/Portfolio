import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BlackHoleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Black hole geometry
    const blackHoleGeometry = new THREE.TorusGeometry(5, 2, 16, 100);
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Materials
    const blackHoleMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      side: THREE.DoubleSide
    });

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff
    });

    // Meshes
    const blackHoleMesh = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(blackHoleMesh, particlesMesh);

    // Position camera
    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      blackHoleMesh.rotation.x += 0.01;
      blackHoleMesh.rotation.y += 0.005;

      particlesMesh.rotation.x += 0.002;
      particlesMesh.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default BlackHoleBackground; 