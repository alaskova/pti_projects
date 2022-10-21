var whores = {
    models: [],

    add: function(whore) {
        // Добавить модель в коллекцию
        // Возбудить событие 'change' на коллекции
    },

    update: function(updatedWhore) {
        // Найти модель в коллекции и обновить ее
        // Возбудить событие 'change' на коллекции
    },

    remove: function(whoreId) {
        // Удалить модель из коллекции по ее ID
        // Возбудить событие 'change' на коллекции
    },

    get: function(whoreId) {
        // Вернуть модель из коллекции по ее ID
    },

    setModelsToStorage: function() {
        // Cинхронизировать модели с localStorage
    },

    getModelsFromStorage: function() {
        // Забрать модели с localStorage
    },

    init: function() {
        // Забрать данные из localStorage и сохранить их в this.models
        // Подписаться на изменения в коллекции для синхронизизации коллекции с localStorage
    }
};

whores.init();

var listView = {
    // Шаблонная функция для списка
    tmplFn: null,

    // Коллекция моделей
    collection: whores,

    init: function() {
        // Отрисовать элементы компонента
        // Подписаться на события
        // Подписаться на изменения в коллекции для обновления пользовательского интерфейса
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по шлюхе
        // 2. Клик по кнопке 'Добавить'
    },

    render: function() {
        // Отрисовать элементы компонента
    },

    handleClickOnWhore: function(e) {
        // Обработчик события 'клик' по шлюхе
    },

    handleClickOnAddBtn: function() {
        // Обработчик события 'клик' по кнопке 'Добавить'
    }
};

listView.init();

var formView = {
    // Поля формы
    $fields: null,

    // Коллекция моделей
    collection: whores,

    init: function() {
        //
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по кнопке 'Сохранить'
        // 2. Клик по кнопке 'Обновить'
        // 3. Клик по кнопке 'Удалить'
    },

    showAddForm: function() {
        // Показать форму добавления
    },

    showEditRemoveForm: function(whore) {
        // Показать форму редактирования/удаления
    },

    hideForm: function() {
        // Скрыть форму
    },

    resetForm: function() {
        // Очистить поля формы
    },

    getFormData: function() {
        // Собрать данные из формы и вернуть их в виде объекта
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        // Проверить что данные валидны
    },

    highlightFields: function() {
        // Подсветить невалидные и валидные поля формы
    },

    handleSave: function() {
        // Обработчик события 'клик' по кнопке 'Сохранить'
    },

    handleUpdate: function() {
        // Обработчик события 'клик' по кнопке 'Обновить'
    },

    handleDelete: function() {
        // Обработчик события 'клик' по кнопке 'Удалить'
    }
};

formView.init();
