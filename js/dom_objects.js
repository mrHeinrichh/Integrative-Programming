function textChange(){
    // var inElement = document.getElementById('textIn');
    var inElement = $("#textIn").val();
    // var outElements = document.getElementsByTagName('p');
    
    var outElements = $("#p");
    // console.log(inElement);
    console.log(outElement);

    var headingElements = document.getElementsByClassName('heading');
    
    for (var i = 0; i < outElements.length; i++) {
    
        var outItem = outElements[i];
    headingElements[i].innerHTML = 'Updating ' + (i+1) +' to ' + inElement;
    outItem.html(inElement);
     }
    }