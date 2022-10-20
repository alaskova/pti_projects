var whoreList = [];
var whore = {};
var storedWhores = [];
var whoreTemplate;

// Opening form
$('.open-whore-form-btn').on('click', function() {
    $('.whore-form').removeClass('hidden');
});

// Save new girl
$('.save-whore-form-btn').on('click', function() {
    var validationPassed = false;
    $('input').each(function(index, input) {
        if ($(input).val() === '') {
            validationPassed = false;
            return false;
        } else {
            validationPassed = true;
        }
    });

    if (validationPassed) {
        whore.name = $('#name').val();
        whore.surname = $('#surname').val();
        whore.alias = $('#alias').val();
        whore.age = $('#age').val();
        whore.price = $('#price').val();
        whore.id = '_' + Math.random().toString(36).substr(2, 9);

        whoreList.push(whore);

        whore = {};

        localStorage.setItem('storedWhores', JSON.stringify(whoreList));
        storedWhores = JSON.parse(localStorage.getItem('storedWhores')) || [];
        localStorage.setItem('storedWhores', JSON.stringify(storedWhores));

        $('.whore-form').addClass('hidden');

        whoreTemplate = $('#whore-template').html();
        $('.whore-list-items').html(doT.template(whoreTemplate)(storedWhores));

        $('.empty-whore-list').addClass('hidden');
        $('input').val('');

    } else {
        $('input').each(function(index, input) {
            if ($(input).val() === '') {
                $(input).addClass('empty-input');
            } else {
                $(input).removeClass('empty-input');
            }
        });
    }
});

// Validation on input
$('.whore-form input').on('input', function() {
    $(this).removeClass('empty-input');
    if ($(this).val().length === 0) {
        $(this).addClass('empty-input');
    }
});

// Opening existing girl for editing
var foundWhoreId;
var foundWhoreIndex;
$('.whore-list').on('click', '.whore-link', function(e) {
    $('.whore-form').removeClass('hidden');
    $('.save-whore-form-btn').addClass('hidden');
    $('.update-whore-form-btn').removeClass('hidden');
    $('.delete-whore-form-btn').removeClass('hidden');

    $(whoreList).each(function(index, whore) {
        if (whore.id === $(e.currentTarget).attr('id')) {
            foundWhoreId = whore.id;
            foundWhoreIndex = index;
            $('#name').val(whore.name);
            $('#surname').val(whore.surname);
            $('#alias').val(whore.alias);
            $('#age').val(whore.age);
            $('#price').val(whore.price);
            return false;
        }
    })

    // Edit girl info
        $('.update-whore-form-btn').on('click', function() {
            if (whoreList[foundWhoreIndex].name !== $('#name').val()) {
                whoreList[foundWhoreIndex].name = $('#name').val();
            }
            if (whoreList[foundWhoreIndex].surname !== $('#surname').val()) {
                whoreList[foundWhoreIndex].surname = $('#surname').val();
            }
            if (whoreList[foundWhoreIndex].alias !== $('#alias').val()) {
                whoreList[foundWhoreIndex].alias = $('#alias').val();
            }
            if (whoreList[foundWhoreIndex].age !== $('#age').val()) {
                whoreList[foundWhoreIndex].age = $('#age').val();
            }
            if (whoreList[foundWhoreIndex].price !== $('#price').val()) {
                whoreList[foundWhoreIndex].price = $('#price').val();
            }

            localStorage.setItem('storedWhores', JSON.stringify(whoreList));
            $('.whore-form').addClass('hidden');
            $('.save-whore-form-btn').removeClass('hidden');
            $('.update-whore-form-btn').addClass('hidden');
            $('.delete-whore-form-btn').addClass('hidden');

            $('.whore-list-items').html(doT.template(whoreTemplate)(whoreList));
        });

    $('.open-whore-form-btn').on('click', function() {
        $('input').val('');
    });

    // Delete girl info
    $('.delete-whore-form-btn').on('click', function() {
        whoreList.splice(foundWhoreIndex, 1);
        $('input').val('');
        $('.whore-link').each(function(index, item) {
            if (item.id === foundWhoreId) {
                $(item).parent().remove();
            }
        });

        localStorage.setItem('storedWhores', JSON.stringify(whoreList));
        $('.whore-form').addClass('hidden');
        $('.save-whore-form-btn').removeClass('hidden');
        $('.update-whore-form-btn').addClass('hidden');
        $('.delete-whore-form-btn').addClass('hidden');

        if (!$('.whore-list-items').children('li').length) {
            $('.empty-whore-list').removeClass('hidden');
        }
    })
});


