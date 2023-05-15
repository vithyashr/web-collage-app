
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function Start(){
 document.getElementById("textbox").innerHTML=""
 console.log("test")
 recognition.start()

}

recognition.onresult=function(event){

    console.log(event)
    var content= event.results[0][0].transcript
    document.getElementById("textbox").innerHTML= content
    console.log("transcript")

    if(content=="take my selfie"){
        console.log("taking selfie ---")
      speak()
    }
    }
    
   camera=document.getElementById("camera")


    function speak(){
        var synth=window.speechSynthesis
        var utterThis=new SpeechSynthesisUtterance("Taking your selfie in five seconds")
        synth.speak(utterThis)
        Webcam.attach(camera)

        setTimeout(
            function(){
                img_id="self1"
                snap_shot()
                var utterThis=new SpeechSynthesisUtterance("Taking your selfie in five seconds")
                synth.speak(utterThis)
            },5000

        )

        setTimeout(
            function(){
                img_id="self2"
                snap_shot()
                var utterThis=new SpeechSynthesisUtterance("Taking your selfie in five seconds")
                synth.speak(utterThis)
            },10000

        )

        setTimeout(
            function(){
                img_id="self3"
                snap_shot()
                var utterThis=new SpeechSynthesisUtterance("Taking your selfie in five seconds")
                synth.speak(utterThis)
            },15000

        )

        setTimeout(
            function(){
                img_id="self4"
                snap_shot()
            },20000

        )
    }

    Webcam.set(
        {
            width:750,
            height:450,
            image_format:'jpeg',
            png_quality:90
        }
    )

    function snap_shot(){

        Webcam.snap( function(data_uri) {
            if(img_id=="self1"){
                document.getElementById("result1").innerHTML = '<img src="'+data_uri+'" id="selfie_img1"/>'
            }
            if(img_id=="self2"){
                document.getElementById("result2").innerHTML = '<img src="'+data_uri+'" id="selfie_img2"/>'
            }
            if(img_id=="self3"){
                document.getElementById("result3").innerHTML = '<img src="'+data_uri+'" id="selfie_img3"/>'
            }
            if(img_id=="self4"){
                document.getElementById("result4").innerHTML = '<img src="'+data_uri+'" id="selfie_img4"/>'
            }
    
           
        } )
    
    }

   
  