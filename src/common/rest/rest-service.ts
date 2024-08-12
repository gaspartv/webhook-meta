import { applyDecorators } from "@nestjs/common/decorators/core/apply-decorators";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { ScopeOptions } from "@nestjs/common/interfaces/scope-options.interface";

interface ServiceOptions extends ScopeOptions {}

export function RestService(options?: ServiceOptions) {
  return applyDecorators(Injectable(options));
}
