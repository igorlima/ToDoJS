var TodosModel = Stapes.create();

var TodosView = Stapes.create().extend({
  "$el" : $("#inputform"),

  "model" : TodosModel,

  "init" : function() {
    var $input = this.$el.find("input");
    var self = this;

    this.$el.on('submit', function(e) {
      e.preventDefault();

      self.model.push( $input.val() );
      $input.val('');
    });
  }
});

var TodosController = Stapes.create().extend({
    "init" : function() {
        TodosView.init();

        TodosModel.on('change', function(todoId) {
            var text = TodosModel.get( todoId );
            $("#todos ul").append('<li>' + text + '</li>');
        });
    }
});

TodosController.init();
