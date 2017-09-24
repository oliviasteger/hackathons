<html>

  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cloudboost.io/js-sdk/cloudboost.js"></script>
    <script src="protest.js"></script>
    <script src="map.js"></script>
    <script src="issue.js"></script>
    <script src="ProtestIssue.js"></script>
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.css' rel='stylesheet' />
    <link rel = "stylesheet" type = "text/css" href = "styles.css"/>
    <link rel="shortcut icon" type="image/png" href="https://punchthrough.com/images/press/brand/fist-thumbnail.png"/>
  </head>

  <body>
    <div id="header"><button id="homeButton"><b>Home</b></button><button id="manageOrg">Manage an organization!</button><button id="newProtest">Create a new protest!</button><button id="newOrg"><b>Create a new organization!</b></button><button id="newAccount"><b>Create a new user account!</b></button><button id="logOutButton"><b>Log Out</b></button></div><br>

    <h2 id="info"></h2>
    <center>
      <div id="map"></div>
      <ul id="issues"></ul>
    </center>
    <script>
        CB.CloudApp.init('fqsljkxpzrnk', '6df70624-7b47-488b-8d35-559631eb9687');
                displayTags();
                let issues=[];
        function displayTags(){
          let tagQuery= new CB.CloudQuery("Issue");
          tagQuery.find({
            success: (list)=>{
              for(index in list){
      console.log("hi");
                let issueObj = new Issue(list[index].document.name,list[index].document.description,list[index]);
                issues.push(issueObj);
                $("#issues").append(` <li><div id="issue${index}"><h2>${list[index].document.name}</h2></div></li>`);
                if(index == list.length-1){
                  getInfo();
                }
              }
            },
            error: (err)=>{
              console.log(err);
            }
          })
        }

      function getInfo(){
        let protestQuery = new CB.CloudQuery("Protest");
        protestQuery.find({
          success: (list)=>{
            for(index in list){
              displayIssueProtest(index);
              addPoint(list[index].document.location,list[index].document.name);
            }
          },
          error: (err)=>{
            console.log(err);
          }
        })
      }
      $("#logout").click(function(){
        window.location.href = "index.html";
      });
      $("#homeButton").click(function(){
        window.location.href = "index.html";
      })
      $("#newAccount").click(function(){
        window.location.href = "createaccount.html";
      })

      $("#manageOrg").click(function(){
        window.location.href = "manageorganization.html";
      })
      $("#newOrg").click(function(){
        window.location.href = "registerorganization.html";
      })
      $("#newProtest").click(function(){
        window.location.href = "protest.html";
      })
      function displayIssueProtest(index){
        let issueProtestQuery = new CB.CloudQuery("ProtestIssue");
        issueProtestQuery.equalTo("issue_id",issues[index]._cloudObj);
        issueProtestQuery.find({
          success:(list)=>{
            console.log(list)
            for(item of list){
              console.log(item.document.protest_id.document._id);
              displayProtest(item.document.protest_id.document._id,index);
            }
          },
          error: (err)=>{
            console.log(err);
          }
        })

      }
      function displayProtest(protest_id,index){
        let protestQuery = new CB.CloudQuery("Protest");
        protestQuery.equalTo("_id",protest_id);
        protestQuery.find({
          success: (response)=>{
            console.log(response);
            if(response.length>0){
            console.log(response[0]);
            $(`#issue${index}`).append(` <li><div>
            <a href="${response[0].document.websiteUrl}">${response[0].document.name}</a>
<p>${response[0].document.description}</p>
</div>  </li> `);}
          },
          error: (err)=>{
            log(err);
          }
        })
      }

    </script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHuoXtvqg_fyRHq_CqBi8R-bx9CH9D5A4" async defer></script>
  </body>

</html>
