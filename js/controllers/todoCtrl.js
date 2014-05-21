/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $filter, todoStorage) {
		'use strict';

		var todos = $scope.todos = todoStorage.get();

		$scope.newTodo = '';
		$scope.editedTodo = null;

		$scope.$watch('todos', function (newValue, oldValue) {
			$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
			$scope.completedCount = todos.length - $scope.remainingCount;
			$scope.allChecked = !$scope.remainingCount;
			if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
				todoStorage.put(todos);
			}
		}, true);

		// Monitor the current route for changes and adjust the filter accordingly.
		$scope.$on('$routeChangeSuccess', function () {
			var status = $scope.status = $routeParams.status || '';

			$scope.statusFilter = (status === 'active') ?
				{ completed: false } : (status === 'completed') ?
				{ completed: true } : null;
		});

		$scope.addTodo = function () {
			var newTodo = $scope.newTodo.trim();
			var newTodoCat = $scope.newTodoCat;
			var newTodoPrice = $scope.newTodoPrice;
			var newTodoImportance = $scope.newTodoImportance;
			if (!newTodo.length) {
				return;
			}

			todos.push({
				title: newTodo,
				category: newTodoCat,
				price: newTodoPrice,
				importance: newTodoImportance,
				completed: false
			});

			$scope.newTodo = '';
			$scope.newTodoCat = '';
			$scope.newTodoPrice = '';
			$scope.newTodoImportance = '';
		};

		$scope.editTodo = function (todo) {
			$scope.editedTodo = todo;
			// Clone the original todo to restore it on demand.
			$scope.originalTodo = angular.extend({}, todo);
		};

		$scope.editTobuy = function (todo) {
			$scope.editedTobuy = todo;
			// Clone the original todo to restore it on demand.
			$scope.originalTobuy = angular.extend({}, todo);
		};

		$scope.doneEditingTobuy = function (todo) {
			console.log('fuck yeah');
			$scope.editedTobuy = null;
			todo.title = todo.title.trim();
			todo.category = todo.category.trim();
			todo.price = todo.price.trim();
			todo.importance = todo.importance.trim();
			if (!todo.title) {
				$scope.removeTodo(todo);
			}
		};

		$scope.revertEditingTobuy = function (todo) {
			todos[todos.indexOf(todo)] = $scope.originalTobuy;
			$scope.doneEditingTobuy($scope.originalTobuy);
		};

		$scope.doneEditing = function (todo) {
			$scope.editedTodo = null;
			todo.title = todo.title.trim();

			if (!todo.title) {
				$scope.removeTodo(todo);
			}
		};

		$scope.revertEditing = function (todo) {
			todos[todos.indexOf(todo)] = $scope.originalTodo;
			$scope.doneEditing($scope.originalTodo);
		};

		$scope.removeTodo = function (todo) {
			todos.splice(todos.indexOf(todo), 1);
		};

		$scope.clearCompletedTodos = function () {
			$scope.todos = todos = todos.filter(function (val) {
				return !val.completed;
			});
		};

		$scope.markAll = function (completed) {
			todos.forEach(function (todo) {
				todo.completed = !completed;
			});
		};
	});
