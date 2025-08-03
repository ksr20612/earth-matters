import { DELTA_TIME } from './usePhysicsAnimation.constant';
import Friction from '@core/physics/Friction/Friction';
import Gravity from '@core/physics/Gravity/Gravity';
import Physics from '@core/physics/Physics';
import Spring from '@core/physics/Spring/Spring';
import Vector2 from '@core/common/Vector/Vector';
import { useCallback, useState } from 'react';

export interface UsePhysicsAnimationOptions {
  gravity?: Gravity;
  friction?: Friction;
  spring?: Spring;
  deltaTime?: number;
}

export interface UsePhysicsAnimationProps {
  position?: Vector2;
  velocity?: Vector2;
  options?: UsePhysicsAnimationOptions;
}

function usePhysicsAnimation({
  position: initialPosition = new Vector2(0, 0),
  velocity: initialVelocity = new Vector2(0, 0),
  options = {},
}: UsePhysicsAnimationProps) {
  const [position, setPosition] = useState(initialPosition);
  const [velocity, setVelocity] = useState(initialVelocity);

  // 애니메이션, 호출시 vector값이 변경됨
  const animate = useCallback(() => {
    // Force의 조합체
    const physics = new Physics(options);
    const deltaTime = options.deltaTime ?? DELTA_TIME;

    // 속도 변경
    const newVelocity = physics.apply(velocity, deltaTime);

    // 위치 변경: 새로운 위치 = 원래 위치 + 속도 * 시간 (x(t) = x₀ + v × t)
    // 위치는 속도의 누적값이라고 생각하자. 모든 연산의 출발은 속도.
    const newPosition = position.add(newVelocity.scale(deltaTime));

    setPosition(newPosition);
    setVelocity(newVelocity);
  }, [position, velocity, options]);

  return { position, velocity, animate };
}

export default usePhysicsAnimation;
