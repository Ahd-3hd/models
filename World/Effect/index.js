import { useMemo, useEffect } from "react";
import { useLoader, useThree, useFrame } from "react-three-fiber";
import {
  SMAAImageLoader,
  BlendFunction,
  KernelSize,
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  GammaCorrectionEffect,
  BokehEffect,
  PixelationEffect,
  ChromaticAberrationEffect,
  GlitchEffect,
  GridEffect,
  HueSaturationEffect,
  NoiseEffect,
  DepthEffect,
  RealisticBokehEffect,
  ScanlineEffect,
} from "postprocessing";

const _load = SMAAImageLoader.prototype.load;
SMAAImageLoader.prototype.load = function (_, set) {
  return _load.bind(this)(set);
};

function Effect() {
  const { gl, scene, camera, size } = useThree();
  const smaa = useLoader(SMAAImageLoader);
  const composer = useMemo(() => {
    const composer = new EffectComposer(gl);
    composer.addPass(new RenderPass(scene, camera));
    // const chromEffect = new ChromaticAberrationEffect();
    // chromEffect.blendMode.opacity.value = 0.3;
    // const pixelationEffect = new PixelationEffect(3.0);
    // const smaaEffect = new SMAAEffect(...smaa);
    // smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(0.1);
    // const gammaCorrection = new GammaCorrectionEffect();
    // const bloom = new BloomEffect({
    //   blendFunction: BlendFunction.ADD,
    //   kernelSize: KernelSize.HUGE,
    //   luminanceThreshold: 0.1,
    //   height: 600,
    // });
    // bloom.blendMode.opacity.value = 2;
    // const bokehEffect = new BokehEffect({
    //   focus: 2,
    //   dof: 0.05,
    //   aperture: 0.2,
    //   maxBlur: 0.015,
    // });
    // composer.addPass(new EffectPass(camera, bokehEffect));
    composer.addPass(new EffectPass(camera));
    const effectPass = new EffectPass(
      camera
      //   gammaCorrection,
      //   smaaEffect,
      //   bloom
    );
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);
    return composer;
  }, []);
  useEffect(() => void composer.setSize(size.width, size.height), [size]);
  return useFrame((_, delta) => composer.render(delta), 1);
}

export default Effect;
