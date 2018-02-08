/*eslint-env browser*/
/*eslint "no-console": "off"*/
/*global $*/

$(document).ready(function(){
    
$.each(data, function(genre, detail){   
    
    console.log(detail);
    
    var dropdowns = $("#select");
   
    dropdowns.append($("<option/>").val(genre).text(genre));
})
    
   $("select").change(function(){
      var genreSelected = $("#select").val();
      
       genreinformation(genreSelected);
       
       
   })
});
    
    function genreinformation(details){
        $("canvas").remove();
        $("body").append($("<canvas/>").attr("id", "myChart"));
         var option = {
        responsive: true,
    };
       
        var myGenre = data[details]; 
        var artist=[];
        var duration= [];
        for(var i=0; i< myGenre.length; i++){
            duration.push(myGenre[i].duration);
            artist.push(myGenre[i].artist);
            

        }
        
        var graphic= $("#myChart");
        var chart= new Chart(graphic, {
            type: "bar",
            data:{
                labels: artist,
                datasets:[{
                    label: "Song Duration ",
                    backgroundColor: "blue",
                    data: duration,
                    
                }
                    
                    
                ]
            },
            options:{
                legend:{
                    display:true
                },
                
            }
        })
    }

    
