    $('.field-type-file, table.nodechanges-file-changes', context).once('dreditor-patchreview', function () {
          var $file = $(this).closest('tr').find('.file');
          var $link = $('<a class="dreditor-button dreditor-patchreview" href="' + this.href + '">Review</a>').click(function (e) {
            if (Drupal.dreditor.link !== this && Drupal.dreditor.$wrapper) {
              Drupal.dreditor.tearDown(false);
            }
            if (Drupal.dreditor.link === this && Drupal.dreditor.$wrapper) {
              Drupal.dreditor.show();
            }
            else {
              Drupal.dreditor.link = this;
              // Load file.
              $.get(this.href, function (content, status) {
                if (status === 'success') {
                  // Invoke Dreditor.
                  Drupal.dreditor.setup(context, 'patchReview', content);
                }
              });
            }
            e.preventDefault();
          $link.prependTo($file);
                }).prependTo($file);
    // @todo add sort based on element position back.
    // @todo add sort based on element position back.
  var $code = $('<table id="code"></table>');
    else if (line.match(/^((?!\-\-\-$|\-\-$)\-.*)$/)) {