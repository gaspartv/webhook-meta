import { applyDecorators } from "@nestjs/common/decorators/core/apply-decorators";
import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { ModuleMetadata } from "@nestjs/common/interfaces/modules/module-metadata.interface";

export function RestModule(metadata: ModuleMetadata) {
  return applyDecorators(Module(metadata));
}
