$(function(){

  $( document ).ready(function(){
    //code to call the github api and get the files from the "projects" folder

    path = "projects";
    
    projects_count = 0;
    projects_content = new Array();

    // FIND ALL THE FILES INSIDE THE FOLDER
    $.ajax({
      url: "https://api.github.com/repos/openinnovationnetwork/Projects/contents/"+path,
      method: "get"
    })
    .success(function(allFiles){
      $.each(allFiles, function (index, value) {
        // GET CONTENT OF EACH JSON FILE
        if ((value.type == "file") && (value.name.split('.').pop() == "json")) {

          projects_count++;
          
          $.ajax({
            url: "https://api.github.com/repos/openinnovationnetwork/Projects/contents/"+value.path,
            method: "get"
          })
          .success(function( fileResponse ) {
            // PARSE CONTENT
            base64decoded = atob(fileResponse.content);
            
            try {
              json_content = jQuery.parseJSON(base64decoded);

              // Add to list of contents
              if (json_content.project_name && json_content.project_blurb) {
                projects_content.push(json_content);
              }
            } catch (e) {
              // invalid json
            }
          });
        }
      });
    });

    // THE CONTENT OF ALL FILES WAS RETRIEVED
    $(document).ajaxStop(function() {
      console.log('All '+ projects_count +' projects retrieved');

      // Remove preloader image
      $('#projects-list').empty();
      
      // SHOW CONTENT AS CARDS
      $.each(projects_content, function (index, json_content) {
        
        template = new Array();
        if (index % 3 == 0) {
          $('#projects-list').append('<div class="row">');
        }

    		if ((json_content.project_team_name != undefined) && (json_content.project_team_name != "")) {
              json_content.project_team_name = '<br /><p><strong>Team:</strong> '+json_content.project_team_name+'</p>';
            }
    		else {
    			json_content.project_team_name = "";
    		}
    		
    		if ((json_content.project_people != undefined) && (json_content.project_people != "")) {
              json_content.project_people = '<br /><p><strong>People:</strong> '+json_content.project_people+'</p>';
            }
    		else {
    			json_content.project_people = "";
    		}
    		
    		if ((json_content.project_demo_url) && (json_content.project_demo_url != undefined)) {
              json_content.project_demo_url = '<br /><p><strong>Demo:</strong> <a href="'+json_content.project_demo_url+'">'+json_content.project_demo_url+'</a></p>';
            }
    		else {
    			json_content.project_demo_url = "";
    		}
    		
    		if ((json_content.project_thumbnail != undefined) && (json_content.project_thumbnail != "")) {
              json_content.project_thumbnail = '<img src="'+json_content.project_thumbnail+'" class="responsive-img thumbnail" alt="" />';
            }
    		else {
    			json_content.project_thumbnail = "";
    		}

        $('#projects-list').append(
            '<div class="col s12 m4 l4"> '+
              '<div class="card blue-grey darken-1"> ' +
                '<div class="card-content white-text"> ' +
					         json_content.project_thumbnail+
                  '<h4>'+json_content.project_name+'</h4> '+
                  '<p>'+json_content.project_blurb+'</p>'+
        				  '<br /><div class="left-align">' +
        					  json_content.project_team_name +
        					  json_content.project_people +
        					  '<p><strong>Project:</strong> <a href="'+json_content.project_url+'">'+json_content.project_url+'</a></p>'+
        					  json_content.project_demo_url +
        				  '</div> '+
                '</div> '+
              '</div> '+
            '</div>'
        );

        if (index % 3 == 2) {
          $('#projects-list').append('<div class="row">');
        }

      });
    });

  });
});
