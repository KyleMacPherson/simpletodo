(function() {

  var app = angular.module('simpleToDo', []);

  app.controller('ToDoController', function() {
    this.addTask = function (task) {
      var self = this;
      this.list = [];
      var newTask = {
        name: task,
        completed: false,
        showing: true
      }
      self.list.push(newTask)
      self.task = '';
    }
  });

})();
