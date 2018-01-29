/**
 * Copyright 2017-2018 Dunbar Security Solutions, Inc.
 * 
 * This file is part of Cyphon Engine.
 * 
 * Cyphon Engine is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Cyphon Engine is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Cyphon Engine. If not, see <http://www.gnu.org/licenses/>.
 */

(function($) {
    function checkConfig() {
        var $testResult = $('#id_config_test_result');
        var serializedData = $('form').serialize();

        $.ajax({
            url: 'test/',
            type: 'POST',
            data: serializedData,
            success: function(data) {
                // console.log(data); // log the returned json to the console
                // console.log('success'); // another sanity check
                $testResult.val(data.result);
            },
            error: function(xhr, errmsg, err) {
                $testResult.val(xhr.responseText);
                // console.log(xhr.status + ': ' + xhr.responseText); // provide a bit more info about the error to the console
            }
        });

    }

    function setUpTestTool() {
        $('input[name="_test"').click(function(event){
            event.preventDefault();
            checkConfig();
        });            
    }

    $(document).ready(function() {
        setUpTestTool();
    });
} (django.jQuery));
