$(document).ready(function () {
  $('#formA input:text').keyup(function () {
    $('#formB input:text').val($(this).val())
  })
  $('#formA textarea').keyup(function () {
    $('#formB textarea').val($(this).val())
  })
  $('#formA input:radio').change(function () {
    var radioB = $('#formB input[value=' + $(this).val() + ']')
    radioB.prop('checked', $(this).is(':checked'))
  })
  $('#formA input:checkbox').click(function () {
    $('#formB input:checkbox').prop('checked', $(this).prop('checked'))
  })
  $('#formA select').change(function () {
    $('#formB select').val($(this).val())
  })
  $('#formA label').click(function () {
    $('#formB label').html(new Date().toUTCString())
  })
  $('#formA input:image').click(function (e) {
    $('#formB input:image').attr('src', $(this).attr('src'))
    e.preventDefault()
  })
  $('#resetB').click(function () {
    $('#formB').get(0).reset()
    $('#formB input:checked').prop('checked', false)
    $('#formB input:image').attr('src', '')
  })
  $('#serializeB').click(function (e) {
    $('#serialized').html($('#formA').serialize())
    $('#serializedA').empty()
    var arr = $('#formA').serializeArray()
    jQuery.each(arr, function (i, prop) {
      $('#serializedA').append(
        $('<p>' + prop.name + ' = ' + prop.value + '</p>'),
      )
    })
  })
})
