//Nav Bar Stuff
$(document).ready(function() {
  var button = document.getElementById('admin_menu');
  if(window.location.href.indexOf('admin') > -1){
    button.style.visibility = "visible";
  }
    else {
      button.style.visibility = "hidden";
    }
  if(window.location.href.indexOf('admin') > -1){
    if(window.location.href.indexOf('bio')> -1){
      admin_bio();
    }
    else if(window.location.href.indexOf('contact') > -1){
      admin_contact();
    }
    else if(window.location.href.indexOf('press') > -1){
      admin_press();
    }
    else if(window.location.href.indexOf('pub') > -1){
      admin_pub();
    }
    else if(window.location.href.indexOf('news') > -1){
      admin_news();
    }
    else if(window.location.href.indexOf('research') > -1){
      admin_research();
    }
    else if(window.location.href.indexOf('teaching') > -1){
      admin_teaching();
    }
    else if(window.location.href.indexOf('group') > -1){
      admin_group();
    }
  }
});
function admin_toggle(){
var button = document.getElementById('admin_menu');
if (button.style.visibility === "hidden") {
  button.style.visibility = "visible";
} else {
  button.style.visibility = "hidden";
}
};

//BIO Form
function admin_bio(){
  $("#bio_admin").validate({
  rules: {
    bio: {
      required: true,
      minlength: 20
    },
    profileimg: {
      required: false
    }
  },
  errorplacement: function (error,element) {
    error.insertAfter(element)
  },
  messages: {
    bio: {
      minlength: "Please enter at least 20 characters."
    }
  }
});
  };

//Press form
function admin_press(){

  $("#press_admin").validate({
    rules: {
      title: {
        required:true,
        minlength: 5
      },
      url: {
        required:true,
        url: true
      },
      preview: {
        required:true,
        minlength: 20
      },
      file: {
        required:false
      }
    },
    errorplacement: function (error,element) {
      error.insertAfter(element)
    },
    messages: {
      title: {
        required: "Enter in Title For Press Release. "
      },
      url: {
        required: "Enter in URL for Press Release.",
        url: "URL Not Valid, Must begin with http/https"
      },
      preview: {
        required: "Enter in a Preview of the Press Release.",
        minlength: "Preview must be atleast 20 characters."
      }
    }
  });
};

