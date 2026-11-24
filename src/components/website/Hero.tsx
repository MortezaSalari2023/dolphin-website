
"use client";
import Image from "next/image";
import { Suspense, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { Layers3, Workflow, Headset } from "lucide-react";



/* صحنه مرکزی دلفین و مدارهای انرژی */
function EnergyCore() {

  // مرجع هاله نور متحرک روی لبه سکو
const energyHaloRef = useRef<THREE.Mesh>(null);

  // مرجع متریال حلقه نورانی اصلی سکو
const platformRingMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  // مراجع نورهای متحرک روی سکوی انرژی
const purpleLightRef = useRef<THREE.PointLight>(null);
const blueLightRef = useRef<THREE.PointLight>(null);

  // مراجع سه لایه ذرات نور برای ایجاد عمق سه‌بعدی
const particleGroup1Ref = useRef<THREE.Group>(null);
const particleGroup2Ref = useRef<THREE.Group>(null);
const particleGroup3Ref = useRef<THREE.Group>(null);
 
  // مرجع گروه مدارهای انرژی
  const orbitGroupRef = useRef<THREE.Group>(null);

  // مرجع کل صحنه برای واکنش به حرکت ماوس
const sceneGroupRef = useRef<THREE.Group>(null);

  // مرجع گوی نورانی متحرک روی لبه سکو
const energyLightRef = useRef<THREE.Mesh>(null);

  // مرجع مدارها برای کنترل حرکت مستقل
  const orbit1Ref = useRef<THREE.Mesh>(null);
  const orbit2Ref = useRef<THREE.Mesh>(null);
  const orbit3Ref = useRef<THREE.Mesh>(null);

// مرجع متریال حلقه آبی پایینی سکو
const blueRingMaterialRef = useRef<THREE.MeshBasicMaterial>(null);



  // حرکت نرم و مستقل مدارها و واکنش به ماوس
  useFrame((state, delta) => {
    
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
        // دریافت زمان سپری‌شده برای کنترل انیمیشن‌ها
const time = state.clock.elapsedTime;

    // حرکت کلی صحنه با تأخیر نرم نسبت به ماوس
    if (sceneGroupRef.current) {
      sceneGroupRef.current.rotation.x = THREE.MathUtils.damp(
        sceneGroupRef.current.rotation.x,
        mouseY * 0.10,
        2.5,
        delta
      );

      sceneGroupRef.current.rotation.y = THREE.MathUtils.damp(
        sceneGroupRef.current.rotation.y,
        -mouseX * 0.14,
        2.5,
        delta
      );
    }

    // حرکت آرام گروه مدارها
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.y = time * 0.035;
      orbitGroupRef.current.rotation.x = Math.sin(time * 0.18) * 0.035;
    }

    // مدار اول: چرخش آرام و مستقل
    if (orbit1Ref.current) {
      orbit1Ref.current.rotation.z = time * 0.10;
      orbit1Ref.current.rotation.x = 1.05 + Math.sin(time * 0.25) * 0.025;
    }

    // مدار دوم: چرخش در جهت مخالف
    if (orbit2Ref.current) {
      orbit2Ref.current.rotation.y = time * 0.075;
      orbit2Ref.current.rotation.z = -0.45 + Math.sin(time * 0.32) * 0.035;
    }

    // مدار سوم: حرکت آهسته با نوسان زاویه‌ای متفاوت
    if (orbit3Ref.current) {
      orbit3Ref.current.rotation.z = 0.8 - time * 0.055;
      orbit3Ref.current.rotation.x = 1.05 + Math.sin(time * 0.20) * 0.02;
    }

    // حرکت پارالاکس لایه اول ذرات؛ نزدیک‌تر به دوربین
if (particleGroup1Ref.current) {
  particleGroup1Ref.current.rotation.y = THREE.MathUtils.damp(
    particleGroup1Ref.current.rotation.y,
    mouseX * 0.12 + Math.sin(time * 0.25) * 0.025,
    2,
    delta
  );
}

// حرکت آرام لایه دوم ذرات
if (particleGroup2Ref.current) {
  particleGroup2Ref.current.rotation.x = THREE.MathUtils.damp(
    particleGroup2Ref.current.rotation.x,
    mouseY * 0.10 + Math.sin(time * 0.2) * 0.02,
    2,
    delta
  );
}

// حرکت لایه سوم با شدت کمتر؛ برای ایجاد عمق پس‌زمینه
if (particleGroup3Ref.current) {
  particleGroup3Ref.current.rotation.y = THREE.MathUtils.damp(
    particleGroup3Ref.current.rotation.y,
    -mouseX * 0.06,
    2,
    delta
  );
}


    // حرکت نور روی محیط سکو
    if (energyLightRef.current) {
      const radius = 1.58;
      const speed = 0.85;

      energyLightRef.current.position.set(
        Math.cos(time * speed) * radius,
        0.12,
        Math.sin(time * speed) * radius
      );
    }
  // ایجاد تپش نرم نور بنفش روی سکو
if (purpleLightRef.current) {
  purpleLightRef.current.intensity =
    14 + Math.sin(time * 1.2) * 2;
}

// ایجاد تپش مستقل نور آبی
if (blueLightRef.current) {
  blueLightRef.current.intensity =
    8 + Math.sin(time * 0.9 + 1.5) * 1.5;
}

// تپش آرام نور حلقه اصلی سکو
if (platformRingMaterialRef.current) {
  platformRingMaterialRef.current.opacity =
    0.75 + Math.sin(time * 1.1) * 0.18;
}

// تپش آرام حلقه آبی پایینی
if (blueRingMaterialRef.current) {
  blueRingMaterialRef.current.opacity =
    0.55 + Math.sin(time * 1.4 + 1) * 0.25;
}

// تغییر نرم اندازه هاله نور متحرک
if (energyHaloRef.current) {
  const haloScale = 2.2 + Math.sin(time * 2) * 0.25;

  energyHaloRef.current.scale.setScalar(haloScale);
}



  });





  return (
<group ref={sceneGroupRef}>




{/* نور آبی مکمل پشت نشان دلفین */}
<pointLight
  position={[-0.8, 0.5, 1]}
  color="#168bff"
  intensity={12}
  distance={4}
/>

{/* نور بنفش زیر لوگو */}
<pointLight
  position={[0.8, -0.5, 1]}
  color="#a020ff"
  intensity={15}
  distance={4}
/>




{/* گروه مدارهای انرژی در عمق صحنه، پشت سکو */}
<group
  ref={orbitGroupRef}
  position={[0, 0, -0.45]}
>

        {/* مدار اول؛ حلقه بزرگ بنفش */}
        <mesh
          ref={orbit1Ref}
          rotation={[1.05, 0.15, 0.2]}
          scale={[1.3, 0.72, 1]}
        >
          <torusGeometry args={[1.65, 0.018, 12, 220]} />
          <meshBasicMaterial
            color="#a855f7"
            transparent
            opacity={0.9}
          />
        </mesh>

{/* مدار دوم؛ حلقه بیضی مورب و متناسب با نشان */}
<mesh
  ref={orbit2Ref}
  rotation={[0.85, 0.25, -0.45]}
  scale={[1.2, 0.82, 1]}
>
  <torusGeometry args={[1.55, 0.012, 10, 220]} />
  <meshBasicMaterial
    color="#7c3aed"
    transparent
    opacity={0.75}
  />
</mesh>

        {/* مدار سوم؛ حلقه ظریف نورانی */}
        <mesh
          ref={orbit3Ref}
         rotation={[1.05, 0.25, 0.8]}
          scale={[1.4, 0.75, 1]}
        >
          <torusGeometry args={[1.85, 0.009, 8, 220]} />
          <meshBasicMaterial
            color="#c084fc"
            transparent
            opacity={0.65}
          />
        </mesh>

      </group>


{/* سکوی چندلایه انرژی زیر نشان دلفین */}
<group position={[0, -1.32, 0]}>

{/* لایه پایینی سکو با ظاهر فلزی و لبه ظریف‌تر */}
<mesh
  position={[0, -0.13, 0]}
  castShadow={false}
  receiveShadow={false}
>
  <cylinderGeometry args={[1.88, 1.96, 0.11, 96]} />

<meshStandardMaterial
  color="#35264f"
  metalness={0.82}
  roughness={0.3}
  emissive="#35145e"
  emissiveIntensity={0.9}
/>
</mesh>

  {/* لایه میانی فلزی */}
  <mesh position={[0, -0.055, 0]}>
    <cylinderGeometry args={[1.72, 1.9, 0.12, 96]} />
    <meshStandardMaterial
      color="#28203d"
      metalness={0.9}
      roughness={0.25}
      emissive="#32105c"
      emissiveIntensity={0.45}
    />
  </mesh>

  {/* سطح بالایی سکو */}
  <mesh position={[0, 0.035, 0]}>
    <cylinderGeometry args={[1.58, 1.72, 0.07, 96]} />
    <meshStandardMaterial
      color="#171329"
      metalness={0.85}
      roughness={0.3}
      emissive="#4c1d95"
      emissiveIntensity={0.65}
    />
  </mesh>

{/* حلقه نورانی اصلی با تپش آرام */}
<mesh
  position={[0, 0.08, 0]}
  rotation={[Math.PI / 2, 0, 0]}
>
  <torusGeometry args={[1.58, 0.035, 12, 160]} />
  <meshBasicMaterial
    ref={platformRingMaterialRef}
    color="#b66cff"
    transparent
    opacity={0.75}
    toneMapped={false}
  />
</mesh>

  {/* گوی مرکزی نور متحرک روی لبه سکو */}
  <mesh ref={energyLightRef}>
    {/* هسته سفید و درخشان */}
    <sphereGeometry args={[0.075, 32, 32]} />
    <meshBasicMaterial
      color="#ffffff"
      toneMapped={false}
    />

{/* هاله بنفش با اندازه متغیر و حرکت نرم */}
    <mesh ref={energyHaloRef} scale={2.2}>
      <sphereGeometry args={[0.075, 24, 24]} />
      <meshBasicMaterial
        color="#bd70ff"
        transparent
        opacity={0.22}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>

    {/* نور منتشرشونده روی سطح سکو */}
    <pointLight
      color="#b66cff"
      intensity={8}
      distance={1.8}
      decay={2}
    />
  </mesh>


  {/* حلقه نورانی آبی در لبه سکو */}
  <mesh
    position={[0, -0.08, 0]}
    rotation={[Math.PI / 2, 0, 0]}
  >
    <torusGeometry args={[1.83, 0.018, 8, 160]} />
<meshBasicMaterial
  ref={blueRingMaterialRef}
  color="#398bff"
  transparent
  opacity={0.9}
/>
  </mesh>

{/* حلقه باریک آبی در لبه پایینی سکو */}
<mesh
  position={[0, -0.16, 0]}
  rotation={[Math.PI / 2, 0, 0]}
>
  <torusGeometry args={[1.91, 0.012, 8, 160]} />
  <meshBasicMaterial
    color="#398bff"
    transparent
    opacity={0.4}
    toneMapped={false}
  />
</mesh>

  {/* نور بنفش روی سطح سکو */}
<pointLight
  ref={purpleLightRef}
  position={[0, 0.35, 0.5]}
  color="#a855f7"
  intensity={16}
  distance={4}
/>

  {/* نور آبی لبه سکو */}
<pointLight
  ref={blueLightRef}
  position={[-1.2, 0.2, 0]}
  color="#2563eb"
  intensity={9}
  distance={3}
/>

</group>

<group ref={particleGroup1Ref}>
  <Sparkles
    count={55}
    position={[0, -0.65, 0.25]}
    scale={[3.2, 1.5, 2.2]}
    size={3.5}
    speed={0.85}
    color="#b66cff"
    opacity={0.95}
  />
</group>

<group ref={particleGroup2Ref}>
  <Sparkles
    count={35}
    position={[-1.1, -0.75, 0.35]}
    scale={[2.5, 1.2, 1.8]}
    size={2.8}
    speed={0.7}
    color="#398bff"
    opacity={0.9}
  />
</group>

<group ref={particleGroup3Ref}>
  <Sparkles
    count={25}
    position={[1.15, -0.55, 0.2]}
    scale={[2.3, 1.4, 1.7]}
    size={3}
    speed={0.95}
    color="#d8a0ff"
    opacity={0.9}
  />
</group>




      {/* ذرات نورانی اطراف صحنه */}
      <Sparkles
        count={130}
        scale={[5, 4, 3]}
        size={2.5}
        speed={0.45}
        color="#b58cff"
        opacity={0.9}
      />

      {/* نورپردازی اختصاصی اطراف سکو */}
      <pointLight
        position={[0, -1, 1.5]}
        color="#a855f7"
        intensity={18}
        distance={5}
      />

    </group>
  );
}




