import { Module } from '@nestjs/common';
import { UpgradeService } from './upgrade.service';
import { UpgradeController } from './upgrade.controller';

@Module({
  controllers: [UpgradeController],
  providers: [UpgradeService],
})
export class UpgradeModule {}
