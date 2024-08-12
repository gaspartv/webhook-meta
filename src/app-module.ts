import { ConfigModule } from "@nestjs/config";
import { RestModule } from "./common/rest/rest-module";
import { MetaModule } from "./modules/meta/meta-module";
import { RabbitmqModule } from "./providers/rabbitmq/rabbitmq-module";

@RestModule({
  imports: [
    MetaModule,
    RabbitmqModule,

    ConfigModule.forRoot({
      isGlobal: true,
      validationOptions: { allowUnknown: false },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
