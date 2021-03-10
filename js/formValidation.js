$(document).ready(function(){

    gencaptcha()

    function gencaptcha(){
        var expr= $('#exprsn');

        var num1= Math.round((100-10)*Math.random() +10 );
    
        var num2= Math.round((100-10)*Math.random() + 10);
    
        var operations = ['*','/','+','-']
    
        var x= (Math.round(10*Math.random()))%4;
    
        var op =operations[x];
        
        var compute = num1 + op  + num2
    
        expr.val(compute)

    }

    $(".refrsh").click(function(){
        gencaptcha();
    })

    $(".req").text(" ")

})


function display(input){

    // alert(input)
    // alert(input["type"])
     var file = $("input[type=file]").get(0).files[0];

 if(file){
 var reader = new FileReader();

 alert(reader.result)
 alert(reader)

 reader.onload = function(){
     $("#pimg").attr("src", reader.result);
 }

// alert($('#pimg').attr("src"))

 reader.readAsDataURL(file);
// alert($('#pimg').attr("id"))
  }

 }



//Go to second part
$('#contact').click(function(){

    /*$('#grp1').fadeOut(3000);
    $('#grp2').delay(2000).fadeIn();
    ($('#personal')).removeClass("btn-primary").addClass("btn-secondary");
    
    $('#contact').removeClass("btn-secondary").addClass("btn-primary");*/
    groupOneCheck()

    
})

//Go to first part

$('#personal').click(function(){

    $('#grp2').fadeOut(3000);
    $('#grp1').delay(2000).fadeIn();
    ($('#contact')).removeClass("btn-primary").addClass("btn-secondary");
    
    $('#personal').removeClass("btn-secondary").addClass("btn-primary");

    
})
//Add extra mobile number

/*$('#enum').click(function(){ 
    $(this).remove()
    
    $("#mobile1").after('<div class="form-group" id="mobile2"> \
    <i class="fas fa-phone-alt"></i>\
   <label for="tel">Second Number</label>\
   <input type="tel" class="form-control" id="tel2">\
   <button type="button" id="remtel" class="btn"><i class="fas fa-times-circle fa-2x" id=" cross"></i></button>\
   </div>');
   $('#tel2').css("width","300px");

   $('#remtel').css({"position":"relative","left":"310px","top":"-49px"})
  

   $('#panplace').css("margin-top","-50px");
})

$("#remtel").click(function(){
    $('#mobile2').remove();
})
*/
$('#enum').click(function(){

    $("#mobile2").css("display","block");
    $("#addmobile").css("display","none")

})

$('#remove-num').click(function(){
    $("#mobile2").css("display","none");
    $("#addmobile").css("display","block")
    $("#tel2").val(" ")

})


$('#next').click(function(){
    groupOneCheck()
})


