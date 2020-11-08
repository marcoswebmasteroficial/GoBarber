import { injectable, inject } from 'tsyringe';

import Users from '@modules/users/infra/typeorm/entities/Users';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    user_id,
    avatarFileName,
  }: {
    user_id: string;
    avatarFileName: string;
  }): Promise<Users> {
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('usuario nao encontrado', 401);
    }
    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }
    const filename = await this.storageProvider.saveFile(avatarFileName);
    user.avatar = filename;
    this.usersRepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;
