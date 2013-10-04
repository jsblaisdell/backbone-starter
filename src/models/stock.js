(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      var newPrice = parseFloat(newPrice);
      this.set({price: newPrice});
      console.log('Updating', this.get('name'), 'price to:', this.get('price'));
    }
  });

})();
