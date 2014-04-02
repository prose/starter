---
---
;{% include js/jquery-1.11.0.min.js %}

utils = {};
utils.toTitleCase = function(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

$(document).ready(function() {
  $("#lookupForm").submit(function(event) {
    event.preventDefault();

    var searchParameter = $('.lookupInput').val();
    if (!searchParameter) return;

    $.get('http://api.atlantamunicipalcourt.org/cases', {
      searchParameter: searchParameter
    }).done(function(results) {
      var resultsDiv = $('#results');
      resultsDiv.html('');

      var message;
      if (results.length === 0) {
        message = 'No matching cases found. Please call us at (404) 658-6940.';
      } else if (results.length === 1) {
        message = 'Your case:'
      } else if (results.length <= 9) {
        message = results.length + ' cases found:'
      } else {
        message = '<strong>Found lots of matching cases. Showing first ten. Please be more specific.</strong>'
      }

      resultsDiv.append('<div class="resultsMessage">' + message + '</div>');

      for (var i = 0; i < results.length; i++) {
        var item = results[i];

        var html = ['<div class="citation">' + 'Citation #' + item.citation + '</div>',
                    '<div class="defendant">' + utils.toTitleCase(item.defendant) + '</div>',
                    '<div class="datetime">' + item.readableDate + ' ' + item.time + ' in Court ' + item.room + '</div>'].join('');

        var violations = results[i].violations;
        for (var j = 0; j < violations.length; j++) {
          html += '<div class="violation">' + violations[j].description + '</div>';
        }

        resultsDiv.append('<div class="case">' + html + '</div>');
      };
    }).fail(function(error) {
      console.log('HTTP request failed.')
      console.log(error);
    });
  });
})
