﻿$('#SeriesName').live('change', function () { createExamples(); });
$('#EpisodeName').live('change', function () { createExamples(); });
$('#ReplaceSpaces').live('change', function () { createExamples(); });
$('#AppendQuality').live('change', function () { createExamples(); });
$('#SeparatorStyle').live('change', function () { createExamples(); });
$('#NumberStyle').live('change', function () { createExamples(); });
$('#MultiEpisodeStyle').live('change', function () { createExamples(); });
$('#AnimeNumberStyle').live('change', function () { createExamples(); });
$('#AnimeMultiEpisodeStyle').live('change', function () { createExamples(); });
$('#AnimeAppendSubGroup').live('change', function () { createExamples(); });
$('#AnimeNumberPadding').live('change', function () { createExamples(); });

var testProwlUrl = '../Command/TestProwl';
var testSabUrl = '../Command/TestSabnzbd';
var testEmailUrl = '../Command/TestEmail';
var testXbmcNotificationUrl = '../Command/TestXbmcNotification';
var testXbmcJsonApiUrl = '../Command/TestXbmcJsonApi';
var testPlexNotificationUrl = '../Command/TestPlexNotification';
var testPlexServerUrl = '../Command/TestPlexServer';

function createExamples() {
    createSingleEpisodeExample();
    createMultiEpisodeExample();
    createAnimeSingleEpisodeExample();
    createAnimeMultiEpisodeExample();
    createDailyEpisodeExample();
}

function createSingleEpisodeExample() {
    var result = '';

    var separator = ' - ';

    if ($("#SeparatorStyle option:selected").val() == 1)
        separator = ' ';
    
    if ($("#SeparatorStyle option:selected").val() == 2)
        separator = '.';

    if ($('#SeriesName').attr('checked')) {
        result += 'Series Name';
        result += separator;
    }

    result += $("#NumberStyle option:selected").text();

    if ($('#EpisodeName').attr('checked')) {
        result += separator;
        result += 'Episode Name';
    }

    if ($('#AppendQuality').attr('checked'))
        result += ' [TV]';

    if ($('#ReplaceSpaces').attr('checked'))
        result = result.replace(/\s/g, '.');

    $('#singleEpisodeExample').children('.result').text(result);
}

function createMultiEpisodeExample() {
    var result = '';

    var separator = ' - ';

    if ($("#SeparatorStyle option:selected").val() == 1)
        separator = ' ';
    
    if ($("#SeparatorStyle option:selected").val() == 2)
        separator = '.';

    if ($('#SeriesName').attr('checked')) {
        result += 'Series Name';
        result += separator;
    }

    var numberStyle = $("#NumberStyle option:selected").text();
    var numberId = $("#NumberStyle option:selected").val();
    var style = $("#MultiEpisodeStyle option:selected").val();

    result += numberStyle;

    if (style == 0)
        result += '-06';

    if (style == 1) {
        result += separator;
        result += numberStyle.replace('5', '6');
    }

    if (style == 2) {
        if (numberId <= 1)
            result += 'x06';

        if (numberId == 2)
            result += 'E06';

        if (numberId == 3)
            result += 'e06';
    }

    if (style == 3) {
        if (numberId <= 1)
            result += '-x06';

        if (numberId == 2)
            result += '-E06';

        if (numberId == 3)
            result += '-e06';
    }

    if ($('#EpisodeName').attr('checked')) {
        result += separator;
        result += 'Episode Name';
    }

    if ($('#AppendQuality').attr('checked'))
        result += ' [TV]';

    if ($('#ReplaceSpaces').attr('checked'))
        result = result.replace(/\s/g, '.');

    $('#multiEpisodeExample').children('.result').text(result);
}

