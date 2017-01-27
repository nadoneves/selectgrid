$.fn.SelectGrid = function(options){
    var selGrid = $(this).find('option');
    var size = options.size; 
    var multiple = options.multiple;   
    
    this.attr('size', size)
        .attr('multiple', multiple)
        .css('overflow','auto')
        .css('font-family','monospace');   

    var maiorTexto = 0;
    $.each(selGrid, function(k,v){        
        var textos = v.label.split("-");
        if(maiorTexto <= 0)
            maiorTexto = textos[textos.length - 1].length;
        else
        {
            if(maiorTexto < textos[textos.length - 1].length)
                maiorTexto = textos[textos.length - 1].length;
        }
    });
    var textos = [];
    var tFinal = [];
    $.each(selGrid, function(k,v){
            textos = v.label.split("-");
        for	(var i = 0; i < (textos.length -1); i++){
            var tTexto = textos[i].length;
            var diferenca = maiorTexto - tTexto;
            for(var j = 0; j <= diferenca; j++)
            {
                if(j == diferenca)
                    textos[i] = textos[i] + "&nbsp;|&nbsp; ";
                else
                    textos[i] = textos[i] + "&nbsp;";
            }                            
        }
        tFinal[k] = "";
        for(var x = 0; x < textos.length; x++){
            tFinal[k] += textos[x];
        }	
    });			
    $(selGrid).remove();
    for (var i = 0; i < tFinal.length;i++)
    {
        $(this).append('<option value="'+i+'">'+tFinal[i]+'</option>');
    }
};