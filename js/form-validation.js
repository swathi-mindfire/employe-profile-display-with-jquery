$(document).ready(function(){
    const req                     =   $(".req");
    const countries               =   ["Australia","America","Canada","India","Romainia","Russia","Switzerland",]    
    const next                    =   $('#next');
    const contact                 =   $("#contact");
    const personal                =   $("#personal");
    const grp1                    =   $("#grp1");
    const grp2                    =   $("#grp2");
    const grp3                    =   $("#grp3");
    const optionalNum             =   $("#optional-num")
    const optionalAddress         =   $("#optional-address")
    const addMobile               =   $("#add-mob2")
    const addAddr2                =    $("#add-aadr2")   
    req.text("")
   //created IIEF  
    formValidation = (function(){
       const profile           =    $("#profile");
       const name              =    $("#name");
       const mail              =    $("#mail1");
       const tel               =    $("#tel");
       const pan               =    $("#pan");
       const adhar             =    $("#adhar");
       const result            =    $("#result");
       const exprsn            =    $("#exprsn");
       const fnerror           =    $('#fnerror');
       const profileerror      =    $('#profileerror');
       const mlerror           =    $('#mlerror');
       const m1error           =    $('#m1error');
       const panerror          =    $('#panerror');
       const adharerror        =    $('#adharerror');
       const namereg           =    /^[a-zA-Z ]+$/;
       const mailreg           =    /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,7})(.[a-z]{2,7})?$/;
       const mobilereg         =    /^[1-9]{1}[0-9]{9}$/;
       const adharreg          =    /^[1-9]{1}[0-9]{11}$/;
       const cityreg           =    /^[a-zA-Z]+$/;    
       const addrreg           =    /^[a-zA-Z0-9,-]+$/;  
       const zipreg            =    /^[1-9]{1}[0-9]{5}$/;
       const grp1              =    $("#grp1");
       const grp2              =    $("#grp2");
       const grp3              =    $("#grp3");
       const caddress          =    $("#address");
       const ccountry          =    $("#country");
       const cstate            =    $("#state");
       const city1             =    $("#city");
       const zip               =    $("#pincode");
       const a1error           =    $('#a1error');
       const cterror           =    $('#cterror');
       const s1error           =    $('#s1error');
       const c1error           =    $('#c1error');
       const ziperror          =    $('#ziperror');
       const captchaError       =   $("#captcha-error")
       var states              =    new Array();
       states[0]               =    "slelct state","sfgh";
       states[1]               =    "Australian Capital Territory,New South Wales,Northern Territory,Queensland,South Australia,Tasmania,Victoria,Western Australia";
       states[2]               =    "Alabama.Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,tah,Vermont,Virginia,Washington,WestVirginia,Wisconsin,Wyoming";
       states[3]               =    "Alberta,British Columbia,Manitoba,New Brunswick,Newfoundland,Northwest Territories,Nova Scotia,Nunavut,Ontario,Prince Edward Island,Quebec,Saskatchewan,Yukon Territory";
       states[4]               =    "Andhra Pradesh,Arunachal Pradesh,Assam,Bihar,Chhattisgarh,Goa,Gujarat,Haryana,Himachal Pradesh,Jammu and Kashmir,Jharkhand,Karnataka,Kerala,Madhya Pradesh,Maharashtra,Manipur,Meghalaya,Mizoram,Nagaland,Odisha,Punjab,Rajasthan,Sikkim,Tamil Nadu,Telangana,Tripura,Uttar Pradesh,Uttarakhand,West Bengal,Andaman and Nicobar,Chandigarh,Dadra and Nagar Haveli,Daman and Diu,Lakshadweep,Delhi,Puducherry"
       states[5]               =    "Alba,Arad,Arges,Bacau,Bihor,Bistrita-Nasaud,Botosani,Braila,Brasov,Bucuresti,Buzau,Calarasi,Caras-Severin,Cluj,Constanta,Covasna,Dimbovita,Dolj,Galati,Giurgiu,Gorj,Harghita,Hunedoara,Ialomita";
       states[6]               =    "Adygeya,Aginskiy Buryatskiy,Altay,Altayskiy,Amurskaya,Arkhangel'skaya,Astrakhanskaya,Bashkortostan,Belgorodskaya,Bryanskaya,Buryatiya,Chechnya,Chelyabinskaya,Chitinskaya,Chukotskiy";
       states[7]               =    "Aargau,Ausser-Rhoden,Basel-Landschaft,Basel-Stadt,Bern,Fribourg,Geneve,Glarus,Graubunden,Inner-Rhoden,Jura,Luzern,Neuchatel"
       var fnflag,mlflag,m1flag,panflag,adharflag,profileflag,addressflag,countryflag,stateflag,cityflag,captchaflag,zipflag;
       //Handling blur event
       function noInputHandle(ipId){
           ip = $("#" + ipId)
           if(ip.val().trim()==""){
               ip.next().text("please provide input")
            }
            else{
                ip.next().text("");
            }           
        }
        //Name field validation
            function validateName(){
                fnflag=true;
                if(name.val().trim() == ""){
                    $('#fnerror').text("please enter name");
                    fnflag=false;
                    name.focus();
                    name.change(function() {
                        $('#fnerror').text(" ");
                    });           
                }
                else{
                    if (!(name.val()).match(namereg)){
                       $('#fnerror').text("Special characters not allowed"); 
                       fnflag=false;                      
                        name.focus();
                        name.change(function() {
                            $('#fnerror').text(" ");
                        });
                    }
                    else if ((name.val()).length<3){             
                        $('#fnerror').text("Name is minimum 3 charcters")
                        fnflag=false;                       
                        name.focus();
                        name.change(function() {
                            $('#fnerror').text(" ");
                        });                                
                    }
                }
            }
            //profile validation

            function validateProfile(){
                profileflag=true;
                if(profile.val() == ""){
                    profileerror.text("please upload profile");
                    profileflag=false;
                    profile.focus();
                    profile.change(function() {
                        profileerror.text(" ");
                    });           
                }
               
            }
            function getImgUrl(){              
                 var file = $("input[type=file]").get(0).files[0];
                  if(file){
                       var reader = new FileReader();
                       reader.onload = function(){
                       $("#pimg").attr("src", reader.result);
                    }
                    reader.readAsDataURL(file);
                }
            
             }
              //Mail Check
             function  validateMail(){ 
                mlflag = true;             
                    if(mail.val().trim() == ""){
                        mlerror.text("please enter mail id");
                        mlflag = false;
                        mail.focus();
                        mail.change(function() {
                            mlerror.text(" ");
                        });           
                    }
                
                    else if (!(mail.val()).match(mailreg)){             
                        mlerror.text("Inavlid mail id,valid format is like sample@gmail.com ")
                        mlflag = false;
                        mail.focus();
                        mail.change(function() {
                            mlerror.text(" ");
                        });                                
                    }
                }
            //Mobile Number Check
            function validateMobile(){
                m1flag = true;
                if(tel.val().trim() == ""){
                    m1error.text("Please Enter Your Mobile Number");
                    m1flag = false;
                    tel.focus();
                    tel.change(function(){
                        m1error.text(" ");
                    })  
                  
                   }
                
                   else if (!(tel.val()).match(mobilereg)){
                    m1error.text("Enter valid Mobile Number");
                    m1flag = false;
                    tel.focus();
                    tel.change(function(){
                        m1error.text(" ");
                    })  
                  
                   }
                
            }
            //Pan Number Check
            function validatePan(){
                panflag = true;
                if(pan.val().trim() == ""){
                    panerror.text("Please Enter PAN Number");
                    panflag = false;
                    pan.focus();
                    pan.change(function(){
                        panerror.text(" ");
                    })  
                  
                   }
                
                   else if (pan.val().length<10 || pan.val().length>10){
                    panerror.text("Enter valid PAN Number");
                    panflag = false;
                    pan.focus();
                    pan.change(function(){
                        panerror.text(" ");
                    })  
                  
                   }
            }
            //Adhar Validation
            function validateAdhar(){
                adharflag = true;
                if(adhar.val().trim() == ""){
                    adharerror.text("Please Enter Adhar Number");
                    adharflag = false;
                    adhar.focus();
                    adhar.change(function(){
                        adharerror.text(" ");
                    })  
                  
                }
                
                   else if (adhar.val().length<12 || adhar.val().length>12 ||(!adhar.val().match(adharreg)) ){
                    adharerror.text("Enter valid Adhar Number");
                    adharflag = false;
                    adhar.focus();
                    adhar.change(function(){
                        adharerror.text(" ");
                    })  
                  
                }
            }
            //Logic to show group2
            function showGroup2(){
                if(fnflag && panflag && adharflag && mlflag && m1flag && profileflag){
                    grp1.fadeOut(4000, function(){
                        grp2.show()
                        $('#personal').removeClass("btn-primary").addClass("btn-secondary");    
                        $('#contact').removeClass("btn-secondary").addClass("btn-primary");
                    });


                }

            }
            function generateCaptcha(){
                var expr= $('#exprsn');
                var num1= Math.round((100-10)*Math.random() +10 );           
                var num2= Math.round((100-10)*Math.random() + 10);            
                var operations = ['*','/','+','-']            
                var x= (Math.round(10*Math.random()))%4;           
                var op =operations[x];                
                var compute = num1 + op  + num2           
                expr.val(compute)
            }
            
            //Address validation
            function validateAddress(){ 
                addressflag = true;              
                if(caddress.val().trim() == ""){
                    a1error.text("please enter Your Address");
                    addressflag  = false;
                    caddress.focus();
                    caddress.change(function() {
                        a1error.text(" ");
                    });           
                }
                else if (!(caddress.val()).match(cityreg)){             
                    a1error.text("special characters not allowed");
                    addressflag  = false;
                    caddress.focus();
                    caddress.change(function() {
                        a1error.text(" ");
                    });                                
                }

            }
            //Country Validation

            function validateCountry(){
                countryflag  = true;
                if(ccountry.val().trim() == 0){
                    c1error.text("please selecty your country");
                    countryflag  = false;
                    ccountry.focus();
                    ccountry.change(function() {
                        c1error.text(" ");
                    });           
                }

            }
            function statesGeneration(){
                //alert("hello")
                var indx = document.getElementById("country").selectedIndex; 
                //alert(indx)                   
                var st = document.getElementById("state");
                var s_arr = states[indx].split(",");
                st.options[0] = new Option('Select State', '0');
                var s_arr = states[indx].split(",");       
                for(var i=0;i<s_arr.length;i++){
                    st.options[i+1] = new Option(s_arr[i],s_arr[i]);
                }                      
            }
            //state validation
            function validateState(){
                stateflag  = true;                
                if(cstate.val().trim() == 0){
                    s1error.text("please selecty your State");
                    stateflag  = false;
                    cstate.focus();
                    cstate.change(function() {
                        s1error.text(" ");
                    });           
                }

            }
            //city Validation 

            function validateCity(){
                cityflag = true;
                             
                if(city1.val().trim() == ""){
                    cterror.text("please enter Your City Name");
                    cityflag = false;
                    city1.focus();
                    city1.change(function() {
                        cterror.text(" ");
                    });           
                }
                else if (!(city1.val()).match(cityreg)){             
                    cterror.text("special characters not allowed");
                    cityflag = false;
                    city1.focus();
                    city1.change(function() {
                        cterror.text(" ");
                    });                                
                }

            }
            //Zip Validation
            function validateZip(){
                zipflag = true;
                if(zip.val().trim() == ""){
                    ziperror.text("Please Enter Pincode");
                    zipflag = false;
                    zip.focus();
                    zip.change(function(){
                        ziperror.text(" ");
                    })  
                  
                   }
                
                   else if (zip.val().length<6 || zip.val().length>6 ||(!zip.val().match(zipreg)) ){
                    ziperror.text("Enter valid Pincode");
                    zipflag = false;
                    zip.focus();
                    zip.change(function(){
                        ziperror.text(" ");
                    })  
                  
                   }                   
            }
            function captchaValidation(){
                captchaflag  = true;
                var expr   = exprsn.val();
               
                
                var result = $("#result").val();

                temp =Math.round(eval(expr))
                
    
    
                if (result == ""){
                    captchaError .text("Please Enter captcha result");
                    captchaflag = false;
                }
                else{                   
                    if (temp!= result){
                        
                        captchaError.text("Wrong Captcha Result");
                        captchaflag = false;
                    }
                }

            }
            function employeeDataDisplay(){
                $('#sname').text(name.val());
                $('#sname').css("text-transform","capitalize");
                $('#smob').text(tel.val());
                const extraNumber  =  $("#extra-number");
                const tel2   =  $('#tel2');
                if(!(tel2.val() == "")){
                    var m2=tel2 .val();
                    $('#smob2').text(m2);
                    extraNumber.css("display","block")

                }
                else{
                    extraNumber.css("display","none")

                }

                $('#smail').text(mail.val());

                $('#span').text(pan.val());

                $('#sadhar').text(adhar.val());

                $('#scity').text(city1.val());
                $('#scountry').text(ccountry.val());

                $('#sstate').text(cstate.val());
                $('#szip').text(zip.val());
                $('#saddr').text(caddress.val());
                const extraAddress =  $("#extra-address");
                const address2     =  $('#address2')

                if(!(address2.val() == "")){
                    var m2 = address2 .val();
                    $('#saddr2').text(m2);
                    extraAddress.css("display","block")

                }
                else{
                    extraAddress.css("display","none")

                }
                $("#head2").css("display","block");


                $('#grp2').css("display","none");
                $("#nav").css("display","none");
                $("#head").css("display","none");
                $('#grp3').css("display","block");
            
            }
            function nameValidation(){
                validateName();
            }

            function profileValidation(){
                validateProfile();
            }
            function readProfilePath(){
                getImgUrl();
            }
            function mailValidation(){
                validateMail();
            }
            function mobileValidation(){
                validateMobile();
            }
            function panValidation(){
                validatePan()
            }
            function adharValidation(){
                validateAdhar()
            }

            function grp2Show(){
                showGroup2();
               
            }

            function addressValidation(){
                validateAddress()
            }
            function countryValidation(){
                validateCountry()
            }
            function stateValidation(){
                validateState()
            }

            function generateStates(){
                statesGeneration()
            }
            function cityValidation(){
                validateCity()
            }

            function zipValidation(){
                validateZip()
            }
            function validateCaptcha(){
                captchaValidation()
            }
            function showEmployeeDetails(){
                if(addressflag && countryflag && cityflag && stateflag &&zipflag &&captchaflag){
                    employeeDataDisplay()
                }
                
            }



        return{
            nameValidation       :  nameValidation,
            noInputHandle        :  noInputHandle,
            profileValidation    :  profileValidation,
            readProfilePath      :  readProfilePath,
            mailValidation       :  mailValidation,
            mobileValidation     :  mobileValidation,
            panValidation        :  panValidation,
            adharValidation      :  adharValidation,
            grp2Show             :  grp2Show,
            addressValidation    :  addressValidation,
            countryValidation    :  countryValidation,
            stateValidation      :  stateValidation,
            generateStates       :  generateStates,
            cityValidation       :  cityValidation,
            zipValidation        :  zipValidation,
            validateCaptcha      :  validateCaptcha,
            showEmployeeDetails  :  showEmployeeDetails,
            generateCaptcha      :  generateCaptcha,

        }; 

    })();

