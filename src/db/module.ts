import { Module, Post } from '@nestjs/common';
import { PrismaService } from './service';

@Module({
    exports: [PrismaService],
    providers: [PrismaService]
})
export class PrismaModule {

}
