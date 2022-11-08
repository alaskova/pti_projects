var Tasks = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getTasksFromStorage());
        this.on('all', this.setTasksToStorage);
    },

    setTasksToStorage: function() {
        localStorage.setItem('tasks', JSON.stringify(this.toJSON()));
    },

    getTasksFromStorage: function() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }
});

var tasks = new Tasks;

var appModel = new Backbone.Model({
    needle: '',     // any search text
    filter: 'all'   // all incompleted completed
});

var AppView = Backbone.View.extend({
    el: '.app',

    events: {
        'keypress input.title': 'handleAddNewTaskOnKeypress',
        'keyup input.needle': 'handleSearch',
        'click .filters .actions button': 'handleFilter'
    },

    initialize: function() {
        this.listenTo(this.collection, 'all', this.counterCompletedAndRemaining);
        this.counterCompletedAndRemaining();
    },

    handleAddNewTaskOnKeypress: function(e) {
        if (e.keyCode === 13 && this.isFieldValid(this.$('input.title'))) {
            this.collection.add(this.getTaskData());
            this.resetTitle();
        }
    },

    handleSearch: function(e) {
        appModel.set('needle', e.target.value);
    },

    handleFilter: function(e) {
        appModel.set('filter', e.target.dataset.filter);

        this.$('.filters .actions button').removeClass('active');
        this.$(e.target).addClass('active');
    },

    counterCompletedAndRemaining: function() {
        this.$('.item-completed').text(this.collection.where({completed: true}).length);
        this.$('.item-incompleted').text(this.collection.where({completed: false}).length);
    },

    getTaskData: function() {
        return {
            id: this.getUniqId(),
            title: this.$('.title').val(),
            completed: false,
            important: false
        }
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFieldValid: function($input) {
        return $input.val() !== '';
    },

    resetTitle: function() {
        this.$('input.title').val('');
    }
});

var appView = new AppView({
    collection: tasks
});

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#tasks-template').html()),

    el: '#tasks',

    initialize: function() {
        this.listenTo(this.collection, 'all', this.render);
        this.listenTo(appModel, 'all', this.render);
        this.render();
    },

    events: {
        'click button.delete': 'handleDelete',
        'click button.important': 'handleImportantTask',
        'dblclick span.title': 'handleCompletedTask'
    },

    render: function() {
        this.$el.html(this.tmplFn(this.getFilteredTasks()));
    },

    getFilteredTasks: function() {
        var tasks = this.collection.toJSON();
        var needle = appModel.get('needle');
        var filter = appModel.get('filter'); // all incompleted completed

        return tasks
            .filter(function(task) {
                return task.title.toLowerCase().includes(needle.toLowerCase());
            })
            .filter(function(task) {
                switch (filter) {
                    case 'completed':
                        return task.completed;
                    case 'incompleted':
                        return !task.completed;
                    default:
                        return true;
                }
            });
    },

    handleDelete: function(e) {
        var id = $(e.target).closest('.item').data('id');
        this.collection.remove(id);
    },

    handleImportantTask: function(e) {
        var id = $(e.target).closest('.item').data('id');
        var task = this.collection.get(id);
        task.set('important', !task.get('important'));
    },

    handleCompletedTask: function(e) {
        var id = $(e.target).closest('.item').data('id');
        var task = this.collection.get(id);
        task.set('completed', !task.get('completed'));
    }
});

var listView = new ListView({
    collection: tasks
});
