var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
    Bio=Img;
    Bio.scaleToWidth(700);
    Bio.scaleToHeight(510);
    Bio.set({
        top:0,
        left:0
    });
    canvas.add(Bio);
})	
	
}

function playSound(){
x.play();	
}
