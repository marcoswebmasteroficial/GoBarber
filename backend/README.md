## Recuperação de Senha

 - Requisitos Funcionais:
  [x] O usuário deve poder recuperar sua senha informando o seu email;
  [x] O usuário deve receber um email com instruções de recuperação de senha;
  [x] O usuário deve poder resetar sua senha ;

 - Requisitos Não Funcionais:
  [x] Utilizar Mailtrap para testar envios de email em ambiente de desenvolvimento;
  [] Utilizar Amazon SES para envios de email em ambiente de Produção;
  [] O envio de email deve acontecer em segundo plano (background job);

 - Regras de Negócio:
  [x] O link enviado por email para resetar a senha, deve expirar em 2h;
  [] O usuário precisa confirmar a nova senha ao resetar sua senha.


## Atualização de Perfil
 - Requisitos Funcionais:
  [x] O usuário deve poder atualizar seu perfil(nome, email, senha, Avatar);

 - Requisitos Não Funcionais:
  [x] O usuário não pode alterar seu email para um email já em uso na aplicação;
  [x] Para atulizar sua senha, o usuário deve informar a senha antiga;
  [] Para atulizar sua senha, o usuário precisa confirmar a senha;

 - Regras de Negócio:
  [x] O link enviado por email para resetar a senha, deve expirar em 2h;
  [] O usuário precisa confirmar a nova senha ao resetar sua senha.

## Painel de usuário (Prestador de serviço)
 - Requisitos Funcionais:
  [x] O prestador deve poder listar os seus agendamentos de um dia especifico;
  [] O prestador deve poder receber uma notificação sempre que houver um novo agendamento;
  [] O prestador deve poder visualizar as notificações não lidas;

 - Requisitos Não Funcionais:
  [] Os agendamentos devem ser armazenados em cache.
  [] As notificações do prestador devem ser armazenadas no MongoDB;
  [] As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

 - Regras de Negócio:
  [] A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


## Agendamento de serviço

 - Requisitos Funcionais:
  [x] O usuário deve poder listar todos os prestadores de serviço cadastrados;
  [x] O usuário deve poder visualizar os dias de um mês com pelo menos um horário disponível de um prestador;
  [x] O usuário deve poder visualizar os horários disponíveis de um dia especifico de um prestador;
  [x] O usuário deve poder realizar um novo agendamento com um prestador;
  [] O usuário deve poder listar os agendamentos já marcados;
  [] O usuário deve poder cancelar um agendamento marcado.

 - Requisitos Não Funcionais:
  [] A listagem de prestadores devem ser armazenadas em cache.

 - Regras de Negócio:
  [x] Cada agendamento deve durar 1h exatamente;
  [x] Os agendamentos devem estar disponíveis entre 8h às 18h sendo o primeiro iniciando as 8H e o último agendamento iniciado as 17h;
  [] O usuário não pode agendar em um horário já ocupado;
  [x] O usuário não pode agendar em um horário que já passou;
  [] O usuário não pode agendar consigo mesmo;
