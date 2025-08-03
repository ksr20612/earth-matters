import Vector2 from '@core/common/Vector/Vector';
import { SPRING_DAMPING, SPRING_STIFFNESS } from './Spring.constant';

export default class Spring {
  constructor(
    private target: Vector2,
    private stiffness: number = SPRING_STIFFNESS,
    private damping: number = SPRING_DAMPING,
  ) {}

  /*
   스프링 공식: F = -k(x - x₀) - c·v
   스프링 결과 = -탄성계수(stiffness) * (현재위치 - 목표위치) - 감쇠계수(damping) * 속도
   - 현재 위치와 목표 위치의 차이가 클 수록 탄성력이 커진다. (더 멀수록 강하게 끌어당긴다, 더 빨리 끌어당겨진다)
   - 속도가 빠를 수록 감쇠력이 커진다. (속도가 빠르면 더 빨리 멈춘다, 감쇠력은 속도를 줄이는 힘이라고 이해하자)
  */
  apply(current: Vector2, velocity: Vector2) {
    const springForce = current.subtract(this.target).scale(-this.stiffness);
    const dampingForce = velocity.scale(-this.damping);

    return springForce.add(dampingForce);
  }
}
