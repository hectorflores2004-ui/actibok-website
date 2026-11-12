(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.mobile');
  if(b&&m){b.addEventListener('click',function(){m.classList.toggle('open')});
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open')})})}
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f),en=document.documentElement.lang==='en';
    var subject=encodeURIComponent((en?'Inquiry from website – ':'Consulta desde el sitio web – ')+d.get('name'));
    var lines=[(en?'Name: ':'Nombre: ')+d.get('name'),(en?'Email: ':'Correo: ')+d.get('email'),
      (en?'Country: ':'País: ')+d.get('country'),(en?'Interest: ':'Interés: ')+d.get('interest'),'',d.get('message')];
    window.location.href='mailto:actiboknegocios@gmail.com?subject='+subject+'&body='+encodeURIComponent(lines.join('\n'));
  })}
})();
