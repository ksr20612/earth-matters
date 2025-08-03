import Vector2 from '@core/common/Vector/Vector';
import { GRAVITY_ACCELERATION } from './Gravity.constant';

export default class Gravity {
  constructor(private acceleration: number = GRAVITY_ACCELERATION) {}

  // 중력 적용: v = v₀ + gt
  // deltaTime: 시간 변화량, 이 값이 클 수록 더 빠르게 값이 변화, 일반적인 기기의 fps인
  apply(velocity: Vector2, deltaTime: number): Vector2 {
    return velocity.add(new Vector2(0, this.acceleration * deltaTime));
  }
}
