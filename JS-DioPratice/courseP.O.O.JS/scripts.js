class ContaBancaria {

    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; 
        // sempre que for usar em getter e setter
        // usar "_propriedade" para que funcao do getter e setter
        //tenha nome 'saldo' e a proriedade nao
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'Operação negada, saldo insuficiente';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        return this._cartaoCredito = valor;
    }
}
class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupança';
    }
  
}
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitaria';
    }
    sacar(valor){
        if(valor > 500){
            return 'Operação Negada, Limite R$500,00'
        }
        this._saldo = this._saldo - valor;
    }
}
