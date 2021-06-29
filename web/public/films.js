
var API= (() => {
   var createFilm = () => {
        Inputvalue = document.getElementById('userinput').value; 
        Ratingvalue = document.getElementById('userinputRating').value;

        if(Inputvalue =="" && Ratingvalue == ""){
            alert("Title and Rating cannot be empty");
            return false;
        } 
        else if(Inputvalue ==""){
            alert("Film title cannot be empty");
            return false;

        }
        else if(Ratingvalue == "" ){
            alert("Rating cannot be empty");
            return false;
        }
        else if (Ratingvalue<0 || Ratingvalue>10){
            alert("Invalid Rating, should be between 0 and 10");
            return false;
        }
        else{
            try{
                fetch("http://localhost:3001/api/v1/films", {
                   method: 'POST',
                   body: JSON.stringify({
                       name: Inputvalue,
                       rating: Ratingvalue
                   }),

                   headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json'
                   }
                });
               // console.log('hi');

            } catch (e) {
                console.log(e);
                console.log('---------------------');
            }
        alert("Film title and Rating added succesfully");
        document.getElementById('userinput').value = " ";
        document.getElementById('userinputRating').value =" "; 
        return false; 
        
        }  
      }

    var getFilms = () => {
        titledisplay  = document.getElementById('titledisplay');
        document.getElementById('titledisplay').innerHTML = " ";
             try{
                fetch("http://localhost:3001/api/v1/films", {
                   method: 'GET',
                   headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json'
                   }
                }).then(resp => resp.json())
                    .then(results =>{
                        if(results.length>0){
                            titledisplay.innerHTML +="<tr><td>Added film titles are:</td><td>Ratings of Films</td></tr>";
                    
                        results.forEach(data => {
                            titledisplay.innerHTML += "<tr>";
                            titledisplay.innerHTML += "<td>"  +  data.name+ "</td>" + "<td>" + data.rating+ "</td>"  ;
                            titledisplay.innerHTML += "</tr>";                                      
                            
                        });
                    }
                    });

            } catch (e) {
                console.log(e);
                console.log('---------------------');
            }
              
       
        return false;

}

    return {
        createFilm,
        getFilms
    }
}
)();