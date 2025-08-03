import Gravity from '@core/physics/Gravity/Gravity';
import Friction from '@core/physics/Friction/Friction';
import Vector2 from '@core/common/Vector/Vector';

export default class Physics {
  private gravity: Gravity;
  private friction: Friction;

  constructor({
    gravity = new Gravity(),
    friction = new Friction(),
  }: {
    gravity?: Gravity;
    friction?: Friction;
  }) {
    this.gravity = gravity;
    this.friction = friction;
  }

  // Force를 적용
  // Gravity -> Friction 순서로 Force를 적용했는데, 이 순서가 실제 물리와 더 유사해 자연스러운 것 같다.
  // TODO: 나중에 순서를 바꿔서도 테스트해볼 것!
  apply(velocity: Vector2, deltaTime: number) {
    return this.friction.apply(this.gravity.apply(velocity, deltaTime));
  }
}
