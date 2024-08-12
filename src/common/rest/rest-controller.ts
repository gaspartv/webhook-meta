import { applyDecorators } from "@nestjs/common/decorators/core/apply-decorators";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { ApiTags } from "@nestjs/swagger";

export function RestController(name: string) {
  return applyDecorators(Controller(name), ApiTags(name));
}