//group form
function admin_group(){
  $("#group_admin").validate({
    rules: {
      studentname: {
        required:true,
        minlength: 5,
        pattern:/^[A-Za-z\-\']+$/
      },
      degree: {
        required:true,
        minlength: 3
      },
      student: {
        required:true
      },
      deladd: {
        required:true
      }
    },
    errorplacement: function (error,element) {
      error.insertAfter(element)
    },
    messages: {
      studentname: {
        required: "Enter in Student Name. ",
        minlength: "Must be atleast 5 characters long.",
        pattern: "Name can only have Letters ' and -'"
      },
      degree: {
        required: "Enter in Current Degree Status.",
        minlength: "Must be atleast 3 characters long."
      },
      student: {
        required: "Enter in Enrollment Status."
      },
      deladd: {
        required: "Do you want to Add or Remove."
      }
    }
  });
};

// publication form
function admin_pub(){
  $("#pub_admin").validate({
    rules: {
      title: {
        required:true,
        minlength: 5
      },
      url: {
        required:true,
        url: true
      },
      year: {
        required:true,
        minlength: 4,
        maxlength: 4,
        pattern: /^[1,2]\d{3}$/
      },
      types: {
        required:true
      }
    },
    errorplacement: function (error,element) {
      error.insertAfter(element)
    },
    messages: {
      title: {
        required: "Enter in Title For Publication. "
      },
      url: {
        required: "Enter in URL for Publication.",
        url: "URL Not Valid, Must begin with http/https"
      },
      year: {
        required: "Enter in Year.",
        minlength: "Year must be 4 digits starting with 1 or 2",
        pattern: "Enter in Valid Year (1/2)###"
      }
    }
  });
};

//teaching form
function admin_teaching(){
  $("input[name='coursecode']").keyup(function(){
    $(this).val($(this).val().replace(/^([A-Za-z]{4})(\d{4})([A-Za-z])$/, "$1 $2$3").toUpperCase())
  });
  $("#teaching_admin").validate({
    rules: {
      coursename: {
        required:true,
        minlength: 5
      },
      coursecode: {
        required:true,
        minlength: 9,
        pattern:/^[A-Za-z]{4}[ ]?\d{4}[A-Za-z]$/
      },
      year: {
        required:true,
        minlength: 4,
        maxlength: 4,
        pattern: /^[1,2]\d{3}$/
      },
      semester: {
        required:true
      }
    },
    errorplacement: function (error,element) {
      error.insertAfter(element)
    },
    messages: {
      coursename: {
        required: "Enter in Course Name. ",
        minlength: "Course name must be atleast 9 characters"
      },
      coursecode: {
        required: "Enter in Course Code.",
        pattern: "Enter in Valid Code AAAA####A"
      },
      year: {
        required: "Enter in Year.",
        minlength: "Year must be 4 digits starting with 1 or 2",
        pattern: "Enter in Valid Year (1/2)###"
      },
      semester: {
        required: "Select a Semester."
      }
    }
  });
};

// research form
function admin_research(){
  $("#research_admin").validate({
    rules: {
      title: {
        required:true,
        minlength: 5
      },
      preview: {
        required:true,
        minlength: 20
      },
      file: {
        required:false
      }
    },
    errorplacement: function (error,element) {
      error.insertAfter(element)
    },
    messages: {
      title: {
        required: "Enter in Title For Research Entry. "
      },
      preview: {
        required: "Enter in a Preview of the Press Release.",
        minlength: "Preview must be atleast 20 characters."
      }
    }
  });
};

// contact form
function admin_contact(){
  $("input[name='tel']").keyup(function(){
    $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d+)$/, "($1)$2-$3"))
  });
  $("input[name='postalcode']").keyup(function(){
    $(this).val($(this).val().replace(/^([A-Za-z]\d[A-Za-z])(\d[A-Za-z]\d)$/, "$1 $2").toUpperCase())
  });
  $("#contact_admin").validate({
    rules: {
      email: {
        required:true,
        pattern:/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      },
      tel: {
        required:true,
        phoneUS: true
      },
      address: {
        required: true,
        pattern:/^\d+.+$/,
        minlength: 5
      },
      city: {
        required: true,
        minlength: 3,
        pattern: /^[A-Za-z]+$/
      },
      state: {
        required: true,
        minlength: 2,
        pattern: /^[A-Za-z]+$/
      },
      country: {
        required: true,
        minlength: 2,
        pattern: /^[A-Za-z]+$/
      },
      postalcode: {
        required: true,
        pattern:/^\d{3,6}$|^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
      }
    },
    errorplacement: function (error,element) {
      error.insertAfter(element)
    },
    messages: {
      email: {
        required: "Please enter Email.",
        pattern: "Please enter a valid Email."
      },
      tel: {
        required: "Please enter Phone Number."
      },
      address: {
        required: "Please enter Address.",
        pattern: "Address must start with Street Number. ie 1 Fake street."
      },
      city: {
        required: "Please enter City.",
        pattern: "Can only contain Letters"
      },
      state: {
        required: "Please enter Prov/State.",
        pattern: "Can only contain Letters"
      },
      country: {
        required: "Please enter country.",
        pattern: "Can only contain Letters"
      },
      postalcode: {
        required: "Please enter postalcode.",
        pattern: "Must be a Valid Postal Code A1A 1A1  or Zip 12345 "
      }
    }
  });
};

//news form
function admin_news(){
  $("#news_admin").validate({
    rules: {
      title: {
        required:true,
        minlength: 5
      },
      url: {
        required:false,
        url: true
      },
      year: {
        required:true,
        minlength: 4,
        maxlength: 4,
        pattern: /^[1,2]\d{3}$/
      },
      preview: {
        required:true,
        minlength:20
      }
    },
    errorplacement: function (error,element) {
      error.insertAfter(element)
    },
    messages: {
      title: {
        required: "Enter in Title For News Posting. "
      },
      url: {
        url: "URL Not Valid, Must begin with http/https"
      },
      year: {
        required: "Enter in Year.",
        minlength: "Year must be 4 digits starting with 1 or 2",
        pattern: "Enter in Valid Year (1/2)###"
      },
      preview: {
        required: "Preview must be entered for News.",
        pattern: "Must be min 20 characters"

      }
    }
  });
};
