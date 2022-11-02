var Whores = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getModelsFromStorage());
        this.setModelsToStorage();

        this.on('all', function() {
            this.setModelsToStorage();
        });
    },

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.toJSON()));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    },

    model: Backbone.Model,
});

var whores = new Whores;

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#whore-template').html()),

    el: '.left-column',

    initialize: function() {
        this.listenTo(this.collection, 'all', function() {
            this.render();
        });

        this.render();
    },

    events: {
        'click .add-whore-btn': 'handleClickOnAddBtn',
        'click .whore': 'handleClickOnWhore',
    },

    handleClickOnAddBtn: function() {
        formView.showAddForm();
        formView.resetForm();
        $('.whore-form').removeAttr('id');
    },

    handleClickOnWhore: function(e) {
        if ($(e.target).hasClass('whore')) {
            var whore = this.collection.get(e.target.id);
            formView.showEditRemoveForm(whore);
            $('.whore-form').attr('id', e.target.id);
        }
    },

    render: function() {
        this.$('.whore-list-container').html(this.tmplFn(this.collection.toJSON()));
    },
});

var listView = new ListView({
    collection: whores
});

var FormView = Backbone.View.extend({
    $fields: this.$('input'),

    el: '.right-column',

    resetForm: function() {
        this.$fields.val('');
    },

    hideForm: function() {
        $('.whore-form').addClass('hidden');
    },

    showAddForm: function() {
        this.$('.whore-form').removeClass('hidden').removeAttr('id');

        this.$('.save-whore-btn').removeClass('hidden');
        this.$('.update-whore-btn').addClass('hidden');
        this.$('.delete-whore-btn').addClass('hidden');

        this.resetForm();
    },

    showEditRemoveForm: function(whore) {
        this.$('.whore-form').removeClass('hidden').attr('id', whore.id);

        this.$('.save-whore-btn').addClass('hidden');
        this.$('.update-whore-btn').removeClass('hidden');
        this.$('.delete-whore-btn').removeClass('hidden');

        this.prefillForm(whore);
    },

    prefillForm: function(whore) {
        whore = whore.toJSON();
        this.$('#name').val(whore.name);
        this.$('#surname').val(whore.surname);
        this.$('#alias').val(whore.alias);
        this.$('#age').val(whore.age);
        this.$('#price').val(whore.price);
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    getFormData: function() {
        var id = $('.whore-form').attr('id');
        return {
            id: id === undefined ? this.getUniqId() : id,
            name: this.$('#name').val(),
            surname: this.$('#surname').val(),
            alias: this.$('#alias').val(),
            age: this.$('#age').val(),
            price: this.$('#price').val(),
        }
    },

    isFormDataValid: function() {
        return _.every(this.$fields, function(field) {
            return $(field).val() !== '';
        })
    },

    highlightFields: function() {
        this.$fields.each(function(index, input) {
            if ($(input).val().length === 0) {
                $(input).addClass('empty-input');
            }
        });
    },

    events: {
        'click .save-whore-btn': 'handleSave',
        'click .update-whore-btn': 'handleUpdate',
        'click .delete-whore-btn': 'handleDelete',
        'click input': 'handleHighlightingOnInput'
    },

    handleSave: function() {
        if (this.isFormDataValid()) {
            this.collection.add(this.getFormData());
            this.resetForm();
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    handleUpdate: function() {
        this.collection.add(this.getFormData(), {merge: true});
        this.resetForm();
        this.hideForm();
    },

    handleDelete: function() {
        var id = $('.whore-form').attr('id');
        this.collection.remove(id);
        this.resetForm();
        this.hideForm();
    },

    handleHighlightingOnInput: function(e) {
        $(e.target).removeClass('empty-input');
    }
});

var formView = new FormView({
    collection: whores
});
