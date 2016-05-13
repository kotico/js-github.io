$(function() {

var task = $('#task').html();
var page;
var taskData = [
{
    title: 'Лукина Екатерина Владимировна',
    content: ['https://avatars0.githubusercontent.com/u/17070868?v=3&s=400']
},
{
	title: 'Менеджер проектов в рекламном агентстве',
	content: []
},
{
    title: 'Хочу учить фронтенд, потому что: ',
    content: ['запланировала перемены в карьере', 'мне это нравится', 'это возможность самореализации для меня']
},
{
	title: 'Мои контакты: ',
	content: ['тел.: +380667085654', 'skype: kotico8', '<a href="https://www.facebook.com/ALLOHIMMM">facebook</a>']
},
{
	title: 'Хобби: ',
	content: ['таеквондо', 'отдых с друзьями', 'чтение']
}
];
var page = tmpl(task, {
	data: taskData
});

$('.second').click(function() {
	$('.carousel').css("display", "none");
	$('.second').css("display", "none");
	$('.first').css("display", "block");
	$('body').append(page)
});

$('.first').click(function() {
	$('.carousel').css("display", "block");
	$('.second').css("display", "block");
	$('.first').css("display", "none");
	$('.little').remove()
});

})