// محفظه صحنه سه‌بعدی
function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      {/* نورپردازی صحنه */}
      <ambientLight intensity={0.6} />

      <pointLight
        position={[3, 3, 4]}
        intensity={35}
        color="#a855f7"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={20}
        color="#2563eb"
      />

      {/* پس‌زمینه ستاره‌ای */}
      <Stars
        radius={45}
        depth={30}
        count={900}
        factor={3}
        saturation={0.3}
        fade
        speed={0.4}
      />

      <Suspense fallback={null}>
        <EnergyCore />
      </Suspense>
    </Canvas>
  );
}


export default function Hero() {
    // مرجع تصویر لوگو برای کنترل حرکت با ماوس
  const logoRef = useRef<HTMLImageElement>(null);
  return (

<section
  className="relative isolate min-h-[calc(100svh-82px)] overflow-hidden bg-[#070914] text-white"
  dir="rtl"
  onPointerMove={(event) => {
    // محاسبه موقعیت ماوس نسبت به مرکز بخش Hero
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    // حرکت و چرخش نرم لوگو متناسب با حرکت ماوس
    if (logoRef.current) {
      logoRef.current.style.transform = `
        perspective(800px)
        translate3d(${x * 16}px, ${y * 16}px, 0)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
        scale(1.03)
      `;
    }
  }}
  onPointerLeave={() => {
    // بازگشت نرم لوگو به موقعیت اولیه
    if (logoRef.current) {
      logoRef.current.style.transform = "none";
    }
  }}
>

      {/* هاله‌های نور محیطی پس‌زمینه */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-48 left-0 h-[450px] w-[450px] rounded-full bg-blue-700/10 blur-[130px]" />

      {/* صحنه سه‌بعدی در سمت چپ */}
      <div className="pointer-events-none absolute inset-0 z-0">

{/* تنظیم جداگانه صحنه برای موبایل، تبلت و دسکتاپ */}
<div className="pointer-events-auto absolute left-0 top-[28%] h-[36%] w-full md:top-[5%] md:h-[90%] md:w-[68%] lg:top-0 lg:h-full">
 {/* صحنه سه‌بعدی؛ مدارها و ذرات پشت لوگو */}
  <HeroScene />

{/* جایگاه لوگو متناسب با محدوده صحنه سه‌بعدی */}
<div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-full items-center justify-center">
  <Image
    ref={logoRef}
    src="/brand/dolphin-logo.png"
    alt="لوگوی گروه مهندسی دلفین"
    width={2048}
    height={2048}
    priority
    unoptimized
    className="pointer-events-auto h-auto w-[min(58vw,220px)] object-contain transition-transform duration-300 ease-out md:w-[min(42vw,430px)]"
  />
</div>
</div>



{/* محو شدن تدریجی صحنه؛ بدون جلوگیری از دریافت حرکت ماوس */}
<div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#070914] via-[#070914]/65 to-transparent" />
      </div>
{/* چیدمان محتوا؛ شروع از بالای صفحه در موبایل */}
<div className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100svh-82px)] w-full max-w-[1440px] flex-col justify-start px-5 pt-12 pb-10 sm:px-10 sm:pt-16 md:block md:min-h-[calc(100svh-82px)] md:py-0 lg:px-16">

        {/* بخش متن در سمت راست */}
        <div className="pointer-events-none w-full max-w-2xl text-right md:absolute md:right-16 md:top-[9%] md:w-[560px]">

          {/* برچسب بالای عنوان */}
          {/* <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-5 py-2.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            <span className="text-xs font-medium tracking-wide text-violet-200 sm:text-sm">
              DOLPHIN ENGINEERING GROUP
            </span>
          </div> */}

          {/* عنوان اصلی */}
          <h1 className="text-4xl font-black leading-[1.5] tracking-tight sm:text-5xl lg:text-[60px]">
            آینده سازمان شما

            <span className="mt-3 block bg-gradient-to-l from-violet-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              از اینجا آغاز می‌شود
            </span>
          </h1>

          {/* توضیحات شرکت */}
          <p className="mt-7 max-w-xl text-base leading-9 text-slate-400 sm:text-lg">
            گروه مهندسی دلفین با طراحی و توسعه راهکارهای نرم‌افزاری،
            مسیر تحول دیجیتال و هوشمندسازی فرایندهای سازمانی را هموار می‌کند.
          </p>

          {/* دکمه‌های اقدام */}
<div className="pointer-events-auto mt-7 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Link
              href="/products"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-l from-violet-600 to-purple-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/30"
            >
              مشاهده محصولات
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.08]"
            >
              ارتباط با ما
            </Link>
          </div>

