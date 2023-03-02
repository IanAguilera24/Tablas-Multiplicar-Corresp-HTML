function generaTabla(){
    var num = document.getElementById("numero").value; //obtencion del valor por ID
    for (var i = 1; i<=10;  i++){
        document.write(num + " x " + i + " = " + (num*i) + "<br>")
        
    }
    document.write('<br><input type="button" value="Regresar" onclick="location.reload()">')
}
