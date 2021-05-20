//Validação do formulário com *Campos obrigatórios 

function validate() {
    
    const Validacao =   document.getElementById ("field_cep").value;
                        document.getElementById ("field_name").value;
                        document.getElementById ("field_sobrenome").value;
                        document.getElementById ("field_telcel").value;
                        document.getElementById ("field_cpf").value;
                        document.getElementById ("field_bairro").value;                       
                        document.getElementById ("field_city").value;
                        document.getElementById ("field_rua").value;
                        document.getElementById ("field_number").value; 
                        document.getElementById ("field_uf").value; 
                        
    isValid = true

    if (Validacao == "") {
        document.getElementById("cpfhelp").classList.remove("hidden");
        document.getElementById("namehelp").classList.remove("hidden");
        document.getElementById("lastnamehelp").classList.remove("hidden");
        document.getElementById("cellhelp").classList.remove("hidden");
        document.getElementById("numbhelp").classList.remove("hidden");
        document.getElementById("bairrohelp").classList.remove("hidden");
        document.getElementById("cephelp").classList.remove("hidden");
        document.getElementById("cityhelp").classList.remove("hidden");
        document.getElementById("adresshelp").classList.remove("hidden");
        document.getElementById("ufhelp").classList.remove("hidden");

        isValid = false
        return alert("Por favor, preecher os campos obrigatórios!")
        
    } else{
        isValid = true;
        
        return alert("Casdastro feito com sucesso!");
        
    } 
}
   

    //Validação do CPF

    function CPF() {

        let cpf = document.getElementById("field_cpf").value;
       
        //realizar a formatação...
        cpf = cpf.replace("-", "").replace(".", "").replace(".", "")
    
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999") {
            return alert('CPF INVÁLIDO');
        }
        // Valida 1o digito	
    
        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return alert('CPF INVÁLIDO');
    
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return alert("CPF INVÁLIDO");
            return alert ('CPF VÁLIDO')
        
    }

    // construindo mascara comentar // 
   // Uma expressão regular (regular expression ou Regex) é uma sequência de caracteres que forma um padrão de pesquisa. 
    const masks = {   //criando o objeto 
        cpf (value) { //função recebe um valor// entrada do campo//
          return value //retornando o próprio valor// valor vai ser processado aqui dentro 
            .replace(/\D/g, '') // replace substituindo um valor pelo outro /\D = maiusculo que não digita se não for numero g=global busca em toda a minha string verificar se tem algum valor que não seja numero e vai substituir por nada//Regex é o número entre barras
            .replace(/(\d{3})(\d)/, '$1.$2')//grupo de captura (\d{3})$1(vai capturar os 3 primeiros numeros), (\d)$2
            .replace(/(\d{3})(\d)/, '$1.$2') // fez o mesmo do de cima
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') // captura do primeiro e adiconando dois numeros mais o traço
            .replace(/(-\d{2})\d+?$/, '$1') ///(-\d{2})\ Final do Cpf *\d adiconando + que significa independente de quantos números tiverem e ? case com mínino de número possível $ significa até o final da string
        },

        date (value) {
            return value
              .replace(/\D/g, '')
              .replace(/(\d{2})(\d)/, '$1/$2')
              .replace(/(\/\d{2})(\d)/, '$1/$2')
              .replace(/(\/\d{4})\d+?$/, '$1')
          },

          phone (value) {
            return value
              .replace(/\D+/g, '')
              .replace(/(\d{2})(\d)/, '($1) $2')
              .replace(/(\d{5})(\d)/, '$1-$2')
              .replace(/(\d{4})-(\d)(\d{5})/, '$1$2-$3')
             .replace(/(-\d{4})\d+?$/, '$1')
          },

    cep (value) {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{3})\d+?$/, '$1')
      },
    }

    document.querySelectorAll('input').forEach($input => { //fazendo a interação//isso vai gerar uma nodelist//adicionar eventos para funcionamento da aplicação
        const field = $input.dataset.js // API pra pegar data-qualquer coisa pra pegar na aplicação em HTML assim vamos pegar a aplicação de forma dinâmica
      
        $input.addEventListener('input', e => {  //adicionando evento para cada input, call back
          e.target.value  = masks[field](e.target.value)//e.target.value -> campo de digitação// retorno da função seja atribuido a valor da mascara //field pega todas as váriaveis do const field
        }, false)
      })

    //finalizado a máscara


// Inicio busca CEP
    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById("field_rua").value=("");
        document.getElementById("field_bairro").value=("");
        document.getElementById("field_city").value=("");
        document.getElementById("field_uf").value=("");
       
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById("field_rua").value=(conteudo.logradouro);
        document.getElementById("field_bairro").value=(conteudo.bairro);
        document.getElementById("field_city").value=(conteudo.localidade);
        document.getElementById("field_uf").value=(conteudo.uf);
        
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById("field_rua").value="...";
            document.getElementById("field_bairro").value="...";
            document.getElementById("field_city").value="...";
            document.getElementById("field_uf").value="...";
            

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};
