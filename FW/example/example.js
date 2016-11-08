// Let's create a basic application

var myModel = new Cranium.Model({
    counter: 0,
    incr: function () {
        myModel.set({ counter: ++this.counter });
    }
});


var myView = new Cranium.View({

    el: '.container',
    template: _.template($('.counter-template')[0].innerHTML),

    observe: function (model) {
        this.on(model.id + 'update', function (data) {

           $(this.el).innerHTML = this.template( model.toJSON() );

        }.bind(this));
    }
});

var myController = new Cranium.Controller({

    // Specify the model to update
    model: myModel,

    // and the view to observe this model
    view:  myView,

    events: {
        "#inc.click" : "increment",
        "#alerter.click" : "alerter"
    },

    // Initialize everything
    initialize: function () {
        this.view.observe(this.model);
        return this;
    },
    increment: function () {
        myController.model.attributes.incr();
        return this;
    },
    alerter: function(){
       alert("Yo!");
    }
});


// Let's kick start things off
myController.initialize(myModel, myView).increment().increment();


// Some further experiments with Underscore utils
var myModel2 = new Cranium.Model({
    caption: 'hello!'
});

console.log(_.any([myModel, myModel2, null]));
console.log(_.pluck([myModel, myModel2], 'id'));
console.log(_.shuffle([myModel, myModel2]));