function groupOneCheck(){

    var filePath=$('#profile').val(); 

    var Name = $("#name").val();            
               
    var mail1 =$("#mail1").val();        
   
    var mobile = $("#tel").val();
    var pan = $("#pan").val();
    var adhar = $("#adhar").val();
    var namereg = /^[a-zA-Z]+$/;
    var mailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,7})(.[a-z]{2,7})?$/;
    var mobilereg = /^[1-9]{1}[0-9]{9}$/;
    var adharreg = /^[1-9]{1}[0-9]{11}$/;

    //profile path checking


    if(filePath.trim() == ""){
        $('#profileerror').text("please upload profile");
        $('#profile').focus();
        $( "#profile" ).change(function() {
            $('#profileerror').text(" ");
        });           
    }

  //Name check

    if(Name.trim() == ""){
        $('#fnerror').text("please enter name");
        $('#name').focus();
        $( "#name" ).change(function() {
            $('#fnerror').text(" ");
        });           
    }
    else{
        if (Name.length <3 ){
            
            $('#fnerror').text("Name is minimun 3 characters");
            $('#name').focus();
            $( "#name" ).change(function() {
                $('#fnerror').text(" ");
            });
        }
        else if (!Name.match(namereg)){             
            $('#fnerror').text("special characters not allowed")
            $('#name').focus();
            $( "#name" ).change(function() {
                $('#fnerror').text(" ");
            });                                
        }
    }
    //Mail Check

    if(mail1.trim() == ""){
        $('#mlerror').text("please enter mail id");
        $('#mail1').focus();
        $( "#mail1" ).change(function() {
            $('#mlerror').text(" ");
        });           
    }
   
    else if (!mail1.match(mailreg)){             
        $('#mlerror').text("Inavlid mail id,valid format is like sample@gmail.com ")
        $('#mail1').focus();
        $( "#mail1" ).change(function() {
            $('#mlerror').text(" ");
        });                                
    }
       //Mobile number check

       if(mobile.trim() == ""){
        $('#m1error').text("Please Enter Your Mobile Number");
        $('#tel').focus();
        $('#tel').change(function(){
            $('#m1error').text(" ");
        })  
      
       }
    
       else if (!mobile.match(mobilereg)){
        $('#m1error').text("Enter valid Mobile Number");
        $('#tel').focus();
        $('#tel').change(function(){
            $('#m1error').text(" ");
        })  
      
       }
       //pan check

       if(pan.trim() == ""){
        $('#panerror').text("Please Enter PAN Number");
        $('#pan').focus();
        $('#pan').change(function(){
            $('#panerror').text(" ");
        })  
      
       }
    
       else if (pan.length<10 || pan.length>10){
        $('#panerror').text("Enter valid PAN Number");
        $('#pan').focus();
        $('#pan').change(function(){
            $('#panerror').text(" ");
        })  
      
       }

       if(adhar.trim() == ""){
        $('#adharerror').text("Please Enter Adhar Number");
        $('#adhar').focus();
        $('#adhar').change(function(){
            $('#adharerror').text(" ");
        })  
      
       }
    
       else if (adhar.length<12 || adhar.length>12 ||(!adhar.match(adharreg)) ){
        $('#adharerror').text("Enter valid Adhar Number");
        $('#adhar').focus();
        $('#adhar').change(function(){
            $('#adharerror').text(" ");
        })  
      
       }
       if( $('#profileerror').text() == " "&& $('#mlerror').text() == " " && $('#fnerror').text() ==" " && $('#panerror').text() ==" " &&
       $('#m1error').text() ==" "  && $('#adharerror').text() ==" "){
        $('#grp1').fadeOut(3000);
        $('#grp2').delay(2000).fadeIn();
        ($('#personal')).removeClass("btn-primary").addClass("btn-secondary");
        
        $('#contact').removeClass("btn-secondary").addClass("btn-primary");
    
      } 
       
    

}
$('#country').select(function(){
    if(this.val()=="In"){
        $('#state').append('<option value="AU"> Arunachal Pradesh</option>');
        $('#state').append('<option value="K"> Kerala</option>');
        $('#state').append('<option value="MP"> MadyaPradesh</option>'); 
 


    }
})

$('#result').change( function(){
    var expr = $('#exprsn').val();
    var result = $('#result').val()
    temp =Math.round(eval(expr))
    if (result == ""){
        $('#errormsg').text("Please Enter captcha result");
    }
    else if (temp != result){
            
            $('#errormsg').text("Wrong Captcha Result");
        }
    else{
        if(result == temp){
            $('#errormsg').text(" ");

        }
    }
})

