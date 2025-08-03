import Vector2 from '@core/common/Vector/Vector';
import { FRICTION } from './Friction.constant';

export default class Friction {
  constructor(private friction: number = FRICTION) {}

  // 마찰력 적용: v = v₀ * (1 - friction)
  // 속도의 크기를 줄인다.
  apply(velocity: Vector2): Vector2 {
    return velocity.scale(1 - this.friction);
  }
}
