(function($) {

    $.fn.responsiveTables = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            color        : null
        }, options);

        if ( settings.color ) {
          $(this).css( 'color', settings.color );
        } else {
        }

        // For each table within the specified area
        return this.each(function(t) {
            // Add a unique id if one doesn't exist
            if (!this.id) {
                this.id = 'table_' + t;
            }
            // Prepare empty variables
            var headertext = [],
                theads = document.querySelectorAll('#' + this.id + ' thead'),
                headers = document.querySelectorAll('#' + this.id + ' th'),
                tablerows = document.querySelectorAll('#' + this.id + ' th'),
                tablebody = document.querySelector('#' + this.id + ' tbody');
            // For tables with theads
            for (var i = 0; i < theads.length; i++) {
                // If they have more than 2 columns
                if (headers.length > 2) {
                    // Add the responsive class
                    this.classList.add('ymatebol');
                    // Get the content of the appropriate th
                    for (var i = 0; i < headers.length; i++) {
                        var current = headers[i];
                        headertext.push(current.textContent.replace(/\r?\n|\r/, ''));
                    }
                    // Apply that as a data-th attribute on the corresponding cells
                    for (var i = 0, row; row = tablebody.rows[i]; i++) {
                        for (var j = 0, col; col = row.cells[j]; j++) {
                            col.setAttribute('data-th', headertext[j]);
                        }
                    }
                }
            }

            if($(this).width() <= 768) {
                $('.ymatebol tr td:first-child').on('click', function() {
                    if($(this).hasClass("custom-tab")) {
                        $(this).removeClass('custom-tab').siblings().show();
                    }
                    else {
                        $(this).addClass('custom-tab').siblings().hide();
                    }
                });
            }

        });


    }

}(jQuery));