{/* فاصله کمتر در موبایل و حفظ فاصله دسکتاپ */}
<div className="mt-6 flex items-center gap-4 md:mt-14">
            <span className="h-px w-16 bg-gradient-to-l from-violet-400 to-transparent" />
            <span className="text-[10px] tracking-widest text-slate-500 sm:text-xs">
              INNOVATION · TECHNOLOGY · DEVELOPMENT
            </span>
          </div>
        </div>

<div className="pointer-events-auto mt-[160px] grid w-full grid-cols-1 gap-3 sm:mt-[200px] sm:grid-cols-3 md:absolute md:bottom-[7%] md:right-16 md:mt-0 md:w-[680px]">

          {/* کارت تحلیل و طراحی */}
          <div className="rounded-2xl border border-white/10 bg-[#151622]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.08]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Layers3 size={22} />
            </div>

            <h3 className="text-sm font-bold text-white">
              تحلیل و طراحی
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-400">
              شناخت نیازهای سازمان و طراحی راهکارهای متناسب
            </p>
          </div>

          {/* کارت توسعه سامانه‌ها */}
          <div className="rounded-2xl border border-white/10 bg-[#151622]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.08]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Workflow size={22} />
            </div>

            <h3 className="text-sm font-bold text-white">
              توسعه سامانه‌ها
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-400">
              تولید و توسعه راهکارهای نرم‌افزاری سازمانی
            </p>
          </div>

          {/* کارت استقرار و پشتیبانی */}
          <div className="rounded-2xl border border-white/10 bg-[#151622]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.08]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Headset size={22} />
            </div>

            <h3 className="text-sm font-bold text-white">
              استقرار و پشتیبانی
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-400">
              همراهی در راه‌اندازی و پشتیبانی سامانه‌ها
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

