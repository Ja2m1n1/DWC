function drawTable(rows=10,columns=4,color="black"){
    let column;
document.write('<table style="border: 3px solid '+color+'">');
while(rows!=0){
    document.write('<tr>');
    column = columns;
    while(column!=0){
        document.write('<td style="border: 1px solid '+color+'"> &nbsp Fila: '+rows+' Columna:'+column+' &nbsp</td>');
        column --;
    }
     document.write('</tr>');
     rows--;
}
document.write('</table>');
}


drawTable(10,4,"green");

drawTable(10,4,"green");

drawTable(10,4,"green");