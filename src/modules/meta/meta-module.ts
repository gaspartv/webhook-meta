import { RestModule } from "src/common/rest/rest-module";
import { RabbitmqModule } from "src/providers/rabbitmq/rabbitmq-module";
import { MetaController } from "./meta-controller";
import { MetaService } from "./meta-service";
import { MessengerService } from "./services/messenger/handle-service";

@RestModule({
  imports: [RabbitmqModule],
  controllers: [MetaController],
  providers: [MetaService, MessengerService],
  exports: [MetaService],
})
export class MetaModule {}
