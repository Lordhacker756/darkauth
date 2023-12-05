import { Injectable } from '@nestjs/common';
import { user } from './dto/user.dto';
import { PrismaService } from 'src/db/service';

@Injectable()
export class AuthService {
    constructor(private readonly Prisma: PrismaService) { }

    loginUser(user: user) {
        if (user.username === 'admin' && user.password === 'dark') {
            return 'Authentication 256bit encription rajnigandha tulsi successful alaham dulillah'
        } else {
            return 'Asli Id se ao abdul'
        }
    }

    registerUser(newUser: any) {
        return this.Prisma.userAuth.create({ data: newUser })
    }

}
