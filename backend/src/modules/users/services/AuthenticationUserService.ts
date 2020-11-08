import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import Users from '@modules/users/infra/typeorm/entities/Users';
import AuthConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

@injectable()
class AuthenticationUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ user: Users; token: string }> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('E-mail ou senha invalidos', 401);
    }
    const passwordMached = await this.hashProvider.compareHash(
      password,
      user.password,
    );
    if (!passwordMached) {
      throw new AppError('E-mail ou senha invalidos', 401);
    }

    const token = sign({}, AuthConfig.jwt.secret, {
      subject: user.id,
      expiresIn: AuthConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticationUserService;
