$(document).ready(function(){
    
    $('button').click(function(){
        $('.addtarefa').slideDown()
    })
    $('#cancel').click(function(){
        $('.addtarefa').slideUp()
    })
    var clicks=0
    
    $('.addtarefa').on('submit', function(e){
        e.preventDefault()
        const inderecoTarefa=$('#tarefa').val()
        const timerr=$('#timee').val()
        const novoItem=$(`<li style="display: none"></li>`)
        $(`<p>${inderecoTarefa} - ${timerr}</p>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(600)
        $('#tarefa').val('')
        $('#timee').val('')



        $('ul li p').click(function(){
            clicks++
            if(clicks==1){
                $(this).css({'text-decoration':'line-through','text-decoration-color':'#000000'})
            }else{
                $(this).css('text-decoration','')
                clicks=0
            }
        })
    })
    $('ul li p').click(function(){
        clicks++
        if(clicks==1){
            $(this).css({'text-decoration':'line-through','text-decoration-color':'#000000'})
        }else{
            $(this).css('text-decoration','')
            clicks=0
        }
    })
})