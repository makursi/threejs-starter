import * as THREE from "three";

const scene = new THREE.Scene(); // 创建场景
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
); // 创建摄像机

// 定义坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 }); // 材质

const cube = new THREE.Mesh(geometry, material); // 立方体
cube.scale.set(2, 1, 1);
cube.position.set(2, 1, 1);
cube.rotation.set(Math.PI / 2, 0.5, 0.5);
scene.add(cube);

// 调整相机的位置
camera.position.set(2, 2, 5);
// 添加渲染动画循环
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
