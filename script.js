$(function() {
  // your code here
  // Exercise 1
  $('.accordion-header').on('click', function() {
    $('.accordion-content').slideUp();
    $(this).next().slideDown();
  });

  // Exercise 2
  $('.todos').find('button').on('click', function() {
    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function(response) {
        const todos = response.todos;
        console.log(todos);
        todos.forEach(todo => {
          $('.todos').find('ul').append(
            `<li>${todo.todo}</li>`
          )
        });
      },
      error: function(err) {
        console.error(err);
      }
    })
  });
})