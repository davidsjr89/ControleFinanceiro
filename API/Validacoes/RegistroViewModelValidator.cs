using API.ViewModels;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Validacoes
{
    public class RegistroViewModelValidator: AbstractValidator<RegistroViewModel>
    {
        public RegistroViewModelValidator()
        {
            RuleFor(f => f.NomeUsuario)
                .NotNull().WithMessage("Preencha a nome de usuario")
                .NotEmpty().WithMessage("Preencha a nome de usuario")
                .MinimumLength(6).WithMessage("Use mais caracteres")
                .MaximumLength(50).WithMessage("Use menos caracteres");

            RuleFor(f => f.CPF)
                .NotNull().WithMessage("Preencha o CPF")
                .NotEmpty().WithMessage("Preencha o CPF")
                .MinimumLength(1).WithMessage("Use mais caracteres")
                .MaximumLength(20).WithMessage("Use menos caracteres");

            RuleFor(f => f.Profissao)
                .NotNull().WithMessage("Preencha o Profissão")
                .NotEmpty().WithMessage("Preencha o Profissão")
                .MinimumLength(1).WithMessage("Use mais caracteres")
                .MaximumLength(30).WithMessage("Use menos caracteres");

            RuleFor(f => f.Foto)
                .NotNull().WithMessage("Preencha a foto")
                .NotEmpty().WithMessage("Preencha o Profissão");

            RuleFor(f => f.Email)
                .NotNull().WithMessage("Preencha o Email")
                .NotEmpty().WithMessage("Preencha o Email")
                .MinimumLength(8).WithMessage("Use mais caracteres")
                .MaximumLength(50).WithMessage("Use menos caracteres")
                .EmailAddress().WithMessage("Email inválido");

            RuleFor(f => f.Senha)
                .NotNull().WithMessage("Preencha a Senha")
                .NotEmpty().WithMessage("Preencha a Senha")
                .MinimumLength(6).WithMessage("Use mais caracteres")
                .MaximumLength(50).WithMessage("Use menos caracteres");

        }
    }
}
