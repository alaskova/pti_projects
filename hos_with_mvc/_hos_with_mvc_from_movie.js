var whores = {
    models: [],

    add: function(whore) {
        // Добавить модель в коллекцию
        // Возбудить событие 'change' на коллекции
        this.models.push(whore);
        // this.setModelsToStorage();
        $(this).trigger('change');
    },

    update: function(updatedWhore) {
        // Найти модель в коллекции и обновить ее
        // Возбудить событие 'change' на коллекции
        var whore = _.findWhere(this.models, {id: updatedWhore.id});
        _.extend(whore, updatedWhore);
        // this.setModelsToStorage();
        $(this).trigger('change');
    },

    remove: function(whoreId) {
        // Удалить модель из коллекции по ее ID
        // Возбудить событие 'change' на коллекции
        this.models = _.reject(this.models, function(whore) {
            return whore.id === whoreId;
        });
        // this.setModelsToStorage();
        $(this).trigger('change');
    },

    get: function(whoreId) {
        // Вернуть модель из коллекции по ее ID
        return _.findWhere(this.models, {id: whoreId});
    },

    setModelsToStorage: function() {
        // Cинхронизировать модели с localStorage
        localStorage.setItem('whores', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        // Забрать модели с localStorage
        return JSON.parse(localStorage.getItem('whores')) || [];
    },

    init: function() {
        // Забрать данные из localStorage и сохранить их в this.models
        // Подписаться на изменения в коллекции для синхронизизации коллекции с localStorage
        this.models = this.getModelsFromStorage();

        $(this).on('change', function() {
            this.setModelsToStorage();
        }.bind(this));
    }
};

whores.init();

var listView = {
    // Шаблонная функция для списка
    tmplFn: doT.template($('#whore-template').html()),

    // Коллекция моделей
    collection: whores,

    init: function() {
        // Отрисовать элементы компонента
        // Подписаться на события
        // Подписаться на изменения в коллекции для обновления пользовательского интерфейса
        this.render();
        $('.add-whore-btn').on('click', this.handleClickOnAddBtn.bind(this));

        $(this.collection).on('change', function() {
            this.render();
        }.bind(this));
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по шлюхе
        // 2. Клик по кнопке 'Добавить'
        $('.whore-list').on('click', this.handleClickOnWhore.bind(this));
    },

    render: function() {
        // Отрисовать элементы компонента
        $('.whore-list-container').html(this.tmplFn(this.collection.models));
        this.subscribe();
    },

    handleClickOnWhore: function(e) {
        // Обработчик события 'клик' по шлюхе
        if ($(e.target).hasClass('whore')) {
            var whore = this.collection.get(e.target.id);
            formView.showEditRemoveForm(whore);
            $('.whore-form').attr('id', e.target.id);
        }
    },

    handleClickOnAddBtn: function() {
        // Обработчик события 'клик' по кнопке 'Добавить'
        console.log('клик по добавить');
        formView.showAddForm();
        formView.resetForm();
        $('.whore-form').removeAttr('id');
    }
};

listView.init();

var formView = {
    // Поля формы
    $fields: $('input'),

    // Коллекция моделей
    collection: whores,

    init: function() {
        //
        this.subscribe();
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по кнопке 'Сохранить'
        // 2. Клик по кнопке 'Обновить'
        // 3. Клик по кнопке 'Удалить'
        $('.save-whore-btn').on('click', this.handleSave.bind(this));
        $('.update-whore-btn').on('click', this.handleUpdate.bind(this));
        $('.delete-whore-btn').on('click', this.handleDelete.bind(this));
    },

    showAddForm: function() {
        // Показать форму добавления
        $('.whore-form').removeClass('hidden');
        $('.save-whore-btn').removeClass('hidden');
        $('.update-whore-btn').addClass('hidden');
        $('.delete-whore-btn').addClass('hidden');
    },

    showEditRemoveForm: function(whore) {
        // Показать форму редактирования/удаления
        $('.whore-form').removeClass('hidden');
        $('.save-whore-btn').addClass('hidden');
        $('.update-whore-btn').removeClass('hidden');
        $('.delete-whore-btn').removeClass('hidden');

        $('#name').val(whore.name);
        $('#surname').val(whore.surname);
        $('#alias').val(whore.alias);
        $('#age').val(whore.age);
        $('#price').val(whore.price);
    },

    hideForm: function() {
        // Скрыть форму
        $('.whore-form').addClass('hidden');
    },

    resetForm: function() {
        // Очистить поля формы
        this.$fields.val('');
    },

    getFormData: function() {
        // Собрать данные из формы и вернуть их в виде объекта
        var id = $('.whore-form').attr('id');
        return {
            id: id === undefined ? this.getUniqId() : id,
            name: $('#name').val(),
            surname: $('#surname').val(),
            alias: $('#alias').val(),
            age: $('#age').val(),
            price: $('#price').val(),
        }
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        // Проверить что данные валидны
        return _.every(this.$fields, function(field) {
            return $(field).val() !== '';
        })
    },

    highlightFields: function() {
        // Подсветить невалидные и валидные поля формы
        this.$fields.each(function(index, input) {
            $(input).val() === '' ? $(input).addClass('empty-input') : $(input).removeClass('empty-input');
        })
    },

    handleSave: function() {
        // Обработчик события 'клик' по кнопке 'Сохранить'
        console.log('клик по сохранить');
        if (this.isFormDataValid()) {
            this.collection.add(this.getFormData());
            this.resetForm();
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    handleUpdate: function() {
        // Обработчик события 'клик' по кнопке 'Обновить'
        console.log('клик по обновить');
        this.collection.update(this.getFormData());
        this.resetForm();
        this.hideForm();
    },

    handleDelete: function() {
        // Обработчик события 'клик' по кнопке 'Удалить'
        console.log('клик по удалить');
        var id = $('.whore-form').attr('id');
        this.collection.remove(id);
        this.resetForm();
        this.hideForm();
    }
};

formView.init();
