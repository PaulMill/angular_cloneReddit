(function() {
  'use strict';
  angular.module('app', [])
    .component('reddit', {
      controller: function() {
        const vm = this
        vm.$onInit = function() {
          vm.posts = [
            {
            title: "Trump trying to close his pen",
            body: "Nothing better than a good Photoshop battle, especially when it's a picture of a reality-TV gameshow host who is now our president. There's a great one happening over on Reddit featuring Trump trying to put his pen back in its cap. For some reason, his intense concentration toward putting that pen back in its cap makes for the perfect photoshop subject. Enjoy! ",
            author: "FAIL Blog",
            imageUrl: "http://i.imgur.com/k3MU7aW.png",
            created: new Date,
            votes: 0,
            comments: []
          }, {
            title: "Why Reading Books Will Save Your Life",
            body: "Books offer an outstanding wealth of learning and at a much cheaper price than taking a course. Reading gives you a chance to consume huge amount of research in a relatively short amount of time. Anne E. Cunningham and Keith E. Stanovich’s “What Reading Does for the Mind” also noted that heavy readers tend to display greater knowledge of how things work and who or what people were. Books at home have been strongly linked to academic achievement. If you are looking for a list of great books to read, check out 10 Easy To Read Books That Make You Smarter.",
            author: "whytoread.com",
            imageUrl: "https://static.pexels.com/photos/159737/books-learn-bible-notes-159737.jpeg",
            created: new Date,
            votes: 0,
            comments: []
          }, {
            title: "Samsung Expands Recall to All Galaxy Note7 Devices",
            body: "Samsung has announced an expanded voluntary recall on all original and replacement Galaxy Note7 devices sold or exchanged in the United States in cooperation with the U.S. Consumer Product Safety Commission and in partnership with carriers and retailers. Since the affected devices can overheat and pose a safety risk, we are asking consumers with a Galaxy Note7 to power it down and contact the carrier or retail outlet where they purchased their device. Consumers who have a Galaxy Note7 device can exchange their phone for another Samsung smartphone, or receive a refund, under the terms of the expanded U.S. Note7 Refund and Exchange Program. If you bought your Galaxy Note7 from Samsung.com you should click here to process your refund or exchange. If you have questions, you should contact us at 1-844-365-6197 and we can help you.",
            author: "Galaxy Note7 Safety Recall",
            imageUrl: "https://static.pexels.com/photos/241345/pexels-photo-241345.jpeg",
            created: new Date,
            votes: 0,
            comments: []
          }, {
            title: "Canon AE-1 Camera",
            body: "Canon AE-1, the world’s first camera with an embedded microcomputer, accelerated the incorporation of automatic and electronic technologies with the 35mm SLR camera. The flagship camera “F-1″ was reborn as the microcomputer-controlled “New F-1.” The Autoboy series, the world’s first lens-shutter 35mm autofocus (AF) cameras were also marketed, symbolizing the shift of lens-shutter camera into that with AF function. The sign of the new era in the camera world was visible already by the developmental activities in movie video cameras and still video (SV) cameras.",
            author: "Paul Miller",
            imageUrl: "https://static.pexels.com/photos/6103/woman-hand-legs-camera.jpg",
            created: new Date,
            votes: 0,
            comments: []
          }, {
            title: "Apple iPhone 7 review",
            body: " But there are still compelling reasons to consider an iPhone 7, even if you own one of those recent iPhone model provided you have an affordable way to upgrade. The iPhone 7 is now fully water-resistant (it can take a shallow dunking). The camera takes notably better photos, especially in low light, and adds the optical image stabilization feature previously restricted to the 5.5-inch Plus model. The battery lasts a little bit longer",
            author: "Paul Miller",
            imageUrl: "https://static.pexels.com/photos/270541/pexels-photo-270541.jpeg",
            created: new Date,
            votes: 0,
            comments: [{
                com: 'Hi my all friends'
              }, {
                com: 'THe second comments'
              }, {
                com: 'Third comment'
              }]
          }
          ];
        }
        vm.createPost = function() {
          console.log('Is person valid:', vm.newPostForm.$valid, vm.post);
          if (vm.newPostForm.$valid) {
            vm.post.created = new Date;
            vm.post.votes = 0;
            vm.post.comments = [];
            vm.posts.push(vm.post);
            vm.newPostForm.$setPristine();
            vm.post = null;
          }
        }
        vm.toggleComments = function() {

        }
        vm.createComments = function(){

        }
      },
      template: `

            <div class="pull-right">
              <p><a class="btn btn-info" ng-click="showTheForm = !showTheForm">New Post</a></p>
            </div>

            <ul class="nav nav-pills">
              <li role="presentation" class="active">
                <input type="search" class="form-control input-sm search-form" placeholder="Filter">
              </li>
              <div class="form-inline">
                <label for="sort">  Sort by </label>
                <select class="form-control" id="sort">
                  <option>Some text</option>
                  <option>Some text</option>
                </select>
              </div>
            </ul>

            <div class="row" ng-show="showTheForm">
              <div class="col-md-8">

                <form novalidate class="form-horizontal" name="$ctrl.newPostForm" ng-submit="$ctrl.createPost()">
                          <!-- Title new post Input -->
                  <div ng-class="{
                    'has-error': $ctrl.newPersonForm.username.$invalid && $ctrl.newPersonForm.username.$dirty, 'has-success': $ctrl.newPersonForm.username.$valid}">
                    <label for="title">Title</label>
                    <input
                      id="title"
                      class="form-control"
                      name="title"
                      ng-model="$ctrl.post.title"
                      ng-minlength="3"
                      required>
                  </div>
                                  <!-- Body new post Input -->
                  <div ng-class="{ 'has-error': $ctrl.newPersonForm.username.$invalid && $ctrl.newPersonForm.username.$dirty, 'has-success': $ctrl.newPersonForm.username.$valid}">
                    <label for="body">Body</label>
                    <textarea
                      id="body"
                      class="form-control"
                      name="body"
                      ng-model="$ctrl.post.body"
                      ng-minlength="10"
                      required ></textarea>
                  </div>
                                <!-- Author new post Input -->
                  <div ng-class="{ 'has-error': $ctrl.newPersonForm.username.$invalid && $ctrl.newPersonForm.username.$dirty, 'has-success': $ctrl.newPersonForm.username.$valid}">
                    <label for="author">Author</label>
                    <input
                      id="author"
                      class="form-control"
                      name="author"
                      ng-model="$ctrl.post.author"
                      ng-minlength="2"
                      required >
                  </div>

                            <!-- URL new post Input -->
                  <div ng-class="{ 'has-error': $ctrl.newPersonForm.zipcode.$invalid && $ctrl.newPersonForm.zipcode.$dirty, 'has-success': $ctrl.newPersonForm.zipcode.$valid && $ctrl.newPersonForm.zipcode.$dirty }">
                    <label for="image-url">Image URL</label>
                    <input
                      id="image-url"
                      class="form-control"
                      name="image-url"
                      ng-model="$ctrl.post.imageUrl">
                  </div>
                        <!-- Submit button for the newPostForm -->
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      ng-click="showTheForm = false"
                      value="Create Post">
                      Create Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
                      <!-- Showing posts -->
            <div class="row">
              <div class="col-md-12" ng-repeat="post in $ctrl.posts">
<!--ng-repeat="character in $ctrl.characters | orderBy:$ctrl.propertyToOrderBy | limitTo:2"-->
                <div class="well">
                  <div class="media-left">
                    <img class="media-object" ng-src={{post.imageUrl}}>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      {{ post.title }}
                      |
                      <a><i class="glyphicon glyphicon-arrow-up"></i></a>
                      <a><i class="glyphicon glyphicon-arrow-down"></i></a>
                      {{ post.votes }}
                    </h4>
                    <div class="text-right">
                      Created by : <strong><i>{{ post.author }}</i></strong>
                    </div>
                    <p>
                      <blockquote>{{ post.body }}</blockquote>
                    </p>
                    <div>
                      Created less than minute ago
                      |
                      <i class="glyphicon glyphicon-comment"></i>
                      <a ng-click="showComments = !showComments">
                        <ng-pluralize count="{{ post.comments.length }}"
                                      when="{ '0': 'No comments yet.',
                                              'one': '1 Comment',
                                              'other': '{} Comments'}">
                        </ng-pluralize>
                      </a>
                    </div>
                    <div class="row" ng-show="showComments">
                      <div class="col-md-offset-1">
                        <hr>
                        <p ng-repeat="comment in post.comments">
                          {{ comment.com }}
                        </p>
                        <form class="form-inline">
                          <div class="form-group">
                            <input class="form-control">
                          </div>
                          <div class="form-group">
                            <input type="submit" class="btn btn-primary">
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      `,
    })
    .filter('timeSince', function(){
      return function(input) {
        let newDate = new Date;
        return (newDate - input)/1000;
      }
    })


})();
