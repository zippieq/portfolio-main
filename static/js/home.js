$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat quan.human<br/>" + 
      "><span class='caret'>$</span> skills: c++, python, embedded software, data pipeline<br/> ^100" +
      "><span class='caret'>$</span> job: data engineer <a href='https://www.fpt-software.com//'>FPT Software</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: drawing, travel, <a href='http://www.zippieq.space/blog'>writing</a><br/> ^300" +
      "><span class='caret'>$</span> alias: zippieq <br/>" +
      "><span class='caret'>$</span> highlight:  <a href='/projects/video-stab'>real time image stabilization on Android</a>, <a href='/projects/lifehacks'>app with >750K installs</a><br/>"/*
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/zippieq/'>github</a> <a href='http://in.linkedin.com/in/hua-chi-quan/'>linkedin</a> <a href='http://zippieq.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
