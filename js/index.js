/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var grocery_gere0018 = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
//        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("DOMContentLoaded", this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    onDeviceReady: function() {
    grocery_gere0018.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
             var myList= [];
             var btn= document.querySelector("#btnAdd");
          if(localStorage.getItem("grocery-gere0018")){
            myList = JSON.parse(localStorage.getItem("grocery-gere0018"));
              console.log("exists");

          }else{
              console.log("empty");
          }
            showList();

            btn.addEventListener("click", function(ev){
                var newItem= $("#item").val();
                ev.preventDefault();
                myList.push( newItem );
                localStorage.setItem("grocery-gere0018",
                                     JSON.stringify(myList) );
                showList();
                addToList();
                $("#item").val('');
                return false;

            });


            function removeItem(ev){
              var txt = this.firstChild.nodeValue;
              for(var i=0;i<myList.length;i++){
                if(myList[i] == txt){
                  myList.splice(i, 1);
                }
                }
          localStorage.setItem("grocery-gere0018", JSON.stringify(myList) );
          showList();
        }

        function showList(){
          var $list =$("#listView");
          $list.html("");
          for(var i=0;i<myList.length;i++){
          var $li=$("<li>"+ myList[i] + "</li>");
          $list.append($li);
        //    $list.listview('refresh');
          $li.attr("class","ui-li-static ui-body-inherit ui-last-child");
          $li.click(removeItem);

          }
        }

    }
};

grocery_gere0018.initialize();