function createAnimeSingleEpisodeExample() {
    var result = '';

    var separator = ' - ';
    var animeNumberStyle = $("#AnimeNumberStyle option:selected").val();
    var animePadding = $("#AnimeNumberPadding option:selected").val();

    if ($("#SeparatorStyle option:selected").val() == 1)
        separator = ' ';

    if ($("#SeparatorStyle option:selected").val() == 2)
        separator = '.';

    if ($('#SeriesName').attr('checked')) {
        result += 'Series Name';
        result += separator;
    }

    if (animeNumberStyle == 0) {
        result += $("#NumberStyle option:selected").text();
        result += separator;
        
        if (animePadding == 2) {
            result += "05";
        }
        
        if (animePadding == 3) {
            result += "005";
        }
    }
    
    if (animeNumberStyle == 1) {
        if (animePadding == 2) {
            result += "05";
        }

        if (animePadding == 3) {
            result += "005";
        }
        
        result += separator;
        result += $("#NumberStyle option:selected").text();
    }
    
    if (animeNumberStyle == 2) {
        if (animePadding == 2) {
            result += "05";
        }

        if (animePadding == 3) {
            result += "005";
        }
    }

    if ($('#EpisodeName').attr('checked')) {
        result += separator;
        result += 'Episode Name';
    }

    if ($('#AppendQuality').attr('checked'))
        result += ' [TV]';
    
    if ($('#AnimeAppendSubGroup').attr('checked'))
        result += ' [GROUP]';

    if ($('#ReplaceSpaces').attr('checked'))
        result = result.replace(/\s/g, '.');

    $('#animeSingleEpisodeExample').children('.result').text(result);
}

function createAnimeMultiEpisodeExample() {
    var result = '';

    var separator = ' - ';

    if ($("#SeparatorStyle option:selected").val() == 1)
        separator = ' ';

    if ($("#SeparatorStyle option:selected").val() == 2)
        separator = '.';

    if ($('#SeriesName').attr('checked')) {
        result += 'Series Name';
        result += separator;
    }
    
    var animeSeparator = '-';

    if ($("#AnimeMultiEpisodeStyle option:selected").val() == 1)
        animeSeparator = ' ';

    if ($("#AnimeMultiEpisodeStyle option:selected").val() == 2)
        animeSeparator = '.';
    
    if ($("#AnimeMultiEpisodeStyle option:selected").val() == 3)
        animeSeparator = ' - ';

    var numberStyle = $("#NumberStyle option:selected").text();
    var numberId = $("#NumberStyle option:selected").val();
    var style = $("#MultiEpisodeStyle option:selected").val();
    var animeNumberStyle = $("#AnimeNumberStyle option:selected").val();
    var animePadding = $("#AnimeNumberPadding option:selected").val();

    if (animeNumberStyle == 0) {       
        result += numberStyle;

        if (style == 0)
            result += '-06';

        if (style == 1) {
            result += separator;
            result += numberStyle.replace('5', '6');
        }

        if (style == 2) {
            if (numberId <= 1)
                result += 'x06';

            if (numberId == 2)
                result += 'E06';

            if (numberId == 3)
                result += 'e06';
        }

        if (style == 3) {
            if (numberId <= 1)
                result += '-x06';

            if (numberId == 2)
                result += '-E06';

            if (numberId == 3)
                result += '-e06';
        }

        result += separator;

        if (animePadding == 2) {
            result += "05";
            result += animeSeparator;
            result += "06";
        }

        if (animePadding == 3) {
            result += "005";
            result += animeSeparator;
            result += "006";
        }
    }

    if (animeNumberStyle == 1) {
        if (animePadding == 2) {
            result += "05";
            result += animeSeparator;
            result += "006";
        }

        if (animePadding == 3) {
            result += "005";
            result += animeSeparator;
            result += "006";
        }

        result += separator;
        result += numberStyle;

        if (style == 0)
            result += '-06';

        if (style == 1) {
            result += separator;
            result += numberStyle.replace('5', '6');
        }

        if (style == 2) {
            if (numberId <= 1)
                result += 'x06';

            if (numberId == 2)
                result += 'E06';

            if (numberId == 3)
                result += 'e06';
        }

        if (style == 3) {
            if (numberId <= 1)
                result += '-x06';

            if (numberId == 2)
                result += '-E06';

            if (numberId == 3)
                result += '-e06';
        }
    }

    if (animeNumberStyle == 2) {
        if (animePadding == 2) {
            result += "05";
            result += animeSeparator;
            result += "06";
        }

        if (animePadding == 3) {
            result += "005";
            result += animeSeparator;
            result += "006";
        }
    }


    if ($('#EpisodeName').attr('checked')) {
        result += separator;
        result += 'Episode Name';
    }

    if ($('#AppendQuality').attr('checked'))
        result += ' [TV]';
    
    if ($('#AnimeAppendSubGroup').attr('checked'))
        result += ' [GROUP]';

    if ($('#ReplaceSpaces').attr('checked'))
        result = result.replace(/\s/g, '.');

    $('#animeMultiEpisodeExample').children('.result').text(result);
}

