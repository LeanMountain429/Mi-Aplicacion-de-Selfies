var variable_del_api= window.webkitSpeechRecognition
var calling_vars= new variable_del_api
function onaclick(){
    document.getElementById("teextaareaea").innerHTML=""
    calling_vars.start()
}
calling_vars.onresult= function(event){
    console.log (event)
    escuchar_var= event.results[0][0].transcript
    console.log (escuchar_var)
    document.getElementById("teextaareaea").innerHTML= escuchar_var
    unirleerloqsea()
}
function unirleerloqsea(){
    //var de_texto_a_voz_xd= window.speechSynthesis
    //var textbox_o_textarea= 
    //var calling_voice= new SpeechSynthesisUtterance(textbox_o_textarea)
    //de_texto_a_voz_xd.speak(calling_voice)
    if (escuchar_var=="Toma mi selfie"){
        document.getElementById("reproduciendo_cargando").play()
        Webcam.attach(ymhdefdpgebec)
        setTimeout(function(){
            document.getElementById("V").play()
            setTimeout(function(){
                document.getElementById("Dr_Huevoooo").play()
                foto()
            },5000)
        },5000)
    } 
}
Webcam.set({
    width: 300,
    height: 400,
    image_format:'png',
    png_quality: 90
})
var ymhdefdpgebec= document.getElementById("david")
function foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("fridaf13343a4875847r849547i84375847d84758943").innerHTML= '<img src='+data_uri+'>'
    })
}