var Tasks = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getTasksFromStorage());
        this.on('all', this.setTasksToStorage);
        this.on('all', this.counterCompletedAndRemaining);
        this.counterCompletedAndRemaining();
        this.on('all', this.resetDefaultActionAsActive);
    },

    setTasksToStorage: function() {
        localStorage.setItem('tasks', JSON.stringify(this.toJSON()));
    },

    getTasksFromStorage: function() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    },

    counterCompletedAndRemaining: function() {
        $('.item-completed').text(this.where({completed: true}).length);
        $('.item-incompleted').text(this.where({completed: false}).length);
    },

    resetDefaultActionAsActive: function() {
        $('button').removeClass('active');
        $('button[data-filter="all"]').addClass('active');
    },
});

var tasks = new Tasks;

var AppView = Backbone.View.extend({
    el: '.app',

    events: {
        'keypress input.title': 'handleAddNewTaskOnKeypress',
        'keyup input.needle': 'handleSearch',
        'click .filters .actions': 'handleActions'
    },

    resetTitle: function() {
        this.$('input.title').val('');
    },

    handleAddNewTaskOnKeypress: function(e) {
        if (e.which === 13 && this.isFieldValid(this.$('input.title'))) {
            this.collection.add(this.getTaskData());
            this.resetTitle();
        }
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    getTaskData: function() {
        return {
            id: this.getUniqId(),
            title: this.$('.title').val(),
            completed: false,
            important: false
        }
    },

    isFieldValid: function(input) {
        return $(input).val() !== '';
    },

    handleActions: function(e) {
        var activeFilter = this.$('button.active');
        this.$(activeFilter).removeClass('active');
        this.$(e.target).addClass('active');
    }
});

var appView = new AppView({
    collection: tasks
});

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#tasks-template').html()),

    el: '.app',

    initialize: function() {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },

    render: function() {
        this.$('#tasks').html(this.tmplFn(this.collection.toJSON()));
    },

    events: {
        'click button.delete': 'handleDelete',
        'dblclick span.title': 'handleCompletedTask',
        'click button.important': 'handleImportantTask',
        'click .actions [data-filter="all"]': 'handleAllFilter',
        'click .actions [data-filter="incompleted"]': 'handleIncompletedFilter',
        'click .actions [data-filter="completed"]': 'handleCompletedFilter',
        'keyup input.needle': 'handleSearch'
    },

    handleDelete: function(e) {
        var id = $(e.target).closest('.item').data('id');
        this.collection.remove(id);
    },

    handleCompletedTask: function(e) {
        var id = $(e.target).closest('.item').data('id');
        $(e.target).closest('.item').toggleClass('completed');
        if ($(e.target).closest('.item').hasClass('completed')) {
            this.collection.get(id).set('completed', true);
        } else {
            this.collection.get(id).set('completed', false);
        }
    },

    handleImportantTask: function(e) {
        var id = $(e.target).closest('.item').data('id');
        $(e.target).closest('.item').toggleClass('important');
        if ($(e.target).closest('.item').hasClass('important')) {
            this.collection.get(id).set('important', true);
        } else {
            this.collection.get(id).set('important', false);
        }
    },

    handleAllFilter: function() {
        $('#tasks .item').removeClass('hidden');
    },

    handleIncompletedFilter: function() {
        var $tasks = $('#tasks .item');
        $tasks.removeClass('hidden');
        $tasks.each(function(index, task) {
            if ($(task).hasClass('completed')) {
                $(task).addClass('hidden');
            }
        });
    },

    handleCompletedFilter: function() {
        var $tasks = $('#tasks .item');
        $tasks.removeClass('hidden');
        $tasks.each(function(index, task) {
            if (!$(task).hasClass('completed')) {
                $(task).addClass('hidden');
            }
        });
    },

    handleSearch: function() {
        var val = $('input.needle').val();
        var tasks = $('span.title');
        tasks.each(function(index, item) {
            if ($(item).text().includes(val)) {
                $(item).closest('div.item').removeClass('hidden')
            } else {
                $(item).closest('div.item').addClass('hidden')
            }
        })
    }
});

var listView = new ListView({
    collection: tasks
});