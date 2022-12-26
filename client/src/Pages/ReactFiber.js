import { Canvas } from '@react-three/fiber'

export const ReactFiber = () => {
  return (
    <div id="canvas-container">
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    </div>
  )
}