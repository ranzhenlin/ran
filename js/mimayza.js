/**
 * Created by Administrator on 2020/12/29.
 */
$(function(){
    /*����class  form-control is-invalid
     ��ȷclass  form-control is-valid*/
    var flagName=false;
    var flagPas=false;
    var flagPass=false;
    /*��֤�û���*/
    var name,passWord,passWords;
    $("#register-username").change(function(){
        name=$("#register-username").val();
        if(name.length<2||name.length>10){
            $("#register-username").removeClass("form-control is-valid")
            $("#register-username").addClass("form-control is-invalid");
            flagName=false;
        }else{
            $("#register-username").removeClass("form-control is-invalid")
            $("#register-username").addClass("form-control is-valid");
            flagName=true;
        }
    })
    /*��֤����*/
    $("#register-password").change(function(){
        passWord=$("#register-password").val();
        if(passWord.length<6||passWord.length>18){
            $("#register-password").removeClass("form-control is-valid")
            $("#register-password").addClass("form-control is-invalid");
            flagPas=false;
        }else{
            $("#register-password").removeClass("form-control is-invalid")
            $("#register-password").addClass("form-control is-valid");
            flagPas=true;
        }
    })
    /*��֤ȷ������*/
    $("#register-passwords").change(function(){
        passWords=$("#register-passwords").val();
        if((passWord!=passWords)||(passWords.length<6||passWords.length>18)){
            $("#register-passwords").removeClass("form-control is-valid")
            $("#register-passwords").addClass("form-control is-invalid");
            flagPass=false;
        }else{
            $("#register-passwords").removeClass("form-control is-invalid")
            $("#register-passwords").addClass("form-control is-valid");
            flagPass=true;
        }
    })


    $("#regbtn").click(function(){
        if(flagName&&flagPas&&flagPass){
            localStorage.setItem("name",name);
            localStorage.setItem("passWord",passWord);
            location="login.html"
        }else{
            if(!flagName){
                $("#register-username").addClass("form-control is-invalid");
            }
            if(!flagPas){
                $("#register-password").addClass("form-control is-invalid");
            }
            if(!flagPass){
                $("#register-passwords").addClass("form-control is-invalid");
            }
        }
    })
})