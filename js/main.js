'use strict';

jQuery(document).ready(function($) {

  page('/', index);
  page('/about', about);
  page('/contact', contact);
  page('/contact/:contactName', contact);
  page();

  function index() {
    console.log('index');
    document.querySelector('p')
      .textContent = 'viewing index';
  }

  function about() {
    console.log('about');
    document.querySelector('p')
      .textContent = 'viewing about';
  }

  function contact(ctx) {
    console.log('contact');
    document.querySelector('p')
      .textContent = 'viewing contact ' + (ctx.params.contactName || '');
  }

});