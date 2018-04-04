myApp.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
		console.log('in MainCtrl')
		// posts model
		$scope.posts = posts.posts;

		$scope.addPost = function(){
			console.log('in addPost');
			if( !$scope.title || $scope.title === '' ) { return; }

			$scope.posts.push( {
				title: $scope.title,
				link: $scope.link,
				upvotes: 0,
				comments: [
					{ author: 'Joe', body: 'Cool post!', upvotes: 0 },
					{ author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
				]
			} );
			$scope.title = '';
			$scope.link = '';
		};
		$scope.incrementUpvotes = function(post){
			console.log('in incrementUpvotes');
			post.upvotes += 1;
		};
}]);