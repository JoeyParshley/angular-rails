myApp.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){
		console.log(' in PostsCtrl');
		// set scope object to grab appropriate post from posts serivice using is from $stateParams
		// this will expose the 'post' variable in the /posts template
		$scope.post = posts.posts[$stateParams.id];
		$scope.addComment = function() {
			console.log('in addComment')
			if($scope.body === '') { return; }
			$scope.post.comments.push({
				body: $scope.body,
				author: 'user',
				upvotes: 0
			});
			$scope.body = '';
		};
}])
