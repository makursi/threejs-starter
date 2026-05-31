import * as THREE from "three";

const scene = new THREE.Scene(); // 创建场景
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
); // 创建摄像机

const renderer = new THREE.WebGLRenderer(); // 创建渲染器
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 材质

const cube = new THREE.Mesh(geometry, material); // 立方体
scene.add(cube);
camera.position.z = 5;

//  制作动画
function animate(time) {
  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
