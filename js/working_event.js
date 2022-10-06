function clickHandler(e) {
    console.log(e.target, e.data);
    $('#'+e.data.objId).html(e.target.id + ' says ' + e.data.answer +
    ' at X postion: ' + e.screenX);
    }
    $(document).ready(function(){
    $('#div1').on({'click':clickHandler},
    {'objId':'heading', 'answer':'yes'});
    $(document).on('click','#div2',{'objId':'heading', 'answer':'no'},clickHandler);
    });