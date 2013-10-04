(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    template: _.getTemplate("stock"),
    initialize: function(options){
      this.listenTo(this.model, 'change', function (){
        this.render();
        var prevPrice = this.model.previous('price');
        var newPrice  = this.model.get('price');
        var priceSpan = $(this.el).find('.price');
        if (prevPrice === undefined) {
        } else if (prevPrice < newPrice) {
          priceSpan.removeClass('bad-change');
          priceSpan.addClass('good-change');
        } else {
          priceSpan.removeClass('good-change');
          priceSpan.addClass('bad-change');
        }
        console.log('change', this.model.get('name'), 'to', newPrice, 'from', prevPrice);
      });
    },
    render: function(){
      var stockName = this.model.get('name');
      var stockPrice = this.model.get('price');
      var newHtml = this.template({name: stockName, price: stockPrice});
      $(this.el).html(newHtml);
    }
  });

})();
