$(function() {

   $.ajax({
    url: 'https://www.codeschool.com/users/2802883.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var completed = response.courses.completed;
      $.each(completed, function(key, obj)
      {
      	var course = $('<div></div>');
      	course.addClass("course");
      	var title = $('<h3>' + obj.title + '</h3>');
      	var image = $("<img src='" + obj.badge + "'/>");
      	var button = $("<a href='" + obj.url + "'>See Course</a>")
      	button.addClass("btn").addClass("btn-primary");
      	button.attr( "target", "_blank" );
      	course.append(title, image, button);
       	$("#badges").append(course);
      });
    }
  });

});
