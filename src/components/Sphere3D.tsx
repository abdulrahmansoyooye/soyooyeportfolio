
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Sphere3DProps {
  size?: number;
  color?: string;
  position?: { x: number; y: number; z: number };
  className?: string;
}

const Sphere3D: React.FC<Sphere3DProps> = ({ 
  size = 100, 
  color = '#9b87f5',
  position = { x: 0, y: 0, z: 0 },
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      size / size,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Material with gradient
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.9,
      shininess: 100,
    });

    // Create sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(position.x, position.y, position.z);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.003;
        sphereRef.current.rotation.y += 0.005;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Cleanup
    return () => {
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [size, color, position]);

  return <div ref={containerRef} className={className} />;
};

export default Sphere3D;
