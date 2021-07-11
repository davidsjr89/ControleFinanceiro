using BLL.Models;
using FluentValidation;

namespace API.Validacoes
{
    public class DespesaValidator: AbstractValidator<Despesa>
    {
        public DespesaValidator()
        {
            RuleFor(c => c.CartaoId)
                .NotNull().WithMessage("Escolha o cartão")
                .NotEmpty().WithMessage("Escolha o cartão");

            RuleFor(c => c.Descricao)
                .NotNull().WithMessage("Preencha a descrição")
                .NotEmpty().WithMessage("Preencha a descrição")
                .MinimumLength(1).WithMessage("Use mais cartacteres")
                .MaximumLength(50).WithMessage("Use menos caractres");

            RuleFor(c => c.Valor)
                .NotNull().WithMessage("Preencha o valor")
                .NotEmpty().WithMessage("Preencha o valor")
                .InclusiveBetween(0, double.MaxValue).WithMessage("Valor inválido");

            RuleFor(c => c.Mes)
                .NotNull().WithMessage("Escolha o mês")
                .NotEmpty().WithMessage("Escolha o mês");

            RuleFor(c => c.Ano)
                .NotNull().WithMessage("Escolha o ano")
                .NotEmpty().WithMessage("Escolha o ano")
                .InclusiveBetween(2000, 2030).WithMessage("Valor inválido");
        }
    }
}
