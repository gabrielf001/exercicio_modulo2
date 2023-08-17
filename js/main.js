$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#CEP').mask('00000-000')
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            CEP:{
                required: true
            }
        },
        messages:{
            nome:'Campo obrigatorio.',
            email:'Campo obrigatorio.',
            telefone:'Campo obrigatorio.',
            cpf:'Campo obrigatorio.',
            endereco:'Campo obrigatorio.',
            CEP:'Campo obrigatorio.',
        },
        submitHandler: function(form){
            alert('Formulario enviado!')
            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#cpf').val('')
            $('#endereco').val('')
            $('#CEP').val('')
        },
        invalidHandler : function(evento, validador){
            let camposInco = validador.numberOfInvalids()
            if(camposInco){
                alert(`Existem ${camposInco} campos incorretos!`)
            }
        }
    })
})