
status =""
objects=[];
function setup(){
  
    canvas=createCanvas(600,600);
     canvas.center();
     video=createCapture(VIDEO);
     video.hide();
     
     objectDetector=ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML="status-finding-objects";


}

function draw(){
    
    image(video,0,0,600,600);

    if(status !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult);
      for (i=0;i<objects.length;i++){
      
          document.getElementById("status").innerHTML="status:object detected";
          document.getElementById("numberofobjects").innerHTML="Number of objects detected are:"+objects.length;
          fill(r,g,b);
          percent=floor(objects[i].confidence*100);
          text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
          noFill();
          stroke(r,g,b);
          rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

}

function preload(){
    img=loadImage('dog_cat.jpg');

}

function modelLoaded(){
    console.log("modelloaded");
    status =true;
    objectDetector.detect(video,gotResult)
}

function gotResult(error,results)
{
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