$('#sub').click(function(){

    var filePath=$('#profile').val(); 

    var Name = $("#name").val();            
               
    var mail1 =$("#mail1").val();        
   
    var mobile = $("#tel").val();
    var pan = $("#pan").val();
    var adhar = $("#adhar").val();
    var namereg = /^[a-zA-Z ]+$/;
    var mailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,7})(.[a-z]{2,7})?$/;
    var mobilereg = /^[1-9]{1}[0-9]{9}$/;
    var adharreg = /^[1-9]{1}[0-9]{11}$/;

    //profile path checking


    if(filePath.trim() == ""){
        $('#profileerror').text("please upload profile");
        $('#profile').focus();
        $( "#profile" ).change(function() {
            $('#profileerror').text(" ");
        });           
    }

  //Name check

    if(Name.trim() == ""){
        $('#fnerror').text("please enter name");
        $('#name').focus();
        $( "#name" ).change(function() {
            $('#fnerror').text(" ");
        });           
    }
    else{
        if (Name.length <3 ){
            
            $('#fnerror').text("Name is minimun 3 characters");
            $('#name').focus();
            $( "#name" ).change(function() {
                $('#fnerror').text(" ");
            });
        }
        else if (!Name.match(namereg)){             
            $('#fnerror').text("special characters not allowed")
            $('#name').focus();
            $( "#name" ).change(function() {
                $('#fnerror').text(" ");
            });                                
        }
    }
    //Mail Check

    if(mail1.trim() == ""){
        $('#mlerror').text("please enter mail id");
        $('#mail1').focus();
        $( "#mail1" ).change(function() {
            $('#mlerror').text(" ");
        });           
    }
   
    else if (!mail1.match(mailreg)){             
        $('#mlerror').text("Inavlid mail id,valid format is like sample@gmail.com ")
        $('#mail1').focus();
        $( "#mail1" ).change(function() {
            $('#mlerror').text(" ");
        });                                
    }
       //Mobile number check

       if(mobile.trim() == ""){
        $('#m1error').text("Please Enter Your Mobile Number");
        $('#tel').focus();
        $('#tel').change(function(){
            $('#m1error').text(" ");
        })  
      
       }
    
       else if (!mobile.match(mobilereg)){
        $('#m1error').text("Enter valid Mobile Number");
        $('#tel').focus();
        $('#tel').change(function(){
            $('#m1error').text(" ");
        })  
      
       }
       //pan check

       if(pan.trim() == ""){
        $('#panerror').text("Please Enter PAN Number");
        $('#pan').focus();
        $('#pan').change(function(){
            $('#panerror').text(" ");
        })  
      
       }
    
       else if (pan.length<10 || pan.length>10){
        $('#panerror').text("Enter valid PAN Number");
        $('#pan').focus();
        $('#pan').change(function(){
            $('#panerror').text(" ");
        })  
      
       }

       if(adhar.trim() == ""){
        $('#adharerror').text("Please Enter Adhar Number");
        $('#adhar').focus();
        $('#adhar').change(function(){
            $('#adharerror').text(" ");
        })  
      
       }
    
       else if (pan.length<12 || pan.length>12 ||(!adhar.match(adharreg)) ){
        $('#adharerror').text("Enter valid Adhar Number");
        $('#adhar').focus();
        $('#adhar').change(function(){
            $('#adharerror').text(" ");
        })  
      
       }
       cityreg = /^[a-zA-Z]+$/;    
        addrreg = /^[a-zA-Z0-9,-]+$/;  
        zipreg= /^[1-9]{1}[0-9]{5}$/;
     
        var caddress = $("#address").val();
        var ccountry = $("#country").val();
        var cstate = $("#state").val();
        var city1 = $("#city").val();
        var zip = $("#pincode").val();
        

        //Address validation
        if(caddress.trim() == ""){
            $('#a1error').text("please enter Your Address");
            $('#address').focus();
            $( "#address" ).change(function() {
                $('#a1error').text(" ");
            });           
        }
        else if (!caddress.match(cityreg)){             
            $('#a1error').text("special characters not allowed")
            $('#address').focus();
            $( "#address" ).change(function() {
                $('#a1error').text(" ");
            });                                
        }
        
        //country validation

        if(ccountry.trim() == 0){
            $('#c1error').text("please selecty your country");
            $('#country').focus();
            $( "#country" ).change(function() {
                $('#c1error').text(" ");
            });           
        }

        //state validation
        if(cstate.trim() == 0){
            $('#s1error').text("please selecty your State");
            $('#state').focus();
            $( "#state" ).change(function() {
                $('#s1error').text(" ");
            });           
        }

        //city validation

        if(city1.trim() == ""){
            $('#cterror').text("please enter Your City Name");
            $('#city').focus();
            $( "#city" ).change(function() {
                $('#cterror').text(" ");
            });           
        }
        else if (!city1.match(cityreg)){             
            $('#cterror').text("special characters not allowed")
            $('#city').focus();
            $( "#city" ).change(function() {
                $('#cterror').text(" ");
            });                                
        }
        //zip validation 
        if(zip.trim() == ""){
            $('#ziperror').text("Please Enter Pincode");
            $('#pincode').focus();
            $('#pincode').change(function(){
                $('#ziperror').text(" ");
            })  
          
           }
        
           else if (zip.length<6 || zip.length>6 ||(!zip.match(zipreg)) ){
            $('#ziperror').text("Enter valid Pincode");
            $('#pincode').focus();
            $('#pincode').change(function(){
                $('#ziperror').text(" ");
            })  
          
           }
           

        //captcha validation

        validateCaptcha()

        function validateCaptcha(){

            var expr = $('#exprsn').val();
            var result = $('#result').val()
            temp =Math.round(eval(expr))


            if (result == ""){
                $('#errormsg').text("Please Enter captcha result");
            }
            else{                   
                if (temp!= result){
                    
                    $('#errormsg').text("Wrong Captcha Result");
                }
            }

        }
