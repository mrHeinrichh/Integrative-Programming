$(document).ready(function(){
    $('#docMenu').hide();
    $('#lessons').click(setHourNav);
    $('#docs').click(setDocNav);
    $('#fade').click(fade);
    });
    function setHour(e){
    var hour = $('#lessonSelect').val();
    $('#content p').html('Lesson '+ hour);
    }
    function setHourNav(){
    $('#docMenu').hide();
    $('span').removeClass('active');
    $('#lessons').addClass('active');
    var select = $('<select id=\"lessonSelect\"></select>');
    select.change(setHour);
    for(var x=1; x<41; x++){
    var option = $('<option></option');
    option.val(x);
    option.html('Lesson '+x);
    select.append(option);
    }
    $('#content').html('');
    $('#content').append(select).append('<br><p></p>');
    }
    function setDocNav(){
    $('#docMenu').show();
    $('span').removeClass('active');
    $('#docs').addClass('active');
    }
    function setDoc(doc){
    var frame = $('<iframe></iframe>');
    frame.attr('src', doc);
    $('#content').html(frame);
    }
    function fade(){
    var opacity = $('#content').css('opacity');
    if (opacity < 1){
    $('#content').css('opacity', 1);}
    else {
    $('#content').css('opacity', .5); }
    }