function createDailyEpisodeExample() {
    var result = '';

    var separator = ' - ';

    if ($("#SeparatorStyle option:selected").val() == 1)
        separator = ' ';

    if ($("#SeparatorStyle option:selected").val() == 2)
        separator = '.';

    if ($('#SeriesName').attr('checked')) {
        result += 'Series Name';
        result += separator;
    }

    result += "2012-08-15"

    if ($('#EpisodeName').attr('checked')) {
        result += separator;
        result += 'Episode Name';
    }

    if ($('#AppendQuality').attr('checked'))
        result += ' [TV]';

    if ($('#ReplaceSpaces').attr('checked'))
        result = result.replace(/\s/g, '.');

    $('#dailyEpisodeExample').children('.result').text(result);
}

function testProwl(event) {
    var apiKeys = $('#ProwlApiKeys').val();

    $.ajax({
        type: "GET",
        url: testProwlUrl,
        data: jQuery.param({ apiKeys: apiKeys })
    });

    event.preventDefault();
}

function testSabnzbd(event) {
    var host = $('#SabHost').val();
    var port = $('#SabPort').val();
    var apiKey = $('#SabApiKey').val();
    var username = $('#SabUsername').val();
    var password = $('#SabPassword').val();

    $.ajax({
        type: "GET",
        url: testSabUrl,
        data: jQuery.param({ host: host, port: port, apiKey: apiKey, username: username, password: password })
    });

    event.preventDefault();
}

//Twitter
getAuthorizationUrl = '../Command/GetTwitterAuthorization';
verifyAuthorizationUrl = '../Command/VerifyTwitterAuthorization';

function requestTwitterAuthorization() {
    $.ajax({
        type: "GET",
        url: getAuthorizationUrl,
        error: function (req, status, error) {
            alert("Sorry! We could get Twitter Authorization at this time. " + error);
        },
        success: function (data, textStatus, jqXHR) {
            if (data.IsMessage)
                return false;

            $('#authorizationRequestToken').val(data.Token);
            window.open(data.Url);
        }
    });
}

function verifyTwitterAuthorization() {
    var token = $('#authorizationRequestToken').val();
    var verifier = $('#twitterVerification').val();

    $.ajax({
        type: "GET",
        url: verifyAuthorizationUrl,
        data: jQuery.param({ token: token, verifier: verifier }),
        error: function (req, status, error) {
            alert("Sorry! We could verify Twitter Authorization at this time. " + error);
        }
    });
}

//SMTP
function testSmtpSettings() {
    //Get the variables
    var server = $('#SmtpServer').val();
    var port = $('#SmtpPort').val();
    var ssl = $('#SmtpUseSsl').prop('checked');
    var username = $('#SmtpUsername').val();
    var password = $('#SmtpPassword').val();
    var fromAddress = $('#SmtpFromAddress').val();
    var toAddresses = $('#SmtpToAddresses').val();

    //Send the data!
    $.ajax({
        type: "POST",
        url: testEmailUrl,
        data: jQuery.param({
            server: server,
            port: port,
            ssl: ssl,
            username: username,
            password: password,
            fromAddress: fromAddress,
            toAddresses: toAddresses
        })
    });

    return false;
}

//Growl
function registerGrowl() {
    //Get the variables
    var host = $('#GrowlHost').val();
    var password = $('#GrowlPassword').val();

    //Send the data!
    $.ajax({
        type: "POST",
        url: '../Command/RegisterGrowl',
        data: jQuery.param({
            host: host,
            password: password
        })
    });

    return false;
}

//XBMC
$(document).on('click', '#xbmc-test-notification', function() {
    var hosts = $('#XbmcHosts').val();

    $.ajax({
        url: testXbmcNotificationUrl,
        data: jQuery.param({ hosts: hosts })
    });
});

$(document).on('click', '#xbmc-test-jsonapi', function () {
    var hosts = $('#XbmcHosts').val();
    var username = $('#XbmcUsername').val();
    var password = $('#XbmcPassword').val();
    

    $.ajax({
        url: testXbmcJsonApiUrl,
        data: jQuery.param({
            hosts: hosts,
            username: username,
            password: password
        })
    });
});

//Plex
$(document).on('click', '#plex-test-notification', function () {
    var hosts = $('#PlexsClientHosts').val();
    var username = $('#PlexUsername').val();
    var password = $('#PlexPassword').val();

    $.ajax({
        url: testPlexNotificationUrl,
        data: jQuery.param({
            hosts: hosts,
            username: username,
            password: password
        })
    });
});

$(document).on('click', '#plex-test-server', function () {
    var host = $('#PlexServerHost').val();
    
    $.ajax({
        url: testPlexServerUrl,
        data: jQuery.param({
            host: host
        })
    });
});