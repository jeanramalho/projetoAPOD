var btn = document.getElementById('pesquisar')
var imagem = document.getElementById('picDay')
var videoDay = document.getElementById('videoDay')
var textoResumo = document.getElementById('textoResumo')


var data = new Date()
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0')
var ano = data.getFullYear()
dataAtual = ano + '-' + mes + '-' + dia

$('#pesquisar').on('click',function() {   
    var data = document.getElementById('data').value
    var url = `https://api.nasa.gov/planetary/apod?api_key=uI1Ujf6mPY312930h3lcQRYeP61l8wV95WGYkMKc&date=${data}`
    $.ajax({
        url: url,
        type: 'get',
        dataType: "json",

        success: function(dados) {       
                  if(dados.media_type == "image") {
                    imagem.src = `${dados.url}`
                    videoDay.style.display= "none"
                } else if (dados.media_type == "video"){
                    videoDay.style.display= "block"
                    videoDay.innerHTML = `<iframe src=${dados.url} width='320' height='240' id='videoDay'>`
                    imagem.src = ""
                }
                    textoResumo.innerHTML = `${dados.explanation}`
                }
    })
}) 


$(document).ready(function() {   
    var url = `https://api.nasa.gov/planetary/apod?api_key=uI1Ujf6mPY312930h3lcQRYeP61l8wV95WGYkMKc&date=${dataAtual}`
    $.ajax({
        url: url,
        type: 'get',
        dataType: "json",

        success: function(dados) {       
                  if(dados.media_type == "image") {
                    imagem.src = `${dados.url}`
                    videoDay.style.display= "none"
                } else if (dados.media_type == "video"){
                    videoDay.style.display= "block"
                    videoDay.innerHTML = `<iframe src=${dados.url} width='320' height='240' id='videoDay'>`
                    imagem.src = ""
                }
                    textoResumo.innerHTML = `${dados.explanation}`
                }
    })
}) 

