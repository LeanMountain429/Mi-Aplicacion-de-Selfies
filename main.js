var variable_del_api= window.webkitSpeechRecognition
var calling_vars= new variable_del_api
function onaclick(){
    document.getElementById("teextaareaea").innerHTML=""
    calling_vars.start()
}
calling_vars.onresults= function(event){
    console.log (event)
    var escuchar_var= event.results[0][0].transcript
    console.log (escuchar_var)
    document.getElementById("teextaareaea").innerHTML= escuchar_var
}
function unirleerloqsea(){
    var de_texto_a_voz_xd= window.speechSynthesis
    var textbox_o_textarea= document.getElementById("teextaareaea").value
    var calling_voice= new SpeechSynthesisUtterance(textbox_o_textarea)
    de_texto_a_voz_xd.speak(calling_voice)
}
Webcam.set({
    width: 300,
    height: 400,
    image_format:'png',
    png_quality: 90
})
var ymhdefdpgebec= document.getElementById("david")