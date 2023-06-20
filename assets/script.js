// Initial Data
let currentQuestion = 0;
let correctAnswers = 0;
//showQuestion();

//TRACKEAMENTO
arrBotao = document.querySelectorAll('.btn');
link = arrBotao[0].getAttribute('href');
//console.log(link);
   
function getPar(){
    par="";
    const urlParams = new URLSearchParams(window.location.search);
    source = urlParams.get('utm_source');
    medium = urlParams.get('utm_medium');
    campaign = urlParams.get('utm_campaign');
    term = urlParams.get('utm_term');
    content = urlParams.get('utm_content');
    sck = urlParams.get('sck');
    src = urlParams.get('src');
        
    if(source){
        if(link.includes('?')){
            par='&utm_source='+source;
            link=link+par;
        }else{
            par='?utm_source='+source;
            link=link+par;
        }
    }
    
    if(medium){
        if(link.includes('?')){
            par='&utm_medium='+medium;
            link=link+par;
        }else{
            par='?utm_medium='+medium;
            link=link+par;
        }
    }

    if(campaign){
        if(link.includes('?')){
            par='&utm_campaign='+campaign;
            link=link+par;
        }else{
            par='?utm_campaign='+campaign;
            link=link+par;
        }
    }
    
    if(term){
        if(link.includes('?')){
            par='&utm_term='+term;
            link=link+par;
        }else{
            par='?utm_term='+term;
            link=link+par;
        }
    }
    
    if(content){
        if(link.includes('?')){
            par='&utm_content='+content;
            link=link+par;
        }else{
            par='?utm_content='+content;
            link=link+par;
        }
    }
    
    if(sck){
        if(link.includes('?')){
            par='&sck='+sck;
            link=link+par;
        }else{
            par='?sck='+sck;
            link=link+par;
        }
    }
    
    if(src){
        if(link.includes('?')){
            par='&src='+src;
            link=link+par;
        }else{
            par='?src='+src;
            link=link+par;
        }
    }

    if(par){

        for(i=0; i<arrBotao.length;i++){
            arrBotao[i].href = link;
        }
    }

}
   
   getPar();


// Functions
function showQuestion() {
    copyright();
    //document.querySelector('.botao').style.display = 'none';
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz() {

    document.querySelector('.validation').style.display = 'block';
    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
    load();
}

i = 0;
function load() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("barValidation");
        var info = document.getElementById("info");
        var width = 1;
        var id = setInterval(frame, 40);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
            sleep(2000);
            parabens();
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
}

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
  }

function resetEvent() {
    correctAnswers = 0;
    currentQuestion = 0;
    /*showQuestion();*/
    //window.location.href = "http://google.com";
}

function parabens() {
    document.getElementById('imgEnd').style.display = 'block';
    document.getElementById('headline').style.display = 'none';
    document.querySelector('.validation').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

}

function copyright() {
    anoAtual = new Date();
    anoAtual = anoAtual.getFullYear();
    p = document.getElementById('copyright').innerHTML = '© Copyright '+ anoAtual+ ' – Todos os direitos reservados.';
}

