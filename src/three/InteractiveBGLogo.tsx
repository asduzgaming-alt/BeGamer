import {Component,Suspense,useEffect,useRef,useState,type ReactNode} from 'react';
import {Canvas,useFrame,useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {Box3,Vector3,Group} from 'three';
class Boundary extends Component<{children:ReactNode;fallback:ReactNode},{failed:boolean}>{state={failed:false};static getDerivedStateFromError(){return {failed:true}} render(){return this.state.failed?this.props.fallback:this.props.children}}
function Model({url,active}:{url:string;active:boolean}){
 const gltf=useLoader(GLTFLoader,url);const group=useRef<Group>(null);const target=useRef({x:0,y:0});
 useEffect(()=>{const box=new Box3().setFromObject(gltf.scene);const size=box.getSize(new Vector3());const center=box.getCenter(new Vector3());gltf.scene.position.sub(center);gltf.scene.scale.setScalar(2.7/Math.max(size.x,size.y,size.z));},[gltf]);
 useEffect(()=>{const move=(e:PointerEvent)=>{target.current={x:(e.clientY/innerHeight-.5)*.17,y:(e.clientX/innerWidth-.5)*.28}};addEventListener('pointermove',move);return()=>removeEventListener('pointermove',move)},[]);
 useFrame((state,delta)=>{if(!active||!group.current)return;const alpha=1-Math.exp(-6*delta);group.current.rotation.x+=(target.current.x-group.current.rotation.x)*alpha;group.current.rotation.y+=(target.current.y-group.current.rotation.y)*alpha;state.invalidate();});
 return <group ref={group}><primitive object={gltf.scene}/></group>;
}
export default function InteractiveBGLogo({modelUrl}:{modelUrl:string}){
 const [enabled,setEnabled]=useState(false);const [active,setActive]=useState(true);const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px)');const decide=()=>setEnabled(!media.matches);decide();media.addEventListener('change',decide);const visibility=()=>setActive(!document.hidden);document.addEventListener('visibilitychange',visibility);const observer=new IntersectionObserver(([entry])=>setActive(entry.isIntersecting&&!document.hidden));if(ref.current)observer.observe(ref.current);return()=>{media.removeEventListener('change',decide);document.removeEventListener('visibilitychange',visibility);observer.disconnect();}},[]);
 const fallback=<img src="/assets/logo.png" alt="" width="150" height="150"/>;
 return <div ref={ref} className="model-wrapper"><Boundary fallback={fallback}>{enabled?<Canvas dpr={[1,1.5]} frameloop={active?'always':'never'} camera={{position:[0,0,5],fov:35}} onCreated={({gl})=>{gl.domElement.addEventListener('webglcontextlost',()=>setEnabled(false));}}><ambientLight intensity={1}/><directionalLight position={[3,4,4]} color="#36cae6" intensity={4}/><directionalLight position={[-4,2,2]} color="#9b65df" intensity={3}/><Suspense fallback={null}><Model url={modelUrl} active={active}/></Suspense></Canvas>:fallback}</Boundary></div>;
}