/*

        $('#profile').change(function (input){

            // alert(input)
            // alert(input["type"])
             var file = $("input[type=file]").get(0).files[0];
 
         if(file){
         var reader = new FileReader();
 
        alert(reader.result)
        alert(reader)
 
         reader.onload = function(){
            alert(reader.result)
            alert(reader)
             $("#pimg").attr("src", reader.result);

             psrc="reader.result"
         }
 
        // alert($('#pimg').attr("src"))
 
         reader.readAsDataURL(file);
        // alert($('#pimg').attr("id"))
          }
 
         }
);
*/

        

        if( $('#c1error').text()== " " && $('#s1error').text()== " " && $('#cterror').text()== " " && 
          $('#a1error').text()== " " && $('#errormsg').text()== " "  && $('#ziperror').text()== " "){
              //return false;

              showdata()

              function showdata(){
                //var filePath=$('#profile').val(); 

                var Name = $("#name").val();            
                           
                var mail1 =$("#mail1").val();        
               
                var mobile = $("#tel").val();
                var pan = $("#pan").val();
                var adhar = $("#adhar").val();
                var caddress = $("#address").val();
                var ccountry = $("#country").val();
                var cstate = $("#state").val();
                var city1 = $("#city").val();
                var zip = $("#pincode").val();


               // $('#pimg').attr('src',"css/"+filePath);
                $('#sname').text(Name);
                $('#sname').css("text-transform","capitalize")
                $('#smob').text(mobile);

                if(!($('#tel2').val() == " ")){

                    var m2=$('#tel2').val();
                    $('#smob2').text(m2);
                    $('#mob2').css("display","block")

                }

                $('#smail').text(mail1);

                $('#span').text(pan);

                $('#sadhar').text(adhar);

                $('#scity').text(city1);
                $('#scountry').text(ccountry);

                $('#sstate').text(cstate);
                $('#szip').text(zip);
                $('#saddr').text(caddress);


                $('#emp-form').css("display","none");
                $('.show-data').css("display","block")
                $("#pimg").attr("src", psrc);
                

              }
          }
        /*else{
            return false;
        }*/
    })
