import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CapsuleCanvas3DProps {
  className?: string;
  interactive?: boolean;
}

export const CapsuleCanvas3D: React.FC<CapsuleCanvas3DProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software rendering or low power
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    if (isSoftwareGl) {
      setIsLowPower(true);
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Dimensions
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 550;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Master Group for Hero Capsule
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. CAPSULE COMPOSITION
    const capsuleGroup = new THREE.Group();
    masterGroup.add(capsuleGroup);

    // Geometry Dimensions
    const capRadius = 0.95;
    const bodyHeight = 1.4;

    // Top Half: Electric Blue / Cyan Translucent Gel
    const topCapGeo = new THREE.SphereGeometry(
      capRadius,
      32,
      20,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2
    );
    const topCylGeo = new THREE.CylinderGeometry(
      capRadius,
      capRadius,
      bodyHeight / 2,
      32,
      1,
      true
    );
    topCylGeo.translate(0, bodyHeight / 4, 0);

    const cyanGelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
      transmission: isSoftwareGl ? 0 : 0.88,
      opacity: 0.92,
      transparent: true,
      ior: 1.45,
      thickness: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const topCapMesh = new THREE.Mesh(topCapGeo, cyanGelMaterial);
    topCapMesh.position.y = bodyHeight / 2;
    capsuleGroup.add(topCapMesh);

    const topCylMesh = new THREE.Mesh(topCylGeo, cyanGelMaterial);
    capsuleGroup.add(topCylMesh);

    // Bottom Half: Glossy Medical White Shell
    const botCapGeo = new THREE.SphereGeometry(
      capRadius,
      32,
      20,
      0,
      Math.PI * 2,
      Math.PI / 2,
      Math.PI / 2
    );
    const botCylGeo = new THREE.CylinderGeometry(
      capRadius,
      capRadius,
      bodyHeight / 2,
      32,
      1,
      true
    );
    botCylGeo.translate(0, -bodyHeight / 4, 0);

    const whitePorcelainMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      roughness: 0.18,
      metalness: 0.12,
      clearcoat: 0.9,
      clearcoatRoughness: 0.15,
    });

    const botCapMesh = new THREE.Mesh(botCapGeo, whitePorcelainMaterial);
    botCapMesh.position.y = -bodyHeight / 2;
    capsuleGroup.add(botCapMesh);

    const botCylMesh = new THREE.Mesh(botCylGeo, whitePorcelainMaterial);
    capsuleGroup.add(botCylMesh);

    // Center Locking Band: Blued Metallic Ring
    const bandGeo = new THREE.CylinderGeometry(capRadius * 1.02, capRadius * 1.02, 0.16, 36);
    const bandMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
    });
    const bandMesh = new THREE.Mesh(bandGeo, bandMaterial);
    capsuleGroup.add(bandMesh);

    // Microscopic therapeutic beads inside the cyan chamber
    const beadCount = 38;
    const beadGeo = new THREE.SphereGeometry(0.08, 12, 10);
    const beadMatCyan = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.2,
    });
    const beadMatWhite = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
    });
    const beadMatNavy = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      emissive: 0x1e40af,
      emissiveIntensity: 0.3,
      roughness: 0.4,
    });

    const beadsGroup = new THREE.Group();
    for (let i = 0; i < beadCount; i++) {
      const mat = i % 3 === 0 ? beadMatCyan : i % 3 === 1 ? beadMatWhite : beadMatNavy;
      const bead = new THREE.Mesh(beadGeo, mat);
      // distribute inside the top half cylinder and sphere
      const r = (Math.random() * 0.65) * capRadius;
      const theta = Math.random() * Math.PI * 2;
      const y = Math.random() * (bodyHeight * 0.45) + 0.1;
      bead.position.set(r * Math.cos(theta), y, r * Math.sin(theta));
      bead.scale.setScalar(0.7 + Math.random() * 0.6);
      beadsGroup.add(bead);
    }
    capsuleGroup.add(beadsGroup);

    // 2. HOLOGRAPHIC ORBITAL RINGS & FLOATING PARTICLES
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.018, 12, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2.8;
    ringMesh1.rotation.y = Math.PI / 6;
    masterGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.012, 12, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.25,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 3.2;
    ringMesh2.rotation.z = Math.PI / 5;
    masterGroup.add(ringMesh2);

    // Floating Data Particle Cloud (3D ambient particles)
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 7;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particleSystem);

    // Soft Contact Shadow Plane Grounding
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
      grad.addColorStop(0.5, 'rgba(2, 132, 199, 0.15)');
      grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.6;
    masterGroup.add(shadowMesh);

    // Initial default pose (tilted diagonally for dynamic cinematic silhouette)
    capsuleGroup.rotation.z = -Math.PI / 5.2;
    capsuleGroup.rotation.x = Math.PI / 7;

    // 3. LIGHTING RIG
    const keyLight = new THREE.DirectionalLight(0xe0f2fe, 2.8);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x0284c7, 1.8);
    fillLight.position.set(-4, -2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x030712, 0.9);
    scene.add(hemiLight);

    const centerGlow = new THREE.PointLight(0x06b6d4, 2.5, 5);
    centerGlow.position.set(0, 0.5, 0.5);
    scene.add(centerGlow);

    // Mouse Parallax Handlers
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.45;
      mouseRef.current.targetY = y * 0.35;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 4. ANIMATION LOOP with smooth exponential damping
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      const m = mouseRef.current;
      m.x = THREE.MathUtils.damp(m.x, m.targetX, 4, delta);
      m.y = THREE.MathUtils.damp(m.y, m.targetY, 4, delta);

      if (!prefersReducedMotion) {
        // Floating oscillation
        capsuleGroup.position.y = Math.sin(elapsed * 1.5) * 0.14;
        capsuleGroup.rotation.y = elapsed * 0.4 + m.x * 0.8;
        capsuleGroup.rotation.x = Math.PI / 7 + Math.sin(elapsed * 0.8) * 0.08 + m.y * 0.6;

        // Orbital rings slow counter-rotation
        ringMesh1.rotation.z = elapsed * 0.25;
        ringMesh2.rotation.y = -elapsed * 0.18;

        // Micro beads gentle agitation
        beadsGroup.rotation.y = elapsed * 0.3;

        // Particles gentle drift
        particleSystem.rotation.y = elapsed * 0.06;
      }

      // Parallax tilt on master group
      masterGroup.rotation.y = m.x * 0.4;
      masterGroup.rotation.x = -m.y * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects
      topCapGeo.dispose();
      topCylGeo.dispose();
      botCapGeo.dispose();
      botCylGeo.dispose();
      bandGeo.dispose();
      beadGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      particleGeo.dispose();
      shadowGeo.dispose();
      shadowTex.dispose();

      cyanGelMaterial.dispose();
      whitePorcelainMaterial.dispose();
      bandMaterial.dispose();
      beadMatCyan.dispose();
      beadMatWhite.dispose();
      beadMatNavy.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      particleMat.dispose();
      shadowMat.dispose();

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[420px] md:min-h-[540px] flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-label="3D Interactive PharmaDesk Pharmaceutical Capsule"
    >
      {isLowPower && (
        <div className="absolute top-2 right-2 text-[10px] text-slate-500 font-mono bg-slate-900/60 px-2 py-0.5 rounded">
          Performance Mode Active
        </div>
      )}
    </div>
  );
};
