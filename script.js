$(function() {
  // your code here
  // Exercise 1
  $('.accordion-header').on('click', function() {
    // const target = $(this).next();

    // if($('.accordion-content').is(":hidden")) {
    //   $('.accordion-content').slideUp();
    //   if(target.is(":hidden")) {
    //     target.slideDown();
    //   } else {
    //     target.slideUp();
    //   }
    // }

    if($('.accordion h3').not(this).next().is(':hidden')) {
      $('.accordion h3').not(this).next().slideUp();
    };
    $(this).next().slideToggle();

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