function verify () {
  var date = new Date()
  var year = date.getFullYear()
  var yearinput = document.getElementById('year')
  var results = document.getElementById('results')
  if (yearinput.value.length == 0 || yearinput.value > year) {
    window.alert('[ERRO] verifique os dado e tente novamente')
  } else {
    var sexinput = document.getElementsByName('radsex')
    var age = year - Number(yearinput.value)
    var gender = ''
    var img = document.createElement('img') // CRIOU UMA TAG IMG
    img.setAttribute('id', 'photo') // CRIOU UM ATRIBUTO PARA A TAG, OU SEJA, CRIOU UM ID PARA A TAG IMG = PHOTO
    var section = window.document.getElementById('board')
    var header = window.document.getElementById('title')
    var footer = window.document.getElementById('copyright')
    var body = window.document.getElementById('body')

    if (sexinput[0].checked) {
      gender = 'Homem'
      if (age >= 0 && age < 10){
        img.setAttribute('src', './public/criançaHomem.png')
        body.style.background = '#8D8905'
        section.style.background = '#CBC741'
        header.style.color = '#F7F9FB'
        footer.style.color = '#F7F9FB'
      } else if (age < 30){
        //Jovem
        img.setAttribute('src', './public/jovemHomem.png')
        body.style.background = '#F9B9B7'
        section.style.background = '#FF7874'
        header.style.color = '#F7F9FB'
        footer.style.color = '#F7F9FB'
        
      } else if (age < 60){
        // Adulto
        img.setAttribute('src', './public/adultoHomem.png')
        body.style.background = '#7994A0'
        section.style.background = '#CEE4EE'
        header.style.color = '#F7F9FB'
        footer.style.color = '#F7F9FB'
      } else {
        //Idoso
        img.setAttribute('src', './public/idosoHomem.png')
        body.style.background = '#C6C5C3'
        section.style.background = '#BEA26B'
        header.style.color = '#0D0E0E'
        footer.style.color = '#0D0E0E'
      }
    } else if (sexinput[1].checked) {
      gender = 'Mulher'
      if (age >= 0 && age < 10){
        //Criança
        img.setAttribute('src', './public/criançaMulher.png')
        body.style.background = '#8D8905'
        section.style.background = '#CBC741'
        header.style.color = '#F7F9FB'
        footer.style.color = '#F7F9FB'
      } else if (age < 30){
        //Jovem
        img.setAttribute('src', './public/jovemMulher.png')
        body.style.background = '#F9B9B7'
        section.style.background = '#FF7874'
        header.style.color = '#F7F9FB'
        footer.style.color = '#F7F9FB'
      } else if (age < 60){
        // Adulto
        img.setAttribute('src', './public/adultoMulher.png')
        body.style.background = '#7994A0'
        section.style.background = '#CEE4EE'
        header.style.color = '#F7F9FB'
        footer.style.color = '#F7F9FB'
      } else {
        //Idoso
        img.setAttribute('src', './public/idosoMulher.png')
        body.style.background = '#C6C5C3'
        section.style.background = '#BEA26B'
        header.style.color = '#0D0E0E'
        footer.style.color = '#0D0E0E'
      }
    }
    results.innerHTML = `Detectamos: ${gender} com ${age} anos`
    results.appendChild(img) //ADICIONAR UM ELEMENTO NO CASO IMG
  }
}