//Genrating countries 
function countriesGeneration(){
var country1 = document.getElementById("country");

country1.options[0] = new Option('select Country', '0');

country1.selectedIndex = 0;

for(var i=0; i< countries.length; i++){
    country1.options[i+1] = new Option(countries[i],countries[i]);
    
}

}
countriesGeneration()
    
fv = formValidation

$("input").blur(function(){
    id = $(this).attr("id");
   
    fv.noInputHandle(id);
    
})

$("#country").change(function(){
    fv.generateStates()

})
function grp1FieldsCheck(){
    fv.profileValidation()   
    fv.nameValidation();
    fv.mailValidation();
    fv.mobileValidation();
    fv.mobileValidation();
    fv.panValidation();
    fv.adharValidation();
    fv.grp2Show();
    fv.generateCaptcha();
    
}
next.click(function(){
    
    grp1FieldsCheck()
    
}) 
fv.grp2Show()

$('#sub').click(function(){
    fv.addressValidation();
    fv.countryValidation();
    fv.stateValidation();
    fv.cityValidation();
    fv.zipValidation();
    fv.validateCaptcha();
    fv.showEmployeeDetails();
})
/*$("input").change(function(){
    id=$(this).attr("id");
    funname = id+"Validation";
    
    fv.window[funname]();

})*/
$("#profile").change(function(){
    fv.readProfilePath();
})

$("#name").change(function(){
    fv.nameValidation();
})
$("#mail1").change(function(){
    fv.mailValidation()
})
$("#tel").change(function(){
    fv.mobileValidation()
})
$("#pan").change(function(){
    fv.panValidation()
})
$("#adhar").change(function(){
    fv.adharValidation()
})
$("#result").change(function(){
    fv.validateCaptcha()
})
$("#refresh").click(function(){
    fv. generateCaptcha();

})
$('#enum').click(function(){
    optionalNum.css("display","block");
    addMobile.css("display","none")
})
$('#remove-num').click(function(){
    optionalNum.css("display","none");
    addMobile.css("display","block")
    $("#tel2").val(" ")
})
$('#eaddr').click(function(){
    optionalAddress.css("display","block");
    addAddr2.css("display","none")
})
$('#remove-address').click(function(){
    optionalAddress.css("display","none");
    addAddr2.css("display","block")
    $("#addr2").val(" ")
})
contact.click(function(){
    grp1FieldsCheck();

})
personal.click(function(){
    grp2.fadeOut(3000);
    grp1.delay(2000).fadeIn();
    contact.removeClass("btn-primary").addClass("btn-secondary");    
    personal.removeClass("btn-secondary").addClass("btn-primary");    
})


   
})