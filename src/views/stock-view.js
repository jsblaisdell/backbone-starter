(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    template: _.getTemplate("stock"),
    initialize: function(options){
      // Listen for its model's changes in initialize.
      this.listenTo(this.model, 'change', function (){
        this.render();
      });
    },
    render: function(){
      // updates its element `el` using an underscore template.
      var stockName = this.model.get('name');
      var stockPrice = this.model.get('price');
      var newHtml = this.template({name: stockName, price: stockPrice});
      $(this.el).html(newHtml);
    }
  });

})();
